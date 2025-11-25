import { AnimatedTitle } from "./animated-title";

export const Story = () => {
  return (
    <section
      id="story"
      className="min-h-screen w-full bg-[#1d3781] text-white flex flex-col items-center px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <div className="w-full text-center mb-12">
  <p className="text-cyan-400 uppercase tracking-wider text-xs md:text-sm mb-3 font-semibold">
    Community Voices
  </p>

  <AnimatedTitle
  containerClass="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight break-words max-w-[90%] mx-auto text-center"
>
    {"IMPACT STORIES FROM OUR COMMUNITY"}
  </AnimatedTitle>

  <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
    Hear directly from our members about how Quantum Assist has transformed
    their journey in technology and empowered them to make a difference.
  </p>
</div>

      {/* Video Grid */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Featured Video - Large */}
        <div className="md:col-span-2">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm">
        <div className="aspect-video">
          <img
            src="../img/student.png"
            alt="Featured Impact Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Building Together: Our Hackathon Experience
          </h3>
          <p className="text-gray-300 text-sm">
            Teams collaborate on innovative solutions during our annual hackathon.
          </p>
        </div>
      </div>
    </div>


 
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-300 mb-6 text-lg">
          Want to share your story with our community?
        </p>
        <a
          href="#contact"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};