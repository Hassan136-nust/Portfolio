import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Validate API key exists
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY environment variable is not set');
  process.exit(1);
}

// CORS configuration - only allow your frontend
const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' })); // Limit payload size

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Secure Gemini API proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    // Validate request
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message format' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message too long (max 5000 characters)' });
    }

    // Rate limiting check (simple in-memory, use Redis in production)
    const clientIp = req.ip;
    if (!global.rateLimitMap) {
      global.rateLimitMap = {};
    }

    const now = Date.now();
    const windowStart = now - 60000; // 1 minute window

    if (!global.rateLimitMap[clientIp]) {
      global.rateLimitMap[clientIp] = [];
    }

    // Clean old requests
    global.rateLimitMap[clientIp] = global.rateLimitMap[clientIp].filter(
      time => time > windowStart
    );

    // Check rate limit (max 10 requests per minute)
    if (global.rateLimitMap[clientIp].length >= 10) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    global.rateLimitMap[clientIp].push(now);

    // Call Gemini API securely from backend
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      }
    );

    if (!geminiResponse.ok) {
      console.error('Gemini API error:', geminiResponse.status, geminiResponse.statusText);
      return res.status(500).json({ error: 'Failed to process request' });
    }

    const data = await geminiResponse.json();

    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return res.json({
        success: true,
        message: data.candidates[0].content.parts[0].text
      });
    }

    return res.status(500).json({ error: 'Invalid response from AI service' });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
  console.log(`🔒 CORS enabled for: ${FRONTEND_URL}`);
  console.log(`🤖 Gemini API proxy ready`);
});
