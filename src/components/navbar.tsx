import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS } from "@/constants";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 bg-[#090d14]  backdrop-blur-sm transition-all duration-300"
    >
      <div className="w-full">
        <nav className="flex items-center justify-between gap-8 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="transition hover:opacity-75">
              <img 
                src="/quotom.jpg" 
                alt="Logo" 
                className="w-16 h-16 rounded-full object-cover" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
  {NAV_ITEMS.map(({ label, href }) => (
    <a
      key={href}
      href={href}
      className="text-lg font-semibold font-poppins tracking-wide text-gray-200 hover:text-blue-400 transition-colors duration-200"
    >
      {label}
    </a>
  ))}
</div>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white transition hover:opacity-75 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-6 h-full">
            {NAV_ITEMS.map(({ label, href }, index) => (
              <a
  key={href}
  href={href}
  className="py-4 text-xl font-poppins font-semibold text-gray-100 hover:text-blue-400 tracking-wide transition-colors duration-200 border-b border-gray-800/50"
  onClick={() => setIsMobileMenuOpen(false)}
  style={{
    animation: isMobileMenuOpen
      ? `slideInFromRight 0.3s ease-out ${index * 0.1}s both`
      : "none",
  }}
>
  {label}
</a>

            ))}
          </div>
        </div>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

    
    </header>
  );
};