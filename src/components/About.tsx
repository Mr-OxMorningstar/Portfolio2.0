const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              Dynamic <span className="text-cyan-400 font-semibold">Full-Stack Web Developer</span> with
              deep expertise in building scalable, high-performance applications that drive business
              value and user satisfaction.
            </p>

            <p>
              I specialize in the complete development lifecycle, seamlessly integrating modern
              frontend frameworks with robust backend architectures. My technical foundation spans
              <span className="text-cyan-400 font-semibold"> JavaScript, TypeScript, React, Node.js,</span> and
              <span className="text-cyan-400 font-semibold"> Python</span>, enabling me to architect
              solutions that are both elegant and efficient.
            </p>

            <p>
              What sets me apart is my focus on <span className="text-cyan-400 font-semibold">AI-powered
              automation</span> and intelligent workflow optimization. I leverage cutting-edge tools
              like n8n to streamline business processes, reducing manual overhead while increasing
              accuracy and speed.
            </p>

            <p>
              My expertise extends to <span className="text-cyan-400 font-semibold">database optimization,
              AWS cloud infrastructure,</span> and implementing <span className="text-cyan-400 font-semibold">
              CI/CD pipelines</span> that ensure rapid, reliable deployments. I've successfully
              modernized legacy systems, transforming monolithic architectures into microservices
              that scale effortlessly.
            </p>

            <p>
              Whether building from scratch or enhancing existing platforms, I deliver
              <span className="text-cyan-400 font-semibold"> robust, maintainable solutions</span> that
              solve real-world problems and exceed expectations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '🚀',
                    title: 'Full-Stack Architecture',
                    desc: 'End-to-end development from database design to user interface',
                  },
                  {
                    icon: '🤖',
                    title: 'AI Integration & Automation',
                    desc: 'Intelligent workflows with n8n and modern AI tools',
                  },
                  {
                    icon: '⚡',
                    title: 'Performance Optimization',
                    desc: 'Database tuning, caching strategies, and scalable architectures',
                  },
                  {
                    icon: '☁️',
                    title: 'Cloud Infrastructure',
                    desc: 'AWS deployment, serverless functions, and DevOps practices',
                  },
                  {
                    icon: '🔄',
                    title: 'Legacy Modernization',
                    desc: 'Transforming outdated systems into modern, maintainable code',
                  },
                  {
                    icon: '🎯',
                    title: 'CI/CD Pipeline Implementation',
                    desc: 'Automated testing, deployment, and continuous delivery',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-750 transition-colors"
                  >
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
