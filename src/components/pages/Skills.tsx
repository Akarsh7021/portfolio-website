import { Code2, Server, Wrench, Globe } from 'lucide-react';

export function Skills() {
  // 🔄 CONVERT: Keep this data structure in JavaScript
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 70 },
      ],
    },
    {
      category: 'Backend & Database',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux', level: 70 },
        { name: 'Docker', level: 50 },
        { name: 'Figma', level: 65 },
      ],
    },
    {
      category: 'Networking & IT',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Networking Fundamentals', level: 75 },
        { name: 'Network Security', level: 65 },
        { name: 'System Administration', level: 60 },
        { name: 'Troubleshooting', level: 80 },
      ],
    },
  ];

  const additionalSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Communication',
    'Critical Thinking',
    'Attention to Detail',
    'Self-Learning',
    'Project Management',
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl">Skills</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            Technical expertise and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                  {category.icon}
                </div>
                <h2 className="text-2xl">{category.category}</h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl mb-8">Soft Skills</h2>
          
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
            <div className="grid md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 text-center"
                >
                  <div className="text-zinc-300">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl p-12 border border-zinc-800/50 text-center">
            <h3 className="text-2xl mb-4">Currently Learning</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skill set. Currently focusing on advanced React patterns, 
              cloud deployment with AWS, and cybersecurity fundamentals.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'AWS', 'GraphQL', 'Cybersecurity', 'Python'].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}