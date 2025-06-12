# Gebeya - Modern E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Vercel-Live_Demo-000?style=for-the-badge&logo=vercel)](https://gebeya-amber.vercel.app/)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

![Gebeya Logo](public/logo.png)

A full-featured e-commerce solution with responsive design and seamless checkout experience.

## ✨ Key Features
- 🛒 Product catalog with categories & filters
- 🔐 User authentication (Login/Signup)
- 💳 Secure payment integration
- 📱 Mobile-optimized UI
- 📊 Admin dashboard for inventory management
- 🚀 Blazing fast performance (Vite powered)

## 🛠 Tech Stack
**Frontend:**
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Context API (State Management)
- Axios for API calls

**Backend:**
- Node.js/Express
- MongoDB (Mongoose)
- JWT Authentication
- Stripe/PayPal API

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/Nati-darse/Gebeya.git
   cd Gebeya/frontend
Install dependencies

bash
npm install
Run development server

bash
npm run dev
Build for production

bash
npm run build
⚙️ Configuration
Create .env file in /frontend:

env
VITE_API_URL=your_backend_api_url
VITE_STRIPE_KEY=your_stripe_publishable_key
📂 Directory Structure
text
Gebeya/
├── frontend/
│   ├── public/            # Static files
│   │   └── logo.png       # Main logo
│   ├── src/
│   │   ├── assets/        # Images, fonts
│   │   ├── components/    # Reusable UI
│   │   ├── context/       # State management
│   │   ├── pages/         # Views
│   │   └── App.jsx        # Root component
│   ├── vite.config.js     # Build config
│   └── vercel.json        # Deployment
├── backend/               # Server code
└── README.md
🛠 Deployment
Push to GitHub

Connect to Vercel

Set environment variables

Deploy!

💡 Troubleshooting
Missing styles? Clear browser cache (Ctrl+F5)

Images not loading? Verify paths in components

Build errors? Check Node version (v18+ required)

🤝 Contributing
Contributions welcome! Please:

Fork the project

Create your feature branch

Submit a pull request

📜 License
Distributed under the MIT License. See LICENSE for details.