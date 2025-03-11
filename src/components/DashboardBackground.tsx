import React, { useState, useEffect } from 'react';

export default function DashboardBackground() {
  // Track hovered element
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  
  // Line chart data
  const [linePoints, setLinePoints] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate initial line data
    const generateLineData = () => {
      const points = [];
      for (let i = 0; i < 20; i++) {
        points.push(100 + Math.random() * 300);
      }
      return points;
    };
    
    setLinePoints(generateLineData());
    
    // Update few points periodically to create subtle animation
    const interval = setInterval(() => {
      setLinePoints(prev => {
        const newPoints = [...prev];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * newPoints.length);
          newPoints[randomIndex] = 100 + Math.random() * 300;
        }
        return newPoints;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Create SVG path from points
  const createLinePath = () => {
    if (linePoints.length === 0) return '';
    
    return linePoints.map((point, index) => {
      const x = (index / (linePoints.length - 1)) * 100;
      const y = 100 - ((point - 100) / 300) * 100;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };
  
  return (
    <div className="dashboard-layout">
      {/* Top Row */}
      <div className="grid grid-cols-3 gap-6 mb-6 max-w-6xl mx-auto px-8">
        {/* Conversions - Donut Chart */}
        <div 
          className="dashboard-card opacity-50 hover:opacity-100 transition-opacity"
          onMouseEnter={() => setHoveredElement('conversions')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="text-gray-500 text-sm mb-1">Conversions</div>
          
          <div className="relative flex items-center justify-center h-64">
            <svg viewBox="0 0 100 100" width="200" height="200">
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke={hoveredElement === 'conversions' ? '#ff9d80' : '#333'} 
                strokeWidth="15"
                strokeDasharray="251.2"
                strokeDashoffset="63"
              />
              {hoveredElement === 'conversions' && (
                <>
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="#80a0ff" 
                    strokeWidth="15"
                    strokeDasharray="251.2" 
                    strokeDashoffset="200"
                    transform="rotate(-90 50 50)"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    stroke="#d580ff" 
                    strokeWidth="15"
                    strokeDasharray="251.2" 
                    strokeDashoffset="230"
                    transform="rotate(-180 50 50)"
                  />
                </>
              )}
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white">4.2k</div>
              <div className="text-sm text-green-500">+15%</div>
              <div className="text-xs text-gray-600">(12h)</div>
            </div>
          </div>
        </div>
        
        {/* Active Users - Line Chart */}
        <div 
          className="dashboard-card opacity-50 hover:opacity-100 transition-opacity"
          onMouseEnter={() => setHoveredElement('activeUsers')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="text-gray-500 text-sm mb-1">Active users</div>
          <div className="text-3xl font-bold text-white mb-2">890</div>
          
          <div className="h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d={createLinePath()}
                fill="none"
                stroke={hoveredElement === 'activeUsers' ? '#80a0ff' : '#555'}
                strokeWidth="1.5"
              />
            </svg>
            
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>Jan 1, 2024</span>
              <span>Jan 7, 2024</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">Show me active users from last week</div>
        </div>
        
        {/* Transactions - Bar Chart */}
        <div 
          className="dashboard-card opacity-50 hover:opacity-100 transition-opacity"
          onMouseEnter={() => setHoveredElement('transactions')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="text-gray-500 text-sm mb-1">Transactions</div>
          <div className="text-3xl font-bold text-white flex items-baseline">
            120k 
            <span className="text-sm text-green-500 ml-2">+15%</span>
            <span className="text-xs text-gray-600 ml-1">(12h)</span>
          </div>
          
          <div className="h-48 mt-4 flex items-end justify-around">
            {[0.9, 0.65, 0.85, 0.5, 0.3, 0.15].map((height, i) => (
              <div 
                key={i} 
                className="w-6 rounded-sm" 
                style={{ 
                  height: `${height * 100}%`,
                  backgroundColor: hoveredElement === 'transactions' && i < 3 ? '#ff9d80' : '#333' 
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto px-8 mt-24">
        {/* User Activity */}
        <div className="dashboard-card opacity-50">
          <div className="text-gray-500 text-sm mb-1">User activity</div>
          <div className="text-3xl font-bold text-white flex items-baseline">
            32.1k 
            <span className="text-sm text-green-500 ml-2">+15%</span>
            <span className="text-xs text-gray-600 ml-1">(12d)</span>
          </div>
          
          <div className="mt-4 grid grid-cols-20 gap-1 h-12">
            {Array(20).fill(0).map((_, i) => (
              <div 
                key={i}
                className="bg-gray-800 w-full h-full"
                style={{ opacity: Math.random() > 0.5 ? 0.8 : 0.3 }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Sign ups */}
        <div className="dashboard-card opacity-50">
          <div className="text-gray-500 text-sm mb-1">Sign ups</div>
          <div className="text-3xl font-bold text-white flex items-baseline">
            9.8k 
            <span className="text-sm text-green-500 ml-2">+9%</span>
            <span className="text-xs text-gray-600 ml-1">(7d)</span>
          </div>
        </div>
      </div>
    </div>
  );
}