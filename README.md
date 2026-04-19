# Hassan's 3D Portfolio with AI Assistant

A modern, interactive 3D portfolio website with an AI-powered chat assistant, built with React, Three.js, and Gemini API.

## 🌟 Features

- **3D Interactive Scene** - Beautiful 3D background with Three.js
- **AI Chat Assistant** - Powered by Google Gemini API, trained on your portfolio
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Professional Color Scheme** - Warm bronze and cream palette
- **Resume Download** - Generate and download PDF resume
- **Contact Integration** - Email and WhatsApp contact options
- **Smooth Animations** - Framer Motion animations throughout

## 🔒 Security

Your Gemini API key is **fully protected**:
- ✅ API key stored only on backend server
- ✅ Never exposed in frontend code or browser
- ✅ CORS protection enabled
- ✅ Rate limiting (10 requests/minute per IP)
- ✅ Input validation (max 5000 characters)

See [SECURITY.md](./SECURITY.md) for detailed security information.

## 📁 Project Structure

```
├── frontend/                 # React + Vite (Deploy to Vercel)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── sections/     # Page sections
│   │   │   │   ├── ui/           # UI components
│   │   │   │   ├── 3d/           # 3D scene
│   │   │   │   └── ChatAssistant.tsx
│   │   │   └── App.tsx
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   └── geminiService.ts  # Backend proxy client
│   │   ├── styles/
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── .env.example
├── backend/                  # Node.js Express (Deploy to Render)
│   └── server/
│       ├── index.js         # Secure API proxy
│       ├── package.json
│       └── .env.example
├── SECURITY.md              # Security documentation
├── SETUP_GUIDE.md           # Deployment guide
└── SECURITY_CHECKLIST.md    # Pre/post deployment checklist
```

## 🚀 Quick Start

### Local Development

**Terminal 1 - Frontend:**
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd backend/server
npm install
GEMINI_API_KEY=your_key_here npm start
# Runs at http://localhost:3000
```

### Using Docker

```bash
docker-compose up
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

## 🌐 Deployment

### Deploy to Vercel (Frontend)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set Root Directory to `frontend`
4. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy

### Deploy to Render (Backend)

1. Go to [render.com](https://render.com)
2. Create new Web Service from GitHub
3. Set Root Directory to `backend`
4. Add environment variables:
   ```
   PORT=3000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   GEMINI_API_KEY=your_actual_api_key_here
   ```
5. Deploy

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend.onrender.com
```

### Backend (.env)
```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
GEMINI_API_KEY=your_actual_gemini_api_key
```

**Important:** Never commit `.env` files to git. Use `.env.example` as a template.

## 🛠️ Tech Stack

### Frontend
- React 18.3.1
- TypeScript
- Vite
- Tailwind CSS
- Three.js (3D)
- Framer Motion (Animations)
- Lucide React (Icons)
- Radix UI (Components)

### Backend
- Node.js
- Express.js
- CORS
- Rate Limiting

### APIs
- Google Gemini API (AI Chat)

## 📚 Documentation

- [SECURITY.md](./SECURITY.md) - Security implementation details
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Complete deployment guide
- [SECURITY_CHECKLIST.md](./SECURITY_CHECKLIST.md) - Pre/post deployment checklist
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment configuration

## ✅ Pre-Deployment Checklist

- [ ] `.env` files are in `.gitignore`
- [ ] No API keys in source code
- [ ] Backend proxy working locally
- [ ] Frontend can reach backend
- [ ] Chat functionality works
- [ ] No API key in browser DevTools

## ✅ Post-Deployment Checklist

- [ ] Frontend loads at Vercel URL
- [ ] Chat button appears and opens
- [ ] Can send messages and receive responses
- [ ] No API key visible in browser
- [ ] Network tab shows backend calls only
- [ ] Backend logs show successful requests
- [ ] Rate limiting working
- [ ] CORS working (no errors)

## 🆘 Troubleshooting

### Chat not working?
1. Check `VITE_API_URL` environment variable
2. Verify backend URL is correct
3. Check browser console for errors
4. Check Render logs for backend errors

### API key exposed?
1. Immediately revoke in Google Cloud Console
2. Generate new API key
3. Update Render environment variable
4. Redeploy backend

### CORS errors?
1. Verify `FRONTEND_URL` in Render matches Vercel domain
2. Check backend logs
3. Ensure frontend URL includes protocol (https://)

## 📊 API Endpoints

### Backend API

**Health Check**
```
GET /health
```

**Chat Endpoint**
```
POST /api/chat
Content-Type: application/json

{
  "message": "Your question here"
}

Response:
{
  "success": true,
  "message": "AI response here"
}
```

## 🔄 How It Works

1. **User sends message** → Frontend chat component
2. **Frontend calls backend** → `/api/chat` endpoint
3. **Backend validates** → Input validation & rate limiting
4. **Backend calls Gemini** → With API key (secure)
5. **Gemini responds** → Backend receives response
6. **Backend returns** → Response to frontend
7. **Frontend displays** → Message in chat UI

**API key never leaves the backend server** ✅

## 📞 Support

For issues or questions:
1. Check the relevant documentation file
2. Review backend logs in Render dashboard
3. Check browser console for errors
4. Verify environment variables are set correctly

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Ready to Deploy!

Your portfolio is secure, scalable, and ready for production. Follow the [SETUP_GUIDE.md](./SETUP_GUIDE.md) for deployment instructions.

---

**Built with ❤️ for Hassan's Portfolio**
