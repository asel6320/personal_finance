💰 Personal Finance Tracker
A simple and intuitive React + TypeScript application for tracking daily expenses. Users can add spending records, assign them to categories, and visualize totals through interactive charts.

📍 Live Demo
👉 https://asel6320.github.io/personal_finance/

🚀 Features
📋 Add and remove expense items

🗂 Categorize expenses (Food, Clothing, Electronics, etc.)

📊 View a Pie Chart summarizing total spending by category

🌙 Light/Dark Mode toggle with localStorage preference saving

💾 Data persists via localStorage

🎯 Built with React, TypeScript, and Bootstrap

🛠️ Tech Stack
React 19

TypeScript

Bootstrap 5

Chart.js + react-chartjs-2

gh-pages (for deployment)

LocalStorage API

📦 Getting Started
1. Clone the Project
bash
Copy
Edit
git clone https://github.com/asel6320/personal_finance.git
cd personal_finance
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm start
Then open http://localhost:3000 in your browser.

🏗 Build for Production
bash
Copy
Edit
npm run build
Creates an optimized production build in the build/ directory.

🌐 Deployment on GitHub Pages
To redeploy:

bash
Copy
Edit
npm run deploy
Your app will be live at:
📍 https://asel6320.github.io/personal_finance/

📂 Project Structure
pgsql
Copy
Edit
personal_finance/
├── public/
├── src/
│   ├── components/
│   │   ├── ItemForm/
│   │   ├── Items/
│   │   ├── ToolBar/
│   │   └── SpendingChart/
│   ├── types/
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
💡 What I Learned
Creating a complete React app using TypeScript and reusable components

Implementing a custom Dark Mode toggle using CSS and localStorage

Deploying a frontend app to GitHub Pages

Data persistence without a backend using LocalStorage

📸 Screenshots
Light Mode
<img width="1110" alt="Снимок экрана 2025-06-09 в 2 55 58 AM" src="https://github.com/user-attachments/assets/9aed9746-21eb-4a72-b7a4-560cd30eb57c" />

Dark Mode
<img width="1115" alt="Снимок экрана 2025-06-09 в 2 56 09 AM" src="https://github.com/user-attachments/assets/a4ae8cf6-cb29-4165-9037-e62ffbc89192" />



