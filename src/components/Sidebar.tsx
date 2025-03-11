import React, { useState, useEffect, useRef } from 'react';

export default function Sidebar() {
  // Core states
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastScrollPositionRef = useRef(0);
  const isManualScrollRef = useRef(false);
  
  // Define navigation items
  const navItems = [
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'chat-to-chart', label: 'Chat → Chart' },
    { id: 'context', label: 'Context' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'features', label: 'Features' }
  ];

  // Get section index
  const getSectionIndex = (id: string) => {
    return navItems.findIndex(item => item.id === id);
  };

  // Set up hover detection and scroll behavior
  useEffect(() => {
    // Add a transparent div for mouse detection
    const mouseDetector = document.createElement('div');
    mouseDetector.style.position = 'absolute';
    mouseDetector.style.left = '0';
    mouseDetector.style.top = '0';
    mouseDetector.style.width = '120px';
    mouseDetector.style.height = '100%';
    mouseDetector.style.zIndex = '39';
    mouseDetector.style.background = 'transparent';
    document.body.appendChild(mouseDetector);
    
    mouseDetector.addEventListener('mouseenter', () => {
      setIsVisible(true);
      setIsExpanded(true);
    });
    
    mouseDetector.addEventListener('mouseleave', (e) => {
      const sidebarElement = sidebarRef.current;
      if (sidebarElement && !sidebarElement.contains(e.relatedTarget as Node)) {
        if (window.scrollY < 200) {
          setIsVisible(false);
        }
        setIsExpanded(false);
      }
    });
    
    // Simple scroll handler that only updates active section
    const handleScroll = () => {
      // Show sidebar when scrolled down
      if (window.scrollY > 200) {
        setIsVisible(true);
        
        // Only update active section if it's not a manual scroll
        if (!isManualScrollRef.current) {
          // Find which section is currently in view
          for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (!element) continue;
            
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      } else if (!isExpanded) {
        setIsVisible(false);
      }
      
      // Update last scroll position
      lastScrollPositionRef.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
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
    
    if (window.scrollY < 200) {
      setIsVisible(false);
    }
  };

  // Simplified section click handler
  const handleSectionClick = (id: string) => {
    // Prevent action if already active
    if (activeSection === id) return;
    
    // Set active section immediately
    setActiveSection(id);
    
    // Set flag for manual scrolling
    isManualScrollRef.current = true;
    
    // Get element and scroll to it
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        isManualScrollRef.current = false;
      }, 1000);
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
            const activeIndex = getSectionIndex(activeSection);
            const currentIndex = index;
            
            // Determine if this item should show animation state
            // We don't use a separate state for animation now - simpler approach
            const isAnimating = false; // We're removing this for now to fix flickering
            
            return (
              <li 
                key={item.id} 
                style={{
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: index === navItems.length - 1 ? '0' : '8px'
                }}
              >
                <button 
                  className="flex items-center focus:outline-none relative"
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => handleSectionClick(item.id)}
                  style={{ padding: 0 }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '1px',
                      backgroundColor: isActive ? 'rgb(255, 255, 255)' : 'rgb(102, 102, 102)',
                      width: isActive 
                        ? (isExpanded || isHovered ? '28px' : '24px')
                        : isHovered
                        ? '20px'
                        : isVisible ? '10px' : '0px',
                      opacity: isActive ? 1 : isHovered ? 0.8 : 0.4,
                      transition: 'all 0.15s ease-out'
                    }}
                  ></div>
                  <span 
                    style={{
                      marginLeft: '40px',
                      fontSize: '16px',
                      lineHeight: '16px',
                      fontWeight: 400,
                      opacity: (isExpanded || isActive) ? 1 : 0,
                      transform: isHovered
                        ? 'translateX(4px)'
                        : (isExpanded || isActive) 
                        ? 'translateX(0px)' 
                        : 'translateX(-8px)',
                      transition: 'all 0.15s ease-out',
                      color: isActive 
                        ? 'rgb(255, 255, 255)' 
                        : isHovered
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(255, 255, 255, 0.4)'
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