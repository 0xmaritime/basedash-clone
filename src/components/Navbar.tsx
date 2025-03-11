import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-transparent" />
      <div className="relative container mx-auto px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4" height="4" fill="white" />
                  <rect x="4" width="4" height="4" fill="white" />
                  <rect x="8" width="4" height="4" fill="white" />
                  <rect x="12" width="4" height="4" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 28 0)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 32 0)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 32 4)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 32 8)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 32 12)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 4 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 8 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 12 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 16 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 20 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 24 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 28 28)" fill="white" />
                  <rect width="4" height="4" transform="matrix(-1 0 0 1 32 28)" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-medium text-bd-text">Basedash</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-5">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">
              Log in <span className="text-xs ml-0.5">&#60;</span>
            </Link>
            <Link href="/signup" className="text-sm bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}