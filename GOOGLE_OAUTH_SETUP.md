# Google OAuth Setup Guide

## What You Need to Get from Google

To implement Google authentication, you'll need to create OAuth 2.0 credentials in Google Cloud Console.

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "INPACT Learning Platform")
5. Click "Create"

### Step 2: Enable Google+ API / Google Identity API

1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google+ API" or "Google Identity API"
3. Click on it and click "Enable"

### Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen first:
   - Choose "External" (unless you have a Google Workspace)
   - Fill in:
     - App name: "INPACT"
     - User support email: Your email
     - Developer contact: Your email
   - Click "Save and Continue"
   - Add scopes: `email`, `profile`, `openid`
   - Click "Save and Continue"
   - Add test users (optional for development)
   - Click "Save and Continue"

4. Back to creating OAuth client:
   - Application type: "Web application"
   - Name: "INPACT Web Client"
   - Authorized JavaScript origins:
     - `http://localhost:3001` (for development)
     - `https://yourdomain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:3001/api/auth/google/callback` (for development)
     - `https://yourdomain.com/api/auth/google/callback` (for production)
   - Click "Create"

5. **IMPORTANT**: You'll see a popup with:
   - **Client ID** (looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)
   - **Client Secret** (looks like: `GOCSPX-abcdefghijklmnopqrstuvwxyz`)
   
   **Copy both of these immediately!** You won't be able to see the secret again.

### Step 4: Add to Your .env File

Add these to your `.env` file:

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/google/callback
```

For production, update `GOOGLE_REDIRECT_URI` to your production URL.

## What These Credentials Do

- **Client ID**: Public identifier for your app (safe to expose in frontend)
- **Client Secret**: Private key for server-side authentication (NEVER expose in frontend)
- **Redirect URI**: Where Google sends users after they authenticate

## Security Notes

- Never commit `.env` file to Git (already in `.gitignore`)
- Never expose `GOOGLE_CLIENT_SECRET` in frontend code
- Use HTTPS in production
- Keep your Client Secret secure

## Next Steps

Once you have these credentials, we can implement the Google OAuth flow:
1. User clicks "Continue with Google"
2. Redirect to Google login page
3. User authorizes
4. Google redirects back with authorization code
5. Server exchanges code for access token
6. Server gets user info from Google
7. Create/login user in your system
8. Set session and redirect to app

