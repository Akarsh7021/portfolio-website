import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  // ========================================
  // 📍 EDIT HERE: Add your project images and GIFs
  // ========================================
  // For static images: Use placeholder URLs or your own image URLs
  // For GIFs: Replace staticImage with your static preview, and gifImage with your animated GIF
  const featuredProjects = [
    {
      title: 'E-Commerce Dashboard',
      category: 'Web Development',
      description: 'Planet Research Encyclopedia.',
      tech: ['React', 'Node.js', 'MongoDB'],
      staticImage: '/images/planets.png', // 📝 Replace with your static image URL
      gifImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // 📝 Replace with your GIF URL
    },
    {
      title: 'Task Management App',
      category: 'UI/UX Design',
      description: 'Collaborative task tracking system with team features and real-time notifications. Designed for seamless team collaboration and productivity.',
      tech: ['TypeScript', 'PostgreSQL', 'Express'],
      staticImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', // 📝 Replace with your static image URL
      gifImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80', // 📝 Replace with your GIF URL
    },
    {
      title: 'Portfolio Generator',
      category: 'Web Development',
      description: 'Automated tool to generate responsive portfolio websites from JSON configurations. Features customizable themes and one-click deployment.',
      tech: ['Next.js', 'Tailwind', 'API'],
      staticImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', // 📝 Replace with your static image URL
      gifImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80', // 📝 Replace with your GIF URL
    },
  ];
  // ========================================

  // 🔄 CONVERT: Track which project is being hovered
  // HTML/JS: let hoveredProject = null;
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* 🔄 CONVERT: Hero Section - Keep structure, change className to class */}
      {/* Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* 🔄 CONVERT: Background decorative elements - these create the glow effects */}
        {/* In CSS, use position: absolute and background with rgba colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* 🔄 CONVERT: Lucide icons - replace with Font Awesome or inline SVG */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm tracking-wider uppercase">Welcome to my portfolio</span>
          </div>
          
          {/* 🔄 CONVERT: Headings - same in HTML, just change className to class */}
          <h1 className="text-6xl mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Anhadjot Chandi</span>
          </h1>
          
          <h2 className="text-4xl text-zinc-400 mb-6">
            IT Student / Web Developer
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Passionate about building modern web applications and exploring emerging technologies. 
            Currently pursuing my degree in Information Technology while freelancing on web projects.
          </p>
          
          {/* 🔄 CONVERT: Buttons with click handlers */}
          {/* React: onClick={() => setCurrentPage('projects')} */}
          {/* HTML: onclick="showPage('projects')" */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-12 border border-zinc-800/50 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <Code2 className="w-6 h-6 text-cyan-400 mt-1" />
              <h2 className="text-3xl">About Me</h2>
            </div>
            {/* 🔄 CONVERT: CSS Grid - works exactly the same in HTML/CSS */}
            {/* Use: display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Computer Information Technology student with hands-on experience in software development, scripting, 
                  and system-level programming. Strong background in Python, JavaScript, GDScript, SQL, and C++, with practical 
                  experience building automation tools, interactive systems, and data-driven applications. Comfortable working 
                  across Windows, macOS, and Linux environments, using version control and secure coding practices. 
                </p>
                <p>
                  I'm particularly interested in front-end development, user experience design, and DevOps practices. 
                  When I'm not coding, you'll find me exploring new technologies, colaborating with open-source projects, 
                  or learning about cybersecurity.
                </p>
              </div>
              {/* 🔄 CONVERT: Stats grid - same structure in HTML */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                  <div className="text-3xl text-cyan-400 mb-2">5+</div>
                  <div className="text-sm text-zinc-400">Projects Completed</div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                  <div className="text-3xl text-cyan-400 mb-2">2+</div>
                  <div className="text-sm text-zinc-400">Years Experience</div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                  <div className="text-3xl text-cyan-400 mb-2">8+</div>
                  <div className="text-sm text-zinc-400">Technologies</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4">Featured Project</h2>
            <p className="text-zinc-400 text-lg">A selection of my recent work</p>
          </div>

          {/* 🔄 CONVERT: .map() creates multiple elements */}
          {/* HTML: Write 3 project cards manually or use JavaScript forEach */}
          {/* Vertically Stacked Project Cards */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                // 🔄 CONVERT: Mouse events
                // HTML: onmouseenter="handleHover(0)" onmouseleave="handleHover(null)"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Project Details */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl mb-4">{project.title}</h3>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* 🔄 CONVERT: Tech tags - map creates multiple spans */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-zinc-800/50 text-cyan-400 text-sm rounded-full border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all group-hover:gap-4"
                      onClick={() => setCurrentPage('project-detail')}
                    >
                      View Project
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Right Side - Tilted Device Mockup */}
                  <div className="relative flex items-center justify-center">
                    {/* Decorative background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Device Frame Container with Tilt */}
                    {/* 🔄 CONVERT: transform: rotate() works the same in CSS */}
                    <div className="relative z-10 w-full max-w-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                      <div className="bg-zinc-800/80 rounded-2xl p-3 border border-zinc-700/50 shadow-2xl backdrop-blur-sm">
                        {/* Browser Chrome */}
                        <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-zinc-900/80 rounded-lg">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 ml-4 h-6 bg-zinc-800 rounded px-3 flex items-center">
                            <span className="text-xs text-zinc-500">localhost:3000</span>
                          </div>
                        </div>

                        {/* Image/GIF Preview with Smooth Transition */}
                        {/* 🔄 CONVERT: Two overlapping images with conditional opacity */}
                        {/* HTML/JS: Use JavaScript to toggle opacity based on hover state */}
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-zinc-900">
                          {/* Static Image */}
                          <img
                            src={project.staticImage}
                            alt={`${project.title} preview`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                              hoveredProject === index ? 'opacity-0' : 'opacity-100'
                            }`}
                          />
                          {/* GIF Image */}
                          <img
                            src={project.gifImage}
                            alt={`${project.title} animation`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                              hoveredProject === index ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                          
                          {/* Overlay gradient for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Floating accent elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}