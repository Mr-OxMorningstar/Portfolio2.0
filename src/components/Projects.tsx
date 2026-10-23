const Projects = () => {
  const projects = [
    {
      title: 'Enterprise AI Automation Platform',
      category: 'AI & Automation',
      description:
        'Architected and deployed a comprehensive automation platform using n8n, integrating multiple APIs and services. Reduced manual processing time by 75% and improved data accuracy to 99.8%.',
      impact: [
        'Automated 20+ business workflows',
        'Saved 120+ hours monthly across teams',
        'Integrated 15+ external services and APIs',
        'Implemented real-time monitoring and alerting',
      ],
      tech: ['Node.js', 'TypeScript', 'n8n', 'PostgreSQL', 'AWS Lambda', 'Redis'],
      metrics: {
        efficiency: '+75%',
        accuracy: '99.8%',
        cost: '-60%',
      },
    },
    {
      title: 'High-Traffic E-commerce Platform',
      category: 'Full-Stack Development',
      description:
        'Built a scalable e-commerce solution handling 10K+ concurrent users. Implemented microservices architecture, optimized database queries, and deployed comprehensive CI/CD pipeline.',
      impact: [
        'Handled 50M+ requests per month',
        'Reduced page load time to under 1.2s',
        'Achieved 99.9% uptime',
        'Implemented real-time inventory management',
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      metrics: {
        users: '10K+',
        uptime: '99.9%',
        speed: '1.2s',
      },
    },
    {
      title: 'Legacy System Modernization',
      category: 'System Architecture',
      description:
        'Transformed a 10-year-old monolithic application into a modern microservices architecture. Migrated from legacy tech stack to React/Node.js while maintaining zero downtime.',
      impact: [
        'Reduced technical debt by 80%',
        'Improved deployment speed by 10x',
        'Enhanced code maintainability and testability',
        'Zero data loss during migration',
      ],
      tech: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Jenkins', 'AWS'],
      metrics: {
        debt: '-80%',
        deploy: '10x',
        downtime: '0',
      },
    },
    {
      title: 'Real-Time Analytics Dashboard',
      category: 'Data & Performance',
      description:
        'Developed a real-time analytics platform processing millions of events daily. Optimized database queries and implemented caching strategies for sub-second response times.',
      impact: [
        'Processed 5M+ events per day',
        'Achieved sub-second query response',
        'Reduced infrastructure costs by 40%',
        'Implemented predictive analytics features',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'TimescaleDB', 'Redis', 'GraphQL'],
      metrics: {
        events: '5M/day',
        response: '<1s',
        cost: '-40%',
      },
    },
    {
      title: 'CI/CD Pipeline Implementation',
      category: 'DevOps & Infrastructure',
      description:
        'Designed and implemented end-to-end CI/CD pipelines for multiple projects. Automated testing, deployment, and monitoring processes, reducing deployment time from hours to minutes.',
      impact: [
        'Reduced deployment time by 95%',
        'Automated 100% of deployment processes',
        'Improved code quality with automated testing',
        'Enabled multiple daily deployments',
      ],
      tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jest'],
      metrics: {
        speed: '95%',
        automation: '100%',
        deploys: '10+/day',
      },
    },
    {
      title: 'Multi-Tenant SaaS Application',
      category: 'Full-Stack Development',
      description:
        'Built a secure, scalable SaaS platform serving 500+ organizations. Implemented row-level security, custom domain support, and comprehensive API with rate limiting.',
      impact: [
        'Serving 500+ active organizations',
        'Supporting 50K+ end users',
        'Implemented enterprise-grade security',
        'Achieved SOC 2 compliance readiness',
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'AWS'],
      metrics: {
        orgs: '500+',
        users: '50K+',
        security: 'SOC 2',
      },
    },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world solutions delivering measurable impact and business value
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover-glow transition-all duration-300 hover:border-cyan-500/50"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <span className="text-cyan-400 mr-2">▶</span>
                        Project Impact
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li
                            key={i}
                            className="text-slate-400 flex items-start"
                          >
                            <span className="text-cyan-400 mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-64 bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Key Metrics</h4>
                    <div className="space-y-4">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-gradient mb-1">
                            {value}
                          </div>
                          <div className="text-slate-400 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover-glow"
          >
            Let's Build Something Amazing
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
