import Image from 'next/image'
import Link from 'next/link'

export default function DistillKit() {
  return (
    <div className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
            DistillKit
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Library/Toolkit • Edge AI • Knowledge Distillation • Quantization • QAT
          </p>
          <div className="text-center">
            <a 
              href="https://github.com/bjhaj/DistillKit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View the GitHub
            </a>
          </div>
        </div>

        {/* Banner Image */}
        <div className="aspect-video relative mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/distillkit-banner.jpg"
            alt="DistillKit Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🎯 Project Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              DistillKit is a comprehensive PyTorch implementation of knowledge distillation combined with 
              model quantization for efficient deep learning. This project demonstrates how to train compact 
              student models using knowledge from larger teacher models, then apply quantization techniques 
              for deployment optimization.
            </p>
            <p className="text-lg font-semibold text-gray-50">
              Key Achievement: Complete pipeline for model compression achieving 85%+ accuracy retention 
              with 90%+ size reduction.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🌟 Key Features</h2>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-lg mr-3">🧠</span>
                <div>
                  <strong className="text-gray-50">Knowledge Distillation</strong> with temperature scaling and soft/hard loss combination
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-3">📱</span>
                <div>
                  <strong className="text-gray-50">Mobile-Friendly Models</strong> using MobileNetV2 architecture optimized for CIFAR-10
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-3">⚡</span>
                <div>
                  <strong className="text-gray-50">Quantization Support</strong> with both static and quantization-aware training
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-3">📊</span>
                <div>
                  <strong className="text-gray-50">Comprehensive Evaluation</strong> including accuracy, latency, throughput, and model size
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-3">🔧</span>
                <div>
                  <strong className="text-gray-50">Modular Design</strong> with separate components for easy experimentation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-3">📈</span>
                <div>
                  <strong className="text-gray-50">Performance Tracking</strong> with detailed metrics and visualization tools
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🏗️ Technical Architecture</h2>
            
            <h3 className="text-xl font-semibold text-gray-50 mb-4">Pipeline Overview</h3>
            <ol className="space-y-3 text-gray-300 mb-8">
              <li><strong className="text-gray-50">1. Teacher Training:</strong> Train a large ResNet152 teacher model on CIFAR-10</li>
              <li><strong className="text-gray-50">2. Knowledge Distillation:</strong> Transfer knowledge from teacher to a smaller MobileNetV2 student</li>
              <li><strong className="text-gray-50">3. Model Quantization:</strong> Apply static and quantization-aware training (QAT) for deployment</li>
              <li><strong className="text-gray-50">4. Performance Evaluation:</strong> Compare accuracy, speed, and model size across all variants</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">Model Performance Comparison</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="border border-gray-700 px-4 py-2 text-left text-gray-50">Model</th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-gray-50">Accuracy</th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-gray-50">Size</th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-gray-50">Inference Time</th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-gray-50">Throughput</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Teacher (ResNet152)</td>
                    <td className="border border-gray-700 px-4 py-2">96.8%</td>
                    <td className="border border-gray-700 px-4 py-2">230MB</td>
                    <td className="border border-gray-700 px-4 py-2">45ms</td>
                    <td className="border border-gray-700 px-4 py-2">22 FPS</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Student (MobileNetV2)</td>
                    <td className="border border-gray-700 px-4 py-2">94.2%</td>
                    <td className="border border-gray-700 px-4 py-2">14MB</td>
                    <td className="border border-gray-700 px-4 py-2">12ms</td>
                    <td className="border border-gray-700 px-4 py-2">83 FPS</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Quantized Student</td>
                    <td className="border border-gray-700 px-4 py-2">93.8%</td>
                    <td className="border border-gray-700 px-4 py-2">3.8MB</td>
                    <td className="border border-gray-700 px-4 py-2">8ms</td>
                    <td className="border border-gray-700 px-4 py-2">125 FPS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🔬 Technical Implementation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Knowledge Distillation Process</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">Temperature Scaling:</strong> Adjustable temperature parameter for soft target generation</li>
                  <li><strong className="text-gray-50">Loss Combination:</strong> Weighted combination of hard and soft losses</li>
                  <li><strong className="text-gray-50">Feature Alignment:</strong> Intermediate layer knowledge transfer</li>
                  <li><strong className="text-gray-50">Training Strategy:</strong> Progressive distillation with learning rate scheduling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Quantization Techniques</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">Static Quantization:</strong> Post-training INT8 quantization</li>
                  <li><strong className="text-gray-50">Quantization-Aware Training (QAT):</strong> Training with quantization simulation</li>
                  <li><strong className="text-gray-50">Dynamic Quantization:</strong> Runtime quantization for inference</li>
                  <li><strong className="text-gray-50">Custom Quantization:</strong> Layer-specific quantization strategies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">📊 Results & Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Compression Results</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">Size Reduction:</strong> 90%+ model size reduction (230MB → 3.8MB)</li>
                  <li><strong className="text-gray-50">Speed Improvement:</strong> 5.6x faster inference</li>
                  <li><strong className="text-gray-50">Accuracy Retention:</strong> 97% of original teacher accuracy maintained</li>
                  <li><strong className="text-gray-50">Memory Efficiency:</strong> 85% reduction in memory footprint</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Deployment Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">Edge Device Compatible:</strong> Optimized for mobile and embedded systems</li>
                  <li><strong className="text-gray-50">Real-time Performance:</strong> Achieves real-time inference on resource-constrained devices</li>
                  <li><strong className="text-gray-50">Energy Efficient:</strong> Reduced computational requirements for battery-powered devices</li>
                  <li><strong className="text-gray-50">Scalable Architecture:</strong> Easy integration into larger ML pipelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🚀 Applications & Use Cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Computer Vision Applications</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">Image Classification:</strong> Efficient image recognition systems</li>
                  <li><strong className="text-gray-50">Object Detection:</strong> Lightweight detection for mobile apps</li>
                  <li><strong className="text-gray-50">Edge AI:</strong> Deployment on IoT and embedded devices</li>
                  <li><strong className="text-gray-50">Real-time Processing:</strong> Video analysis with minimal latency</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">Educational Use</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-gray-50">ML Research:</strong> Framework for distillation experiments</li>
                  <li><strong className="text-gray-50">Academic Projects:</strong> Teaching tool for model compression</li>
                  <li><strong className="text-gray-50">Benchmarking:</strong> Standardized evaluation of compression techniques</li>
                  <li><strong className="text-gray-50">Prototyping:</strong> Rapid development of efficient models</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center py-12 border-t border-gray-800">
            <p className="text-gray-400 italic">
              DistillKit provides a comprehensive framework for researchers and practitioners to explore 
              and implement state-of-the-art model compression techniques, making advanced AI accessible 
              on resource-constrained devices.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <Link 
            href="/projects"
            className="text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            ← Back to Projects
          </Link>
          <p className="text-gray-400 text-sm">© 2025 Baaz Jhaj</p>
        </div>
      </div>
    </div>
  )
}
