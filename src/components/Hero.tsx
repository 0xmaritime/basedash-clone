import React from 'react';
import Link from 'next/link';
import DashboardBackground from './DashboardBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <div className="absolute inset-0 opacity-40">
        <DashboardBackground />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 min-h-screen flex flex-col">
        <div className="mt-auto mb-24 text-center">
          <h1 className="text-6xl lg:text-7xl font-extralight text-white leading-[1.15] tracking-normal">
            The AI-native<br />
            Business Intelligence<br />
            Platform
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8 mb-10 font-extralight">
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
      </div>
    </section>
  );
}