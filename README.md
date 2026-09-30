# 🎓 Harish Dhake - Personal Portfolio Website

A complete React-based personal portfolio website with full CRUD functionality for project management.

## 📋 Project Details

- **Student:** Harish Dhake
- **Institution:** PES Modern College, Ganeshkhind, Pune
- **Assignment:** Assignment 6 - Mini React App
- **Year:** Final Year BCA (Graduating 2027)
- **Focus:** Cybersecurity & Network Security

## ✨ Features

### 📄 Pages (6 Total)
1. **Home** - Welcome page with introduction and quick facts
2. **About Me** - Personal introduction and career aspirations
3. **Education** - Educational qualifications and certifications
4. **Skills** - Technical skills with proficiency levels
5. **Projects** - Project portfolio with full CRUD operations
6. **Contact** - Contact form with validation

### 🛠️ React Concepts Implemented
- ✅ **Functional Components** (All 6 pages)
- ✅ **useState Hook** (Project management, form handling)
- ✅ **useEffect Hook** (Ready to extend)
- ✅ **Props** (Data passing between components)
- ✅ **React Router** (Navigation between pages)
- ✅ **CRUD Operations** (Create, Read, Update, Delete projects)
- ✅ **Inline CSS** (All styling in JavaScript)
- ✅ **Component Structure** (Modular and organized)

### 🎯 CRUD Operations
- **CREATE** - Add new projects with form validation
- **READ** - Display projects in responsive grid layout
- **UPDATE** - Edit existing project details
- **DELETE** - Remove projects with confirmation dialog

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Extract the zip file**
```bash
unzip portfolio-project.zip
cd portfolio-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
   - Automatically opens at `http://localhost:3000`
   - If not, manually navigate to that URL

## 📁 Project Structure

```
portfolio-project/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico
├── src/
│   ├── App.jsx             # Main React component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles (optional)
├── package.json            # Project dependencies
├── package-lock.json
├── .gitignore
└── README.md
```

## 📦 Dependencies

- **react**: ^18.2.0 - React library
- **react-dom**: ^18.2.0 - React DOM rendering
- **react-router-dom**: ^6.16.0 - Client-side routing
- **react-scripts**: 5.0.1 - Create React App scripts

## 🧪 Testing the Application

### Navigation
- Click on navigation links to switch between pages
- Should transition smoothly between pages

### Add a Project (CREATE)
1. Go to **Projects** page
2. Click **"+ Add New Project"** button
3. Fill in the form:
   - Project Title
   - Description
   - Technologies (comma-separated)
   - Status (dropdown)
   - Project Link (optional)
4. Click **"✓ Add Project"**
5. Project appears in the grid below

### Edit a Project (UPDATE)
1. Click **"✏️ Edit"** on any project card
2. Form populates with project details
3. Modify any field
4. Click **"✓ Update Project"**

### Delete a Project (DELETE)
1. Click **"🗑️ Delete"** on any project
2. Confirm deletion in the dialog
3. Project is removed from the grid

### Submit Contact Form
1. Go to **Contact** page
2. Fill in Name, Email, and Message
3. Click **"Send Message"**
4. See success confirmation message

## 🎨 Styling

- **Color Scheme:** Blue (#3498db), Dark Gray (#2c3e50)
- **Layout:** Responsive grid system
- **Typography:** Arial font family
- **Design:** Clean, modern, professional

## ⚙️ Available Scripts

### `npm start`
Runs the app in development mode. Opens [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner.

### `npm eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Styles not loading
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + Shift + R)
- Restart development server (Ctrl + C, then `npm start`)

## 📝 Assignment Requirements ✅

- [x] Create a Personal Portfolio Website using React.js
- [x] 6 Different pages/sections (Home, About, Education, Skills, Projects, Contact)
- [x] Functional Components
- [x] Props for data passing
- [x] useState Hook for state management
- [x] useEffect Hook structure
- [x] React Router for navigation
- [x] CRUD Operations (Projects page)
- [x] Inline CSS styling
- [x] Reusable Components
- [x] Form validation
- [x] Contact form implementation
- [x] Responsive design

## 👤 Author

**Harish Dhake**
- Email: harish.dhake@example.com
- GitHub: [github.com/harishdhake-hd](https://github.com/harishdhake-hd)
- Location: Kalyan/Jalgaon, Maharashtra, India

## 📚 Skills Highlighted

**Cybersecurity**
- Network Security
- Threat Detection
- Incident Response
- Vulnerability Assessment
- Penetration Testing

**Technical Skills**
- Python
- Linux
- Windows
- Networking Basics
- Wireshark

**Tools & Platforms**
- TryHackMe
- HackTheBox
- OWASP
- Metasploit
- Burp Suite

## 🎯 Certifications & Training

- CompTIA Security+ (Preparation)
- CEH (Certified Ethical Hacker) (Preparation)
- TryHackMe Active Learner
- HackTheBox Participant

## 📄 License

This project is personal and created for educational purposes.

## 🙏 Credits

Built with React.js, React Router DOM, and vanilla CSS styling.

---

**Happy Coding! 🚀**

For any questions or support, feel free to reach out.
