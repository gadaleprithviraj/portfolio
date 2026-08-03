import React, { useState, useEffect, useRef } from 'react';
import { personal } from '../data/personal';
import { User, FileText, BarChart3, Mail } from 'lucide-react';

const roles = [
  "Data Analyst",
  "Business Intelligence Enthusiast",
  "Power BI Developer",
  "Data Visualization Enthusiast",
  "SQL & Data Analytics Learner",
  "Problem Solver",
  "Future Data Professional"
];

const taglines = [
  "Turning data into meaningful insights.",
  "Building dashboards that tell a story.",
  "Exploring patterns hidden inside data.",
  "Transforming raw data into decisions.",
  "Learning. Building. Analyzing.",
  "Making data easier to understand.",
  "From raw data to actionable insights.",
  "Building with data, one project at a time."
];

const techStacks = [
  "Power BI • Excel • SQL",
  "Python • DAX • Data Analysis",
  "Data Modeling • Visualization • Business Intelligence"
];

// Helper to count up stats on scroll
const AnimatedStat = ({ endVal, suffix = "+", label, prefersReducedMotion }) => {
  const [count, setCount] = useState(prefersReducedMotion ? endVal : 0);
  const domRef = useRef();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(endVal);
      return;
    }

    let isAnimated = false;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isAnimated) {
        isAnimated = true;
        let start = 0;
        const duration = 1200; // total duration in ms
        const increment = endVal / (duration / 16); // ~60fps
        const timer = setInterval(() => {
          start += increment;
          if (start >= endVal) {
            clearInterval(timer);
            setCount(endVal);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [endVal, prefersReducedMotion]);

  return (
    <div ref={domRef} className="flex flex-col items-center justify-center p-4 bg-white border border-brand-border/60 rounded shadow-sm min-w-[120px] transition-transform duration-300 hover:scale-105">
      <span className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-gold">
        {count}{suffix}
      </span>
      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted mt-1">
        {label}
      </span>
    </div>
  );
};

export const Hero = ({ onNavigate }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [greeting, setGreeting] = useState("Hi");

  // Indexes initialized to random positions to prevent static page-load similarity
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  const [tagIndex, setTagIndex] = useState(0);
  const [tagVisible, setTagVisible] = useState(true);

  const [techIndex, setTechIndex] = useState(0);
  const [techVisible, setTechVisible] = useState(true);

  // Quick navigation link array
  const quickLinks = [
    { label: "About me", icon: <User size={20} />, page: "about" },
    { label: "Resume", icon: <FileText size={20} />, page: "resume" },
    { label: "Projects", icon: <BarChart3 size={20} />, page: "projects" },
    { label: "Contact", icon: <Mail size={20} />, page: "contact" }
  ];

  // Initialize random offsets and detect prefers-reduced-motion
  useEffect(() => {
    // Detect motion setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    // Compute browser local time greeting
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) setGreeting("Good Morning");
    else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon");
    else if (hours >= 17 && hours < 22) setGreeting("Good Evening");
    else setGreeting("Good Night");

    // Randomize initial indices on load
    setRoleIndex(Math.floor(Math.random() * roles.length));
    setTagIndex(Math.floor(Math.random() * taglines.length));
    setTechIndex(Math.floor(Math.random() * techStacks.length));

    return () => mediaQuery.removeEventListener('change', motionListener);
  }, []);

  // Interval timer for Roles (every 3 seconds)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 350); // wait for fade out
    }, 3000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Interval timer for Taglines (every 4 seconds, offset timing)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setTagVisible(false);
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % taglines.length);
        setTagVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Interval timer for Tech Stacks (every 5 seconds, offset timing)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setTechVisible(false);
      setTimeout(() => {
        setTechIndex((prev) => (prev + 1) % techStacks.length);
        setTechVisible(true);
      }, 350);
    }, 5000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="bg-brand-bg min-h-[calc(100vh-4rem)] flex flex-col justify-between relative">
      {/* Styles block for self-contained, smooth transitions without global CSS changes */}
      <style>{`
        .transition-text {
          transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1), transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .text-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .text-hidden {
          opacity: 0;
          transform: translateY(6px);
        }
      `}</style>

      {/* Dynamic Cover Banner */}
      <section 
        className="relative h-[330px] w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 38, 30, 0.65), rgba(42, 38, 30, 0.65)), url('https://lh3.googleusercontent.com/sitesv/AG8ngQW6M6vnH0vWtUq0-DlRJXPdKQpi4EW1BOuisZVdmLyFRv33d4zuuRNstluhNv8mWz-Kwddx0cEwwo4cbnFswwj8AsMdYNn6UjqVSp1LE2miQrjO39TBRlwcGstimXhbmlub1Jllmal6HcI6za1vxmPaQPSXF-vyvYQE9tPwXk9c2sQpNomlXO7zk432h2Y=w16383')`
        }}
      >
        <div className="text-center px-4 reveal active flex flex-col items-center">
          {/* Profile Picture */}
          {personal.photo && (
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg border-2 border-[#cea964] mb-4 transition-transform duration-300 hover:scale-105"
            />
          )}
          
          {/* Greeting String (Updates based on local browser time) */}
          <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-[#cea964] mb-1">
            {greeting}, I'm Prithviraj
          </h2>

          {/* Dynamic Role/Title Wrapper to prevent layout shift (CLS) */}
          <div className="h-12 sm:h-16 flex items-center justify-center overflow-hidden">
            {prefersReducedMotion ? (
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
                Data Analyst
              </h1>
            ) : (
              <h1 className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white transition-text ${roleVisible ? 'text-visible' : 'text-hidden'}`}>
                {roles[roleIndex]}
              </h1>
            )}
          </div>
        </div>
      </section>

      {/* Main Body Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center flex-grow flex flex-col justify-center items-center">
        {/* Dynamic Supporting Line Container (Zero Layout Shift) */}
        <div className="reveal active max-w-3xl mb-8 min-h-[3rem] flex items-center justify-center">
          {prefersReducedMotion ? (
            <p className="text-sm sm:text-base text-brand-gold font-serif italic leading-relaxed">
              {taglines[0]}
            </p>
          ) : (
            <p className={`text-sm sm:text-base text-brand-gold font-serif italic leading-relaxed transition-text ${tagVisible ? 'text-visible' : 'text-hidden'}`}>
              {taglines[tagIndex]}
            </p>
          )}
        </div>

        {/* Skill/Technology Micro-Animation */}
        <div className="reveal active mb-12 min-h-[2.5rem] flex flex-col items-center justify-center">
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand-text-muted mb-1 block">
            Core Exposure
          </span>
          {prefersReducedMotion ? (
            <p className="text-xs text-brand-text-dark font-semibold">
              {techStacks[0]}
            </p>
          ) : (
            <p className={`text-xs text-brand-text-dark font-semibold transition-text ${techVisible ? 'text-visible' : 'text-hidden'}`}>
              {techStacks[techIndex]}
            </p>
          )}
        </div>

        {/* Stats Section with Count-Up Trigger */}
        <div className="w-full max-w-md mx-auto mb-14 reveal active">
          <div className="grid grid-cols-3 gap-4 justify-center items-stretch">
            <AnimatedStat endVal={8} suffix="+" label="Total Projects" prefersReducedMotion={prefersReducedMotion} />
            <AnimatedStat endVal={6} suffix="+" label="BI Dashboards" prefersReducedMotion={prefersReducedMotion} />
            <AnimatedStat endVal={10} suffix="+" label="Technologies" prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>

        {/* Quick Links Navigation Grid */}
        <div className="w-full max-w-xl reveal active">
          <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-text-muted mb-6">
            Quick Navigation Links
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-stretch">
            {quickLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.page)}
                className="flex flex-col items-center justify-center p-5 bg-white border border-brand-border rounded hover:border-brand-gold hover:text-brand-gold text-brand-text-dark transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <div className="mb-3 text-brand-gold group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase font-sans">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spacer */}
      <div className="h-4"></div>
    </div>
  );
};
