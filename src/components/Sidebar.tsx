import React, { useState, useEffect, useRef } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Define navigation items
  const navItems = [
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'chat-to-chart', label: 'Chat → Chart' },
    { id: 'context', label: 'Context' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'features', label: 'Features' }
  ];

  // Set up scroll handling and mouse position detection
  useEffect(() => {
    // Add a transparent div for mouse detection at top of page
    const mouseDetector = document.createElement('div');
    mouseDetector.style.position = 'absolute';
    mouseDetector.style.left = '0';
    mouseDetector.style.top = '0';
    mouseDetector.style.width = '50px';  // Width of detection area
    mouseDetector.style.height = '100%';
    mouseDetector.style.zIndex = '39';   // Just below the sidebar z-index
    mouseDetector.style.background = 'transparent';
    document.body.appendChild(mouseDetector);
    
    mouseDetector.addEventListener('mouseenter', () => {
      setIsVisible(true);
      setIsExpanded(true);
    });
    
    mouseDetector.addEventListener('mouseleave', (e) => {
      // Only hide if not hovering the actual sidebar
      const sidebarElement = sidebarRef.current;
      if (sidebarElement && !sidebarElement.contains(e.relatedTarget as Node)) {
        if (window.scrollY < 200) {
          setIsVisible(false);
        }
        setIsExpanded(false);
      }
    });
    
    const handleScroll = () => {
      // Show sidebar when user scrolls down enough
      if (window.scrollY > 200) {
        setIsVisible(true);
        
        // Update active section based on scroll position
        const sections = navItems.map(item => item.id);
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (!element) continue;
          
          const rect = element.getBoundingClientRect();
          
          // Check if section is in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      } else if (!isExpanded) {
        // Hide sidebar when scrolled to top and not expanded
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(mouseDetector);
    };
  }, [isExpanded, navItems]);

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsExpanded(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setHoveredSection(null);
    
    // Hide sidebar if scrolled to top
    if (window.scrollY < 200) {
      setIsVisible(false);
    }
  };

  // Handle section click
  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    
    // Scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Main sidebar visibility style
  const sidebarVisibilityStyle = {
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' as const : 'none' as const,
    transition: 'opacity 0.3s ease-out'
  };

  return (
    <div 
      ref={sidebarRef}
      className="fixed z-40" 
      style={{
        ...sidebarVisibilityStyle,
        left: 0,
        top: 0,
        height: '100%',
        paddingLeft: '20px',
        display: 'flex',
        alignItems: 'center'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            
            return (
              <li 
                key={item.id} 
                style={{
                  height: '18px',  // Further reduced height
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: index === navItems.length - 1 ? '0' : '16px'  // Reduced spacing to 16px
                }}
              >
                <button 
                  className="flex items-center focus:outline-none relative"
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => handleSectionClick(item.id)}
                  style={{ padding: 0 }}  // Remove any button padding
                >
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '1px',
                      backgroundColor: isActive ? 'rgb(255, 255, 255)' : 'rgb(102, 102, 102)',
                      // Show ghost lines for all inactive items when sidebar is visible
                      width: isActive 
                        ? (isExpanded || isHovered ? '24px' : '16px') 
                        : isHovered 
                        ? '12px' 
                        : isVisible ? '4px' : '0px',  // The ghost line is 4px wide
                      opacity: isActive ? 1 : isHovered ? 0.7 : 0.2,  // Lower opacity for ghost lines
                      transition: 'all 0.2s ease-out'
                    }}
                  ></div>
                  <span 
                    style={{
                      marginLeft: '40px',
                      fontSize: '14px',
                      lineHeight: '18px', // Reduced line height
                      fontWeight: 400,
                      opacity: (isExpanded || isActive) ? 1 : 0,
                      transform: (isExpanded || isActive) ? 'translateX(0px)' : 'translateX(-8px)',
                      transition: 'all 0.2s ease-out',
                      color: isActive ? 'rgb(255, 255, 255)' : isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}