

export const Hero = () => {
  

 

  return (
    <section id="hero" className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpeg" 
          alt="Quantum Assist Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-10">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="special-font hero-heading text-blue-100 mb-4 drop-shadow-2xl">
            Welc<b>ome</b> TO
          </h1>
          <h2 className="special-font hero-heading text-blue-75 drop-shadow-2xl">
            QUAN<b>TOM</b> ASSIST
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-robert-regular text-blue-100 text-lg drop-shadow-lg">
            We are the future for you Now
          </p>
        </div>
      </div>
    </section>
  );
};
