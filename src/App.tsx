import LeftMenu from "./imports/LeftMenu";
import Frame16 from "./imports/Frame2144772184";
import TrangCh from "./imports/TrangChủ";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1200;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      if (mobile) {
        setIsMenuVisible(false);
      } else if (tablet) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile layout - use TrangChủ design
  if (isMobile) {
    return (
      <ThemeProvider>
        <div className="h-screen bg-[#edf3fa] dark:bg-[#1a1a1a] overflow-hidden w-screen transition-colors duration-300">
          <TrangCh />
        </div>
      </ThemeProvider>
    );
  }

  // Desktop/Tablet layout - use original design with responsive menu
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-[#1a1a1a] flex relative overflow-hidden transition-colors duration-300">
        {/* Side Menu */}
        <div 
          className={`h-screen transition-all duration-300 ease-in-out flex-shrink-0 ${
            isMenuVisible ? "w-[250px]" : "w-0"
          }`}
        >
          <div className={`transition-opacity duration-300 ease-in-out h-full ${isMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <LeftMenu />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-auto w-full min-w-0 transition-all duration-300 ease-in-out">
          <Frame16 />
        </div>
        
        {/* Toggle Button - Desktop & Tablet */}
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className={`absolute top-[68px] bg-white dark:bg-gray-800 rounded-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] p-[10px] w-[35px] h-[35px] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700 z-50 ${
            isMenuVisible ? "left-[226px]" : "left-[10px]"
          }`}
          aria-label={isMenuVisible ? "Hide menu" : "Show menu"}
        >
          <ChevronRight 
            className={`w-[15px] h-[15px] text-gray-600 dark:text-gray-300 transition-transform duration-300 ease-in-out ${
              isMenuVisible ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </ThemeProvider>
  );
}