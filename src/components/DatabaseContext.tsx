import React from 'react';

export default function DatabaseContext() {
  return (
    <section className="py-20 bg-black" id="context">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-normal text-center mb-4 text-white">An AI that knows your DB</h2>
        <p className="text-center text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Basedash understands your data so you don't have to. Even the
          most complicated query is just a chat away.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-black border border-gray-800 rounded-lg p-12">
            {/* Database schema visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Orders Table */}
              <div className="bg-black border border-gray-800 p-5 rounded-lg">
                <div className="mb-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-400">orders</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-400">order_id</span>
                    <span className="text-gray-500">int</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">customer_id</span>
                    <span className="text-gray-500">int</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">order_status</span>
                    <span className="text-gray-500">tinyint</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">order_date</span>
                    <span className="text-gray-500">date</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">shipped_date</span>
                    <span className="text-gray-500">date</span>
                  </div>
                </div>
              </div>
              
              {/* Customers Table */}
              <div className="bg-black border border-gray-800 p-5 rounded-lg">
                <div className="mb-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-400">customers</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-400">customer_id</span>
                    <span className="text-gray-500">int</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">first_name</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">last_name</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">email</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">street</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">city</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                </div>
              </div>
              
              {/* Categories Table */}
              <div className="bg-black border border-gray-800 p-5 rounded-lg">
                <div className="mb-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-gray-400">categories</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-400">category_id</span>
                    <span className="text-gray-500">int</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">category_name</span>
                    <span className="text-gray-500">varchar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">description</span>
                    <span className="text-gray-500">text</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Query input field */}
            <div className="mt-8 bg-purple-900/20 p-3 rounded-lg flex items-center border border-purple-500/20">
              <span className="text-purple-400 mr-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <p className="text-white">Top selling products by brand</p>
            </div>
          </div>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex rounded-md overflow-hidden">
            <button className="px-8 py-3 text-white bg-gray-900 border-b-2 border-white">Natural Language</button>
            <button className="px-8 py-3 text-gray-400 hover:text-white transition-colors">Schema Aware</button>
          </div>
        </div>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-6">
          No need to know the exact table or column name. Just ask, and
          Basedash will find the right data and chart for your request.
        </p>
      </div>
    </section>
  );
}