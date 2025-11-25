export const Hero = () => { 
  return (
    <section
  id="hero"
  className="relative pt-24 md:pt-32 min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
>

      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent"></div>
      </div>

      {/* Tech overlay lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute left-10 top-1/4 w-32 h-px bg-cyan-400/50"></div>
        <div className="absolute left-10 top-1/3 w-24 h-px bg-cyan-400/30"></div>
        <div className="absolute right-10 bottom-1/4 w-40 h-px bg-cyan-400/50"></div>
        <div className="absolute right-10 bottom-1/3 w-28 h-px bg-cyan-400/30"></div>
      </div>

      {/* Main Content (RESPONSIVE FIX APPLIED HERE) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-20 gap-10 md:gap-0 min-h-[calc(100vh-120px)]">

        {/* Left Text Content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.3em] mb-2">
            QUANTOM
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.3em] mb-6 md:mb-8">
            ASSIST
          </h2>
          <h3 className="text-white text-xl md:text-3xl font-light tracking-widest mb-6">
            We are the future for you Now
          </h3>

          <button className="px-8 py-3 bg-cyan-600 text-white text-sm font-semibold rounded-full hover:bg-cyan-500 transition-all w-fit mx-auto md:mx-0 hover:shadow-lg hover:shadow-cyan-500/50">
            CLICK HERE
          </button>
        </div>

        {/* Right Image (now correctly placed after text on mobile) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/img/stud.jpeg"
            alt="Hero Image"
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[600px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-6 z-20">
        <div className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
          </svg>
        </div>
      </div>

      {/* Decorative bottom lines */}
      <div className="absolute bottom-0 left-0 right-0 z-0 opacity-30">
        <div className="relative h-24 md:h-32">
          <div className="absolute left-10 bottom-16 w-36 md:w-48 h-px bg-cyan-400/50"></div>
          <div className="absolute left-10 bottom-12 w-24 md:w-32 h-px bg-cyan-400/30"></div>
          <div className="absolute right-20 bottom-20 w-40 md:w-56 h-px bg-cyan-400/50"></div>
        </div>
      </div>
    </section>
  );
};
