interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  // 🔄 CONVERT: Keep this array in your JavaScript file
  // It makes managing navigation items easier
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    // 🔄 CONVERT: This is a fixed navigation bar
    // HTML: <nav class="fixed top-0 left-0 right-0 z-50 bg-zinc-900-80 backdrop-blur-lg border-b border-zinc-800-50">
    // Note: Tailwind's opacity classes (bg-zinc-900/80) need to be converted to rgba() in CSS
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 🔄 CONVERT: Logo/Brand button */}
          {/* React: <button onClick={() => setCurrentPage('home')}> */}
          {/* HTML: <button onclick="showPage('home')"> or <a href="index.html"> */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Portfolio
          </button>
          
          {/* 🔄 CONVERT: Navigation links container */}
          <div className="flex gap-8">
            {/* 🔄 CONVERT: navItems.map() creates multiple buttons */}
            {/* HTML Option 1: Write buttons manually */}
            {/* HTML Option 2: Use JavaScript forEach to generate buttons */}
            {/* 
              HTML EXAMPLE:
              <button onclick="showPage('home')" class="nav-link" data-page="home">Home</button>
              <button onclick="showPage('experience')" class="nav-link" data-page="experience">Experience</button>
              ... etc
              
              OR with JavaScript:
              navItems.forEach(item => {
                const btn = document.createElement('button');
                btn.textContent = item.label;
                btn.onclick = () => showPage(item.id);
                btn.className = 'nav-link';
                btn.dataset.page = item.id;
                navContainer.appendChild(btn);
              });
            */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative transition-colors ${
                  // 🔄 CONVERT: Conditional styling based on active page
                  // HTML/JS: if (currentPage === item.id) { btn.classList.add('text-cyan-400'); }
                  currentPage === item.id
                    ? 'text-cyan-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {/* 🔄 CONVERT: Active page indicator (underline) */}
                {/* React: {condition && <element />} shows/hides element */}
                {/* HTML/JS: element.style.display = condition ? 'block' : 'none' */}
                {currentPage === item.id && (
                  <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}