import React from 'react';

export default function Pricing() {
  return (
    <section className="py-20 bg-bd-black" id="pricing">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-xl text-bd-text-secondary">Pricing</h3>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-bd-text">14 day free trial</h2>
        
        <div className="text-5xl md:text-6xl font-bold mb-6 text-bd-text">$300/mo</div>
        
        <p className="text-xl text-bd-text-secondary mb-12">
          Unlimited teammates, charts, chats, and dashboards.
        </p>
        
        <div className="max-w-sm mx-auto mb-8">
          <div className="bg-gradient-to-r from-bd-yellow to-amber-500 rounded-lg p-0.5">
            <div className="bg-bd-black rounded-lg p-16 flex items-center justify-center">
              <div className="text-bd-yellow text-xl font-semibold">Basedash Beta</div>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-bd-text-tertiary mt-6 max-w-md mx-auto">
          *Basedash Warehouses with above 1m records may require custom pricing. 
          There is no record limit for external warehouses or direct DB connections.
        </p>
        
        <div className="mt-8">
          <a 
            href="/signup" 
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
}