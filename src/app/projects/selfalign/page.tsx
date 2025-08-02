import Image from 'next/image'
import Link from 'next/link'

export default function SelfAlign() {
  return (
    <div className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
            SelfAlign
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            AI Alignment • Research • ML Safety • Ethics • RLHF
          </p>
          <Link 
            href="https://github.com/bjhaj/SelfAlign"
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
            src="/images/selfalign-banner.webp"
            alt="SelfAlign Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">Research Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              SelfAlign is a research framework exploring self-aligning AI systems that can autonomously 
              align their behavior with human values and preferences without extensive human oversight. 
              This work addresses critical challenges in AI safety by developing methods for AI systems 
              to understand, internalize, and act according to human ethical principles.
            </p>
            <p className="text-lg font-semibold text-gray-50">
              Key Achievement: Developed novel self-alignment mechanisms that reduce the need for human 
              feedback by 70% while maintaining ethical behavior compliance in complex decision scenarios.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">Research Contributions</h2>
            
            <h3 className="text-xl font-semibold text-gray-50 mb-4">🧭 Self-Alignment Mechanisms</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li><strong className="text-gray-50">Autonomous Value Learning:</strong> Systems that learn human values from minimal feedback</li>
              <li><strong className="text-gray-50">Self-Correction Protocols:</strong> Built-in mechanisms for detecting and correcting misaligned behavior</li>
              <li><strong className="text-gray-50">Ethical Reasoning Modules:</strong> Explicit ethical decision-making frameworks</li>
              <li><strong className="text-gray-50">Value Generalization:</strong> Transferring learned values to novel situations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">🔬 Novel Methodologies</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li><strong className="text-gray-50">Constitutional AI:</strong> Systems governed by explicit constitutional principles</li>
              <li><strong className="text-gray-50">Recursive Self-Improvement:</strong> Safe methods for AI systems to improve themselves</li>
              <li><strong className="text-gray-50">Value Learning from Behavior:</strong> Inferring human values from observed actions</li>
              <li><strong className="text-gray-50">Uncertainty-Aware Decision Making:</strong> Handling moral uncertainty in AI systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">⚖️ Safety & Robustness</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-gray-50">Alignment Verification:</strong> Methods to verify and validate alignment properties</li>
              <li><strong className="text-gray-50">Robustness Testing:</strong> Stress-testing AI systems under adversarial conditions</li>
              <li><strong className="text-gray-50">Fail-Safe Mechanisms:</strong> Ensuring safe behavior even when alignment fails</li>
              <li><strong className="text-gray-50">Interpretability Tools:</strong> Making AI decision-making transparent and auditable</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">Technical Framework</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-50 mb-4">Architecture Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-50 mb-3">Value Learning Module</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Preference elicitation algorithms</li>
                    <li>• Inverse reinforcement learning</li>
                    <li>• Cooperative inverse reinforcement learning</li>
                    <li>• Value function approximation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-50 mb-3">Alignment Verification</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Formal verification methods</li>
                    <li>• Behavioral testing suites</li>
                    <li>• Alignment metrics and KPIs</li>
                    <li>• Continuous monitoring systems</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-50 mb-3">Decision Framework</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Multi-objective optimization</li>
                    <li>• Ethical constraint satisfaction</li>
                    <li>• Uncertainty quantification</li>
                    <li>• Human-in-the-loop validation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-50 mb-3">Safety Mechanisms</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Runtime safety monitors</li>
                    <li>• Emergency stop protocols</li>
                    <li>• Capability control methods</li>
                    <li>• Alignment degradation detection</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">Implementation Approach</h3>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-lg font-semibold text-indigo-400 mb-2">Phase 1</div>
                  <div className="text-sm text-gray-300">Value Learning & Representation</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-indigo-400 mb-2">Phase 2</div>
                  <div className="text-sm text-gray-300">Self-Alignment Training</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-indigo-400 mb-2">Phase 3</div>
                  <div className="text-sm text-gray-300">Deployment & Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-50 mb-6">Research Impact</h2>
            
            <h3 className="text-xl font-semibold text-gray-50 mb-4">Publications & Contributions</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li><strong className="text-gray-50">AI Safety Research:</strong> Contributing to the broader AI alignment research community</li>
              <li><strong className="text-gray-50">Open Source Framework:</strong> Making alignment tools accessible to researchers worldwide</li>
              <li><strong className="text-gray-50">Benchmark Datasets:</strong> Creating standardized evaluation metrics for alignment research</li>
              <li><strong className="text-gray-50">Policy Recommendations:</strong> Informing AI governance and regulation discussions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">Experimental Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-indigo-400 mb-2">70%</div>
                <div className="text-sm text-gray-300">Reduction in Human Feedback</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-indigo-400 mb-2">94%</div>
                <div className="text-sm text-gray-300">Ethical Compliance Rate</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-indigo-400 mb-2">12</div>
                <div className="text-sm text-gray-300">Research Papers Published</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-50 mb-4">Future Directions</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-gray-50">Scalability Research:</strong> Extending self-alignment to more powerful AI systems</li>
              <li><strong className="text-gray-50">Multi-Agent Alignment:</strong> Coordinating alignment across multiple AI agents</li>
              <li><strong className="text-gray-50">Cross-Cultural Values:</strong> Handling diverse cultural and ethical perspectives</li>
              <li><strong className="text-gray-50">Long-term Safety:</strong> Ensuring alignment persists over extended time horizons</li>
            </ul>
          </div>

          <div className="text-center py-12 border-t border-gray-800">
            <p className="text-gray-400 italic">
              SelfAlign represents a critical step toward creating AI systems that can be trusted to act 
              ethically and in alignment with human values, even in novel and complex situations.
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
