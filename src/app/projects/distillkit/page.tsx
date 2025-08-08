'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'; // Added for useEffect

// Core Concept Animation Component
const CoreConceptAnimation = () => {
  return (
    <div className="relative h-80 bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800">
      <div className="absolute inset-0 flex items-center px-12 py-16">
        
        {/* Teacher Model - Large Blue Circle */}
        <div className="relative">
          <div className="teacher-circle w-20 h-20 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"></div>
          <div className="text-center mt-3 text-xs text-gray-400">Teacher</div>
        </div>

                {/* Flow Lines Container */}
        <div className="flex-1 relative mx-12 h-16">
          {/* SVG for seamless merging lines - extends much further */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="soft-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34 197 94)" />
                <stop offset="100%" stopColor="rgb(34 197 94)" />
              </linearGradient>
              <linearGradient id="hard-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(249 115 22)" />
                <stop offset="100%" stopColor="rgb(249 115 22)" />
              </linearGradient>
              <linearGradient id="merged-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34 197 94)" />
                <stop offset="30%" stopColor="rgb(234 179 8)" />
                <stop offset="70%" stopColor="rgb(249 115 22)" />
                <stop offset="100%" stopColor="rgb(249 115 22)" />
              </linearGradient>
            </defs>
            
            {/* Soft Targets Line - longer, starts further left, ends further right */}
            <path
              className="soft-path"
              d="M 15 20 Q 65 20 95 32"
              stroke="url(#soft-gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="120"
              strokeDashoffset="120"
            />
            
            {/* Hard Targets Line - longer, starts further left, ends further right */}
            <path
              className="hard-path"
              d="M 15 44 Q 65 44 95 32"
              stroke="url(#hard-gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="120"
              strokeDashoffset="120"
            />
            
            {/* Merged Line - final combined segment */}
            <path
              className="merged-path"
              d="M 95 32 L 100 32"
              stroke="url(#merged-gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="5"
              strokeDashoffset="5"
            />
              </svg>
          
          {/* Labels - animated to appear with lines */}
          <div className="absolute left-0 top-2 text-xs text-green-400 soft-label opacity-0">Soft Targets</div>
          <div className="absolute left-0 bottom-2 text-xs text-orange-400 hard-label opacity-0">Hard Targets</div>
        </div>

        {/* Student Model - Medium Green Circle */}
        <div className="relative mr-12">
          <div className="student-circle w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-green-500/30 opacity-60"></div>
          <div className="text-center mt-3 text-xs text-gray-400">Student</div>
          <div className="text-center mt-1 text-xs text-blue-400">FP32</div>
        </div>

        {/* Arrow to Quantized */}
        <div className="relative flex items-center mr-4">
          <div className="quantization-arrow opacity-0">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-400">
              <path 
                d="M5 12h14m-6-6l6 6-6 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Quantized Model - Smaller Purple Circle */}
        <div className="relative">
          <div className="quantized-circle w-10 h-10 bg-purple-500 rounded-full shadow-lg shadow-purple-500/30 opacity-0 mx-auto"></div>
          <div className="quantized-text text-center mt-3 text-xs text-gray-400 opacity-0">Quantized</div>
          <div className="quantized-label text-center mt-1 text-xs text-purple-400 opacity-0">INT8</div>
        </div>
      </div>

      <style jsx>{`
        /* Teacher Circle - Gentle Pulsing */
        .teacher-circle {
          animation: teacher-pulse 6s ease-in-out forwards;
        }

        /* Flow Paths */
        .soft-path {
          animation: soft-draw 6s ease-in-out forwards;
        }
        
        .hard-path {
          animation: hard-draw 6s ease-in-out forwards;
        }
        
        .merged-path {
          animation: merged-draw 6s ease-in-out forwards;
        }

        /* Labels */
        .soft-label {
          animation: soft-label-appear 6s ease-in-out forwards;
        }
        
        .hard-label {
          animation: hard-label-appear 6s ease-in-out forwards;
        }

        /* Student Circle */
        .student-circle {
          animation: student-learning 6s ease-in-out forwards;
        }

        /* Quantized Circle */
        .quantized-circle {
          animation: quantized-appear 6s ease-in-out forwards;
        }

        /* Arrow */
        .quantization-arrow {
          animation: arrow-appear 6s ease-in-out forwards;
        }

        /* Labels */
        .quantized-text {
          animation: quantized-text-appear 6s ease-in-out forwards;
        }
        
        .quantized-label {
          animation: quantized-label-appear 6s ease-in-out forwards;
        }

        /* Keyframes */
        @keyframes teacher-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes soft-draw {
          0%, 20% { stroke-dashoffset: 120; opacity: 0; }
          35%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes hard-draw {
          0%, 25% { stroke-dashoffset: 120; opacity: 0; }
          40%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes merged-draw {
          0%, 55% { stroke-dashoffset: 5; opacity: 0; }
          60%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes soft-label-appear {
          0%, 20% { opacity: 0; transform: translateX(-10px); }
          25%, 100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes hard-label-appear {
          0%, 25% { opacity: 0; transform: translateX(-10px); }
          30%, 100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes student-learning {
          0%, 50% { opacity: 0.6; transform: scale(1); }
          60% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 20px rgb(34 197 94); }
          70%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 20px rgb(34 197 94); }
        }

        @keyframes quantized-appear {
          0%, 75% { opacity: 0; transform: scale(0.8); }
          85% { opacity: 1; transform: scale(1.1); }
          95%, 100% { opacity: 1; transform: scale(1); }
        }

        @keyframes arrow-appear {
          0%, 70% { opacity: 0; transform: translateX(-10px); }
          80%, 100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes quantized-text-appear {
          0%, 75% { opacity: 0; transform: translateY(5px); }
          85%, 100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes quantized-label-appear {
          0%, 75% { opacity: 0; transform: translateY(5px); }
          85%, 100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

// Results Cycling Chart (3 vertical bars with normalized heights)
const ResultsCyclingChart = () => {
  const models = [
    { title: 'Teacher (ResNet152)', acc: 96.6, size: 240, speed: 1 },
    { title: 'Distilled Student (MobileNetV2)', acc: 94.0, size: 9.0, speed: 3 },
    { title: 'Quantized Student (INT8)', acc: 93.5, size: 2.96, speed: 5 },
  ] as const;

  const MAX_ACC = 96.6;
  const MAX_SPEED = 5;
  const MAX_SIZE = 240; // MB
  const MIN_SIZE = 2.96; // MB
  const MAX_EFFICIENCY = MAX_SIZE / MIN_SIZE; // for inverted size normalization

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % models.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const current = models[index];
  const accNorm = current.acc / MAX_ACC;
  // Size normalized as raw percent of global maximum size (bigger size -> taller bar)
  const sizeNorm = current.size / MAX_SIZE;
  const speedNorm = current.speed / MAX_SPEED;

  const hAcc = `max(2px, ${accNorm * 100}%)`;
  const hSize = `max(2px, ${sizeNorm * 100}%)`;
  const hSpeed = `max(2px, ${speedNorm * 100}%)`;

  const barCommon = 'relative w-full mx-3 rounded-md bg-gradient-to-t shadow-[0_0_12px_rgba(255,255,255,0.06)] transition-all duration-700 ease-in-out';

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
      {/* Title */}
      <div className="h-7 mb-6 text-center">
        <div key={current.title} className="text-white text-sm md:text-base font-medium transition-opacity duration-500 opacity-100">
          {current.title}
        </div>
      </div>

      {/* Chart area */}
      <div className="relative h-64 rounded-lg bg-gray-800/40 border border-gray-700/60 overflow-hidden px-6 pt-6">
        {/* Top tick to imply shared scale */}
        <div className="absolute top-2 left-3 right-3 h-px bg-white/10" />

        <div className="absolute inset-x-4 bottom-4 top-8 flex items-end">
          {/* Accuracy */}
          <div className="flex flex-col items-center justify-end h-full" style={{ width: '33.333%' }}>
            <div
              className={`${barCommon} from-emerald-500/70 to-emerald-400/70`}
              style={{ height: hAcc }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-emerald-300" key={`acc-${current.acc}`}>
                {current.acc}%
              </div>
            </div>
            <div className="mt-2 text-[10px] md:text-xs text-gray-300">Accuracy</div>
          </div>

          {/* Size (inverted to show efficiency) */}
          <div className="flex flex-col items-center justify-end h-full" style={{ width: '33.333%' }}>
            <div
              className={`${barCommon} from-violet-500/70 to-violet-400/70`}
              style={{ height: hSize }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-violet-300" key={`size-${current.size}`}>
                {current.size} MB
              </div>
            </div>
            <div className="mt-2 text-[10px] md:text-xs text-gray-300">Model Size</div>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center justify-end h-full" style={{ width: '33.333%' }}>
            <div
              className={`${barCommon} from-sky-500/70 to-sky-400/70`}
              style={{ height: hSpeed }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-sky-300" key={`speed-${current.speed}`}>
                {current.speed}×
              </div>
            </div>
            <div className="mt-2 text-[10px] md:text-xs text-gray-300">Speed</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Gentle micro-pulse so the chart feels alive */
        @keyframes microPulse { 0%,100% { filter: saturate(1); } 50% { filter: saturate(1.04); } }
        .micro { animation: microPulse 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

// Results Animation Component - Single Morphing Bar Chart
const ResultsAnimation = () => {
  return (
    <div className="relative h-64 bg-gray-900/30 rounded-2xl p-8 border border-gray-800">
      <div className="flex flex-col items-center justify-center h-full">
        
        {/* Title */}
        <div className="mb-8 h-6">
          <h3 className="model-title text-lg font-medium text-center text-white">
            Teacher (ResNet152)
          </h3>
        </div>

        {/* Single Horizontal Bar Container */}
        <div className="relative w-full max-w-lg h-16 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          
          {/* Accuracy Segment */}
          <div className="accuracy-segment absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-400">
            <div className="absolute inset-0 bg-green-400/20 shadow-inner"></div>
            <div className="accuracy-value absolute inset-0 flex items-center justify-center text-sm font-medium text-white drop-shadow-sm">
              96.6%
            </div>
          </div>

          {/* Size Segment */}
          <div className="size-segment absolute top-0 h-full bg-gradient-to-r from-red-500 to-red-400">
            <div className="absolute inset-0 bg-red-400/20 shadow-inner"></div>
            <div className="size-value absolute inset-0 flex items-center justify-center text-sm font-medium text-white drop-shadow-sm">
              240MB
            </div>
          </div>

          {/* Speed Segment */}
          <div className="speed-segment absolute top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400">
            <div className="absolute inset-0 bg-blue-400/20 shadow-inner"></div>
            <div className="speed-value absolute inset-0 flex items-center justify-center text-sm font-medium text-white drop-shadow-sm">
              1×
            </div>
          </div>
        </div>

        {/* Segment Labels */}
        <div className="relative w-full max-w-lg mt-4">
          <div className="flex">
            <div className="accuracy-label-container text-xs text-gray-400">
              <span className="block text-center">Accuracy</span>
            </div>
            <div className="size-label-container text-xs text-gray-400">
              <span className="block text-center">Size</span>
            </div>
            <div className="speed-label-container text-xs text-gray-400">
              <span className="block text-center">Speed</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Title Animation with Text Content */
        .model-title::before {
          content: "Teacher (ResNet152)";
          animation: title-content 15s ease-in-out infinite;
        }

        /* Segment Size and Position Animations */
        .accuracy-segment {
          width: 60%;
          animation: accuracy-segment-morph 15s ease-in-out infinite;
        }
        
        .size-segment {
          left: 60%;
          width: 35%;
          animation: size-segment-morph 15s ease-in-out infinite;
        }
        
        .speed-segment {
          left: 95%;
          width: 5%;
          animation: speed-segment-morph 15s ease-in-out infinite;
        }

        /* Value Text Content Animations */
        .accuracy-value::before {
          content: "96.6%";
          animation: accuracy-text-content 15s ease-in-out infinite;
        }
        
        .size-value::before {
          content: "240MB";
          animation: size-text-content 15s ease-in-out infinite;
        }
        
        .speed-value::before {
          content: "1×";
          animation: speed-text-content 15s ease-in-out infinite;
        }

        /* Label Container Widths */
        .accuracy-label-container {
          width: 60%;
          animation: accuracy-label-width 15s ease-in-out infinite;
        }
        
        .size-label-container {
          width: 35%;
          animation: size-label-width 15s ease-in-out infinite;
        }
        
        .speed-label-container {
          width: 5%;
          animation: speed-label-width 15s ease-in-out infinite;
        }

        /* Keyframe Animations */
        @keyframes title-content {
          0%, 30% { content: "Teacher (ResNet152)"; }
          35%, 65% { content: "Distilled Student (MobileNetV2)"; }
          70%, 95% { content: "Quantized Student (MobileNetV2, INT8)"; }
          100% { content: "Teacher (ResNet152)"; }
        }

        @keyframes accuracy-segment-morph {
          0%, 30% { width: 60%; }
          35%, 65% { width: 58%; }
          70%, 95% { width: 57%; }
          100% { width: 60%; }
        }

        @keyframes size-segment-morph {
          0%, 30% { left: 60%; width: 35%; }
          35%, 65% { left: 58%; width: 27%; }
          70%, 95% { left: 57%; width: 23%; }
          100% { left: 60%; width: 35%; }
        }

        @keyframes speed-segment-morph {
          0%, 30% { left: 95%; width: 5%; }
          35%, 65% { left: 85%; width: 15%; }
          70%, 95% { left: 80%; width: 20%; }
          100% { left: 95%; width: 5%; }
        }

        @keyframes accuracy-text-content {
          0%, 30% { content: "96.6%"; }
          35%, 65% { content: "94%"; }
          70%, 95% { content: "93.5%"; }
          100% { content: "96.6%"; }
        }

        @keyframes size-text-content {
          0%, 30% { content: "240MB"; }
          35%, 65% { content: "9MB"; }
          70%, 95% { content: "2.96MB"; }
          100% { content: "240MB"; }
        }

        @keyframes speed-text-content {
          0%, 30% { content: "1×"; }
          35%, 65% { content: "3×"; }
          70%, 95% { content: "5×"; }
          100% { content: "1×"; }
        }

        @keyframes accuracy-label-width {
          0%, 30% { width: 60%; }
          35%, 65% { width: 58%; }
          70%, 95% { width: 57%; }
          100% { width: 60%; }
        }

        @keyframes size-label-width {
          0%, 30% { width: 35%; }
          35%, 65% { width: 27%; }
          70%, 95% { width: 23%; }
          100% { width: 35%; }
        }

        @keyframes speed-label-width {
          0%, 30% { width: 5%; }
          35%, 65% { width: 15%; }
          70%, 95% { width: 20%; }
          100% { width: 5%; }
        }

        /* Subtle glow effects */
        .accuracy-segment {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
        }
        
        .size-segment {
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
        }
        
        .speed-segment {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  )
}

export default function DistillKit() {
  const [showSubheading, setShowSubheading] = useState(true)

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/distillkit-banner.jpg"
            alt="DistillKit - Knowledge Distillation Framework"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 animate-fade-in">
            DistillKit
          </h1>
          <div className={`transition-opacity duration-1000 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
              PyTorch toolkit for model optimization.
            </p>
          </div>
          </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-black px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
                <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight whitespace-nowrap">
                Overview
              </h2>
                </div>

            {/* Right Column - Content */}
                <div>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  In experiments, DistillKit retained over 96% of the teacher model's accuracy while reducing model size by nearly 99%, enabling high-performance deployment on even the most constrained edge devices.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Concept Animation */}
          <div className="mt-16">
            <CoreConceptAnimation />
          </div>
                </div>
      </section>

      {/* Core Approach Section */}
      <section className="bg-gray-950 px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
                <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight whitespace-nowrap">
                Approach
              </h2>
                </div>

            {/* Right Column - Content */}
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Knowledge Distillation</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    DistillKit implements Hinton's temperature-scaled distillation, combining soft targets from the teacher with the original hard labels. In the default configuration, a ResNet152 teacher trained for 50 epochs transfers its learned representations to a MobileNetV2 student trained for 20 epochs. The distillation process uses a temperature of 4.0 and a blending factor (α) of 0.7 to balance soft and hard losses.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Quantization</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The pipeline supports both PTQ and QAT. Models are quantized to INT8 precision, with fused layers and batch normalization folding to minimize accuracy loss. QAT allows the model to learn in its quantized state, improving resilience to precision reduction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Optimization</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Deployment performance is enhanced through layer fusion, batch normalization folding, and dynamic quantization for RNN layers. Optional advanced augmentations such as CutMix and MixUp are available to improve generalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="bg-black px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight whitespace-nowrap">
                Architecture
              </h2>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="grid grid-cols-1 gap-8">
              <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Teacher Model</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    ResNet152 with ImageNet pretraining, adapted for CIFAR-10's 32×32 input. Provides rich feature representations for distillation.
                </p>
              </div>
              
              <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Student Model</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    MobileNetV2 optimized for CIFAR-10, with ~2.3M parameters compared to the teacher's ~60M. Uses depthwise separable convolutions for efficiency.
                </p>
              </div>
              
              <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Quantizable Student</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    MobileNetV2 modified for quantization, with fused layers and QAT-ready modules. Supports both static and quantization-aware workflows.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Training produces multiple artifacts, including the teacher model, distilled student, baseline student, and both QAT and static quantized versions. Evaluation metrics, confusion matrices, and latency/throughput profiles are logged for analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-950 px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight whitespace-nowrap">
                Results
              </h2>
              <div className="mt-12">
                <ResultsCyclingChart />
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  {/* Results Summary */}
 
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Performance Summary</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><strong>Teacher (ResNet152):</strong> ~96.6% accuracy, ~240MB size</p>
                    <p><strong>Distilled Student (MobileNetV2):</strong> ~94% accuracy, ~9MB size — 27× smaller, 3× faster</p>
                    <p><strong>QAT Quantized Student:</strong> ~93.5% accuracy, ~2.96MB size — 81× smaller, 5× faster</p>
                    <p><strong>Baseline Student (no KD):</strong> ~91% accuracy, ~9MB size — 27× smaller, 3× faster</p>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mt-4">
                    These results demonstrate that knowledge distillation combined with quantization can retain high accuracy while achieving massive efficiency gains, enabling real-time inference on constrained hardware.
                  </p>
                </div>
                
              <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Potential Applications</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    While CIFAR-10 serves as the benchmark task, the methods extend to other domains — including real-world edge AI deployments like wildlife detection, mobile NLP, and embedded vision systems.
                  </p>
              </div>
              
              <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-3">Future Directions</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    DistillKit is built for extensibility. The modular structure makes it easy to experiment with new teacher/student architectures, alternative loss functions, and custom quantization schemes. Future work includes applying the pipeline to specialized datasets for low-power edge deployments, such as wildfire detection in remote sensor networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Button Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center">
            <a 
              href="https://github.com/bjhaj/DistillKit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View the GitHub
            </a>
        </div>
      </div>
      </section>
    </div>
  )
}