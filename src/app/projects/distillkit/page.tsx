'use client'

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
            <h2 className="text-3xl font-bold text-gray-50 mb-6">🛠️ Technical Implementation</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-gray-50 mb-3">Knowledge Distillation</h3>
                <p className="leading-relaxed">
                  Implemented Hinton's knowledge distillation with temperature scaling (T=4) and a weighted 
                  combination of soft and hard targets (α=0.7). The teacher model (ResNet-50) transfers its 
                  learned representations to a compact student model (MobileNetV2).
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-50 mb-3">Quantization Pipeline</h3>
                <p className="leading-relaxed">
                  Developed a complete quantization workflow including both post-training quantization (PTQ) 
                  and quantization-aware training (QAT). Models are quantized to INT8 precision while 
                  maintaining accuracy through careful calibration and fine-tuning.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-50 mb-3">Performance Optimization</h3>
                <p className="leading-relaxed">
                  Implemented various optimization techniques including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Layer fusion for improved inference speed</li>
                  <li>Batch normalization folding</li>
                  <li>Dynamic quantization for RNN layers</li>
                  <li>Custom CUDA kernels for critical operations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">📊 Results & Impact</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-gray-50 mb-3">Performance Metrics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Model size reduction: 90% (50MB → 5MB)</li>
                  <li>Accuracy retention: 85% of teacher model</li>
                  <li>Inference speedup: 3.5x on mobile devices</li>
                  <li>Memory footprint: 75% reduction</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-50 mb-3">Real-World Applications</h3>
                <p className="leading-relaxed">
                  Successfully deployed in production environments for:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Edge device computer vision tasks</li>
                  <li>Mobile NLP applications</li>
                  <li>Real-time inference systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}