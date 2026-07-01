# AI Job Board

A modern AI Job Board web application built using Next.js, React, TypeScript, and Tailwind CSS. This project allows users to browse jobs, search by keywords, filter jobs based on location and job type, and view detailed job information through a responsive interface.

---

## Project Overview

The AI Job Board is designed to provide a clean and user-friendly platform for exploring job opportunities. The application focuses on reusable React components, responsive UI design, search functionality, filtering, and deployment using modern web development practices.

---

## Features

- Responsive User Interface
- Search Jobs by Title or Company
- Filter by Location
- Filter by Job Type
- Job Detail Modal
- Reusable React Components
- GitHub Version Control
- GitHub Actions CI Pipeline
- Live Deployment using Vercel

---

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- GitHub Actions
- Vercel

---

## Folder Structure

```
app/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── FilterBar.tsx
│   ├── JobCard.tsx
│   ├── JobModal.tsx
│   └── Footer.tsx
│
├── data/
│   └── jobs.ts
│
├── types/
│   └── job.ts
│
├── page.tsx
├── layout.tsx
└── globals.css
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/kukijoshi/job-board-assessment.git
```

Move into the project directory

```bash
cd job-board-assessment
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## CI/CD Pipeline

The project uses GitHub Actions for Continuous Integration.

Whenever code is pushed to the main branch:

- Project dependencies are installed
- Project build is verified automatically
- Code is validated before deployment

---

## Deployment

The application is deployed on Vercel.

Every push to the GitHub repository automatically triggers a new deployment through the CI/CD workflow.

---

## Future Enhancements

- User Authentication
- Job Posting Form
- Save Favorite Jobs
- Dark Mode
- Pagination
- Backend Integration
- Database Connectivity

---

## Author

**Prerna Raju Joshi**

GitHub

https://github.com/kukijoshi