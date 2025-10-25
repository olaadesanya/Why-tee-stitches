# Whytee Stitches - Setup Guide

## Prerequisites Installation

Before you can run this project, you need to install Node.js and npm on your system.

### Step 1: Install Node.js and npm

1. **Download Node.js**:
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - The installer includes both Node.js and npm

2. **Run the Installer**:
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - Accept the license agreement
   - Use default installation settings
   - Click "Install"

3. **Verify Installation**:
   - Open a new PowerShell or Command Prompt window
   - Run these commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v18.x.x and 9.x.x)

### Step 2: Install Project Dependencies

Once Node.js and npm are installed:

1. **Navigate to the project directory**:
   ```bash
   cd C:\Users\Ola-Adesanya\CascadeProjects\whytee-stitches
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```
   This will install all required packages (React, Next.js, TailwindCSS, etc.)

### Step 3: Set Up Firebase

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" or "Create a project"
   - Enter project name: "whytee-stitches" (or your preferred name)
   - Follow the setup wizard
   - Enable Google Analytics (optional but recommended)

2. **Enable Firestore Database**:
   - In Firebase Console, go to "Build" → "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for development
   - Select your preferred location
   - Click "Enable"

3. **Enable Analytics**:
   - In Firebase Console, go to "Build" → "Analytics"
   - Follow the prompts to enable Analytics

4. **Get Firebase Configuration**:
   - In Firebase Console, click the gear icon (⚙️) → "Project settings"
   - Scroll down to "Your apps" section
   - Click the web icon (`</>`) to add a web app
   - Register your app with a nickname (e.g., "Whytee Stitches Web")
   - Copy the configuration object

5. **Create Environment Variables**:
   - In the project root, create a file named `.env.local`
   - Copy the contents from `.env.local.example`
   - Replace the placeholder values with your Firebase credentials:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Step 4: Run the Development Server

1. **Start the server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The website should load with all animations and features

### Step 5: Build for Production (Optional)

When you're ready to deploy:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## Troubleshooting

### Issue: Module not found errors
**Solution**: Run `npm install` again to ensure all dependencies are installed.

### Issue: Port 3000 already in use
**Solution**: Either stop the other application using port 3000, or run:
```bash
npm run dev -- -p 3001
```
This will start the server on port 3001 instead.

### Issue: Firebase errors
**Solution**: 
- Double-check your `.env.local` file has the correct Firebase credentials
- Ensure Firestore Database is enabled in Firebase Console
- Make sure you're using the correct project ID

### Issue: Build errors
**Solution**: 
- Delete `node_modules` folder and `.next` folder
- Run `npm install` again
- Try building again with `npm run build`

## Project Structure

```
whytee-stitches/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── collections/       # Collections page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── analytics/        # Analytics dashboard
│   └── api/              # API routes
│       ├── newsletter/   # Newsletter subscription
│       └── contact/      # Contact form
├── components/           # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── FeaturedProducts.tsx
│   └── Newsletter.tsx
├── lib/                  # Utility libraries
│   └── firebase.ts       # Firebase configuration
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # TailwindCSS config
└── next.config.js       # Next.js config
```

## Features Included

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Firebase Firestore database integration
✅ Analytics dashboard with charts
✅ Newsletter subscription system
✅ Contact form with database storage
✅ Product collections display
✅ SEO optimized
✅ TypeScript for type safety
✅ Modern UI with TailwindCSS

## Next Steps

After setup, you can:
1. Customize the brand colors in `tailwind.config.ts`
2. Add real product data
3. Integrate payment processing (Stripe, PayPal, etc.)
4. Add user authentication
5. Implement shopping cart functionality
6. Deploy to Vercel, Netlify, or your preferred hosting

## Support

If you encounter any issues, please check:
- Node.js version (should be 18.x or higher)
- npm version (should be 9.x or higher)
- All environment variables are set correctly
- Firebase project is properly configured

---

Happy coding! 🚀
