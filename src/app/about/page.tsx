import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mb-6">
            About
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/profile.png"
                  alt="Baaz Jhaj"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-50 mb-4">
                    Building AI that works in the real world
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a Creative Technologist who specializes in taking cutting-edge AI research 
                    and making it work in production environments. My focus is on edge AI, model 
                    optimization, and systems that can operate reliably in resource-constrained 
                    real-world scenarios. I'm also deeply interested in developing systems with 
                    positive social impact that genuinely improve people's lives.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-50 mb-3">
                    What I Do
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Design and deploy edge AI systems for remote environments</li>
                    <li>• Develop model compression techniques (distillation, quantization)</li>
                    <li>• Build ML frameworks and toolkits for practical deployment</li>
                    <li>• Create AI systems for social impact (wildfire detection, translation)</li>
                    <li>• Develop AI solutions for businesses and people who can't afford enterprise solutions</li>
                  </ul>
                </div>


              </div>
            </div>
          </div>

          {/* Resume Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-gray-50 mb-4">
                Technical Expertise
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-50 mb-2">Machine Learning</h4>
                  <p className="text-sm text-gray-300">
                    PyTorch, Knowledge Distillation, Model Quantization, Edge AI, Transformers
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-50 mb-2">Systems & Hardware</h4>
                  <p className="text-sm text-gray-300">
                    Raspberry Pi, LoRa Networks, Solar Power, Embedded Systems, Docker
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-50 mb-2">Development</h4>
                  <p className="text-sm text-gray-300">
                    Python, TypeScript, Next.js, Git, Linux, Cloud Deployment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-gray-50 mb-4">
                Connect
              </h3>
              <div className="space-y-3">
                <a 
                  href="mailto:baazjhaj@gmail.com" 
                  className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://github.com/bjhaj" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/baaz-jhaj/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
                <Link 
                  href="/Baaz-Jhaj-Resume.pdf"
                  target="_blank"
                  className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                >
                  Resume (PDF)
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
