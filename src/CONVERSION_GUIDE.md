# React to HTML/CSS/JavaScript Conversion Guide

This guide will help you convert this React/TypeScript portfolio to vanilla HTML, CSS, and JavaScript.

---

## Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Step-by-Step Conversion](#step-by-step-conversion)
4. [React vs HTML/JS Comparison](#react-vs-htmljs-comparison)
5. [Tailwind CSS Conversion](#tailwind-css-conversion)
6. [Common Patterns](#common-patterns)

---

## Overview

### What You'll Need
- **HTML files**: One for each page OR one single-page application
- **CSS file**: Extract and convert Tailwind classes
- **JavaScript file**: Handle navigation, interactions, and dynamic content
- **Assets**: Images, fonts (use same URLs or download)

### Conversion Approaches

#### **Approach 1: Multiple HTML Files (Recommended for Beginners)**
```
index.html          ← Home page
experience.html     ← Experience page
education.html      ← Education page
skills.html         ← Skills page
projects.html       ← Projects page
contact.html        ← Contact page
project-detail.html ← Project detail page
styles.css          ← All styles
script.js           ← Common JavaScript
```

#### **Approach 2: Single Page Application**
```
index.html          ← Contains all page content in sections
styles.css          ← All styles
app.js              ← Page navigation and interactions
```

---

## File Structure

### Current React Structure
```
/App.tsx                    ← Main component with routing
/components/
  Navigation.tsx            ← Nav bar
  /pages/
    Home.tsx               ← Home page
    Experience.tsx         ← Experience page
    Education.tsx          ← Education page
    Skills.tsx             ← Skills page
    Projects.tsx           ← Projects page
    Contact.tsx            ← Contact page
    ProjectDetail.tsx      ← Project detail page
/styles/
  globals.css              ← Global styles (keep this!)
```

### Converted HTML Structure (Multi-Page)
```
/index.html                ← Home page
/experience.html           ← Experience page
/education.html            ← Education page
/skills.html               ← Skills page
/projects.html             ← Projects page
/contact.html              ← Contact page
/project-detail.html       ← Project detail page
/css/
  style.css                ← Main stylesheet
/js/
  navigation.js            ← Navigation handling
  main.js                  ← Page-specific interactions
/assets/
  /images/                 ← Your images
```

---

## Step-by-Step Conversion

### Step 1: Create Base HTML Template

Create a base template that all pages will use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anhadjot Chandi - Portfolio</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Font Awesome for icons (replaces Lucide) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Your CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Navigation (include on all pages except project-detail) -->
  <nav id="navigation">
    <!-- Navigation content here -->
  </nav>

  <!-- Main Content -->
  <main>
    <!-- Page-specific content goes here -->
  </main>

  <!-- JavaScript -->
  <script src="js/main.js"></script>
</body>
</html>
```

---

### Step 2: Convert Navigation Component

**React Code** (`Navigation.tsx`):
```tsx
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  // ...
];

onClick={() => setCurrentPage(item.id)}
```

**HTML Conversion**:
```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-zinc-900-80 backdrop-blur-lg border-b border-zinc-800-50">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <a href="index.html" class="text-xl font-semibold gradient-text">
        Portfolio
      </a>
      
      <div class="flex gap-8">
        <a href="index.html" class="nav-link">Home</a>
        <a href="experience.html" class="nav-link">Experience</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </div>
    </div>
  </div>
</nav>
```

**CSS for Navigation**:
```css
/* Navigation Styles */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(39, 39, 42, 0.5);
}

.nav-link {
  position: relative;
  color: #a1a1aa;
  transition: color 0.3s;
  text-decoration: none;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.active {
  color: #22d3ee;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #22d3ee);
  border-radius: 9999px;
}

.gradient-text {
  background: linear-gradient(to right, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**JavaScript for Active State**:
```javascript
// Add this to main.js
document.addEventListener('DOMContentLoaded', () => {
  // Get current page from URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
```

---

### Step 3: Convert Home Page

**Key React Patterns to Convert**:

1. **State Management (Hover Effects)**
```tsx
// React
const [hoveredProject, setHoveredProject] = useState<number | null>(null);
onMouseEnter={() => setHoveredProject(index)}
```

```javascript
// JavaScript
let hoveredProject = null;

function handleProjectHover(index) {
  hoveredProject = index;
  updateProjectImages();
}

function updateProjectImages() {
  document.querySelectorAll('.project-card').forEach((card, index) => {
    const staticImg = card.querySelector('.static-image');
    const gifImg = card.querySelector('.gif-image');
    
    if (index === hoveredProject) {
      staticImg.style.opacity = '0';
      gifImg.style.opacity = '1';
    } else {
      staticImg.style.opacity = '1';
      gifImg.style.opacity = '0';
    }
  });
}
```

2. **Data Arrays**
```javascript
// Keep these in JavaScript!
const featuredProjects = [
  {
    title: 'E-Commerce Dashboard',
    category: 'Web Development',
    description: '...',
    tech: ['React', 'Node.js', 'MongoDB'],
    staticImage: 'https://...',
    gifImage: 'https://...'
  },
  // ... more projects
];
```

3. **Generate HTML from Data**
```javascript
// Option 1: Generate dynamically with JavaScript
function renderProjects() {
  const container = document.getElementById('projects-container');
  
  featuredProjects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <!-- ... more content -->
      </div>
    `;
    
    card.addEventListener('mouseenter', () => handleProjectHover(index));
    card.addEventListener('mouseleave', () => handleProjectHover(null));
    
    container.appendChild(card);
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', renderProjects);
```

```html
<!-- Option 2: Write HTML manually -->
<div class="project-card" 
     onmouseenter="handleProjectHover(0)" 
     onmouseleave="handleProjectHover(null)">
  <h3>E-Commerce Dashboard</h3>
  <!-- ... -->
</div>
```

---

### Step 4: Convert Contact Form

**React Form Handling**:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
};
```

**HTML Form**:
```html
<form id="contact-form" onsubmit="return handleSubmit(event);">
  <div>
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  
  <button type="submit">Send Message</button>
</form>
```

**JavaScript Form Handler**:
```javascript
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form values
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form submitted:', formData);
  alert('Message sent! (This is a demo)');
  
  // Reset form
  document.getElementById('contact-form').reset();
  
  return false; // Prevent default form submission
}

// Or use addEventListener
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', handleSubmit);
});
```

---

### Step 5: Convert Skills Page (Progress Bars)

**React Code**:
```tsx
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 }
];

<div style={{ width: `${skill.level}%` }} />
```

**HTML**:
```html
<div class="skill-item">
  <div class="skill-header">
    <span>HTML</span>
    <span class="skill-percentage">90%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 90%"></div>
  </div>
</div>
```

**CSS**:
```css
.skill-bar {
  width: 100%;
  height: 8px;
  background-color: #27272a;
  border-radius: 9999px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(to right, #3b82f6, #22d3ee);
  border-radius: 9999px;
  transition: width 1s ease;
}
```

---

### Step 6: Convert Project Detail Page (Video Tabs)

**React Code**:
```tsx
const [activeTab, setActiveTab] = useState(0);
const videoRefs = useRef([]);

useEffect(() => {
  const currentVideo = videoRefs.current[activeTab];
  currentVideo.play();
}, [activeTab]);
```

**HTML**:
```html
<div class="tab-buttons">
  <button class="tab-btn active" onclick="changeTab(0)">Gameplay</button>
  <button class="tab-btn" onclick="changeTab(1)">Zombie AI</button>
  <button class="tab-btn" onclick="changeTab(2)">Weapons</button>
  <button class="tab-btn" onclick="changeTab(3)">Level Design</button>
</div>

<div class="video-container">
  <video class="tab-video active" src="video1.mp4" loop muted></video>
  <video class="tab-video" src="video2.mp4" loop muted></video>
  <video class="tab-video" src="video3.mp4" loop muted></video>
  <video class="tab-video" src="video4.mp4" loop muted></video>
</div>
```

**JavaScript**:
```javascript
let activeTab = 0;
const videos = document.querySelectorAll('.tab-video');
const buttons = document.querySelectorAll('.tab-btn');

function changeTab(index) {
  activeTab = index;
  
  // Update videos
  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('active');
      video.style.opacity = '1';
      video.style.zIndex = '10';
      video.play().catch(err => console.log('Autoplay prevented'));
    } else {
      video.classList.remove('active');
      video.style.opacity = '0';
      video.style.zIndex = '0';
      video.pause();
    }
  });
  
  // Update buttons
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  changeTab(0);
});
```

**Intersection Observer (Same API!)**:
```javascript
// This works exactly the same in vanilla JS!
const videoSection = document.querySelector('.video-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const activeVideo = document.querySelector('.tab-video.active');
    if (entry.isIntersecting) {
      activeVideo.play().catch(err => console.log('Autoplay prevented'));
    } else {
      activeVideo.pause();
    }
  });
}, { threshold: 0.5 });

observer.observe(videoSection);
```

---

## React vs HTML/JS Comparison

### State Management
| React | HTML/JS |
|-------|---------|
| `const [count, setCount] = useState(0);` | `let count = 0;` |
| `setCount(count + 1);` | `count = count + 1;` |
| Re-renders automatically | Update DOM manually |

### Event Handlers
| React | HTML/JS |
|-------|---------|
| `onClick={() => handleClick()}` | `onclick="handleClick()"` |
| `onChange={handleChange}` | `onchange="handleChange()"` |
| `onSubmit={handleSubmit}` | `onsubmit="return handleSubmit(event);"` |

### Conditional Rendering
| React | HTML/JS |
|-------|---------|
| `{condition && <div>Show</div>}` | `if (condition) { element.style.display = 'block'; }` |
| `{condition ? <A /> : <B />}` | `element.innerHTML = condition ? htmlA : htmlB;` |

### Arrays & Mapping
| React | HTML/JS |
|-------|---------|
| `{items.map(item => <div>{item}</div>)}` | `items.forEach(item => { container.append(item); })` |

### Refs
| React | HTML/JS |
|-------|---------|
| `const ref = useRef(null);` | `const element = document.getElementById('id');` |
| `ref.current.focus()` | `element.focus()` |

### Class Names
| React | HTML/JS |
|-------|---------|
| `className="text-white"` | `class="text-white"` |
| `className={active ? 'on' : 'off'}` | `element.className = active ? 'on' : 'off'` |

---

## Tailwind CSS Conversion

### Option 1: Keep Tailwind (Easiest)
```html
<!-- Add Tailwind CDN to <head> -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Configure Tailwind -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          zinc: {
            950: '#09090b',
            900: '#18181b',
            800: '#27272a',
            700: '#3f3f46',
            // ... etc
          }
        }
      }
    }
  }
</script>
```

### Option 2: Convert to Custom CSS

**Tailwind Class → CSS Property**:
```css
/* Layout */
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Sizing */
.w-full { width: 100%; }
.h-screen { height: 100vh; }
.min-h-screen { min-height: 100vh; }

/* Spacing */
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.gap-4 { gap: 1rem; }
.mb-4 { margin-bottom: 1rem; }

/* Colors */
.text-white { color: #ffffff; }
.text-cyan-400 { color: #22d3ee; }
.bg-zinc-950 { background-color: #09090b; }
.bg-zinc-900 { background-color: #18181b; }

/* Typography */
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-4xl { font-size: 2.25rem; }
.text-6xl { font-size: 3.75rem; }

/* Borders */
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-full { border-radius: 9999px; }
.border { border-width: 1px; }

/* Effects */
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
.transition-all { transition: all 0.3s; }
.hover\:scale-110:hover { transform: scale(1.1); }

/* Positioning */
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.top-0 { top: 0; }
.left-0 { left: 0; }
.z-50 { z-index: 50; }

/* Gradients */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-500 { --tw-gradient-from: #3b82f6; }
.to-cyan-500 { --tw-gradient-to: #06b6d4; }
```

---

## Common Patterns

### 1. Button Click Navigation
```javascript
// Instead of setCurrentPage('projects')
// Use:
window.location.href = 'projects.html';

// Or for smooth transition:
function navigateTo(page) {
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}
```

### 2. Smooth Scroll
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

### 3. Loading State
```javascript
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
```

```css
body {
  opacity: 0;
  transition: opacity 0.3s;
}

body.loaded {
  opacity: 1;
}
```

### 4. Mobile Menu Toggle
```javascript
const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
```

---

## Final Checklist

- [ ] Create all HTML files
- [ ] Convert all Tailwind classes to CSS or use Tailwind CDN
- [ ] Replace Lucide icons with Font Awesome
- [ ] Convert all useState to variables
- [ ] Convert all onClick to onclick or addEventListener
- [ ] Convert all .map() to forEach or write HTML manually
- [ ] Test all forms
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Test all interactive features
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Test in different browsers

---

## Resources

- **Font Awesome Icons**: https://fontawesome.com/icons
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/ (Check browser compatibility)

---

## Tips for Success

1. **Start Simple**: Convert one page at a time
2. **Test Frequently**: Check your work in the browser after each change
3. **Use DevTools**: Browser developer tools are your best friend
4. **Keep Comments**: Document your code for future reference
5. **Version Control**: Use Git to track your changes
6. **Ask for Help**: Don't hesitate to search for solutions online

---

Good luck with your conversion! 🚀
