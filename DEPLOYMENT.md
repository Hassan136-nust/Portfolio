# Deployment Guide

This project is split into two parts for deployment:
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Railway

## Project Structure

```
├── frontend/          # React + Vite frontend (Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json
├── backend/           # Node.js backend (Railway)
│   ├── server/
│   ├── package.json
│   └── railway.json
└── DEPLOYMENT.md
```

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- Git repository

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Project**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   - Add `VITE_API_URL` pointing to your Railway backend URL
   - Example: `https://your-backend.railway.app`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Environment Variables for Vercel
```
VITE_API_URL=https://your-railway-backend.app
```

## Backend Deployment (Railway)

### Prerequisites
- Railway account
- Git repository

### Steps

1. **Create New Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub"

2. **Configure Project**
   - Select your repository
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**
   - Add `PORT`: `3000`
   - Add `NODE_ENV`: `production`
   - Add `FRONTEND_URL`: Your Vercel frontend URL
   - Example: `https://your-frontend.vercel.app`

4. **Deploy**
   - Railway will automatically build and deploy
   - Get your backend URL from Railway dashboard

### Environment Variables for Railway
```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

## Post-Deployment

1. **Update Frontend Environment**
   - After Railway deployment, update Vercel's `VITE_API_URL` with your Railway URL
   - Trigger a redeploy on Vercel

2. **Test API Connection**
   - Open your Vercel frontend
   - Check browser console for any API errors
   - Test the chat assistant functionality

3. **Monitor**
   - Use Vercel Analytics for frontend monitoring
   - Use Railway logs for backend monitoring

## Troubleshooting

### CORS Issues
If you see CORS errors, ensure your backend has proper CORS configuration:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### API Connection Issues
- Verify `VITE_API_URL` is correctly set in Vercel
- Check Railway backend is running
- Verify network connectivity between services

### Build Failures
- Check build logs in Vercel/Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend/server
npm install
npm start
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Vite Documentation](https://vitejs.dev)
- [Express.js Documentation](https://expressjs.com)
