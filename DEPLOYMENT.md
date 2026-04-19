# Deployment Guide

This project is split into two parts for deployment:
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render

## Project Structure

```
├── frontend/          # React + Vite frontend (Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json
├── backend/           # Node.js backend (Render)
│   ├── server/
│   ├── package.json
│   └── Dockerfile
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
   - Add `VITE_API_URL` pointing to your Render backend URL
   - Example: `https://your-backend.onrender.com`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Environment Variables for Vercel
```
VITE_API_URL=https://your-render-backend.onrender.com
```

## Backend Deployment (Render)

### Prerequisites
- Render account (free at [render.com](https://render.com))
- Git repository

### Steps

1. **Create New Web Service**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository and click "Connect"

2. **Configure Project**
   - **Name**: `hassan-portfolio-backend` (or any name)
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
   - **Plan**: Free (or paid if needed)

3. **Add Environment Variables**
   - Click "Add Environment Variable" for each:
   
   | Key | Value |
   |-----|-------|
   | `PORT` | `3000` |
   | `NODE_ENV` | `production` |
   | `FRONTEND_URL` | `https://your-frontend.vercel.app` |
   | `GEMINI_API_KEY` | Your actual Gemini API key |

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy
   - Wait for deployment to complete (2-3 minutes)
   - Copy your Render URL from the dashboard (e.g., `https://hassan-portfolio-backend.onrender.com`)

### Environment Variables for Render
```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
GEMINI_API_KEY=your_actual_gemini_api_key
```

### Important Notes
- **Free tier**: Services spin down after 15 minutes of inactivity
- **Paid tier**: Always running (recommended for production)
- **API Key**: Store securely in Render environment variables (never in code)

## Post-Deployment

1. **Update Frontend Environment**
   - After Render deployment, copy your Render backend URL
   - Update Vercel's `VITE_API_URL` with your Render URL
   - Trigger a redeploy on Vercel

2. **Update Backend with Frontend URL**
   - Go back to Render dashboard
   - Update `FRONTEND_URL` environment variable with your Vercel URL
   - Render will automatically redeploy

3. **Test API Connection**
   - Open your Vercel frontend
   - Check browser console for any API errors
   - Test the chat assistant functionality

4. **Monitor**
   - Use Vercel Analytics for frontend monitoring
   - Use Render Logs for backend monitoring

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
- Check Render backend is running (check Logs in Render dashboard)
- Verify `FRONTEND_URL` is correctly set in Render
- Ensure network connectivity between services

### Build Failures
- Check build logs in Vercel/Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Service Spinning Down (Free Tier)
- Render free tier services spin down after 15 minutes of inactivity
- To keep service always running, upgrade to paid tier
- Or use a monitoring service to ping the backend periodically

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
- [Render Documentation](https://render.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Express.js Documentation](https://expressjs.com)
