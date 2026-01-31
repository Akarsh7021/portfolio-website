import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { Experience } from './components/pages/Experience';
import { Education } from './components/pages/Education';
import { Skills } from './components/pages/Skills';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { ProjectDetail } from './components/pages/ProjectDetail';

/* 
  ========================================
  🔄 HTML/CSS/JS CONVERSION GUIDE
  ========================================
  
  This is the main App component that handles:
  1. Page Routing (showing/hiding different pages)
  2. State Management (tracking which page is active)
  
  HOW TO CONVERT TO HTML/CSS/JS:
  
  1. CREATE SEPARATE HTML FILES:
     - index.html (Home page)
     - experience.html
     - education.html
     - skills.html
     - projects.html
     - contact.html
     - project-detail.html
  
  2. NAVIGATION:
     React Method: useState('home') + setCurrentPage()
     HTML Method: Use <a href="experience.html"> links between pages
     OR: Use single-page approach with show/hide using JavaScript
  
  3. SINGLE-PAGE APPROACH (Alternative):
     - Keep all page content in one HTML file
     - Add id="home", id="experience", etc. to each section
     - Use JavaScript to show/hide sections:
       
       let currentPage = 'home';
       
       function showPage(pageName) {
         // Hide all pages
         document.querySelectorAll('.page').forEach(page => {
           page.style.display = 'none';
         });
         // Show selected page
         document.getElementById(pageName).style.display = 'block';
         currentPage = pageName;
       }
  
  4. CONDITIONAL RENDERING:
     React: {currentPage !== 'project-detail' && <Navigation />}
     HTML/JS: 
       if (currentPage !== 'project-detail') {
         document.getElementById('navigation').style.display = 'block';
       }
*/

export default function App() {
  // 🔄 CONVERT: const [currentPage, setCurrentPage] = useState('home');
  // TO: let currentPage = 'home';
  const [currentPage, setCurrentPage] = useState('home');

  // 🔄 CONVERT: This function determines which page to show
  // TO: function showPage(pageName) { ... } (see conversion guide above)
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'project-detail':
        return <ProjectDetail setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    // 🔄 CONVERT: <div className="..."> TO: <div class="...">
    // className in React = class in HTML
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* 🔄 CONVERT: Conditional rendering */}
      {/* React: {condition && <Component />} */}
      {/* HTML/JS: Use element.style.display or classList */}
      {currentPage !== 'project-detail' && (
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      
      {/* 🔄 CONVERT: Dynamic className */}
      {/* React: className={condition ? 'class1' : 'class2'} */}
      {/* HTML/JS: element.className = condition ? 'class1' : 'class2' */}
      <main className={currentPage !== 'project-detail' ? 'pt-20' : ''}>
        {renderPage()}
      </main>
    </div>
  );
}