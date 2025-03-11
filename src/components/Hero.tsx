import React from 'react';
import Link from 'next/link';
import DashboardBackground from './DashboardBackground';

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen bg-black">
      {/* Background/Dashboard Elements */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <DashboardBackground />
      </div>
      
      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-6 py-32 flex flex-col items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            The AI-native Business Intelligence Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Generate beautiful charts and dashboards to understand your 
            customers and business using natural language.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/signup" className="bg-white hover:bg-gray-100 text-black px-5 py-3 rounded-md font-medium transition-colors">
              Sign up
            </Link>
            <Link href="#demo" className="bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-md font-medium border border-gray-800 transition-colors">
              Request a demo
            </Link>
          </div>
        </div>
        
        {/* Product Hunt Badge */}
        <div className="mt-auto mb-10">
          <div className="bg-gray-900 rounded-lg p-3 inline-flex items-center gap-3">
            <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-black text-xs">🏅</div>
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-400">PRODUCT HUNT</div>
              <div className="text-sm font-medium text-white">#3 Product of the Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}