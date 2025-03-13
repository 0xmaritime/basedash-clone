import React, { useState } from 'react';

export default function ChatToChart() {
  const [chatStep, setChatStep] = useState(1);
  
  const nextStep = () => {
    setChatStep(prev => Math.min(prev + 1, 3));
  };

  return (
    <section className="py-20 bg-bd-black" id="chat-to-chart">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extralight text-center mb-4 text-bd-text">Chat → Chart</h2>
        <p className="text-center text-xl text-bd-text-secondary max-w-2xl mx-auto mb-12 font-extralight">
          With Basedash, everyone can create rich data visualizations.
          Just chat, and let the AI create the right chart, with the right data in seconds.
        </p>
        
        <div className="bg-bd-card/60 border border-bd-border/50 rounded-lg max-w-3xl mx-auto p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-bd-card flex items-center justify-center flex-shrink-0 mt-1 border border-bd-border">
                <span className="text-xs">🤖</span>
              </div>
              <div>
                <p className="text-bd-text">What kind of chart would you like to create?</p>
              </div>
            </div>
            
            {/* User message - clickable to proceed to next step */}
            <div 
              className="flex items-start gap-3 cursor-pointer group"
              onClick={nextStep}
            >
              <div className="w-6 h-6 rounded-full bg-bd-card flex items-center justify-center flex-shrink-0 mt-1 border border-bd-border">
                <span className="text-xs">👤</span>
              </div>
              <div className="bg-bd-card p-3 rounded-lg inline-block group-hover:bg-bd-card-hover transition-colors">
                <p className="text-bd-text">Show me the top users over the last month</p>
              </div>
            </div>
            
            {/* Only show the AI response if we're at step 2 or higher */}
            {chatStep >= 2 && (
              <div className="flex items-start gap-3 animate-fadeIn">
                <div className="w-6 h-6 rounded-full bg-bd-card flex items-center justify-center flex-shrink-0 mt-1 border border-bd-border">
                  <span className="text-xs">🤖</span>
                </div>
                <div>
                  <p className="text-bd-text">There's a number of different ways to calculate a top user. Users can be broken down by session count, session duration, or by the number of charts or dashboard that they have created.</p>
                  <p className="text-bd-text mt-2">How do you want to calculate the top users?</p>
                </div>
              </div>
            )}
            
            {/* Only show the user's second response if we're at step 3 */}
            {chatStep >= 3 && (
              <div className="flex items-start gap-3 animate-fadeIn">
                <div className="w-6 h-6 rounded-full bg-bd-card flex items-center justify-center flex-shrink-0 mt-1 border border-bd-border">
                  <span className="text-xs">👤</span>
                </div>
                <div className="bg-bd-card p-3 rounded-lg inline-block">
                  <p className="text-bd-text">By session count</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-xs bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-1.5 text-bd-text-secondary">
            Low-technical
          </button>
        </div>
      </div>
    </section>
  );
}