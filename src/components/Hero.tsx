import React from 'react';
import Link from 'next/link';
import DashboardBackground from './DashboardBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Dashboard Background with proper opacity */}
      <div className="absolute inset-0 opacity-40">
        <DashboardBackground />
      </div>
      
      {/* Main Content - positioned precisely like the original */}
      <div className="container relative z-10 mx-auto px-6 min-h-screen flex flex-col">
        {/* The content is positioned correctly in the vertical space */}
        <div className="mt-auto mb-24 text-center">
          <h1 className="text-6xl lg:text-7xl font-medium text-white leading-[1.15] tracking-normal">
            The AI-native<br />
            Business Intelligence<br />
            Platform
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8 mb-10">
            Generate beautiful charts and dashboards to understand your 
            customers and business using natural language.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/signup" 
              className="bg-white hover:bg-gray-100 text-black px-5 py-2.5 rounded font-medium transition-colors">
              Sign up
            </Link>
            <Link href="#demo" 
              className="bg-transparent hover:bg-gray-900 text-white px-5 py-2.5 rounded font-medium border border-gray-800 transition-colors">
              Request a demo
            </Link>
          </div>
        </div>
        
        {/* Product Hunt Badge - positioned at bottom right like the original */}
        <div className="absolute bottom-8 right-8 md:right-auto md:left-1/2 md:-translate-x-1/2">
          <div className="bg-gray-900/90 rounded-lg flex items-center overflow-hidden">
            <div className="px-3 py-2">
              <div className="text-xs uppercase tracking-wider text-gray-400">PRODUCT HUNT</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-black text-xs">🏅</div>
              <div className="text-sm font-medium text-white">#3 Product of the Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}