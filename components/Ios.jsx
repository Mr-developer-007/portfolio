"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaUser,
  FaCode,
  FaBriefcase,
  FaChevronLeft,
  FaWifi,
  FaBatteryFull,
} from "react-icons/fa6";

import SkillData from "./Skill.json";
import ProjectData from "./Projects.json";
import ProfileInfo from "./Profile.json";
import ContactInfo from "./Contact.json";
import { FaExternalLinkAlt } from "react-icons/fa";

/* =========================================================
   DATA HELPERS
========================================================= */
const getProfile = () => ProfileInfo?.profile || {};
const getContact = () => ContactInfo?.contact || {};

/* =========================================================
   IOS STATUS BAR
========================================================= */
const StatusBar = () => {
  const [time, setTime] = useState("9:41");

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
    <div className="absolute top-0 left-0 w-full h-12 z-50 flex justify-between items-center px-6 text-white text-sm font-semibold pointer-events-none drop-shadow-md">
      <span>{time}</span>
      <div className="flex items-center gap-2">
        <FaWifi className="text-sm" />
        <FaBatteryFull className="text-lg" />
      </div>
    </div>
  );
};

/* =========================================================
   APP WINDOW WRAPPER
========================================================= */
const AppWindow = ({ title, onClose, children, bg = "bg-[#F2F2F7]" }) => (
  <div className={`absolute inset-0 z-40 ${bg} flex flex-col animate-in slide-in-from-bottom-8 duration-300`}>
    {/* App Header */}
    <div className="h-24 pt-12 pb-2 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between shrink-0 z-10 relative">
      <button onClick={onClose} className="text-blue-500 flex items-center gap-1 text-lg">
        <FaChevronLeft /> Back
      </button>
      <h1 className="font-semibold text-lg absolute left-1/2 -translate-x-1/2">{title}</h1>
      <div className="w-16" /> {/* Spacer */}
    </div>

    {/* App Content */}
    <div className="flex-1 overflow-y-auto pb-10">
      {children}
    </div>

    {/* Home Indicator */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-black/80 rounded-full cursor-pointer z-50 hover:scale-110 transition-transform" onClick={onClose} />
  </div>
);

/* =========================================================
   INDIVIDUAL APPS
========================================================= */

const ProfileApp = ({ onClose }) => {
  const profile = getProfile();
  
  return (
    <AppWindow title="Profile" onClose={onClose}>
      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center mt-6">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
            <img src={profile?.image || "/profile.jpeg"} alt={profile?.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-black">{profile?.name || "Vivek Pundir"}</h2>
          <p className="text-gray-500 font-medium">{profile?.professionalTitle || "Full Stack Developer"}</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">About Me</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {profile?.about || "I am a full stack developer focused on building modern, scalable and production-ready digital applications."}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm divide-y divide-gray-100">
          <div className="py-2 flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="text-green-500 font-medium">Available for work</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="text-gray-500">Experience</span>
            <span className="text-black font-medium">3+ Years</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="text-gray-500">Projects</span>
            <span className="text-black font-medium">{ProjectData?.length || 0}+ Completed</span>
          </div>
        </div>
      </div>
    </AppWindow>
  );
};

const SkillsApp = ({ onClose }) => {
  return (
    <AppWindow title="Skills" onClose={onClose}>
      <div className="p-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm grid grid-cols-3 sm:grid-cols-4 gap-4">
          {SkillData?.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm">
                {skill?.logo ? (
                  <img src={`/models/${skill.logo}`} alt={skill.name} className="w-8 h-8 object-contain" />
                ) : (
                  <FaCode className="text-gray-400 text-xl" />
                )}
              </div>
              <span className="text-[10px] text-center font-medium text-gray-700 line-clamp-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
};

const ProjectsApp = ({ onClose }) => {
  return (
    <AppWindow title="Projects" onClose={onClose}>
      <div className="p-4 space-y-4">
        {ProjectData?.map((project, index) => (
          <div key={index} className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                {project.category || "Project"}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
            
            {project.techStack && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.url && (
              <div className="pt-3 border-t border-gray-100 mt-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium text-sm flex items-center gap-2">
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </AppWindow>
  );
};

const ContactApp = ({ onClose }) => {
  const contact = getContact();
  const profile = getProfile();
  
  const email = contact?.primary?.email || profile?.email || "";
  const phone = contact?.primary?.phone || profile?.phone || "";

  return (
    <AppWindow title="Contact" onClose={onClose}>
      <div className="p-4 space-y-6 mt-4">
        
        {/* Contact Cards */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
          <a href={`tel:${phone}`} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><FaPhone /></div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-semibold text-black">{phone || "Not Available"}</p>
            </div>
          </a>
          
          <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"><FaEnvelope /></div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-semibold text-black">{email || "Not Available"}</p>
            </div>
          </a>

          <a href="https://wa.me/9816897620" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-gray-50 transition">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white"><FaWhatsapp /></div>
            <div>
              <p className="text-xs text-gray-500">WhatsApp</p>
              <p className="text-sm font-semibold text-black">+91 9816897620</p>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <h3 className="text-xs font-bold text-gray-400 uppercase px-2">Social Profiles</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
          <a href="https://github.com/jonty1231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-gray-50 transition">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white"><FaGithub /></div>
            <p className="text-sm font-semibold text-black">GitHub / jonty1231</p>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-gray-50 transition">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white"><FaLinkedin /></div>
            <p className="text-sm font-semibold text-black">LinkedIn</p>
          </a>
        </div>

      </div>
    </AppWindow>
  );
};

/* =========================================================
   MAIN IOS COMPONENT
========================================================= */

const IosPortfolio = () => {
  const images = ["ios1.webp", "ios2.webp", "ios3.webp"];
  const [activeApp, setActiveApp] = useState(null); // 'profile', 'skills', 'projects', 'contact'

  const apps = [
    { id: 'profile', name: 'Profile', icon: <FaUser className="text-3xl" />, color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 'skills', name: 'Skills', icon: <FaCode className="text-3xl" />, color: 'bg-gradient-to-br from-orange-400 to-red-500' },
    { id: 'projects', name: 'Projects', icon: <FaBriefcase className="text-3xl" />, color: 'bg-gradient-to-br from-indigo-400 to-purple-600' },
    { id: 'contact', name: 'Contact', icon: <FaPhone className="text-3xl" />, color: 'bg-gradient-to-br from-green-400 to-green-600' },
  ];

  return (
    <div className="md:hidden h-screen w-full overflow-hidden relative flex flex-col font-sans bg-black">
      
      {/* Background Wallpaper */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Swiper className="h-full w-full">
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`/${item}`} alt="wallpaper" className="h-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <StatusBar />

      {/* Home Screen Grid */}
      <div className="relative z-10 flex-1 pt-16 px-6 grid grid-cols-4 gap-x-4 gap-y-6 content-start">
        {/* You can add more apps to the grid here in the future */}
      </div>

      {/* Dock */}
      <div className="relative z-20 mx-4 mb-6 h-24 rounded-[32px] bg-white/20 backdrop-blur-xl border border-white/20 flex justify-around items-center px-4 shadow-2xl">
        {apps.map((app) => (
          <button 
            key={app.id} 
            onClick={() => setActiveApp(app.id)}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`w-[60px] h-[60px] rounded-[18px] flex items-center justify-center text-white shadow-lg ${app.color} group-active:scale-95 transition-transform`}>
              {app.icon}
            </div>
            {/* iOS dock doesn't typically show names, but you can uncomment this if you want labels */}
            {/* <span className="text-white text-[10px] font-medium drop-shadow-md">{app.name}</span> */}
          </button>
        ))}
      </div>

      {/* Active App Modals */}
      {activeApp === 'profile' && <ProfileApp onClose={() => setActiveApp(null)} />}
      {activeApp === 'skills' && <SkillsApp onClose={() => setActiveApp(null)} />}
      {activeApp === 'projects' && <ProjectsApp onClose={() => setActiveApp(null)} />}
      {activeApp === 'contact' && <ContactApp onClose={() => setActiveApp(null)} />}
      
    </div>
  );
};

export default IosPortfolio;