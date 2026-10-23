const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CTO, TechVenture Inc.',
      company: 'Series B SaaS Startup',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'Exceptional developer who transformed our entire infrastructure. The automation solutions implemented reduced our operational costs by 60% and improved team productivity dramatically. A rare combination of technical expertise and business acumen.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering, DataFlow Systems',
      company: 'Enterprise Analytics Platform',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'The legacy system migration was handled flawlessly. Zero downtime, comprehensive testing, and the new architecture scales beautifully. This level of professionalism and technical depth is exactly what complex projects require.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, CloudScale',
      company: 'B2B Cloud Platform',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'Outstanding communication and delivery. Built our multi-tenant SaaS platform from ground up, implementing enterprise-grade security and performance. The CI/CD pipeline alone saved us countless hours. Highly recommend for any serious development project.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Founder & CEO, AutomateNow',
      company: 'Process Automation Startup',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'The AI automation workflows developed for our platform are extraordinary. Deep understanding of both technical implementation and business requirements. Our clients consistently praise the reliability and intelligence of the automated systems.',
      rating: 5,
    },
    {
      name: 'Jessica Park',
      role: 'Director of Technology, RetailTech Solutions',
      company: 'E-commerce Infrastructure',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'Delivered a high-performance e-commerce platform that handles our peak traffic flawlessly. The database optimization work was particularly impressive. A true full-stack expert who thinks end-to-end about architecture and user experience.',
      rating: 5,
    },
    {
      name: 'Robert Martinez',
      role: 'Head of DevOps, FinanceStream',
      company: 'Financial Technology',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote:
        'The CI/CD implementation revolutionized our deployment process. From hours to minutes, with comprehensive automated testing. Security practices are top-notch. This is someone who understands enterprise-grade development at every level.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by CTOs, founders, and engineering leaders worldwide
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-cyan-400 text-xs">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-300 leading-relaxed flex-1">
                <span className="text-cyan-400 text-2xl">"</span>
                {testimonial.quote}
                <span className="text-cyan-400 text-2xl">"</span>
              </blockquote>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="flex items-center text-slate-400 text-sm">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Recognition & Awards
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { label: 'Top 5% Developer', icon: '🏆' },
              { label: 'Client Satisfaction: 99%', icon: '⭐' },
              { label: 'On-Time Delivery: 100%', icon: '✓' },
              { label: 'Code Quality Award', icon: '💎' },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{award.icon}</div>
                <div className="text-slate-300 font-medium">{award.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
