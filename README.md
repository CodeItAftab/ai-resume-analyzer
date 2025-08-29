# AI Resume Analyzer

A modern, privacy-focused web app to analyze, score, and improve your resume using AI. Built with React, TypeScript, Vite, Zustand, and Puter.js for seamless file management and authentication.

---

## 🚀 Features

- **Resume Upload & Preview**: Upload PDF or image resumes, preview instantly.
- **AI Analysis**: Get ATS (Applicant Tracking System) scores, keyword matches, and actionable feedback.
- **Score Badges & Details**: Visual score badges, detailed breakdowns, and improvement tips.
- **File Management**: View, delete, and manage your uploaded files securely.
- **Authentication**: Fast, secure login via Puter.js.
- **Wipe App Data**: One-click wipe to delete all files and app data.
- **Responsive Design**: Beautiful UI for desktop and mobile, with sticky layouts and smooth transitions.

---

## 🛠️ Tech Stack & Tools

- **React**: UI library for building interactive interfaces.
- **TypeScript**: Type-safe code for reliability.
- **Vite**: Lightning-fast development and build tool.
- **Tailwind CSS**: Utility-first CSS for rapid, responsive design.
- **Zustand**: State management for app logic and Puter.js integration.
- **Puter.js**: File system, authentication, and key-value storage APIs.
- **React Router**: SPA routing and navigation.

---

## 📦 Main Packages Used

- `react`, `react-dom`, `react-router-dom`
- `typescript`, `vite`, `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, `autoprefixer`
- `zustand`
- `puter-js`

---

## 🖥️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/CodeItAftab/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will run at `http://localhost:5173`.

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🌈 Folder Structure

```
app/
  components/      # Reusable UI components (ScoreBadge, ATS, Details, etc.)
  lib/             # Utility functions and Puter.js logic
  routes/          # Page routes (auth, home, resume, upload, wipe, notfound)
constants/         # App-wide constants
public/            # Static assets (icons, images, pdf worker)
types/             # TypeScript type definitions
```

---

## ✨ Usage Tips

- **Upload resumes** on the Home or Upload page.
- **Analyze** your resume for ATS compatibility and get improvement suggestions.
- **Wipe data** anytime from the Wipe page for privacy.
- **Mobile friendly**: Try on your phone for a smooth experience.

---

## 🛡️ Privacy & Security

- All files and data are stored locally via Puter.js.
- No resume data is sent to external servers.
- You can wipe all data at any time.

---

## 💡 Contributing

Pull requests and suggestions are welcome! Please open an issue for bugs or feature requests.

---

## 📄 License

MIT License. See `LICENSE` for details.

---

## 👤 Author

Made with ❤️ by [Aftab Alam](https://github.com/CodeItAftab)
