'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero1() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0A0F]">
      {/* Soft Purple/Blue Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0B0A0F] to-blue-900/20" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[100px] animate-pulse delay-700" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-700" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="text-center">
          
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="ASYNC Solutions Logo" 
              className="h-24 md:h-32 w-auto animate-fade-in transition-transform hover:scale-110 duration-500" 
            />
          </div>

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 mb-6 md:mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent text-sm font-semibold tracking-wide">
              AI-Driven Development
            </span>
          </div>

          {/* Bold Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.15]">
            <span className="bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-transparent">
              ASYNC
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Transform your business with cutting-edge AI solutions. Our intelligent 
            platforms deliver personalized experiences, automate workflows, and unlock 
            insights that drive real growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0B0A0F] overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get Started</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/15 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0B0A0F]">
              <span>Our Work</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10">
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-6">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60">
              {['TechInnovate', 'FutureLabs', 'AICore', 'DigitalDynamics'].map((company) => (
                <div key={company} className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0A0F] to-transparent pointer-events-none" />
    </div>
  );
}