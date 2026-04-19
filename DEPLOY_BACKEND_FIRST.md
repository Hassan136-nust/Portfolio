# 🚀 Deploy Backend to Render - Step by Step

Follow these exact steps to deploy your backend first.

## ⏱️ Time Required: ~10 minutes

## 📋 What You Need

- [ ] Render account (free at [render.com](https://render.com))
- [ ] Your GitHub repository
- [ ] Gemini API key (from [Google AI Studio](https://aistudio.google.com/app/apikey))

---

## 🔑 Step 1: Get Your Gemini API Key

If you don't have it yet:

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key (looks like: `AIzaSy...`)
4. **Save it somewhere safe** - you'll need it in a few minutes

---

## 🌐 Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Sign up"
3. **Use GitHub to sign up** (easier - just click "Continue with GitHub")
4. Authorize Render to access your GitHub account
5. You're now logged in!

---

## 🎯 Step 3: Create Backend Web Service

### 3.1 Start Creating Service
1. Click **"New +"** button (top right)
2. Select **"Web Service"**

### 3.2 Connect Your Repository
1. You'll see a list of your GitHub repositories
2. Find your portfolio repository
3. Click **"Connect"** next to it
4. If you don't see it, click "Configure account" to give Render access

### 3.3 Configure the Service

Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `hassan-portfolio-backend` (or any name you like) |
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Environment** | Node |
| **Plan** | Free (or Paid if you want always-on) |

**Important:** Make sure "Root Directory" is set to `backend` - this is critical!

### 3.4 Add Environment Variables

This is the most important part! You need to add 4 environment variables:

**Click "Add Environment Variable" for each one:**

#### Variable 1: PORT
- **Key:** `PORT`
- **Value:** `3000`
- Click "Add"

#### Variable 2: NODE_ENV
- **Key:** `NODE_ENV`
- **Value:** `production`
- Click "Add"

#### Variable 3: FRONTEND_URL
- **Key:** `FRONTEND_URL`
- **Value:** `https://your-frontend.vercel.app`
- **Note:** You'll update this later after deploying frontend
- For now, just use: `https://localhost:3000` (temporary)
- Click "Add"

#### Variable 4: GEMINI_API_KEY
- **Key:** `GEMINI_API_KEY`
- **Value:** Your actual API key from Step 1 (the one that looks like `AIzaSy...`)
- **Important:** This is your real API key - keep it safe!
- Click "Add"

**Your environment variables should look like:**
```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://localhost:3000
GEMINI_API_KEY=AIzaSy... (your actual key)
```

---

## ✅ Step 4: Deploy

1. Click **"Create Web Service"** button (bottom right)
2. **Wait for deployment** (2-3 minutes)
3. You'll see a log showing the build process
4. When it says "✅ Backend server running on port 3000", it's done!

---

## 📋 Step 5: Save Your Backend URL

After deployment completes:

1. Look at the top of the page
2. You'll see a URL like: `https://hassan-portfolio-backend.onrender.com`
3. **Copy this URL** - you'll need it for the frontend!
4. Save it somewhere (notepad, etc.)

**Your Render URL format:**
```
https://[your-service-name].onrender.com
```

---

## ✅ Verify Backend is Working

### Check the Logs
1. In Render dashboard, click on your service
2. Go to **"Logs"** tab
3. You should see:
   ```
   ✅ Backend server running on port 3000
   🔒 CORS enabled for: https://localhost:3000
   🤖 Gemini API proxy ready
   ```

### Test the Health Endpoint
1. Copy your Render URL (e.g., `https://hassan-portfolio-backend.onrender.com`)
2. Open a new browser tab
3. Go to: `https://hassan-portfolio-backend.onrender.com/health`
4. You should see:
   ```json
   {"status":"ok","timestamp":"2026-04-19T..."}
   ```

If you see this, your backend is working! ✅

---

## 🎉 Backend Deployed!

Your backend is now live on Render!

**What you have:**
- ✅ Backend running on Render
- ✅ API key stored securely
- ✅ CORS configured
- ✅ Rate limiting enabled
- ✅ Backend URL saved

**Next Steps:**
1. Deploy frontend to Vercel
2. Update backend `FRONTEND_URL` with your Vercel URL
3. Test chat functionality

---

## 🆘 Troubleshooting

### Backend not deploying?
1. Check the Logs tab in Render
2. Look for error messages
3. Common issues:
   - Missing `backend` directory
   - Wrong Root Directory setting
   - Missing environment variables

### Can't see health endpoint?
1. Wait a few minutes - Render might still be starting
2. Check the Logs tab for errors
3. Verify your Render URL is correct

### API key not working?
1. Go back to Render dashboard
2. Click on your service
3. Go to "Environment"
4. Check that `GEMINI_API_KEY` is set correctly
5. Make sure it's your actual API key (not a placeholder)

### Service spinning down?
- Free tier services spin down after 15 minutes of inactivity
- To keep it always running, upgrade to paid tier
- Or use a monitoring service to ping it periodically

---

## 📝 Important Notes

### About the Free Tier
- **Free tier:** Services spin down after 15 minutes of inactivity
- **Paid tier:** Always running (recommended for production)
- **Cost:** Paid tier starts at $7/month

### About Environment Variables
- `PORT=3000` - The port your backend runs on
- `NODE_ENV=production` - Tells Node.js this is production
- `FRONTEND_URL` - Where your frontend will be (update after Vercel deployment)
- `GEMINI_API_KEY` - Your actual API key (keep it secret!)

### About the API Key
- Never share your API key
- Never commit it to git
- Only store it in Render environment variables
- Rotate it quarterly for security

---

## 🎯 What's Next?

After backend is deployed:

1. **Deploy Frontend to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set Root Directory to `frontend`
   - Add environment variable: `VITE_API_URL=https://your-render-url.onrender.com`
   - Deploy

2. **Update Backend with Frontend URL**
   - Go back to Render dashboard
   - Click on your backend service
   - Go to "Environment"
   - Update `FRONTEND_URL` to your Vercel URL
   - Render will automatically redeploy

3. **Test Chat**
   - Open your Vercel frontend
   - Click chat button
   - Send a message
   - Should get AI response

---

## 📞 Need Help?

- **Backend not deploying?** → Check Render Logs tab
- **Can't find health endpoint?** → Wait a few minutes, then try again
- **API key issues?** → Check environment variables in Render
- **CORS errors?** → You'll fix this after deploying frontend

---

## ✅ Deployment Checklist

- [ ] Render account created
- [ ] GitHub repository connected
- [ ] Root Directory set to `backend`
- [ ] All 4 environment variables added
- [ ] Backend deployed successfully
- [ ] Health endpoint working
- [ ] Backend URL saved

---

**Status:** ✅ READY TO DEPLOY BACKEND

**Next:** Follow these steps exactly, then deploy frontend to Vercel

🚀 **Let's deploy your backend!**
