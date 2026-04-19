# 🚀 Deployment Verification Guide

This guide helps you verify that your deployment is secure and working correctly.

## ✅ Pre-Deployment Verification

Run these checks before deploying to production.

### 1. Check for Exposed Secrets

```bash
# Search for API keys in code
grep -r "AIzaSy" . --exclude-dir=node_modules --exclude-dir=.git

# Search for hardcoded URLs
grep -r "generativelanguage.googleapis.com" . --exclude-dir=node_modules --exclude-dir=.git

# Should return: No results (if it does, you have exposed secrets!)
```

### 2. Verify .env Files Are Ignored

```bash
# Check .gitignore
cat .gitignore | grep ".env"

# Should show: .env (and related patterns)
```

### 3. Verify .env Files Exist Locally

```bash
# Frontend
ls -la frontend/.env
# Should exist with placeholder values

# Backend
ls -la backend/server/.env
# Should exist with placeholder values
```

### 4. Test Backend Locally

```bash
cd backend/server
npm install
GEMINI_API_KEY=test_key npm start

# Should output:
# ✅ Backend server running on port 3000
# 🔒 CORS enabled for: http://localhost:5173
# 🤖 Gemini API proxy ready
```

### 5. Test Frontend Locally

```bash
cd frontend
npm install
VITE_API_URL=http://localhost:3000 npm run dev

# Should open at http://localhost:5173
# Chat button should appear in bottom right
```

### 6. Test Chat Functionality Locally

1. Open http://localhost:5173 in browser
2. Click chat button (bottom right)
3. Type a test message
4. Should receive AI response
5. Open DevTools → Network tab
6. Should see request to `http://localhost:3000/api/chat`
7. Should NOT see request to `generativelanguage.googleapis.com`

### 7. Verify No API Key in Network Requests

1. Open DevTools → Network tab
2. Send a chat message
3. Click on the `/api/chat` request
4. Check Request Headers
5. Should NOT contain `X-goog-api-key` or `GEMINI_API_KEY`
6. Check Request Body
7. Should only contain `message` field

## ✅ Post-Deployment Verification

Run these checks after deploying to Vercel and Render.

### 1. Verify Frontend Deployment

```bash
# Visit your Vercel URL
https://your-frontend.vercel.app

# Should load without errors
# Should show portfolio content
# Chat button should appear in bottom right
```

### 2. Verify Backend Deployment

```bash
# Test health endpoint
curl https://your-backend.onrender.com/health

# Should return:
# {"status":"ok","timestamp":"2026-04-19T..."}
```

### 3. Verify Chat Functionality

1. Visit your Vercel URL
2. Click chat button
3. Type a test message
4. Should receive AI response within 5 seconds
5. No errors in browser console

### 4. Verify No API Key Exposure

1. Open DevTools → Network tab
2. Send a chat message
3. Check all requests
4. Should see request to `https://your-backend.onrender.com/api/chat`
5. Should NOT see request to `generativelanguage.googleapis.com`
6. Should NOT see any request with API key in headers or body

### 5. Verify CORS Configuration

1. Open DevTools → Console
2. Should NOT see CORS errors
3. Chat should work without errors

### 6. Verify Rate Limiting

1. Send 11 messages rapidly
2. 11th message should fail with "Too many requests"
3. Wait 1 minute
4. Should be able to send messages again

### 7. Verify Environment Variables

**Vercel Dashboard:**
- Go to Settings → Environment Variables
- Should see: `VITE_API_URL=https://your-backend.onrender.com`
- Should NOT see any API keys

**Render Dashboard:**
- Go to Environment
- Should see: `PORT`, `NODE_ENV`, `FRONTEND_URL`, `GEMINI_API_KEY`
- `GEMINI_API_KEY` should be set to your actual key
- Should NOT be visible in logs

### 8. Check Backend Logs

**Render Dashboard:**
1. Go to Logs tab
2. Should see startup messages:
   - `✅ Backend server running on port 3000`
   - `🔒 CORS enabled for: https://your-frontend.vercel.app`
   - `🤖 Gemini API proxy ready`
3. Should NOT see any error messages
4. Should NOT see API key in logs

### 9. Monitor API Usage

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Go to APIs & Services → Credentials
4. Click on your API key
5. Check "API restrictions" - should only allow Generative Language API
6. Check "Application restrictions" - should be set appropriately
7. Monitor usage in the Quotas tab

### 10. Test Error Handling

**Test invalid message:**
```bash
curl -X POST https://your-backend.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": ""}'

# Should return: {"error":"Invalid message format"}
```

