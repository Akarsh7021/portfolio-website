import { ExternalLink, Github, Construction } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  // 🔄 CONVERT: Keep this projects array in JavaScript
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin panel for managing products, orders, and analytics in real-time. Built with modern web technologies and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task tracking application with team features, notifications, and project management capabilities for agile teams.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'Tool that generates responsive portfolio websites from JSON configuration files, with multiple theme options and easy customization.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tech: ['Next.js', 'Tailwind CSS', 'Markdown'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with 7-day forecasts, location-based updates, and interactive weather maps using external APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      tech: ['React', 'OpenWeather API', 'Recharts'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'Full-stack social networking platform with user authentication, posts, comments, likes, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tech: ['MERN Stack', 'JWT', 'Cloudinary'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Code Snippet Manager',
      description: 'Developer tool for organizing and sharing code snippets with syntax highlighting, tagging system, and search functionality.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      tech: ['React', 'Firebase', 'Prism.js'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Construction className="w-8 h-8 text-amber-400" />
            <h1 className="text-5xl">Projects</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            A showcase of my development work and technical projects
          </p>
        </div>

        {/* Under Progress Badge */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <Construction className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-lg">🚧 Under Progress</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-800/50 text-cyan-400 text-xs rounded-full border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="mt-16 text-center">
          <div className="bg-zinc-900/50 rounded-xl p-12 border border-zinc-800/50">
            <h3 className="text-2xl mb-4">More Projects Coming Soon</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check back regularly to see what I've been building!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}