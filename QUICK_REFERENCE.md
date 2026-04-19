# 🚀 Quick Reference Guide

Fast answers to common questions and tasks.

## 🔧 Local Development

### Start Frontend
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173
```

### Start Backend
```bash
cd backend/server
npm install
GEMINI_API_KEY=your_key_here npm start
# Runs at http://localhost:3000
```

### Start Both with Docker
```bash
docker-compose up
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

## 🌐 Deployment

### Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Root Directory: `frontend`
4. Environment: `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy

### Deploy Backend to Render
1. Go to [render.com](https://render.com)
2. New Web Service from GitHub
3. Root Directory: `backend`
4. Environment:
   - `PORT=3000`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-frontend.vercel.app`
   - `GEMINI_API_KEY=your_actual_key`
5. Deploy

## 🔐 Security

### Check for Exposed Secrets
```bash
grep -r "AIzaSy" . --exclude-dir=node_modules
# Should return: No results
```

### Verify .env Files Are Ignored
```bash
cat .gitignore | grep ".env"
# Should show: .env
```

### Rotate API Key
1. Google Cloud Console → APIs & Services → Credentials
2. Delete old key
3. Create new key
4. Update Render environment variable
5. Redeploy

## 🐛 Troubleshooting

### Chat Not Working?
1. Check `VITE_API_URL` in Vercel
2. Check `FRONTEND_URL` in Render
3. Check browser console for errors
4. Check Render logs for backend errors

### API Key Exposed?
1. Revoke key in Google Cloud Console
2. Create new key
3. Update Render environment variable
4. Redeploy

### CORS Errors?
1. Verify `FRONTEND_URL` in Render matches Vercel domain
2. Ensure URLs include protocol (https://)
3. Redeploy both frontend and backend

### Rate Limiting Too Strict?
1. Edit `backend/server/index.js` line ~60
2. Change `>= 10` to desired limit
3. Redeploy to Render

## 📊 Monitoring

### Check API Usage
1. Google Cloud Console → APIs & Services → Quotas
2. Monitor daily usage
3. Set up alerts

### Check Backend Logs
- Render Dashboard → Logs tab
- Look for errors or issues

### Check Frontend Performance
- Vercel Dashboard → Analytics
- Monitor build times and performance

## 🔄 Making Changes

### Update Frontend Code
```bash
cd frontend
# Make changes
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys
```

### Update Backend Code
```bash
cd backend/server
# Make changes
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys
```

## 📁 File Locations

| File | Purpose |
|------|---------|
| `frontend/.env` | Frontend environment variables |
| `backend/server/.env` | Backend environment variables |
| `frontend/.env.example` | Frontend env template |
| `backend/.env.example` | Backend env template |
| `backend/server/index.js` | Backend API proxy |
| `src/services/geminiService.ts` | Frontend API client |
| `src/app/components/ChatAssistant.tsx` | Chat UI component |

## 🔗 Important URLs

| Service | URL |
|---------|-----|
| Frontend (Local) | http://localhost:5173 |
| Backend (Local) | http://localhost:3000 |
| Vercel Dashboard | https://vercel.com/dashboard |
| Render Dashboard | https://dashboard.render.com |
| Google Cloud Console | https://console.cloud.google.com |

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Project overview |
| [SECURITY.md](./SECURITY.md) | Security details |
| [SETUP_GUIDE.md](./SETUP_GUIDE.md) | Deployment guide |
| [DEPLOYMENT_VERIFICATION.md](./DEPLOYMENT_VERIFICATION.md) | Verification checklist |
| [SECURITY_CHECKLIST.md](./SECURITY_CHECKLIST.md) | Pre/post deployment |

## 🆘 Common Commands

### Test Backend Health
```bash
curl http://localhost:3000/health
# Or after deployment:
curl https://your-backend.onrender.com/health
```

### Test Chat Endpoint
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

### Check Git Status
```bash
git status
# Should show no .env files
```

### View Recent Commits
```bash
git log --oneline -10
```

## 🎯 Deployment Checklist

- [ ] `.env` files created with placeholder values
- [ ] `.env` files in `.gitignore`
- [ ] No API keys in code
- [ ] Backend working locally
- [ ] Frontend working locally
- [ ] Chat working locally
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set in both platforms
- [ ] Chat working in production
- [ ] No API key visible in browser
- [ ] Rate limiting working
- [ ] CORS working

## 💡 Tips & Tricks

### Speed Up Development
- Use `npm run dev` for hot reload
- Use browser DevTools for debugging
- Check console for errors

### Debug Chat Issues
1. Open DevTools → Network tab
2. Send a message
3. Check request/response
4. Look for errors in console

### Monitor Deployments
- Vercel: Deployments tab shows build status
- Render: Logs tab shows deployment progress

### Rotate API Key Safely
1. Create new key first
2. Update environment variable
3. Test thoroughly
4. Delete old key

## 🔒 Security Reminders

- ✅ Never commit `.env` files
- ✅ Never hardcode API keys
- ✅ Always use environment variables
- ✅ Rotate API keys quarterly
- ✅ Monitor API usage regularly
- ✅ Keep dependencies updated

## 📞 Need Help?

1. Check [README.md](./README.md) for overview
2. Check [SECURITY.md](./SECURITY.md) for security info
3. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for deployment
4. Check [DEPLOYMENT_VERIFICATION.md](./DEPLOYMENT_VERIFICATION.md) for verification
5. Review backend logs in Render
6. Check browser console for errors

---

**Last Updated:** April 19, 2026
**Status:** ✅ READY FOR DEPLOYMENT
