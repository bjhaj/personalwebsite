import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "SmokeNet",
      subtitle: "Wildfire Detection System",
      description: "Edge AI system for real-time wildfire detection using knowledge distillation and LoRa networks.",
      tags: "Edge AI • LoRa • PyTorch • Knowledge Distillation",
      image: "/images/smokenet-banner.webp",
      link: "/projects/smokenet"
    },
    {
      title: "Translatica",
      subtitle: "Translation Platform",
      description: "AI-powered translation system bridging language barriers with advanced natural language processing.",
      tags: "NLP • Translation • AI • Platform",
      image: "/images/translatica-banner.webp",
      link: "/projects/translatica"
    },
    {
      title: "SelfAlign",
      subtitle: "AI Alignment Research",
      description: "Research framework for self-aligning AI systems with human values and preferences.",
      tags: "AI Alignment • Research • ML Safety • Ethics",
      image: "/images/selfalign-banner.webp",
      link: "/projects/selfalign"
    },
    {
      title: "DistillKit",
      subtitle: "Knowledge Distillation Framework",
      description: "Comprehensive PyTorch toolkit for model compression and edge deployment optimization.",
      tags: "Library/Toolkit • Edge AI • Knowledge Distillation • Quantization",
      image: "/images/distillkit-banner.jpg",
      link: "/projects/distillkit"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.link}
              className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-500 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-50 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500">
                  {project.tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
