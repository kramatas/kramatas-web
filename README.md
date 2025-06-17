# kramatas-web


# 🚀 Vite + React Single Page Application

This project is a **single-page application** (SPA) built with **React.js** and **Vite**. It is structured for scalability and performance, using modern frontend development practices.

---

## 📁 Project Folder Structure

```
kramatas-web/
├── public/                      # Static files (favicon, index.html, etc.)
│   └── index.html
    └── images/
     └── about/
     └── features/
     └── hero/
     └── logo/
     └── products/
     └── services/
     └── sliderbanner/
     └── svgbackgrounds/
     └── team/
     └── testimonials/
├── src/
│   ├── assets/                  # Images, fonts, logos, etc.
│   ├── components/              # Reusable UI components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── ctaSection/
│   │   ├── features/
│   │   ├── footer/
│   │   ├── heroSection/
│   │   ├── navbar/
│   │   ├── products/
│   │   ├── services/
│   │   ├── sliderbanner/
│   │   ├── Team/
│   │   ├── testimonials/
│   │   ├── utils/
│   │    
│   ├── hooks/                    # Custom React hooks
│   ├── layouts/                  # Home Page Layout
│   ├── pages/                      # Page-level components (optional)
│   ├── styles/                   # custom css (optional)
│   ├── types/                   # Custom types 
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # App entry point for Vite
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration file
└── README.md
```

> 📌 The `components/` folder contains subfolders for each section of the page (e.g., Navbar, HeroSection), making the code modular and maintainable.

---

## 🛠️ Development Setup

Follow these steps to run the application in development mode:

### 1. Clone the Repository

```bash
git clone https://github.com/kramatas/kramatas-web.git
cd kramatas-web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

By default, the app will run at:

```
http://localhost:5173
```

---

## 🚀 Deployment Guide

### 1. Create a Production Build

```bash
npm run build
# or
yarn build
```

This command generates optimized static files in the `dist/` directory.

### 2. Preview the Production Build

```bash
npm run preview
# or
yarn preview
```

### 3. Deploy Options

#### ✅ Netlify
- Connect your GitHub repository.
- Set **build command**: `npm run build`
- Set **publish directory**: `dist`

#### ✅ Vercel
- Import project from GitHub.
- Configure as a React project.
- Set **output directory**: `dist`

#### ✅ GitHub Pages
1. Add `base` to your `vite.config.ts`:

   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
   });
   ```

2. Install `gh-pages`:

   ```bash
   npm install gh-pages --save-dev
   ```

3. Add scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

---

## 🌐 Environment Variables

To use environment variables, create a `.env` file in the root:

```env
VITE_API_URL=https://api.example.com
```

Access inside React using:

```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

> ⚠️ Environment variables must start with `VITE_` in Vite projects.

---

## 🧪 Linting & Formatting

(Optional setup)

```bash
npm install eslint prettier eslint-plugin-react --save-dev
```

Add `.eslintrc` and `.prettierrc` as needed to enforce code standards.

---

## 🧾 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

Developed by [Your Name](https://github.com/yourusername)  
Feel free to reach out or contribute to the project!
