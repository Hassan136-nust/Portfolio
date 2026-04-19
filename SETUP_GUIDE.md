# Complete Setup & Deployment Guide

## 🔒 Security First

Your Gemini API key is **100% protected**. The API key is:
- ✅ Never exposed in frontend code
- ✅ Never sent to the browser
- ✅ Only stored on the backend server
- ✅ Protected by CORS and rate limiting

## 📁 Project Structure

```
├── frontend/                 # React + Vite (Deploy to Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── .env.example
│   └── vercel.json
├── backend/                  # Node.js Express (Deploy to Render)
│   └── server/
│       ├── index.js         # Secure API proxy
│       ├── package.json
│       ├── .env.example
│       └── Dockerfile
├── SECURITY.md              # Security documentation
├── DEPLOYMENT.md            # Deployment instructions
└── docker-compose.yml       # Local development
```

## 🚀 Quick Start (Local Development)

### Option 1: Using npm

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

### Option 2: Using Docker

```bash
docker-compose up
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

## 🌐 Deployment to Vercel & Render

### Step 1: Prepare Your Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Deploy Backend to Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select your repository and click "Connect"
5. Configure:
   - **Name:** `hassan-portfolio-backend` (or any name)
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
   - **Plan:** Free (or paid for always-on)

6. Add Environment Variables:
   ```
   PORT=3000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   GEMINI_API_KEY=your_actual_api_key_here
   ```

7. Click "Create Web Service"
8. Wait for deployment (2-3 minutes)
9. Copy your Render URL (e.g., `https://hassan-portfolio-backend.onrender.com`)

### Step 3: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → "Import Git Repository"
3. Select your repository
4. Configure:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

6. Click "Deploy"
7. Copy your Vercel URL (e.g., `https://your-frontend.vercel.app`)

### Step 4: Update Backend with Frontend URL

1. Go back to Render dashboard
2. Click on your backend service
3. Go to "Environment"
4. Update `FRONTEND_URL` environment variable:
   ```
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
5. Render will automatically redeploy

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Frontend loads at your Vercel URL
- [ ] Chat button appears in bottom right
- [ ] Click chat button and it opens
- [ ] Type a message and send it
- [ ] Backend responds with AI answer
- [ ] No API key visible in browser DevTools
- [ ] Check Network tab - no direct Gemini API calls

## 🔧 Environment Variables

### Frontend (.env or Vercel Dashboard)
```
VITE_API_URL=https://your-backend.onrender.com
```

### Backend (.env or Render Dashboard)
```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
GEMINI_API_KEY=your_actual_gemini_api_key
```

## 📊 Monitoring

### Check Backend Logs
```bash
# Render Dashboard → Logs tab
# Or local: npm start in backend/server
```

### Monitor API Usage
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. APIs & Services → Credentials
4. Check API key usage

### Check Frontend Performance
- Vercel Dashboard → Analytics
- Monitor build times and performance

## 🐛 Troubleshooting

### Chat not working?

1. **Check API URL**
   ```bash
   # In browser console:
   console.log(import.meta.env.VITE_API_URL)
   # Should show your Render URL
   ```

2. **Check CORS**
   - Verify `FRONTEND_URL` in Render matches your Vercel domain
   - Check backend logs for CORS errors

3. **Check API Key**
   - Verify `GEMINI_API_KEY` is set in Render
   - Check it's valid in Google Cloud Console

### Backend not responding?

1. Check Render logs for errors
2. Verify `PORT=3000` is set
3. Test locally: `npm start` in backend/server

### Build failing?

1. Check build logs in Vercel/Render
2. Verify all dependencies in package.json
3. Check Node.js version compatibility

## 🔄 Updating Code

After making changes:

### Frontend
```bash
cd frontend
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys
```

### Backend
```bash
cd backend/server
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys
```

## 🔐 Security Reminders

- ✅ Never commit `.env` files
- ✅ Never put API keys in code
- ✅ Always use environment variables
- ✅ Rotate API keys quarterly
- ✅ Monitor API usage regularly
- ✅ Keep dependencies updated

## 📚 Additional Resources

- [SECURITY.md](./SECURITY.md) - Detailed security info
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment details
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Google Cloud Security](https://cloud.google.com/docs/authentication)

## 🆘 Need Help?

1. Check the relevant documentation file
2. Review backend logs in Render
3. Check browser console for errors
4. Verify environment variables are set correctly
5. Test locally first before deploying

## 🎉 You're All Set!

Your portfolio is now:
- ✅ Securely deployed
- ✅ API key protected
- ✅ Rate limited
- ✅ CORS protected
- ✅ Production ready

Enjoy your new portfolio! 🚀
