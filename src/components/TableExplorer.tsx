import React from 'react';

export default function TableExplorer() {
  return (
    <section className="py-20 bg-bd-black">
      <div className="container mx-auto px-6">
        <div className="text-sm text-bd-purple mb-2">Table explorer</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bd-text">Explore your database like a spreadsheet</h2>
        <p className="text-xl text-bd-text-secondary max-w-2xl mb-12">
          Basedash empowers anyone on the team to explore your database with the familiarity of a spreadsheet.
        </p>
        
        <div className="max-w-4xl mx-auto bg-bd-card/60 border border-bd-border/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-sm text-bd-text-secondary">
              <span>magic-beans</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <div className="bg-bd-card-hover p-2 rounded-md mb-4 border border-bd-border/30">
                <input 
                  type="text" 
                  placeholder="Search for tables" 
                  className="w-full bg-transparent text-bd-text text-sm focus:outline-none"
                />
              </div>
              
              <div className="space-y-2">
                {['Users', 'Workspace', 'Transaction', 'Subscription', 'Proposal', 'Signature', 'Invoice', 'InvoiceItems', 'Account', 'BankConnection', 'Balance'].map((table) => (
                  <div key={table} className={`flex items-center gap-2 p-2 rounded-md hover:bg-bd-card-hover text-bd-text transition-colors ${table === 'Users' ? 'bg-bd-card-hover' : ''}`}>
                    <svg className="w-4 h-4 text-bd-text-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-sm">{table}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-bd-card-hover border border-bd-border/30 text-sm text-bd-text-secondary">
                    <svg className="w-4 h-4 text-bd-text-tertiary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>cm3n956pc0000d34l6a...</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}