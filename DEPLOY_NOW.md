# 🚀 DEPLOY NOW - Step-by-Step Guide

Your portfolio is ready to deploy! Follow these exact steps.

## ⏱️ Time Required: ~15 minutes

## 📋 What You Need

- [ ] GitHub account (already have)
- [ ] Vercel account (free at vercel.com)
- [ ] Render account (free at render.com)
- [ ] Gemini API key (from Google Cloud)

## 🔑 Step 1: Prepare Your API Key

### Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key (looks like: `AIzaSy...`)
4. **Keep it safe** - you'll need it for Render

## 🌐 Step 2: Deploy Backend to Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Click "Sign up"
3. Use GitHub to sign up (easier)
4. Authorize Render to access your GitHub

### 2.2 Create Backend Service
1. Click "New +" → "Web Service"
2. Select your GitHub repository
3. Click "Connect"

### 2.3 Configure Backend
1. **Name:** `hassan-portfolio-backend` (or any name)
2. **Root Directory:** `backend`
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. **Environment:** Select "Node"

### 2.4 Add Environment Variables
Click "Add Environment Variable" and add these:

| Key | Value |
|-----|-------|
| `PORT` | `3000` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-frontend.vercel.app` |
| `GEMINI_API_KEY` | Your actual API key from Step 1 |

**Note:** You'll update `FRONTEND_URL` after deploying frontend

### 2.5 Deploy
1. Click "Create Web Service"
2. Wait for deployment (2-3 minutes)
3. Copy your Render URL (looks like: `https://hassan-portfolio-backend.onrender.com`)
4. **Save this URL** - you'll need it for Vercel

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1 Go to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Import"

### 3.2 Configure Frontend
1. **Project Name:** `hassan-portfolio` (or any name)
2. **Root Directory:** `frontend`
3. **Framework:** Vite
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`

### 3.3 Add Environment Variables
Click "Environment Variables" and add:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | Your Render URL from Step 2.5 |

Example: `https://hassan-portfolio-backend.onrender.com`

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. Copy your Vercel URL (looks like: `https://hassan-portfolio.vercel.app`)
4. **Save this URL** - you'll need it for Render

## 🔄 Step 4: Update Backend with Frontend URL

### 4.1 Go Back to Render
1. Go to [render.com](https://render.com)
2. Click on your backend service
3. Go to "Environment"

### 4.2 Update FRONTEND_URL
1. Find `FRONTEND_URL` variable
2. Change value to your Vercel URL from Step 3.4
3. Click "Save"
4. Render will automatically redeploy (1-2 minutes)

## ✅ Step 5: Verify Everything Works

### 5.1 Test Frontend
1. Go to your Vercel URL
2. Should see your portfolio
3. Chat button should appear (bottom right)

### 5.2 Test Chat
1. Click chat button
2. Type a test message
3. Should get AI response
4. **No errors in console**

### 5.3 Verify Security
1. Open DevTools (F12)
2. Go to Network tab
3. Send a chat message
4. Check requests:
   - Should see request to your Render URL
   - Should NOT see request to `generativelanguage.googleapis.com`
   - Should NOT see API key anywhere

### 5.4 Check Logs
1. Go to Render dashboard
2. Click on your backend service
3. Go to "Logs"
4. Should see:
   - `✅ Backend server running on port 3000`
   - `🔒 CORS enabled for: https://your-frontend.vercel.app`
   - `🤖 Gemini API proxy ready`

## 🎉 You're Done!

Your portfolio is now live and secure!

### What You Have
- ✅ Frontend at: `https://your-frontend.vercel.app`
- ✅ Backend at: `https://your-backend.onrender.com`
- ✅ AI Chat working
- ✅ API key protected
- ✅ CORS protected
- ✅ Rate limited

### Share Your Portfolio
- Send your Vercel URL to friends
- Add to your resume
- Share on social media

## 🆘 Troubleshooting

### Chat not working?
1. Check `VITE_API_URL` in Vercel (Settings → Environment Variables)
2. Check `FRONTEND_URL` in Render (Environment)
3. Check browser console for errors
4. Check Render logs for backend errors

### API key exposed?
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Delete the exposed key
3. Create new key
4. Update Render environment variable
5. Redeploy

### CORS errors?
1. Verify `FRONTEND_URL` in Render matches your Vercel URL exactly
2. Make sure it includes `https://`
3. Redeploy Render

## 📊 Deployment Summary

| Component | Platform | Status |
|-----------|----------|--------|
| Frontend | Vercel | ✅ Deployed |
| Backend | Render | ✅ Deployed |
| API Key | Render (Secure) | ✅ Protected |
| Chat | Working | ✅ Live |

## 📞 Need Help?

1. Check [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common issues
2. Check [DEPLOYMENT_VERIFICATION.md](./DEPLOYMENT_VERIFICATION.md) for verification steps
3. Check [SECURITY.md](./SECURITY.md) for security info
4. Review backend logs in Render

## 🔐 Security Checklist

- [ ] API key NOT in git history
- [ ] API key NOT in frontend code
- [ ] API key stored in Render environment only
- [ ] `.env` files in `.gitignore`
- [ ] CORS configured correctly
- [ ] Rate limiting working
- [ ] No API key visible in browser

## 🎯 Next Steps

1. **Monitor API Usage**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Check API key usage regularly

2. **Rotate API Key (Quarterly)**
   - Create new key in Google Cloud
   - Update Render environment variable
   - Delete old key

3. **Keep Dependencies Updated**
   - Run `npm update` periodically
   - Check for security updates

4. **Monitor Performance**
   - Vercel Dashboard → Analytics
   - Render Dashboard → Metrics

## 🚀 You're Live!

Your portfolio is now deployed and live on the internet!

### URLs
- **Portfolio:** Your Vercel URL
- **Backend API:** Your Render URL
- **Chat:** Available in your portfolio

### Features
- ✅ 3D interactive scene
- ✅ AI chat assistant
- ✅ Resume download
- ✅ Contact options
- ✅ Smooth animations
- ✅ Professional design

### Security
- ✅ API key protected
- ✅ CORS protected
- ✅ Rate limited
- ✅ Input validated
- ✅ Error handling secure

---

**Deployment Status:** ✅ COMPLETE

**Time to Deploy:** ~15 minutes

**Difficulty:** Easy (just follow the steps)

**Support:** Check documentation files or review logs

🎉 **Congratulations! Your portfolio is live!**
