# Security Implementation Guide

## API Key Protection

Your Gemini API key is now **fully protected** from exposure. Here's how:

### ✅ What We've Done

1. **Backend Proxy Pattern**
   - API key is stored ONLY on the backend server
   - Frontend never has access to the API key
   - All API calls go through your secure backend

2. **Environment Variables**
   - API key stored in `.env` file (never committed to git)
   - Only accessible on the backend server
   - Not exposed in frontend code or network requests

3. **CORS Protection**
   - Backend only accepts requests from your frontend domain
   - Prevents unauthorized API access from other domains
   - Configurable per environment

4. **Rate Limiting**
   - Max 10 requests per minute per IP
   - Prevents abuse and excessive API usage
   - Protects against DDoS attacks

5. **Input Validation**
   - Message length limited to 5000 characters
   - Type checking on all inputs
   - Prevents injection attacks

6. **Error Handling**
   - Generic error messages to frontend
   - Detailed logs on backend only
   - No sensitive information leaked

## Deployment Security

### For Vercel (Frontend)

1. **Environment Variables**
   ```
   VITE_API_URL=https://your-render-backend.onrender.com
   ```
   - Set in Vercel dashboard
   - Never commit to git
   - Only contains backend URL, not API keys

2. **No Secrets in Frontend**
   - Frontend code is public (it's downloaded by browsers)
   - Never put API keys in frontend code
   - All sensitive operations go through backend

### For Render (Backend)

1. **Environment Variables**
   ```
   PORT=3000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   - Set in Render dashboard
   - Never commit to git
   - Only accessible on the server

2. **API Key Management**
   - Store in Render environment variables
   - Rotate periodically
   - Monitor usage in Google Cloud Console

## Security Checklist

### Before Deployment

- [ ] Remove any hardcoded API keys from code
- [ ] Create `.env` file with all secrets (don't commit)
- [ ] Set environment variables in Vercel dashboard
- [ ] Set environment variables in Render dashboard
- [ ] Update `FRONTEND_URL` in Render to match your Vercel domain
- [ ] Update `VITE_API_URL` in Vercel to match your Render domain

### After Deployment

- [ ] Test API calls work correctly
- [ ] Verify no API key appears in browser network tab
- [ ] Check backend logs for errors
- [ ] Monitor API usage in Google Cloud Console
- [ ] Set up alerts for unusual activity

## How It Works

### Request Flow (Secure)

```
User Browser
    ↓
Frontend (Vercel) - No API key here
    ↓ (HTTPS)
Backend (Render) - API key stored here
    ↓ (HTTPS)
Gemini API
```

### What's Protected

✅ **API Key** - Only on backend server
✅ **User Data** - Validated and sanitized
✅ **Rate Limiting** - Prevents abuse
✅ **CORS** - Only your frontend can access
✅ **Error Messages** - No sensitive info leaked

### What's NOT Protected (by design)

⚠️ **Frontend Code** - It's public (downloaded by browsers)
⚠️ **API Responses** - Visible in browser (but safe)
⚠️ **User Messages** - Sent to Gemini API (read their privacy policy)

## Monitoring & Maintenance

### Check API Usage
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Go to APIs & Services → Credentials
4. Monitor API key usage and quotas

### Rotate API Key (Recommended Quarterly)

1. Create new API key in Google Cloud Console
2. Update Render environment variable
3. Test thoroughly
4. Delete old API key
5. Monitor for any issues

### Monitor Backend Logs

**Render Dashboard:**
- View real-time logs
- Check for errors
- Monitor performance

**Local Development:**
```bash
cd backend/server
npm start
# Logs will show in console
```

## Common Security Issues & Solutions

### Issue: API key visible in network tab
**Solution:** Already fixed! All API calls go through backend proxy.

### Issue: Frontend can't reach backend
**Solution:** Check `VITE_API_URL` environment variable and CORS settings.

### Issue: Rate limiting too strict
**Solution:** Adjust limit in `backend/server/index.js` line ~60

### Issue: CORS errors
**Solution:** Verify `FRONTEND_URL` in Render matches your Vercel domain exactly.

## Additional Security Measures (Optional)

### 1. API Key Rotation
```bash
# In Render dashboard, update GEMINI_API_KEY
# Redeploy automatically
```

### 2. Request Signing
Add HMAC signatures to verify requests come from your frontend.

### 3. Database Logging
Log all API requests for audit trail.

### 4. IP Whitelisting
Restrict backend access to specific IPs (if applicable).

### 5. Rate Limiting with Redis
Replace in-memory rate limiting with Redis for distributed systems.

## Support & Questions

If you have security concerns:
1. Check this document first
2. Review backend code in `backend/server/index.js`
3. Check Google Cloud Console for API key usage
4. Review Render logs for errors

## References

- [Google Cloud Security Best Practices](https://cloud.google.com/docs/authentication/best-practices-applications)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [Express.js Security](https://expressjs.com/en/advanced/best-practice-security.html)
