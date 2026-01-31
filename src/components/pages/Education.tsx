import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  // 🔄 CONVERT: Keep these data arrays in JavaScript
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'State University of Technology',
      period: '2024 - 2028',
      status: 'In Progress - Year 2',
      description: 'Focusing on web development, networking, and software engineering principles',
      highlights: [
        'GPA: 3.8/4.0',
        'Dean\'s List: Fall 2024, Spring 2025',
        'Member of Computer Science Club',
      ],
    },
    {
      degree: 'High School Diploma',
      institution: 'Central High School',
      period: '2020 - 2024',
      status: 'Completed',
      description: 'Graduated with honors, specialized in STEM subjects',
      highlights: [
        'Valedictorian',
        'Advanced Placement: Computer Science, Mathematics',
        'President of Tech Club',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2024',
      icon: '🎨',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      icon: '💻',
    },
    {
      title: 'Linux Essentials',
      issuer: 'Linux Professional Institute',
      date: '2025',
      icon: '🐧',
    },
    {
      title: 'Git & GitHub Fundamentals',
      issuer: 'Coursera',
      date: '2024',
      icon: '📦',
    },
  ];

  const courses = [
    'Data Structures & Algorithms',
    'Web Technologies',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering',
    'Cybersecurity Fundamentals',
    'Cloud Computing Basics',
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl">Education</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            My academic background and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            Academic History
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{edu.degree}</h3>
                    <div className="text-cyan-400 text-lg mb-2">{edu.institution}</div>
                    <p className="text-zinc-400">{edu.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-400 mb-1">{edu.period}</div>
                    <div className="px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                      {edu.status}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{cert.title}</h3>
                    <div className="text-cyan-400 text-sm mb-2">{cert.issuer}</div>
                    <div className="text-zinc-400 text-sm">{cert.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h2 className="text-3xl mb-8">Relevant Coursework</h2>
          
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
            <div className="grid md:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-zinc-300 bg-zinc-800/30 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}