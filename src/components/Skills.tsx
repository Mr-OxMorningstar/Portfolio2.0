const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'JavaScript (ES6+)', level: 98 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
      ],
    },
    {
      title: 'Database & Storage',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Supabase', level: 88 },
        { name: 'Database Optimization', level: 92 },
        { name: 'Query Performance', level: 90 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'GitHub Actions', level: 92 },
        { name: 'Terraform', level: 70 },
      ],
    },
    {
      title: 'AI & Automation',
      icon: '🤖',
      skills: [
        { name: 'n8n Automation', level: 95 },
        { name: 'Workflow Design', level: 92 },
        { name: 'API Integration', level: 95 },
        { name: 'AI/ML Integration', level: 80 },
        { name: 'Process Optimization', level: 90 },
        { name: 'Data Pipeline Design', level: 88 },
      ],
    },
    {
      title: 'Tools & Practices',
      icon: '🛠️',
      skills: [
        { name: 'Git & Version Control', level: 95 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Testing (Jest, Vitest)', level: 85 },
        { name: 'Code Review', level: 92 },
        { name: 'System Design', level: 88 },
        { name: 'Performance Tuning', level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Microservices Architecture',
              'RESTful API Design',
              'System Integration',
              'Legacy System Migration',
              'Performance Optimization',
              'Security Best Practices',
              'Code Review & Mentoring',
              'Technical Documentation',
              'Scalable Architecture',
              'Real-time Applications',
              'WebSocket Communication',
              'Event-Driven Architecture',
              'Serverless Functions',
              'Database Migration',
              'API Rate Limiting',
              'Authentication & Authorization',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
