# Whytee Stitches - Premium Fashion Brand Website

A modern, responsive fashion e-commerce website built with Next.js, React, TailwindCSS, and Firebase. Features smooth animations, analytics dashboard, and cross-platform compatibility.

## 🌟 Features

- **Sleek Modern Design**: Beautiful UI with smooth animations using Framer Motion
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Analytics Dashboard**: Real-time business metrics and insights with interactive charts
- **Firebase Integration**: Backend database for contact forms and newsletter subscriptions
- **Product Collections**: Browse through curated fashion collections
- **Newsletter Subscription**: Email collection system
- **Contact Form**: Customer inquiry management
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Optimized**: Fast load times and smooth user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Database**: Firebase Firestore
- **Analytics**: Firebase Analytics
- **Language**: TypeScript

## 📦 Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd C:\Users\Ola-Adesanya\CascadeProjects\whytee-stitches
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database and Analytics
   - Copy your Firebase configuration
   - Create a `.env.local` file in the root directory:
     ```bash
     cp .env.local.example .env.local
     ```
   - Add your Firebase credentials to `.env.local`

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`): Hero section, featured products, value propositions
- **Collections** (`/collections`): Product catalog with filters
- **About** (`/about`): Brand story, values, and team
- **Contact** (`/contact`): Contact form and information
- **Analytics** (`/analytics`): Business dashboard with charts and metrics

## 🎨 Customization

### Colors
The brand colors can be customized in `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    500: '#ef7e42',
    // ... other shades
  },
}
```

### Content
Update product data, team members, and content directly in the respective page files under the `app/` directory.

## 📊 Database Collections

### Firestore Collections:
- `newsletter_subscribers`: Email subscribers
- `contact_messages`: Customer inquiries
- `products`: Product catalog (to be implemented)
- `orders`: Order history (to be implemented)

## 🔒 Environment Variables

Required environment variables (create `.env.local`):
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

## 📄 License

This project is created for Whytee Stitches. All rights reserved.

## 🤝 Support

For support or inquiries, contact: hello@whyteestitches.com

---

Built with ❤️ by the Whytee Stitches team