**Test message too long:**
```bash
curl -X POST https://your-backend.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"'$(printf 'a%.0s' {1..5001})'"}' 

# Should return: {"error":"Message too long (max 5000 characters)"}
```

**Test rate limiting:**
```bash
# Send 11 requests rapidly
for i in {1..11}; do
  curl -X POST https://your-backend.onrender.com/api/chat \
    -H "Content-Type: application/json" \
    -d '{"message":"test"}'
done

# 11th request should return: {"error":"Too many requests. Please try again later."}
```

## 🔍 Security Verification Checklist

- [ ] No API keys in frontend code
- [ ] No API keys in git history
- [ ] `.env` files in `.gitignore`
- [ ] Backend `.env` has placeholder values in repo
- [ ] Frontend `.env` has placeholder values in repo
- [ ] Vercel has `VITE_API_URL` environment variable
- [ ] Render has `GEMINI_API_KEY` environment variable
- [ ] Render has `FRONTEND_URL` environment variable
- [ ] No API key visible in browser DevTools
- [ ] No direct calls to Gemini API from frontend
- [ ] All calls go through backend proxy
- [ ] CORS errors not appearing
- [ ] Rate limiting working
- [ ] Error messages don't leak sensitive info

## 🆘 Troubleshooting

### Chat not working after deployment?

1. **Check environment variables:**
   ```bash
   # Vercel: Settings → Environment Variables
   # Should have: VITE_API_URL=https://your-backend.onrender.com
   
   # Render: Environment
   # Should have: FRONTEND_URL, GEMINI_API_KEY, PORT, NODE_ENV
   ```

2. **Check backend logs:**
   - Render Dashboard → Logs
   - Look for errors or startup issues

3. **Check frontend console:**
   - Browser DevTools → Console
   - Look for error messages

4. **Test backend directly:**
   ```bash
   curl https://your-backend.onrender.com/health
   # Should return: {"status":"ok",...}
   ```

### API key exposed?

1. **Immediately revoke the key:**
   - Google Cloud Console → APIs & Services → Credentials
   - Click on the exposed key
   - Click "Delete"

2. **Create new API key:**
   - Google Cloud Console → APIs & Services → Credentials
   - Click "Create Credentials" → "API Key"
   - Copy the new key

3. **Update Render:**
   - Render Dashboard → Environment
   - Update `GEMINI_API_KEY` with new key
   - Render will automatically redeploy

4. **Verify it's working:**
   - Test chat functionality
   - Check backend logs for errors

### CORS errors?

1. **Verify `FRONTEND_URL` in Render:**
   - Should be: `https://your-frontend.vercel.app`
   - Should include protocol (https://)
   - Should NOT have trailing slash

2. **Verify `VITE_API_URL` in Vercel:**
   - Should be: `https://your-backend.onrender.com`
   - Should include protocol (https://)
   - Should NOT have trailing slash

3. **Redeploy both:**
   - Vercel: Deployments → Redeploy
   - Render: Manual Deploy

### Rate limiting too strict?

1. **Adjust in backend code:**
   - `backend/server/index.js` line ~60
   - Change `>= 10` to desired limit
   - Redeploy to Render

## 📊 Performance Monitoring

### Monitor API Usage

1. Google Cloud Console → APIs & Services → Quotas
2. Check daily usage
3. Set up alerts for unusual activity

### Monitor Backend Performance

1. Render Dashboard → Metrics
2. Check CPU, Memory, Network usage
3. Look for performance issues

### Monitor Frontend Performance

1. Vercel Dashboard → Analytics
2. Check build times
3. Check Core Web Vitals

## 📞 Support

If verification fails:

1. Check the relevant documentation:
   - [SECURITY.md](./SECURITY.md)
   - [SETUP_GUIDE.md](./SETUP_GUIDE.md)
   - [README.md](./README.md)

2. Review logs:
   - Render logs for backend errors
   - Browser console for frontend errors

3. Test locally first:
   - Run backend locally
   - Run frontend locally
   - Test chat functionality

4. Verify environment variables:
   - Vercel dashboard
   - Render dashboard

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Frontend loads at Vercel URL
- [ ] Chat button appears and opens
- [ ] Can send messages and receive responses
- [ ] No API key visible in browser
- [ ] No direct Gemini API calls from frontend
- [ ] Backend logs show successful requests
- [ ] Rate limiting working
- [ ] CORS working (no errors)
- [ ] Error handling working
- [ ] API usage monitoring set up
- [ ] Performance monitoring set up

---

**Deployment Status:** ✅ READY FOR PRODUCTION

Your portfolio is secure, scalable, and ready for users!
