"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Using Material Design icons for the Android feel
import { 
  MdWifi, 
  MdBatteryFull, 
  MdSignalCellular4Bar,
  MdArrowBack,
  MdSearch,
  MdMic,
  MdPerson,
  MdCode,
  MdWork,
  MdCall,
  MdEmail,
  MdOpenInNew,
  MdCircle,
  MdChangeHistory,
  MdCropSquare
} from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import SkillData from "./Skill.json";
import ProjectData from "./Projects.json";
import ProfileInfo from "./Profile.json";
import ContactInfo from "./Contact.json";

/* =========================================================
   DATA HELPERS
========================================================= */
const getProfile = () => ProfileInfo?.profile || {};
const getContact = () => ContactInfo?.contact || {};

/* =========================================================
   ANDROID STATUS BAR
========================================================= */
const AndroidStatusBar = () => {
  const [time, setTime] = useState("10:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).replace(/( AM| PM)/, "")
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-8 z-50 flex justify-between items-center px-4 text-white text-[13px] font-medium pointer-events-none drop-shadow-md">
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <MdWifi className="text-sm" />
        <MdSignalCellular4Bar className="text-sm" />
        <MdBatteryFull className="text-base rotate-90" />
      </div>
    </div>
  );
};

/* =========================================================
   ANDROID NAVIGATION BAR (BOTTOM)
========================================================= */
const AndroidNavBar = ({ onBack, onHome }) => (
  <div className="absolute bottom-0 left-0 w-full h-12 bg-black/90 z-50 flex justify-around items-center px-8">
    <button onClick={onBack} className="text-white/70 hover:text-white p-2">
      <MdChangeHistory className="text-xl -rotate-90" />
    </button>
    <button onClick={onHome} className="text-white/70 hover:text-white p-2">
      <MdCircle className="text-lg" />
    </button>
    <button onClick={onHome} className="text-white/70 hover:text-white p-2">
      <MdCropSquare className="text-lg" />
    </button>
  </div>
);

/* =========================================================
   APP WINDOW WRAPPER (MATERIAL DESIGN)
========================================================= */
const MaterialAppWindow = ({ title, onClose, children }) => (
  <div className="absolute inset-0 z-40 bg-[#FAFAFC] flex flex-col animate-in zoom-in-95 duration-200 origin-center">
    {/* Android App Bar */}
    <div className="h-20 pt-8 pb-3 px-2 bg-[#F3F4F9] text-gray-800 flex items-center shadow-sm shrink-0 z-10">
      <button 
        onClick={onClose} 
        className="p-3 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors"
      >
        <MdArrowBack className="text-2xl" />
      </button>
      <h1 className="font-medium text-[22px] ml-2 tracking-tight">{title}</h1>
    </div>

    {/* App Content */}
    <div className="flex-1 overflow-y-auto pb-16">
      {children}
    </div>
  </div>
);

/* =========================================================
   INDIVIDUAL APPS
========================================================= */

