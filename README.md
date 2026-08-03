# Professional Portfolio Website — Prithviraj Gadale

A premium, data-focused, responsive personal portfolio website designed for placement and outreach. Created using **React**, **Vite**, and **Tailwind CSS**.

## Project Objective
Optimized for:
- Data Analyst & Business Analyst applications
- IT placement opportunities
- Recruiter outreach & professional networking on LinkedIn/GitHub

---

## 🛠️ Tech Stack
- **Framework:** React 19 (JavaScript)
- **Scaffolding/Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (Modern CSS-first theme config)
- **Icons:** Lucide React

---

## 🚀 How to Run Locally

To launch the local development server:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```
   *The server will run on `http://localhost:5173/` by default.*

3. **Build for Production:**
   ```bash
   npm run build
   ```
   *Outputs optimized assets to the `/dist` directory.*

---

## ⚙️ How to Update and Add Content

To maintain a clean and scalable architecture, all portfolio content is separated from the UI components. You can manage everything through files inside the `src/data/` directory.

### 1. Update Personal Info (Name, Links, Email, Experience)
Edit [`src/data/personal.js`](file:///c:/Users/Prithvi/OneDrive/Documents/portfolio/src/data/personal.js):
- Change `name`, `role`, `college`, `location`, `email`, `linkedin`, and `github`.
- To update the verified experience bullet points, modify the items under `experience[0].points`.
- **Note on Resume PDF:** Place your compiled resume PDF file in the folder `public/assets/` and name it `resume.pdf` to make the download button work immediately.

### 2. Update Technical Skills
Edit [`src/data/skills.js`](file:///c:/Users/Prithvi/OneDrive/Documents/portfolio/src/data/skills.js):
- Skills are displayed in clean, scanner-friendly categories. 
- You can add, remove, or modify categories and specific skill tags inside the array. No percentage bars or sliders are used.

### 3. Add New Projects
Edit [`src/data/projects.js`](file:///c:/Users/Prithvi/OneDrive/Documents/portfolio/src/data/projects.js):
- Add a new object to the `projects` array using the following schema:
  ```javascript
  {
    title: "Project Name",
    description: "Detailed description of data manipulation and insights.",
    technologies: ["Python", "SQL", "Power BI"],
    image: "/assets/projects/my-project.jpg",
    github: "https://github.com/...",
    liveDemo: "https://...",
    category: "Data Analytics",
    keyInsights: [
      "Key insight bullet point 1",
      "Key insight bullet point 2"
    ],
    date: "June 2026"
  }
  ```
- The UI automatically renders this data in a professional `ProjectCard` component.

### 4. Add Certifications
Edit [`src/data/certifications.js`](file:///c:/Users/Prithvi/OneDrive/Documents/portfolio/src/data/certifications.js):
- Add verification records to the `certifications` array using this schema:
  ```javascript
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Date Issued",
    credentialId: "Verification ID",
    credentialUrl: "Link to verification page",
    image: "/assets/certifications/badge.png"
  }
  ```

### 5. Add Blog Posts or Tutorials
Edit [`src/data/blogs.js`](file:///c:/Users/Prithvi/OneDrive/Documents/portfolio/src/data/blogs.js):
- Update the learning topics or add published articles by settings `isLearningTopic` to `false` and supplying a valid publication `link`.

---

## 🌐 Deployment Instructions

Deploying your portfolio is free and takes less than 2 minutes using standard hosting providers.

### Option A: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Sign up on [Vercel](https://vercel.com/) and connect your GitHub account.
3. Click **Add New** > **Project** and import your portfolio repository.
4. Vercel automatically detects the Vite config. Click **Deploy**.
5. Once complete, Vercel will provide an active domain link (e.g., `prithviraj-portfolio.vercel.app`).

### Option B: Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Import from Git** and link your GitHub repository.
3. Keep the default settings (Build command: `npm run build`, Publish directory: `dist`).
4. Click **Deploy Site**.
