import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 bg-bd-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-bd-text">It's time for better charts</h2>
          <Link href="/signup" className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Sign up
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-xl font-extralight mb-6 text-bd-text">Built on Strong Foundations</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center bg-bd-black border border-bd-border rounded-full px-4 py-1">
              <div className="flex items-center gap-1">
                <span className="text-xs text-bd-text-secondary">AICPA</span>
                <span className="text-xs text-bd-text-secondary">SOC 2</span>
                <span className="text-xs text-bd-text-secondary">TYPE 2</span>
              </div>
            </div>
            <div className="inline-flex items-center bg-bd-black border border-bd-border rounded-full px-4 py-1">
              <span className="text-xs text-bd-text-secondary">CLICKHOUSE</span>
            </div>
            <div className="inline-flex items-center bg-bd-black border border-bd-border rounded-full px-4 py-1">
              <span className="text-xs text-bd-text-secondary">OPENAI</span>
            </div>
            <div className="inline-flex items-center bg-bd-black border border-bd-border rounded-full px-4 py-1">
              <span className="text-xs text-bd-text-secondary">RADIX</span>
            </div>
            <div className="inline-flex items-center bg-bd-black border border-bd-border rounded-full px-4 py-1">
              <span className="text-xs text-bd-text-secondary">REMIX</span>
            </div>
          </div>
          
          <h3 className="text-center text-xl font-extralight mb-6 text-bd-text">Backed by the best</h3>
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <div className="text-2xl font-bold text-bd-text opacity-80">matrix</div>
            <div className="text-2xl font-bold text-bd-pink">Form</div>
            <div className="text-2xl font-bold text-bd-text opacity-80">worklife.</div>
            <div className="text-2xl font-bold text-amber-500">Y Combinator</div>
          </div>
        </div>
        
        <div className="border-t border-bd-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-sm text-bd-text-tertiary mb-4 md:mb-0">© 2025 Basedash Inc.</div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">X</Link>
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">LinkedIn</Link>
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">Slack Community</Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">Privacy Policy</Link>
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">Terms of Service</Link>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">Log in</Link>
              <Link href="#" className="text-sm text-bd-text-tertiary hover:text-bd-text-secondary">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}