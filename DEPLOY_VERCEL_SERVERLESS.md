# 🚀 Deploy to Vercel with Serverless Functions

Perfect! Now your portfolio uses Vercel's serverless functions - no separate backend needed!

## ⏱️ Time Required: ~5 minutes

## 📋 What You Need

- [ ] Vercel account (free at [vercel.com](https://vercel.com))
- [ ] Your GitHub repository
- [ ] Gemini API key (from [Google AI Studio](https://aistudio.google.com/app/apikey))

---

## 🔑 Step 1: Get Your Gemini API Key

If you don't have it yet:

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key (looks like: `AIzaSy...`)
4. **Save it somewhere safe**

---

## 🌐 Step 2: Deploy to Vercel

### 2.1 Go to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Import"

### 2.2 Configure Project
1. **Project Name:** `hassan-portfolio` (or any name)
2. **Root Directory:** `frontend`
3. **Framework:** Vite
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`

### 2.3 Add Environment Variable
1. Click "Environment Variables"
2. Add:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your actual Gemini API key (from Step 1)
3. Click "Add"

### 2.4 Deploy
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. ✅ Your portfolio is live!

---

## ✅ Verify It Works

1. Go to your Vercel URL
2. Click chat button (bottom right)
3. Type a test message
4. Should get AI response ✅

---

## 📝 How It Works

### Architecture
```
Your Browser
    ↓
Vercel Frontend (React + Vite)
    ↓
Vercel Serverless Function (/api/chat)
    ↓
Gemini API
```

### What Happens
1. You type a message in chat
2. Frontend sends to `/api/chat` (serverless function)
3. Serverless function calls Gemini API
4. Response comes back to frontend
5. Chat displays the answer

---

## 🔒 Security

Your API key is:
- ✅ Stored in Vercel environment variables (secure)
- ✅ Not in git (it's in `.gitignore`)
- ✅ Only visible to you in Vercel dashboard
- ✅ Only used on the server (not exposed to browser)

---

## 📊 Project Structure

```
frontend/
├── src/
│   ├── app/
│   ├── services/
│   │   └── geminiService.ts    # Calls /api/chat
│   └── ...
├── api/
│   └── chat.js                 # Serverless function
├── package.json
├── vite.config.ts
├── .env                        # Local (not committed)
└── .env.example                # Template
```

---

## ✅ Deployment Checklist

- [ ] Gemini API key ready
- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Root Directory set to `frontend`
- [ ] Environment variable added: `GEMINI_API_KEY`
- [ ] Deployed to Vercel
- [ ] Chat works ✅

---

## 🆘 Troubleshooting

### Chat not working?

1. **Check API Key**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Verify `GEMINI_API_KEY` is set correctly

2. **Check Browser Console**
   - Press F12 (DevTools)
   - Go to Console tab
   - Look for error messages

3. **Check Vercel Logs**
   - Go to Vercel dashboard
   - Click on your project
   - Go to "Deployments" tab
   - Click on latest deployment
   - Go to "Functions" tab
   - Check `/api/chat` logs

### API key not working?

1. Verify it's your actual API key (not placeholder)
2. Check it's valid in Google Cloud Console
3. Make sure it's for Generative Language API

### 429 Error (Too Many Requests)?

1. You've hit the API rate limit
2. Wait a few minutes
3. Try again

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Deployed on Vercel
- ✅ AI chat working with serverless functions
- ✅ No separate backend needed
- ✅ Simple and clean
- ✅ Easy to maintain

---

## 📞 Need Help?

- **Deployment issues?** → Check Vercel logs
- **Chat not working?** → Check environment variable
- **API key issues?** → Check Google Cloud Console

---

**Status:** ✅ READY TO DEPLOY

**Next:** Go to [vercel.com](https://vercel.com) and deploy!

🚀 **Let's launch your portfolio!**
