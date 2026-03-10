# Swastik Naikada - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

![Portfolio Preview](./public/og-image.png)

## 🚀 Features

- **Modern Design** - Clean, professional UI with dark theme
- **Fully Responsive** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags, keywords, and semantic HTML
- **Fast Performance** - Next.js server-side rendering
- **Easy to Customize** - Well-organized code structure

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/swastiknaikada/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:
- Name and title
- About section
- Skills list
- Projects
- Contact information

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Change this
      secondary: '#10B981',  // Change this
      dark: '#0F172A',       // Change this
    },
  },
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Main page
│       └── globals.css     # Global styles
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Import your repository

4. Deploy! (No configuration needed)

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

Or use the Netlify CLI for easier deployment.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Swastik Naikada**
- Email: swastiknaikada@gmail.com
- LinkedIn: [linkedin.com/in/swastik-naikada-53407a295](https://linkedin.com/in/swastik-naikada-53407a295)
- GitHub: [github.com/swastiknaikada](https://github.com/swastiknaikada)

---

Built with ❤️ using Next.js and Tailwind CSS
