'use client';

import { Code, Brain, Palette, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Next.js Web Development',
      description: 'High-performance, SEO-optimized landing pages and full-stack web applications tailored for modern businesses.',
      icon: Code,
      features: ['React / Next.js 15', 'Tailwind CSS Layouts', 'Vercel Deployment'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
    },
    {
      id: 2,
      title: 'AI Content & Automation',
      description: 'Intelligent workflow automation, custom AI script generation frameworks, and faceless digital production systems.',
      icon: Brain,
      features: ['API Tool Integration', 'Content Production Pipelines', 'System Automation'],
      gradient: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/10',
    },
    {
      id: 3,
      title: 'Canva Brand Identity',
      description: 'Comprehensive design identity packages, social media kits, professional pitch decks, and digital brand materials.',
      icon: Palette,
      features: ['Visual Brand Assets', 'Pitch Decks & Presentations', 'Marketing Post Design'],
      gradient: 'from-rose-500 to-orange-500',
      bgGlow: 'bg-rose-500/10',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium tracking-wide">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-purple-200 bg-clip-text text-transparent">
              Services We Provide
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Service card glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGlow} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
              
              {/* Icon Container */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:scale-105 transition-transform">
              View All Services
            </button>
            <span className="text-gray-400 text-sm px-2">Custom solutions available</span>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}