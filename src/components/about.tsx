import  { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatedTitle } from "./animated-title";
import { Target, Rocket, BookOpen, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type TabKey = "vision" | "mission" | "story";

export const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");
  const [displayedText, setDisplayedText] = useState("");
  
  // Tracking pointer refs to handle smart autoplay cooldowns
  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const userInteractedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserPaused = useRef<boolean>(false);

  const tabKeys: TabKey[] = ["vision", "mission", "story"];

  const tabContents = {
    vision: {
      title: "Our Vision",
      icon: <Target className="w-4 h-4 md:w-5 md:h-5 shrink-0" />,
      text: " To create a future where every young person, regardless of background, has access to technology, innovation opportunities, and mentorship that enables them to build solutions for local and global challenges.",
    },
    mission: {
      title: "Our Mission",
      icon: <Rocket className="w-4 h-4 md:w-5 md:h-5 shrink-0" />,
      text: " To inspire, educate, and empower communities through transformative technology education, innovation ecosystems, and strategic partnerships that unlock human potential and drive sustainable development.",
    },
    story: {
      title: "Our Story & Approach",
      icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5 shrink-0" />,
      text: " At Labs with Techthingz, we believe every young person deserves the opportunity to explore technology, develop future-ready skills, and transform ideas into real-world solutions. Through hands-on STEM education, robotics, AI, coding, and mentorship, we build vibrant ecosystems where learners become catalysts for positive change.",
    },
  };

  // 1. Dynamic Auto-Play Carousel Rotator Loop
  useEffect(() => {
    autoPlayTimer.current = setInterval(() => {
      if (!isUserPaused.current) {
        setActiveTab((prevTab) => {
          const currentIndex = tabKeys.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabKeys.length;
          return tabKeys[nextIndex];
        });
      }
    }, 7000); // Transitions automatically every 7 seconds

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, []);

  // 2. Click Intercept: Manual override pauses rotation for 15s
  const handleTabClick = (tabKey: TabKey) => {
    setActiveTab(tabKey);
    isUserPaused.current = true;
    
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    
    userInteractedTimeout.current = setTimeout(() => {
      isUserPaused.current = false;
    }, 15000); // Resumes autopilot after 15 seconds of complete idleness
  };

  // 3. Typist Stream Logic Engine
  useEffect(() => {
    let currentIndex = 0;
    const fullText = tabContents[activeTab].text;
    setDisplayedText(""); 

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 6); // Faster typing progression for fluid automated cycling

    return () => clearInterval(interval);
  }, [activeTab]);

  useGSAP(() => {
    gsap.fromTo(
      ".about-fade-in",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#1d3781] flex flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="mb-16 text-center px-6 z-10 about-fade-in">
        <p className="font-general text-xs md:text-sm uppercase text-cyan-300 font-bold tracking-widest mb-2">
          JOIN OUR CIRCLE
        </p>
        <AnimatedTitle 
          text="<b>20,000+</b> <b>community</b> <b>members</b> <br /><b>across</b> <b>70+</b> <b>schools</b>" 
          containerClass="mt-3 !text-white text-center text-xl md:text-4xl font-extrabold leading-tight"
        />
        <p className="max-w-xl mx-auto text-gray-300 mt-4 text-sm md:text-base leading-relaxed opacity-90">
          Our community thrives on collaboration and innovation. Whether you’re just
          starting or mentoring the next generation, there’s a place for you here.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col gap-20 px-6 md:px-16 max-w-4xl w-full z-10">
        
        {/* Interactive Tabs UI */}
        <div className="about-fade-in w-full text-center">
          <div className="max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight">
              Revolutionizing Communities
            </h2>
            <p className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Technology • Mentorship • Innovation
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 border-b border-white/10 pb-6">
            {tabKeys.map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => handleTabClick(tabKey)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-extrabold transition-all duration-300 flex items-center gap-2.5 relative ${
                  activeTab === tabKey
                    ? "bg-white text-[#1d3781] shadow-xl scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/5 bg-transparent"
                }`}
              >
                {tabContents[tabKey].icon}
                <span>{tabContents[tabKey].title}</span>
                
                {/* Visual Active Loading Indicator Line */}
                {activeTab === tabKey && (
                  <span className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Text Box */}
          <div className="min-h-[140px] flex flex-col justify-center items-center px-4">
            <p className="text-base md:text-xl text-white font-medium leading-relaxed max-w-3xl transition-all duration-300">
              {displayedText}
              <span className="inline-block w-1.5 h-5 bg-cyan-400 ml-1.5 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Our Impact Grid */}
        <div className="about-fade-in w-full mt-6">
          <h3 className="text-xs md:text-sm font-black text-cyan-300 text-center mb-8 tracking-widest uppercase">
            Our Impact Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { val: "20,000+", label: "Members", desc: "Students, educators, and tech professionals." },
              { val: "70+", label: "Schools", desc: "Partnering to deliver modern STEM training." },
              { val: "5,000+", label: "Trained", desc: "Learners equipped with AI skills." },
              { val: "500+", label: "Projects", desc: "Prototypes addressing real-world needs." },
              { val: "100+", label: "Mentors", desc: "Industry leaders providing guidance." }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] hover:border-cyan-500/30 hover:scale-[1.02] transition-all duration-300 p-5 rounded-2xl border border-white/10 text-center flex flex-col justify-between shadow-xl"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">{stat.val}</p>
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-2">{stat.label}</p>
                </div>
                <p className="text-[11px] text-gray-400 leading-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outro Call to Action Text */}
        <div className="about-fade-in text-center max-w-xl mx-auto pt-4">
          <h4 className="text-lg md:text-xl font-bold text-white mb-2">
            Be Part of the Movement
          </h4>
          <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
            Together, we are building a generation of creators, innovators, engineers, scientists, entrepreneurs, and technology leaders who will shape the future of Africa and the world.
          </p>
          <div className="text-base md:text-lg font-black tracking-widest text-cyan-400 uppercase animate-pulse flex items-center justify-center gap-2">
            <span>Learn. Create. Innovate. Lead.</span>
            <Zap className="w-5 h-5 fill-cyan-400 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
