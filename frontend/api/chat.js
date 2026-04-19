export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    // Validate request
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message format' });
    }

    if (message.length > 15000) {
      return res.status(400).json({ error: 'Message too long (max 15000 characters)' });
    }

    // Get API key from environment
    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_API_KEY) {
      console.error('ERROR: GROQ_API_KEY not set');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Call Groq API
    const groqResponse = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant', // Fast model provided by Groq
          messages: [
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
        })
      }
    );

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API error:', groqResponse.status, errorText);
      return res.status(500).json({ error: `Failed to process request: ${errorText}` });
    }

    const data = await groqResponse.json();

    if (data.choices && data.choices[0]?.message?.content) {
      return res.json({
        success: true,
        message: data.choices[0].message.content
      });
    }

    return res.status(500).json({ error: 'Invalid response from AI service' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