const ProfileApp = () => {
  const profile = getProfile();
  
  return (
    <div className="p-4 space-y-4">
      {/* Material Card */}
      <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center mt-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-blue-100 flex items-center justify-center">
          <img src={profile?.image || "/profile.jpeg"} alt={profile?.name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-normal text-gray-900">{profile?.name || "Vivek Pundir"}</h2>
        <p className="text-blue-600 font-medium mt-1">{profile?.professionalTitle || "Full Stack Developer"}</p>
        
        <div className="mt-6 flex gap-3 w-full">
          <div className="flex-1 bg-blue-50 rounded-2xl p-3">
            <span className="block text-xl font-medium text-blue-900">3+</span>
            <span className="text-[10px] text-blue-700 font-medium uppercase">Years Exp</span>
          </div>
          <div className="flex-1 bg-green-50 rounded-2xl p-3">
            <span className="block text-xl font-medium text-green-900">{ProjectData?.length || 0}+</span>
            <span className="text-[10px] text-green-700 font-medium uppercase">Projects</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[28px] p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-medium text-blue-600 mb-2">About</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {profile?.about || "I am a full stack developer focused on building modern, scalable and production-ready digital applications."}
        </p>
      </div>
    </div>
  );
};

const SkillsApp = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-3 mt-2">
        {SkillData?.map((skill, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              {skill?.logo ? (
                <img src={`/models/${skill.logo}`} alt={skill.name} className="w-6 h-6 object-contain" />
              ) : (
                <MdCode className="text-gray-500 text-lg" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-800 line-clamp-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsApp = () => {
  return (
    <div className="p-4 space-y-4 mt-2">
      {ProjectData?.map((project, index) => (
        <div key={index} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[18px] font-medium text-gray-900">{project.title}</h3>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
          
          {project.techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-blue-50 text-blue-700 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white rounded-full py-2.5 text-sm font-medium active:bg-blue-700 transition">
              Open Project <MdOpenInNew className="text-base" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const ContactApp = () => {
  const contact = getContact();
  const profile = getProfile();
  
  const email = contact?.primary?.email || profile?.email || "";
  const phone = contact?.primary?.phone || profile?.phone || "";

  return (
    <div className="p-4 space-y-3 mt-2">
      
      {/* Floating Action Button style contact cards */}
      <a href={`tel:${phone}`} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:bg-gray-50">
        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl shrink-0"><MdCall /></div>
        <div>
          <h4 className="text-gray-900 font-medium text-base">Call Mobile</h4>
          <p className="text-gray-500 text-sm">{phone || "Not Available"}</p>
        </div>
      </a>
      
      <a href={`mailto:${email}`} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:bg-gray-50">
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl shrink-0"><MdEmail /></div>
        <div>
          <h4 className="text-gray-900 font-medium text-base">Email Me</h4>
          <p className="text-gray-500 text-sm">{email || "Not Available"}</p>
        </div>
      </a>

      <a href="https://wa.me/9816897620" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:bg-gray-50">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl shrink-0"><FaWhatsapp /></div>
        <div>
          <h4 className="text-gray-900 font-medium text-base">WhatsApp</h4>
          <p className="text-gray-500 text-sm">+91 9816897620</p>
        </div>
      </a>

      <div className="pt-4 grid grid-cols-2 gap-3">
        <a href="https://github.com/jonty1231" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
          <FaGithub className="text-2xl" />
          <span className="text-xs font-medium">GitHub</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
          <FaLinkedin className="text-2xl" />
          <span className="text-xs font-medium">LinkedIn</span>
        </a>
      </div>

    </div>
  );
};

/* =========================================================
   MAIN ANDROID COMPONENT
========================================================= */

const AndroidPortfolio = () => {
  const images = ["ios1.webp", "ios2.webp", "ios3.webp"];
  const [activeApp, setActiveApp] = useState(null);

  // Getting current date for the "At a Glance" widget
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const apps = [
    { id: 'profile', name: 'Profile', icon: <MdPerson className="text-3xl" />, color: 'bg-blue-500 text-white' },
    { id: 'skills', name: 'Skills', icon: <MdCode className="text-3xl" />, color: 'bg-orange-500 text-white' },
    { id: 'projects', name: 'Projects', icon: <MdWork className="text-3xl" />, color: 'bg-purple-500 text-white' },
    { id: 'contact', name: 'Contact', icon: <MdCall className="text-3xl" />, color: 'bg-green-500 text-white' },
  ];

  const closeApp = () => setActiveApp(null);

  return (
    <div className="md:hidden h-screen w-full overflow-hidden relative flex flex-col font-sans bg-black">
      
      {/* Background Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Swiper className="h-full w-full">
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`/${item}`} alt="wallpaper" className="h-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dark overlay for better visibility */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      <AndroidStatusBar />

      {/* Home Screen Content */}
      <div className="relative z-10 flex-1 flex flex-col pt-16 px-6">
        
        {/* At a Glance Widget (Pixel style) */}
        <div className="text-white drop-shadow-md mt-4">
          <h2 className="text-[28px] font-normal">{currentDate}</h2>
          <p className="text-lg font-normal flex items-center gap-2 mt-1">
            <span className="text-yellow-400 text-2xl">☀</span> 24°C
          </p>
        </div>

        <div className="flex-1" />

        {/* App Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {apps.map((app) => (
            <button 
              key={app.id} 
              onClick={() => setActiveApp(app.id)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md ${app.color} group-active:scale-90 transition-transform`}>
                {app.icon}
              </div>
              <span className="text-white text-[12px] font-medium drop-shadow-md tracking-wide">
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Google Search Bar Widget */}
        <div className="bg-[#F2F3F5] h-[52px] rounded-full mb-16 flex items-center px-4 shadow-lg border-2 border-white/10 mx-2">
          <MdSearch className="text-gray-500 text-2xl" />
          <div className="flex-1 px-3">
            <span className="text-gray-500 text-base font-medium">Search...</span>
          </div>
          <MdMic className="text-blue-500 text-2xl" />
        </div>
      </div>

      {/* Active App Rendering */}
      {activeApp && (
        <MaterialAppWindow title={apps.find(a => a.id === activeApp)?.name} onClose={closeApp}>
          {activeApp === 'profile' && <ProfileApp />}
          {activeApp === 'skills' && <SkillsApp />}
          {activeApp === 'projects' && <ProjectsApp />}
          {activeApp === 'contact' && <ContactApp />}
        </MaterialAppWindow>
      )}
      
      {/* Always show the bottom nav bar, it controls closing apps or just sits there on home */}
      <AndroidNavBar 
        onBack={() => activeApp ? closeApp() : null} 
        onHome={closeApp} 
      />

    </div>
  );
};

export default AndroidPortfolio;