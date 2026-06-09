export const Hero = () => { 
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 min-h-screen w-screen overflow-hidden bg-[#0d1527]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/stud.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Deep overlay mask using a rich navy/black tone and heavier blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b111e]/45 via-[#0d1933]/30 to-[#0b111e]/40 backdrop-blur-[2px]" />
</div>

      {/* Decorative radial lighting to give it depth */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center px-6 sm:px-12 md:px-20 py-16 min-h-[calc(100vh-120px)] max-w-7xl mx-auto w-full">
        
        {/* Left Text Content Box */}
        <div className="flex flex-col justify-center max-w-2xl text-center md:text-left">
          {/* Combined text block and increased font-weight to resolve background bleeding */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-2 uppercase drop-shadow-md">
            QUANTOM
          </h1>
          <h2 className="text-cyan-400 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 md:mb-8 uppercase drop-shadow-md">
            ASSIST
          </h2>
          
          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-semibold tracking-[0.2em] mb-10 uppercase opacity-90 max-w-md leading-relaxed">
            We are the future for you Now
          </p>

          <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0d1527] text-xs md:text-sm font-extrabold tracking-widest uppercase rounded-xl transition-all duration-300 w-full sm:w-fit mx-auto md:mx-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5">
            CLICK HERE
          </button>
        </div>

      </div>

      {/* Premium Framed Social Media Navigation Wrapper */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 flex gap-5 z-20 bg-white/[0.03] backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl">
        <div className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer p-1">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <div className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer p-1">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </div>
        <div className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
          </svg>
        </div>
      </div>
    </section>
  );
};
