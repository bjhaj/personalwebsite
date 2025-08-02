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
          <Link 
            href="https://github.com/bjhaj/DistillKit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            🔗 GitHub Repository
          </Link>
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
