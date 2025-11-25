import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ABOUT US", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "JOIN US", href: "#join" }
];

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      navContainerRef.current.style.transform = isNavVisible ? 'translateY(0)' : 'translateY(-100%)';
      navContainerRef.current.style.opacity = isNavVisible ? '1' : '0';
    }
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 bg-[#1d3781] backdrop-blur-sm transition-all duration-300"
    >
      <div className="w-full">
        <nav className="relative z-30 flex items-center justify-between px-6 md:px-12 py-3 md:py-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 lg:gap-12 text-white text-sm font-light tracking-wider">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a 
                  href={href}
                  className="cursor-pointer hover:text-cyan-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
            <a href="#hero" className="transition hover:opacity-75">
              <img 
                src="/q.png" 
                alt="Logo" 
                className="w-16 h-16 rounded-full object-cover" 
              />
            </a>
          </div>

          {/* Logo Button (Desktop) */}
        <div className=" flex items-center">
            <a href="#hero" className="transition hover:opacity-75">
              <img 
                src="/q.png" 
                alt="Logo" 
                className="w-16 h-16 rounded-full object-cover" 
              />
            </a>
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
                className="py-4 text-xl font-semibold text-gray-100 hover:text-cyan-400 tracking-wide transition-colors duration-200 border-b border-gray-800/50"
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

      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};