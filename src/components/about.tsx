import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "+=1000",
        scrub: 1.5,
      },
    });

    tl.to(".about-text", {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.to(
      ".about-image",
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=1"
    );

    tl.to(
      ".stat-card",
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#090d14] flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Section Title */}
      <div className="mb-12 text-center px-6">
        <p className="font-general text-sm uppercase text-blue-100 tracking-widest">
          JOIN OUR CIRCLE
        </p>

        <AnimatedTitle containerClass="mt-5 !text-white text-center">
          {
            "<b>20,000+</b> <b>community</b> <b>members</b> <br /><b>across</b> <b>70+</b> <b>schools</b>"
          }
        </AnimatedTitle>

        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mt-4">
          Our community thrives on collaboration and innovation. Whether you’re just starting
          or mentoring the next generation, there’s a place for you here.
        </p>
      </div>

      {/* Content Container */}
      <div
        id="clip"
        className="relative flex flex-col md:flex-row items-center justify-between gap-16 px-8 md:px-20 max-w-7xl w-full"
      >
        {/* Text Section */}
        <div className="about-text opacity-0 -translate-x-10 flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-6  text-center text-white drop-shadow-lg">
            QUAN<span className="text-cyan-400">TOM</span> ASSIST
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            Revolutionizing communities through technology, mentorship, and innovation.
            Empowering the next generation of tech leaders across Africa and beyond.
          </p>

          <p className="text-gray-400 mb-10">
            Gain access to resources, mentorship, and a network of passionate individuals shaping
            the future through technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="stat-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center shadow-xl">
              <p className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">20,000+</p>
              <p className="text-sm md:text-base text-gray-200 uppercase">
                Community Members
              </p>
            </div>
            <div className="stat-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center shadow-xl">
              <p className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">70+</p>
              <p className="text-sm md:text-base text-gray-200 uppercase">
                Schools Reached
              </p>
            </div>
            <div className="stat-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center shadow-xl">
              <p className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">∞</p>
              <p className="text-sm md:text-base text-gray-200 uppercase">Lasting Impact</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
