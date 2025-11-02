import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-3">
              QUAN<span className="text-cyan-400">TOM</span> ASSIST
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Empowering the next generation of tech leaders through innovation, 
              mentorship, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                About Us
              </a>
              <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Features
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Join Community
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 border border-white/10 hover:border-cyan-400/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs text-center md:text-left">
              Join our community of 20,000+ members
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-white font-semibold">QUANTUM ASSIST</strong>. 
            All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Optional: Back to Top Button */}
        <div className="mt-8 text-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};