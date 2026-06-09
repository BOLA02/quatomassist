import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Drag and Swipe Tracking Refs
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  const slides = [
  {
    img: "../img/7.jpg",
    title: "Building Together: Our Hackathon Experience",
    desc: "Teams collaborate on innovative solutions during our annual hackathon.",
  },
  {
    img: "../img/10.jpg",
    title: "Mentorship & Growth Ecosystem",
    desc: "Connecting emerging developers with expert tech visionaries globally.",
  },
  {
    img: "../img/1.jpg",
    title: "Empowering Tech Across Africa",
    desc: "Providing resources and infrastructure to fast-track innovation pipelines.",
  },
  {
    img: "../img/2.jpg",
    title: "Hands-On Robotics Training",
    desc: "Students program hardware prototypes to tackle real-world challenges.",
  },
  {
    img: "../img/3.jpg",
    title: "Next-Gen AI & Coding Labs",
    desc: "Equipping young minds with future-ready skills in software engineering.",
  },
  {
    img: "../img/4.jpg",
    title: "Transforming Classroom Spaces",
    desc: "Partnering with schools to embed advanced STEM curriculum pathways.",
  },
  {
    img: "../img/5.jpg",
    title: "The Catalyst For Social Good",
    desc: "Developing impactful software architectures for localized community problems.",
  },
  {
    img: "../img/6.jpg",
    title: "Vibrant Youth Tech Networks",
    desc: "Fostering inclusive spaces where young creators grow into tomorrow's leaders.",
  },
  {
    img: "../img/8.jpg",
    title: "Showcasing Breakthrough Designs",
    desc: "Presenting prototype innovations directly to leading industry experts.",
  },
];

  const totalSlides = slides.length;

  const communityBenefits = [
    "Access cutting-edge STEM, Robotics, AI, IoT, and Coding programs",
    "Learn from experienced mentors and industry professionals",
    "Participate in innovation challenges, hackathons, and tech competitions",
    "Collaborate with a diverse network of learners, educators, and innovators",
    "Gain exposure to emerging technologies and future career pathways",
    "Build real-world projects that address community and global challenges",
    "Connect with opportunities for internships, entrepreneurship, and career development"
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".story-fade-in",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".why-join-trigger",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  // Seamless Infinite Remainder Math
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Mouse & Touch Interaction Handlers
  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current || dragStartX.current === null) return;
    
    const differenceX = dragStartX.current - clientX;
    const swipeThreshold = 50; // Required sliding pixels to trigger a transition

    if (differenceX > swipeThreshold) {
      handleNext();
      isDragging.current = false;
      dragStartX.current = null;
    } else if (differenceX < -swipeThreshold) {
      handlePrev();
      isDragging.current = false;
      dragStartX.current = null;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    dragStartX.current = null;
  };

  return (
    <div ref={containerRef} className="w-full bg-[#1d3781]">
      <section
        id="story"
        className="relative min-h-screen w-full text-white flex flex-col items-center py-20 overflow-hidden select-none"
      >
        {/* Heading */}
        <div className="w-full text-center mb-12 px-6 z-10">
          <p className="text-cyan-400 uppercase tracking-wider text-xs md:text-sm mb-3 font-semibold">
            Community Voices
          </p>

          <AnimatedTitle
            text="IMPACT STORIES FROM OUR COMMUNITY"
            containerClass="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight break-words max-w-[90%] mx-auto text-center"
          />

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Hear directly from our members about how Quantum Assist has transformed
            their journey in technology and empowered them to make a difference.
          </p>
        </div>

        {/* Swipe-Enabled Coverflow Slider */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center px-4 z-10">
          <div 
            className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={(e: MouseEvent) => handleDragStart(e.clientX)}
            onMouseMove={(e: MouseEvent) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e: TouchEvent) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e: TouchEvent) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {slides.map((slide, idx) => {
              // Mathematical Infinite Wrap Position Computations
              let offset = idx - currentIndex;
              
              // Correct positioning index boundaries for continuous rotation logic
              if (offset < -1 && currentIndex === totalSlides - 1) offset = 1;
              if (offset > 1 && currentIndex === 0) offset = -1;
              if (currentIndex === 0 && idx === totalSlides - 1) offset = -1;
              if (currentIndex === totalSlides - 1 && idx === 0) offset = 1;

              const isCenter = idx === currentIndex;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              
              let transformStyle = "translate3d(0, 0, 0) scale(0.5)";
              let opacityStyle = 0;
              let zIndexStyle = 0;

              if (isCenter) {
                transformStyle = "translate3d(0, 0, 0) scale(1)";
                opacityStyle = 1;
                zIndexStyle = 30;
              } else if (isLeft) {
                transformStyle = "translate3d(-50%, 0, 0) scale(0.82)";
                opacityStyle = 0.4;
                zIndexStyle = 20;
              } else if (isRight) {
                transformStyle = "translate3d(50%, 0, 0) scale(0.82)";
                opacityStyle = 0.4;
                zIndexStyle = 20;
              }

              return (
                <div
                  key={idx}
                  className="absolute w-[85%] sm:w-[70%] md:w-[65%] max-w-[680px] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm transition-all duration-500 ease-out pointer-events-none"
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable="false"
                  />
                  <div className="p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute bottom-0 left-0 right-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls and Indicators */}
          <div className="flex items-center gap-4 mt-8 z-20">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all font-bold"
            >
              ←
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-cyan-400" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all font-bold"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-trigger w-full max-w-5xl mx-auto px-6 md:px-16 pb-32">
        <h3 className="story-fade-in text-xl md:text-3xl font-extrabold text-white text-center mb-10 tracking-tight">
          Why Join Our Community?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communityBenefits.map((text, idx) => (
            <div
              key={idx}
              className="story-fade-in bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 p-5 rounded-xl border border-white/5 flex items-start gap-3 shadow-md"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                ✓
              </div>
              <p className="text-gray-300 text-sm leading-normal font-medium">{text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="story-fade-in mt-24 text-center px-6">
          <p className="text-gray-300 mb-6 text-base md:text-lg">
            Want to share your story with our community?
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 transform hover:-translate-y-0.5" />
            Get In Touch
            </div> */}
            </section>
            </div>
            );};
