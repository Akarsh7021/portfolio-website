import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  // 🔄 CONVERT: Keep this data array in JavaScript
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'TechStart Solutions',
      period: 'June 2025 - Present',
      description: [
        'Developed responsive web applications using React and Tailwind CSS',
        'Collaborated with senior developers on client projects',
        'Improved website performance by 40% through code optimization',
        'Participated in daily stand-ups and sprint planning sessions',
      ],
    },
    {
      role: 'Web Development Freelancer',
      company: 'Self-Employed',
      period: 'January 2024 - Present',
      description: [
        'Built custom websites for local businesses and startups',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Managed client communications and project timelines',
        'Delivered 10+ successful projects with 5-star client ratings',
      ],
    },
    {
      role: 'IT Support Assistant',
      company: 'University IT Department',
      period: 'September 2024 - May 2025',
      description: [
        'Provided technical support to students and faculty',
        'Troubleshot hardware and software issues',
        'Assisted in maintaining computer labs and network infrastructure',
        'Documented common issues and created help guides',
      ],
    },
    {
      role: 'Web Design Volunteer',
      company: 'Local Non-Profit Organization',
      period: 'March 2024 - August 2024',
      description: [
        'Redesigned organization website to improve user engagement',
        'Created content management system for easy updates',
        'Trained staff on website maintenance and content creation',
        'Increased online donations by 25% through improved UX',
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl">Experience</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            My professional journey and work experience
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-zinc-800 hover:border-cyan-500/50 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-zinc-950" />
              
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">{exp.role}</h3>
                    <div className="text-cyan-400 text-lg">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-800/50 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl p-12 border border-zinc-800/50">
            <h3 className="text-2xl mb-4">Interested in working together?</h3>
            <p className="text-zinc-400 mb-6">
              I'm always open to discussing new projects and opportunities
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}