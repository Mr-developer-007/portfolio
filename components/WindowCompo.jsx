"use client";

import React, { useRef, useState } from "react";
import { FaArrowRight, FaCheck, FaCode, FaDatabase, FaEnvelope, FaGithub, FaLightbulb, FaPhone, FaRocket, FaServer, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { GrCheckbox } from "react-icons/gr";
import { RxDash } from "react-icons/rx";
import SkillData from "./Skill.json"
import ProjectData from "./Projects.json"
import ProfileInfo from "./Profile.json"
import ContactInfo from "./Contact.json"
import { FaExternalLinkAlt } from "react-icons/fa";


 const gets = [
    { icon: "/profile.png", title: "Profile" },
    { icon: "/task-management.png", title: "Projects" },
    { icon: "/learn.png", title: "Skills" },
    { icon: "/customer-service.png", title: "Contact" },
    { icon: "/info.png", title: "About" },
  ];
const WindowCompo = () => {
  const [showWindow, setShowwindow] = useState(false);

  // Force React to render when ref data changes
  const [, forceRender] = useState(0);

  const dataref = useRef({});

  const updateWindow = (title, data) => {
    dataref.current[title] = {
      ...dataref.current[title],
      ...data,
    };

    forceRender((prev) => prev + 1);
  };



return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-1 relative windowbg overflow-hidden">

        <StartCompo
          showWindow={showWindow}
          dataref={dataref}
          updateWindow={updateWindow}
          setShowwindow={setShowwindow}
        />

        {dataref.current?.Projects?.open && (
          <Projects
            dataref={dataref}
            updateWindow={updateWindow}
          />
        )}


         {dataref.current?.Skills?.open && (
          <Skills
            dataref={dataref}
            updateWindow={updateWindow}
          />
        )}

         {dataref.current?.Profile?.open && (
          <Profile
            dataref={dataref}
            updateWindow={updateWindow}
          />
        )}
          {dataref.current?.Contact?.open && (
          <Contact
            dataref={dataref}
            updateWindow={updateWindow}
          />
        )}
         {dataref.current?.About?.open && (
          <About
            dataref={dataref}
            updateWindow={updateWindow}
          />
        )}

      </div>

      <div className="bg-[#2562DF] w-full h-10 flex">
        <div
          onClick={() => setShowwindow(!showWindow)}
          className="h-10 flex items-center bg-[#07960c] cursor-pointer px-2 pe-7 rounded-r-xl text-white gap-2"
        >
          <img
            src="/icons8-windows-xp.svg"
            alt=""
            className="h-6"
          />

          <p className="font-semibold">
            Start
          </p>
        </div>


<div className="flex gap-2 items-center pt-1 px-4">
  {Object.entries(dataref.current)
    .filter(([_, item]) => item.open)
    .map(([title, item]) => {

const isNotActive = item.style.width =="100%" ||item.style.width =="80%"

const styledata = isNotActive ? { width: "0%",height: "0%",} :{ width: "80%",height: "80%",}


      return (
        <div
          key={title}
          onClick={() => {
            updateWindow(title, {
              style: {
                ...item.style,
               ...styledata
              },
            });
          }}
          className= {`flex h-full px-4 gap-1 rounded-t-sm cursor-pointer  items-center ${isNotActive ?"bg-[#d5d0d0]":"bg-[#dc9292]"}`}
        >
          <img
            src={gets[item.index].icon}
            alt=""
            className="h-6"
          />

          <p>{title}</p>
        </div>
      );
    })}
</div>



      </div>
    </div>
  );
};

export default WindowCompo;


const StartCompo = ({
  showWindow,
  dataref,
  updateWindow,setShowwindow
}) => {
 

  const handleOpen = (title,index) => {
    const maxZ =
      Math.max(
        0,
        ...Object.values(dataref.current).map(
          (item) => item?.style?.zIndex || 0
        )
      ) + 1;

    updateWindow(title, {
      open: true,
     index,
      w: 80,
      h: 80,

      style: {
        width: "80%",
        height: "80%",
        zIndex: maxZ,
      },
    });
  };

  return (

    <div className={` ${showWindow?"w-full h-full relative z-40":""}`} onClick={()=>setShowwindow(false)}>
    <div
      className={`
        absolute
        bottom-0
        left-0
        z-50
        rounded-tr-2xl
        border-4
        border-[#3A71BE]
        bg-[#387EE1]
        shadow-[0_0_30px_rgba(0,0,0,0.35)]
        overflow-hidden
        duration-200
        origin-bottom-left
        transition-transform

        ${showWindow ? "scale-100" : "scale-0"}
      `}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 p-2">
          <img
            src="/linux.png"
            alt="Linux"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            Welcome
          </p>

          <p className="font-serif text-2xl font-semibold text-white">
            Linux is better
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[230px_1fr] bg-white">

        <div className="border-r border-gray-200 bg-gray-50 p-3">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Programs
          </p>

          <div className="space-y-1">
            {gets.map((item,index) => (
              <button
                key={item.title}
                onClick={() => {handleOpen(item.title,index),setShowwindow(false)}}
                className="
                  group
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  transition
                  hover:bg-[#387EE1]
                  hover:text-white
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm group-hover:bg-white/20">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <span className="text-sm font-medium">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

        </div>

        <div className="bg-white p-5">
          Quick Access
        </div>

      </div>

      <div className="flex items-center justify-between border-t border-blue-400 bg-[#286bc5] px-4 py-2">
        <div className="flex items-center gap-2 text-xs text-white/80">
          <span>🪟</span>
          <span>Window Desktop</span>
        </div>
      </div>
    </div>
    </div>
  );
};




const Skills = ({ dataref, updateWindow }) => {
  const skillsData = dataref.current?.Skills;

  const handleMaximize = () => {
    const currentZ = skillsData?.style?.zIndex || 1;
    const isMaximized = skillsData?.style?.width === "100%";

    const hw = isMaximized
      ? {
          width: "80%",
          height: "80%",
        }
      : {
          width: "100%",
          height: "100%",
        };

    updateWindow("Skills", {
      style: {
        ...skillsData?.style,
        ...hw,
        zIndex: currentZ,
      },
    });
  };

  const handleDown = () => {
    const currentZ = skillsData?.style?.zIndex || 1;

    updateWindow("Skills", {
      style: {
        ...skillsData?.style,
        width: "0%",
        height: "0%",
        zIndex: currentZ,
      },
    });
  };

  const handleClose = () => {
    updateWindow("Skills", {
      open: false,
    });
  };

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        origin-bottom-left
        overflow-hidden
        duration-300
        transition-all
        bg-[#f1f1f1]
        border
        border-gray-400
      "
      style={skillsData?.style}
    >
      {/* ================= HEADER ================= */}

      <div
        className="
          bg-[#0057ED]
          border-t-2
          border-[#0140ad]
          flex
          justify-between
          items-center
          w-full
          p-2
          text-white
          shrink-0
        "
      >
        {/* TITLE */}

        <div className="flex gap-3 items-center min-w-0">

          <div
            className="
              h-6
              w-6
              bg-white/10
              border
              border-white/20
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <img
              src="/learn.png"
              alt="Skills"
              className="h-4 w-4 object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="font-medium text-sm leading-none">
              Skills
            </p>

            <p className="text-[8px] text-blue-100 mt-1">
              Technical Expertise
            </p>
          </div>

        </div>

        {/* WINDOW BUTTONS */}

        <div className="flex gap-1 items-center">

          <button
            onClick={handleDown}
            className="
              hover:bg-blue-600
              transition
              active:scale-90
            "
          >
            <RxDash className="text-2xl border" />
          </button>

          <button
            onClick={handleMaximize}
            className="
              hover:bg-blue-600
              transition
              active:scale-90
            "
          >
            <GrCheckbox className="text-2xl border p-1" />
          </button>

          <button
            onClick={handleClose}
            className="
              hover:bg-red-600
              transition
              active:scale-90
            "
          >
            <FaXmark className="text-2xl border p-1" />
          </button>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex-1 overflow-auto bg-[#f3f3f3]">

        {/* TOP INTRO */}

        <div
          className="
            bg-white
            border-b
            border-gray-300
            px-5
            py-4
          "
        >

          <div className="flex items-center justify-between gap-4">

            <div>

              <h1
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  font-serif
                  text-gray-800
                "
              >
                My Skills
              </h1>

              <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                Technologies and tools I use to build modern
                web applications.
              </p>

            </div>

            {/* SKILL COUNT */}

            <div
              className="
                shrink-0
                bg-blue-50
                border
                border-blue-100
                px-3
                py-2
                text-center
              "
            >
              <p className="text-lg font-bold text-[#0057ED]">
                {SkillData.length}
              </p>

              <p className="text-[8px] uppercase tracking-wider text-gray-400">
                Skills
              </p>
            </div>

          </div>

        </div>

        {/* SKILLS */}

        <div className="p-4 md:p-5">

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
              gap-3
            "
          >

            {SkillData.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  bg-white
                  border
                  border-gray-300
                  p-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  min-h-[150px]
                  cursor-default
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0057ED]
                  hover:shadow-lg
                "
              >

                {/* TOP BLUE LINE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-0
                    h-[2px]
                    bg-[#0057ED]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />

                {/* ICON BACKGROUND */}

                <div
                  className="
                    w-20
                    h-20
                    flex
                    items-center
                    justify-center
                    bg-gray-50
                    border
                    border-gray-200
                    group-hover:bg-blue-50
                    group-hover:border-blue-100
                    transition-all
                    duration-300
                  "
                >

                  <img
                    src={`/models/${item.logo}`}
                    alt={item.name}
                    className="
                      h-14
                      w-14
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </div>

                {/* NAME */}

                <p
                  className="
                    mt-3
                    text-xs
                    md:text-sm
                    font-bold
                    font-serif
                    text-gray-700
                    text-center
                    group-hover:text-[#0057ED]
                    transition
                  "
                >
                  {item.name}
                </p>

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    top-2
                    right-2
                    text-[8px]
                    text-gray-300
                    group-hover:text-blue-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* BOTTOM INFO */}

        <div className="px-4 md:px-5 pb-5">

          <div
            className="
              bg-white
              border
              border-gray-300
              p-4
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-3
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <div className="w-1 h-5 bg-[#0057ED]" />

                <h2 className="font-bold font-serif text-sm">
                  Full Stack Development
                </h2>

              </div>

              <p className="text-[10px] text-gray-500 mt-2 leading-relaxed">
                From responsive interfaces to backend APIs,
                databases and production deployment, I work
                across the complete development stack.
              </p>

            </div>

            <div className="flex flex-wrap gap-1.5">

              {[
                "Frontend",
                "Backend",
                "Database",
                "API",
                "Deployment",
                "ios & android"
              ].map((item, index) => (

                <span
                  key={index}
                  className="
                    text-[9px]
                    px-2
                    py-1
                    bg-blue-50
                    text-blue-700
                    border
                    border-blue-100
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};





const Projects = ({ dataref, updateWindow }) => {
  const projectsData = dataref.current?.Projects;

  const handleMaximize = () => {
    const currentZ = projectsData?.style?.zIndex || 1;
    const isMaximized = projectsData?.style?.width === "100%";

    const hw = isMaximized
      ? {
          width: "80%",
          height: "80%",
        }
      : {
          width: "100%",
          height: "100%",
        };

    updateWindow("Projects", {
      style: {
        ...projectsData?.style,
        ...hw,
        zIndex: currentZ,
      },
    });
  };

  const handleDown = () => {
    const currentZ = projectsData?.style?.zIndex || 1;

    updateWindow("Projects", {
      style: {
        ...projectsData?.style,
        width: "0%",
        height: "0%",
        zIndex: currentZ,
      },
    });
  };

  const handleClose = () => {
    updateWindow("Projects", {
      open: false,
    });
  };

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        origin-bottom-left
        overflow-hidden
        duration-300
        transition-all
        bg-[#f1f1f1]
        border
        border-gray-400
      "
      style={projectsData?.style}
    >
      {/* =====================================================
                            HEADER
      ===================================================== */}

      <div
        className="
          bg-[#0057ED]
          border-t-2
          border-[#0140ad]
          flex
          justify-between
          items-center
          w-full
          p-2
          text-white
          shrink-0
        "
      >
        {/* TITLE */}

        <div className="flex gap-3 items-center">

          <div
            className="
              w-6
              h-6
              bg-white/10
              border
              border-white/20
              flex
              items-center
              justify-center
            "
          >
            <img
              src="/task-management.png"
              alt="Projects"
              className="w-4 h-4 object-contain"
            />
          </div>

          <div>

            <p className="font-medium text-sm leading-none">
              Projects
            </p>

            <p className="text-[8px] text-blue-100 mt-1">
              My Work & Applications
            </p>

          </div>

        </div>

        {/* WINDOW BUTTONS */}

        <div className="flex gap-1 items-center">

          <button
            onClick={handleDown}
            className="
              hover:bg-blue-600
              transition
              active:scale-90
            "
          >
            <RxDash className="text-2xl border" />
          </button>

          <button
            onClick={handleMaximize}
            className="
              hover:bg-blue-600
              transition
              active:scale-90
            "
          >
            <GrCheckbox className="text-2xl border p-1" />
          </button>

          <button
            onClick={handleClose}
            className="
              hover:bg-red-600
              transition
              active:scale-90
            "
          >
            <FaXmark className="text-2xl border p-1" />
          </button>

        </div>

      </div>


      {/* =====================================================
                            CONTENT
      ===================================================== */}

      <div className="flex-1 overflow-auto bg-[#f3f3f3]">

        {/* PAGE INTRO */}

        <div
          className="
            bg-white
            border-b
            border-gray-300
            px-5
            py-4
          "
        >

          <div className="flex items-center justify-between gap-4">

            <div>

              <h1
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  font-serif
                  text-gray-800
                "
              >
                My Projects
              </h1>

              <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                A collection of applications and systems I have
                designed and developed.
              </p>

            </div>


            {/* PROJECT COUNT */}

            <div
              className="
                shrink-0
                bg-blue-50
                border
                border-blue-100
                px-4
                py-2
                text-center
              "
            >

              <p className="text-lg font-bold text-[#0057ED]">
                {ProjectData?.length || 0}
              </p>

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-wider
                  text-gray-400
                "
              >
                Projects
              </p>

            </div>

          </div>

        </div>


        {/* PROJECT GRID */}

        <div
          className="
            p-4
            md:p-5
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >

          {ProjectData?.map((item, index) => (

            <div
              key={item.id || index}
              className="
                group
                [perspective:1200px]
                h-[360px]
                w-full
              "
            >

              {/* =================================================
                              FLIP CONTAINER
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  h-full
                  transition-transform
                  duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* =================================================
                              FRONT SIDE
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    bg-white
                    border
                    border-gray-300
                    overflow-hidden
                    [backface-visibility:hidden]
                    flex
                    flex-col
                  "
                >

                  {/* BLUE TOP */}

                  <div className="h-1 bg-[#0057ED] shrink-0" />

                  {/* PROJECT IMAGE / ICON */}

                  <div
                    className="
                      h-36
                      bg-gradient-to-br
                      from-blue-50
                      to-gray-50
                      border-b
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      relative
                      overflow-hidden
                    "
                  >

                    {/* Decorative circles */}

                    <div
                      className="
                        absolute
                        -top-10
                        -right-10
                        w-32
                        h-32
                        rounded-full
                        bg-blue-100/50
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-12
                        -left-12
                        w-32
                        h-32
                        rounded-full
                        bg-gray-100
                      "
                    />

                    <div
                      className="
                        relative
                        w-20
                        h-20
                        bg-white
                        border
                        border-gray-200
                        shadow-sm
                        flex
                        items-center
                        justify-center
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    >

                      <img
                        src="/task-management.png"
                        alt=""
                        className="w-11 h-11 object-contain"
                      />

                    </div>


                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        top-3
                        right-3
                        text-[9px]
                        font-mono
                        text-gray-400
                        bg-white
                        border
                        border-gray-200
                        px-2
                        py-1
                      "
                    >
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* FRONT CONTENT */}

                  <div className="p-4 flex-1 flex flex-col">

                    {/* CATEGORY */}

                    <div className="flex items-center justify-between gap-2">

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-wider
                          font-bold
                          text-[#0057ED]
                          bg-blue-50
                          border
                          border-blue-100
                          px-2
                          py-1
                        "
                      >
                        {item.category}
                      </span>

                      <span className="text-[8px] text-gray-400">
                        {item.type}
                      </span>

                    </div>


                    {/* TITLE */}

                    <h2
                      className="
                        text-lg
                        font-bold
                        font-serif
                        text-gray-800
                        mt-3
                        line-clamp-1
                        group-hover:text-[#0057ED]
                        transition-colors
                      "
                    >
                      {item.title}
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        text-[10px]
                        text-gray-500
                        leading-relaxed
                        mt-2
                        line-clamp-3
                      "
                    >
                      {item.description}
                    </p>


                    {/* TECH STACK */}

                    <div className="flex flex-wrap gap-1.5 mt-3">

                      {item.techStack
                        ?.slice(0, 4)
                        .map((tech, techIndex) => (

                          <span
                            key={techIndex}
                            className="
                              text-[8px]
                              px-2
                              py-1
                              bg-gray-50
                              border
                              border-gray-200
                              text-gray-600
                            "
                          >
                            {tech}
                          </span>

                        ))}

                      {item.techStack?.length > 4 && (

                        <span
                          className="
                            text-[8px]
                            px-2
                            py-1
                            bg-gray-800
                            text-white
                          "
                        >
                          +{item.techStack.length - 4}
                        </span>

                      )}

                    </div>


                    {/* FRONT FOOTER */}

                    <div
                      className="
                        mt-auto
                        pt-3
                        border-t
                        border-gray-100
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div className="flex items-center gap-2">

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-green-500
                          "
                        />

                        <span className="text-[9px] text-gray-400">
                          Full Stack Project
                        </span>

                      </div>

                      <span
                        className="
                          text-[9px]
                          font-bold
                          text-[#0057ED]
                        "
                      >
                        HOVER TO VIEW →
                      </span>

                    </div>

                  </div>

                </div>


                {/* =================================================
                              BACK SIDE
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    bg-white
                    border
                    border-[#0057ED]
                    overflow-hidden
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                    flex
                    flex-col
                  "
                >

                  {/* BACK HEADER */}

                  <div
                    className="
                      bg-[#0057ED]
                      text-white
                      p-3
                      shrink-0
                    "
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div
                          className="
                            w-8
                            h-8
                            bg-white/10
                            border
                            border-white/20
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <img
                            src="/task-management.png"
                            alt=""
                            className="w-5 h-5"
                          />
                        </div>

                        <div>

                          <p className="font-bold text-sm">
                            {item.title}
                          </p>

                          <p className="text-[8px] text-blue-100">
                            Project Details
                          </p>

                        </div>

                      </div>

                      <span className="text-[9px] opacity-70">
                        #{String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>


                  {/* BACK CONTENT */}

                  <div
                    className="
                      flex-1
                      overflow-y-auto
                      p-4
                    "
                  >

                    {/* ROLE + CATEGORY */}

                    <div className="grid grid-cols-2 gap-2 mb-3">

                      <div
                        className="
                          bg-gray-50
                          border
                          border-gray-200
                          p-2
                        "
                      >

                        <p className="text-[8px] text-gray-400 uppercase">
                          Category
                        </p>

                        <p className="text-[10px] font-semibold mt-1">
                          {item.category || "Web Application"}
                        </p>

                      </div>


                      <div
                        className="
                          bg-gray-50
                          border
                          border-gray-200
                          p-2
                        "
                      >

                        <p className="text-[8px] text-gray-400 uppercase">
                          Role
                        </p>

                        <p className="text-[10px] font-semibold mt-1">
                          {item.role || "Full Stack Developer"}
                        </p>

                      </div>

                    </div>


                    {/* ABOUT */}

                    <div className="mb-3">

                      <div className="flex items-center gap-2 mb-1">

                        <div className="w-1 h-4 bg-[#0057ED]" />

                        <p className="text-[9px] font-bold uppercase tracking-wider">
                          About Project
                        </p>

                      </div>

                      <p
                        className="
                          text-[9px]
                          text-gray-500
                          leading-relaxed
                        "
                      >
                        {item.description}
                      </p>

                    </div>


                    {/* TECH STACK */}

                    <div className="mb-3">

                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wider
                          mb-2
                        "
                      >
                        Technology Stack
                      </p>

                      <div className="flex flex-wrap gap-1">

                        {item.techStack?.map((tech, i) => (

                          <span
                            key={i}
                            className="
                              text-[8px]
                              px-2
                              py-1
                              bg-blue-50
                              text-blue-700
                              border
                              border-blue-100
                            "
                          >
                            {tech}
                          </span>

                        ))}

                      </div>

                    </div>


                    {/* ARCHITECTURE */}

                    {(item.frontendArchitecture ||
                      item.backendArchitecture ||
                      item.databaseArchitecture) && (

                      <div className="mb-3">

                        <p
                          className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            mb-2
                          "
                        >
                          Architecture
                        </p>

                        <div className="border border-gray-200">

                          {item.frontendArchitecture && (

                            <div className="flex border-b border-gray-200">

                              <div
                                className="
                                  w-20
                                  shrink-0
                                  bg-gray-50
                                  p-2
                                  text-[8px]
                                  font-bold
                                "
                              >
                                Frontend
                              </div>

                              <div className="p-2 text-[8px] text-gray-500">
                                {item.frontendArchitecture}
                              </div>

                            </div>

                          )}


                          {item.backendArchitecture && (

                            <div className="flex border-b border-gray-200">

                              <div
                                className="
                                  w-20
                                  shrink-0
                                  bg-gray-50
                                  p-2
                                  text-[8px]
                                  font-bold
                                "
                              >
                                Backend
                              </div>

                              <div className="p-2 text-[8px] text-gray-500">
                                {item.backendArchitecture}
                              </div>

                            </div>

                          )}


                          {item.databaseArchitecture && (

                            <div className="flex">

                              <div
                                className="
                                  w-20
                                  shrink-0
                                  bg-gray-50
                                  p-2
                                  text-[8px]
                                  font-bold
                                "
                              >
                                Database
                              </div>

                              <div className="p-2 text-[8px] text-gray-500">
                                {item.databaseArchitecture}
                              </div>

                            </div>

                          )}

                        </div>

                      </div>

                    )}


                    {/* FEATURES */}

                    {item.features?.length > 0 && (

                      <div className="mb-3">

                        <p
                          className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            mb-2
                          "
                        >
                          Key Features
                        </p>

                        <div className="grid grid-cols-2 gap-x-3 gap-y-1">

                          {item.features
                            .slice(0, 8)
                            .map((feature, i) => (

                              <div
                                key={i}
                                className="
                                  flex
                                  gap-1
                                  items-start
                                  text-[8px]
                                  text-gray-500
                                "
                              >

                                <span className="text-green-500 font-bold">
                                  ✓
                                </span>

                                <span>
                                  {feature}
                                </span>

                              </div>

                            ))}

                        </div>

                      </div>

                    )}


                    {/* SERVICES */}

                    <div className="grid grid-cols-2 gap-2 mb-3">

                      {item.authentication && (

                        <div className="border border-gray-200 p-2">

                          <p className="text-[8px] text-gray-400">
                            Authentication
                          </p>

                          <p className="text-[9px] font-semibold mt-1">
                            {item.authentication}
                          </p>

                        </div>

                      )}


                      {item.paymentGateway && (

                        <div className="border border-gray-200 p-2">

                          <p className="text-[8px] text-gray-400">
                            Payment
                          </p>

                          <p className="text-[9px] font-semibold mt-1">
                            {item.paymentGateway}
                          </p>

                        </div>

                      )}

                    </div>

                  </div>


                  {/* BACK FOOTER */}

                  <div
                    className="
                      p-3
                      border-t
                      border-gray-200
                      flex
                      items-center
                      justify-between
                      gap-2
                      shrink-0
                      bg-gray-50
                    "
                  >

                    <span
                      className="
                        text-[8px]
                        text-gray-400
                        truncate
                      "
                    >
                      {item.url || "Project Preview"}
                    </span>


                    {item.url && (

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          shrink-0
                          bg-[#0057ED]
                          text-white
                          px-3
                          py-2
                          text-[9px]
                          font-bold
                          hover:bg-[#0140ad]
                          transition
                        "
                      >
                        OPEN PROJECT ↗
                      </a>

                    )}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
                          BOTTOM SECTION
        ===================================================== */}

        <div className="px-4 md:px-5 pb-5">

          <div
            className="
              bg-white
              border
              border-gray-300
              p-4
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-4
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <div className="w-1 h-5 bg-[#0057ED]" />

                <h2 className="font-bold font-serif text-sm">
                  Full Stack Projects
                </h2>

              </div>

              <p
                className="
                  text-[10px]
                  text-gray-500
                  leading-relaxed
                  mt-2
                  max-w-xl
                "
              >
                I build complete digital products covering
                frontend interfaces, backend APIs, databases,
                authentication, integrations and deployment.
              </p>

            </div>


            <div className="flex flex-wrap gap-1.5">

              {[
                "Next.js",
                "React",
                "Node.js",
                "MongoDB",
                "REST API",
                "Deployment",
                "IOS & Android"
              ].map((tech, index) => (

                <span
                  key={index}
                  className="
                    text-[8px]
                    px-2
                    py-1
                    bg-blue-50
                    text-blue-700
                    border
                    border-blue-100
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};




const Profile = ({ dataref, updateWindow }) => {
  const windowData = dataref.current?.Profile;

  const profileData = ProfileInfo?.profile;

  const handleMaximize = () => {
    const currentZ = windowData?.style?.zIndex || 1;
    const isMaximized = windowData?.style?.width === "100%";

    const hw = isMaximized
      ? {
          width: "80%",
          height: "80%",
        }
      : {
          width: "100%",
          height: "100%",
        };

    updateWindow("Profile", {
      style: {
        ...windowData?.style,
        ...hw,
        zIndex: currentZ,
      },
    });
  };

  const handleDown = () => {
    const currentZ = windowData?.style?.zIndex || 1;

    updateWindow("Profile", {
      style: {
        ...windowData?.style,
        width: "0%",
        height: "0%",
        zIndex: currentZ,
      },
    });
  };

  const handleClose = () => {
    updateWindow("Profile", {
      open: false,
    });
  };

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        origin-bottom-left
        overflow-hidden
        duration-300
        transition-all
        bg-white
      "
      style={windowData?.style}
    >
      {/* ================= HEADER ================= */}

      <div
        className="
          bg-[#0057ED]
          border-t-2
          border-[#0140ad]
          flex
          justify-between
          items-center
          w-full
          p-2
          text-white
          shrink-0
        "
      >
        <div className="flex gap-3 items-center">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="h-5 w-5 object-contain"
          />

          <p className="font-medium">
            Profile
          </p>
        </div>

        <div className="flex gap-1 items-center">

          <button
            onClick={handleDown}
            className="hover:bg-blue-600"
          >
            <RxDash className="text-2xl border" />
          </button>

          <button
            onClick={handleMaximize}
            className="hover:bg-blue-600"
          >
            <GrCheckbox className="text-2xl border p-1" />
          </button>

          <button
            onClick={handleClose}
            className="hover:bg-red-600"
          >
            <FaXmark className="text-2xl border p-1" />
          </button>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex-1 bg-[#f1f1f1] overflow-auto">

        <div className="p-5">

          {/* ================= PROFILE HERO ================= */}

          <div
            className="
              bg-white
              border
              border-gray-300
              p-5
              flex
              flex-col
              md:flex-row
              gap-5
              items-center
              md:items-start
              shadow-sm
            "
          >

            {/* IMAGE */}

            <div
              className="
                shrink-0
                w-28
                h-28
                border-2
                border-gray-300
                bg-gray-100
                p-1
              "
            >
              <img
                src={profileData?.image}
                alt={profileData?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* BASIC INFO */}

            <div className="flex-1 text-center md:text-left">

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  items-center
                  justify-center
                  md:justify-start
                "
              >
                <h1
                  className="
                    text-2xl
                    font-bold
                    font-serif
                    text-gray-800
                  "
                >
                  {profileData?.name}
                </h1>

                <span
                  className="
                    text-[9px]
                    bg-green-100
                    text-green-700
                    border
                    border-green-200
                    px-2
                    py-1
                    rounded
                  "
                >
                  AVAILABLE
                </span>
              </div>

              <p className="text-sm text-[#0057ED] font-semibold mt-1">
                {profileData?.professionalTitle}
              </p>

              <p
                className="
                  text-xs
                  text-gray-500
                  leading-relaxed
                  mt-3
                  max-w-2xl
                "
              >
                {profileData?.shortAbout}
              </p>

              {/* CONTACT */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  justify-center
                  md:justify-start
                  mt-4
                "
              >

                <a
                  href={`mailto:${profileData?.email}`}
                  className="
                    text-[10px]
                    bg-gray-50
                    border
                    border-gray-300
                    px-3
                    py-2
                    hover:bg-blue-50
                    hover:border-blue-300
                  "
                >
                  ✉ {profileData?.email}
                </a>

                <a
                  href={`tel:${profileData?.phone}`}
                  className="
                    text-[10px]
                    bg-gray-50
                    border
                    border-gray-300
                    px-3
                    py-2
                    hover:bg-blue-50
                    hover:border-blue-300
                  "
                >
                  ☎ {profileData?.phone}
                </a>

              </div>

            </div>
          </div>

          {/* ================= ABOUT ================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                About Me
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-4
              "
            >
              <p
                className="
                  text-xs
                  text-gray-600
                  leading-6
                "
              >
                {profileData?.about}
              </p>
            </div>

          </div>

          {/* ================= EXPERIENCE + EDUCATION ================= */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-5
              mt-5
            "
          >

            {/* EXPERIENCE */}

            <div className="lg:col-span-2">

              <div className="flex items-center gap-2 mb-2">

                <div className="w-1 h-5 bg-[#0057ED]" />

                <h2 className="font-bold font-serif">
                  Experience
                </h2>

              </div>

              <div className="space-y-3">

                {profileData?.experience?.jobs?.map((job) => (

                  <div
                    key={job.id}
                    className="
                      bg-white
                      border
                      border-gray-300
                      p-4
                      hover:border-[#0057ED]
                      hover:shadow-sm
                      transition
                    "
                  >

                    {/* JOB HEADER */}

                    <div className="flex justify-between gap-3">

                      <div>

                        <h3 className="font-bold text-sm">
                          {job.role}
                        </h3>

                        <p className="text-xs text-[#0057ED] font-semibold mt-1">
                          {job.company}
                        </p>

                        <p className="text-[9px] text-gray-400 mt-1">
                          {job.type}
                        </p>

                      </div>

                      <span
                        className="
                          shrink-0
                          h-fit
                          text-[9px]
                          bg-gray-100
                          border
                          border-gray-200
                          px-2
                          py-1
                        "
                      >
                        {job.duration}
                      </span>

                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        text-[11px]
                        text-gray-500
                        leading-relaxed
                        mt-3
                      "
                    >
                      {job.description}
                    </p>

                    {/* RESPONSIBILITIES */}

                    {job.responsibilities?.length > 0 && (

                      <div className="mt-3">

                        <p
                          className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-gray-400
                            mb-2
                          "
                        >
                          Responsibilities
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">

                          {job.responsibilities.map(
                            (responsibility, index) => (

                              <div
                                key={index}
                                className="
                                  flex
                                  gap-1
                                  text-[9px]
                                  text-gray-600
                                "
                              >
                                <span className="text-green-500">
                                  ✓
                                </span>

                                <span>
                                  {responsibility}
                                </span>
                              </div>

                            )
                          )}

                        </div>

                      </div>

                    )}

                    {/* TECHNOLOGIES */}

                    {job.technologies?.length > 0 && (

                      <div className="flex flex-wrap gap-1 mt-4">

                        {job.technologies.map(
                          (tech, index) => (

                            <span
                              key={index}
                              className="
                                text-[9px]
                                bg-blue-50
                                text-blue-700
                                border
                                border-blue-100
                                px-2
                                py-1
                                rounded
                              "
                            >
                              {tech}
                            </span>

                          )
                        )}

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* EDUCATION */}

            <div>

              <div className="flex items-center gap-2 mb-2">

                <div className="w-1 h-5 bg-[#0057ED]" />

                <h2 className="font-bold font-serif">
                  Education
                </h2>

              </div>

              <div className="space-y-3">

                {profileData?.education?.map(
                  (education, index) => (

                    <div
                      key={index}
                      className="
                        bg-white
                        border
                        border-gray-300
                        p-4
                        hover:border-[#0057ED]
                        transition
                      "
                    >

                      <div
                        className="
                          w-12
                          h-12
                          bg-blue-50
                          border
                          border-blue-100
                          flex
                          items-center
                          justify-center
                          mb-3
                        "
                      >
                        <span className="font-bold text-[#0057ED]">
                          {education.shortName}
                        </span>
                      </div>

                      <p className="text-xs text-gray-400">
                        {education.level}
                      </p>

                      <h3 className="font-bold mt-1">
                        {education.degree}
                      </h3>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* ================= SKILLS ================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Technical Skills
              </h2>

            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-3
              "
            >

              {Object.entries(
                profileData?.skills || {}
              ).map(([category, skills]) => (

                <div
                  key={category}
                  className="
                    bg-white
                    border
                    border-gray-300
                    p-4
                    hover:border-[#0057ED]
                    hover:shadow-sm
                    transition
                  "
                >

                  <h3
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      font-bold
                      text-[#0057ED]
                      mb-3
                    "
                  >
                    {category.replace(
                      /([A-Z])/g,
                      " $1"
                    )}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">

                    {skills?.map(
                      (skill, index) => (

                        <span
                          key={index}
                          className="
                            text-[9px]
                            px-2
                            py-1
                            bg-gray-50
                            border
                            border-gray-200
                            text-gray-600
                            rounded
                            hover:bg-blue-50
                            hover:text-blue-700
                            hover:border-blue-200
                            transition
                          "
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* ================= SERVICES ================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                What I Can Build
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-4
              "
            >

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  lg:grid-cols-4
                  gap-2
                "
              >

                {profileData?.services?.map(
                  (service, index) => (

                    <div
                      key={index}
                      className="
                        border
                        border-gray-200
                        bg-gray-50
                        p-3
                        text-[10px]
                        text-gray-600
                        hover:bg-blue-50
                        hover:border-blue-200
                        hover:text-blue-700
                        transition
                      "
                    >
                      <span className="text-[#0057ED] mr-1">
                        ▸
                      </span>

                      {service}

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* ================= HIGHLIGHTS ================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Highlights
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-4
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  gap-2
                "
              >

                {profileData?.highlights?.map(
                  (highlight, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        text-gray-600
                        border-b
                        border-gray-100
                        pb-2
                      "
                    >

                      <span
                        className="
                          w-5
                          h-5
                          shrink-0
                          bg-green-50
                          border
                          border-green-100
                          text-green-600
                          flex
                          items-center
                          justify-center
                          rounded-full
                        "
                      >
                        ✓
                      </span>

                      {highlight}

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* ================= DEVELOPMENT APPROACH ================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Development Approach
              </h2>

            </div>

            <div className="bg-white border border-gray-300 p-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

                {profileData?.developmentApproach?.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="
                        p-3
                        bg-gray-50
                        border
                        border-gray-200
                        text-[10px]
                        text-gray-600
                        hover:bg-blue-50
                        hover:border-blue-200
                        transition
                      "
                    >
                      <span className="text-[#0057ED] mr-1">
                        ✓
                      </span>

                      {item}

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* ================= CONTACT ================= */}

          <div
            className="
              mt-5
              bg-[#0057ED]
              text-white
              p-4
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-3
            "
          >

            <div>

              <p className="font-bold text-sm">
                Let's build something great.
              </p>

              <p className="text-[10px] text-blue-100 mt-1">
                {profileData?.professionalTitle}
              </p>

            </div>

            <div className="flex gap-2">

              <a
                href={`mailto:${profileData?.email}`}
                className="
                  bg-white
                  text-[#0057ED]
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  hover:bg-gray-100
                "
              >
                CONTACT ME
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};





const Contact = ({ dataref, updateWindow }) => {
  const windowData = dataref.current?.Contact;
  const contactData = ContactInfo?.contact;

  const handleMaximize = () => {
    const currentZ = windowData?.style?.zIndex || 1;
    const isMaximized = windowData?.style?.width === "100%";

    updateWindow("Contact", {
      style: {
        ...windowData?.style,
        width: isMaximized ? "80%" : "100%",
        height: isMaximized ? "80%" : "100%",
        zIndex: currentZ,
      },
    });
  };

  const handleDown = () => {
    const currentZ = windowData?.style?.zIndex || 1;

    updateWindow("Contact", {
      style: {
        ...windowData?.style,
        width: "0%",
        height: "0%",
        zIndex: currentZ,
      },
    });
  };

  const handleClose = () => {
    updateWindow("Contact", {
      open: false,
    });
  };

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        overflow-hidden
        origin-bottom-left
        transition-all
        duration-300
        bg-[#eef1f5]
        border
        border-gray-500
        shadow-[8px_8px_0px_rgba(0,0,0,0.25)]
      "
      style={windowData?.style}
    >

      {/* =====================================================
                            WINDOW HEADER
      ===================================================== */}

      <div
        className="
          h-10
          shrink-0
          px-2
          bg-[#0057ED]
          border-t-2
          border-[#3980ff]
          border-b
          border-[#003fae]
          text-white
          flex
          items-center
          justify-between
        "
      >

        {/* TITLE */}

        <div className="flex items-center gap-2 min-w-0">

          <div
            className="
              w-6
              h-6
              bg-white
              border
              border-blue-300
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <img
              src="/customer-service.png"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </div>

          <span className="text-sm font-medium truncate">
            Contact — {contactData?.name}
          </span>

        </div>


        {/* WINDOW BUTTONS */}

        <div className="flex items-center gap-1">

          <button
            onClick={handleDown}
            className="
              w-8
              h-7
              flex
              items-center
              justify-center
              border
              border-blue-300
              hover:bg-blue-600
              transition
            "
          >
            <RxDash className="text-xl" />
          </button>


          <button
            onClick={handleMaximize}
            className="
              w-8
              h-7
              flex
              items-center
              justify-center
              border
              border-blue-300
              hover:bg-blue-600
              transition
            "
          >
            <GrCheckbox className="text-lg" />
          </button>


          <button
            onClick={handleClose}
            className="
              w-8
              h-7
              flex
              items-center
              justify-center
              border
              border-blue-300
              hover:bg-red-600
              transition
            "
          >
            <FaXmark className="text-lg" />
          </button>

        </div>

      </div>


      {/* =====================================================
                              CONTENT
      ===================================================== */}

      <div className="flex-1 overflow-auto">

        <div className="max-w-6xl mx-auto p-4 md:p-6">


          {/* =================================================
                              HERO
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-white
              border
              border-gray-300
              shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
              hover:shadow-[7px_7px_0px_rgba(0,0,0,0.18)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="h-1 bg-[#0057ED]" />

            <div className="p-5 md:p-7">

              <div className="flex flex-col md:flex-row gap-6">

                {/* ICON */}

                <div
                  className="
                    w-20
                    h-20
                    shrink-0
                    bg-blue-50
                    border
                    border-blue-200
                    flex
                    items-center
                    justify-center
                    text-[#0057ED]
                    text-4xl
                    hover:bg-[#0057ED]
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  ✉
                </div>


                {/* HERO CONTENT */}

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h1
                      className="
                        text-2xl
                        md:text-3xl
                        font-black
                        font-serif
                        text-gray-800
                      "
                    >
                      {contactData?.name}
                    </h1>

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-wider
                        font-bold
                        px-2
                        py-1
                        bg-green-100
                        text-green-700
                        border
                        border-green-300
                      "
                    >
                      {contactData?.availability?.status}
                    </span>

                  </div>


                  <p className="text-sm font-bold text-[#0057ED] mt-1">
                    {contactData?.title}
                  </p>


                  <p className="text-xs text-gray-500 leading-6 mt-3 max-w-2xl">
                    {contactData?.availability?.message}
                  </p>


                  {/* QUICK CONTACT */}

                  <div className="flex flex-wrap gap-2 mt-5">

                    <a
                      href={`mailto:${contactData?.primary?.email}`}
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        bg-gray-50
                        border
                        border-gray-300
                        text-[10px]
                        text-gray-600
                        hover:bg-blue-50
                        hover:border-[#0057ED]
                        hover:text-[#0057ED]
                        transition
                      "
                    >
                      ✉ {contactData?.primary?.email}
                    </a>


                    <a
                      href={`tel:${contactData?.primary?.phone}`}
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        bg-gray-50
                        border
                        border-gray-300
                        text-[10px]
                        text-gray-600
                        hover:bg-green-50
                        hover:border-green-500
                        hover:text-green-600
                        transition
                      "
                    >
                      ☎ {contactData?.primary?.phone}
                    </a>


                    <a
                      href="https://wa.me/9816897620"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        bg-gray-50
                        border
                        border-gray-300
                        text-[10px]
                        text-gray-600
                        hover:bg-green-50
                        hover:border-green-500
                        hover:text-green-600
                        transition
                      "
                    >
                      <span>◉</span>
                      WhatsApp
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
                         CONTACT METHODS
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif text-gray-800">
                Contact Me
              </h2>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {/* EMAIL */}

              <a
                href={`mailto:${contactData?.primary?.email}`}
                className="
                  group
                  bg-white
                  border
                  border-gray-300
                  p-5
                  hover:border-[#0057ED]
                  hover:-translate-y-1
                  hover:shadow-[4px_4px_0px_rgba(0,87,237,0.2)]
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    bg-blue-50
                    border
                    border-blue-200
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-4
                    group-hover:bg-[#0057ED]
                    group-hover:text-white
                    transition
                  "
                >
                  ✉
                </div>

                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                  Email
                </p>

                <p className="text-sm font-bold text-gray-700 break-all mt-1 group-hover:text-[#0057ED]">
                  {contactData?.primary?.email}
                </p>

                <p className="text-[10px] text-gray-400 mt-2">
                  Send me an email
                </p>

              </a>


              {/* PHONE */}

              <a
                href={`tel:${contactData?.primary?.phone}`}
                className="
                  group
                  bg-white
                  border
                  border-gray-300
                  p-5
                  hover:border-green-500
                  hover:-translate-y-1
                  hover:shadow-[4px_4px_0px_rgba(34,197,94,0.2)]
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    bg-green-50
                    border
                    border-green-200
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-4
                    group-hover:bg-green-500
                    group-hover:text-white
                    transition
                  "
                >
                  ☎
                </div>

                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                  Phone
                </p>

                <p className="text-sm font-bold text-gray-700 mt-1 group-hover:text-green-600">
                  {contactData?.primary?.phone}
                </p>

                <p className="text-[10px] text-gray-400 mt-2">
                  Call for project discussion
                </p>

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/9816897620"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white
                  border
                  border-gray-300
                  p-5
                  hover:border-green-500
                  hover:-translate-y-1
                  hover:shadow-[4px_4px_0px_rgba(34,197,94,0.2)]
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    bg-green-50
                    border
                    border-green-200
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-4
                    group-hover:bg-green-500
                    group-hover:text-white
                    transition
                  "
                >
                  ◉
                </div>

                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                  WhatsApp
                </p>

                <p className="text-sm font-bold text-gray-700 mt-1 group-hover:text-green-600">
                  9816897620
                </p>

                <p className="text-[10px] text-gray-400 mt-2">
                  Chat with me directly
                </p>

              </a>

            </div>

          </div>


          {/* =================================================
                              SOCIAL
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Find Me Online
              </h2>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* GITHUB */}

              <a
                href="https://github.com/jonty1231"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white
                  border
                  border-gray-300
                  p-4
                  flex
                  items-center
                  gap-4
                  hover:border-gray-700
                  hover:-translate-y-1
                  hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)]
                  transition-all
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    bg-gray-100
                    border
                    border-gray-300
                    flex
                    items-center
                    justify-center
                    group-hover:bg-gray-800
                    transition
                  "
                >
                 <FaGithub />
                </div>

                <div>

                  <p className="text-[9px] uppercase text-gray-400 font-bold">
                    GitHub
                  </p>

                  <p className="text-sm font-bold text-gray-700 group-hover:text-gray-900">
                    @jonty1231
                  </p>

                  <p className="text-[10px] text-gray-400">
                    View my repositories
                  </p>

                </div>

              </a>


              {/* SECOND GITHUB */}

              <a
                href="https://github.com/mr-developer-007"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white
                  border
                  border-gray-300
                  p-4
                  flex
                  items-center
                  gap-4
                  hover:border-gray-700
                  hover:-translate-y-1
                  hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)]
                  transition-all
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    bg-gray-100
                    border
                    border-gray-300
                    flex
                    items-center
                    justify-center
                    group-hover:bg-gray-800
                    transition
                  "
                >
                  <FaGithub />
                </div>

                <div>

                  <p className="text-[9px] uppercase text-gray-400 font-bold">
                    GitHub
                  </p>

                  <p className="text-sm font-bold text-gray-700">
                    @mr-developer-007
                  </p>

                  <p className="text-[10px] text-gray-400">
                    View my second profile
                  </p>

                </div>

              </a>


             

            </div>

          </div>


          {/* =================================================
                            SERVICES
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                What I Can Build
              </h2>

            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">

              {contactData?.services?.map((service, index) => (

                <div
                  key={index}
                  className="
                    group
                    bg-white
                    border
                    border-gray-300
                    p-3
                    min-h-[65px]
                    flex
                    items-center
                    hover:bg-blue-50
                    hover:border-[#0057ED]
                    hover:-translate-y-1
                    transition-all
                    duration-200
                    cursor-default
                  "
                >

                  <span
                    className="
                      text-[#0057ED]
                      mr-2
                      group-hover:translate-x-1
                      transition
                    "
                  >
                    ▸
                  </span>

                  <span className="text-[10px] text-gray-600 group-hover:text-[#0057ED]">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
                         TECHNOLOGIES
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Technologies
              </h2>

            </div>


            <div
              className="
                bg-white
                border
                border-gray-300
                p-4
              "
            >

              <div className="flex flex-wrap gap-2">

                {contactData?.technologies?.map(
                  (technology, index) => (

                    <span
                      key={index}
                      className="
                        group
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        bg-gray-50
                        border
                        border-gray-200
                        text-gray-600
                        hover:bg-[#0057ED]
                        hover:text-white
                        hover:border-[#0057ED]
                        hover:-translate-y-0.5
                        transition-all
                        cursor-default
                      "
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
                          PROJECT TYPES
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Project Types
              </h2>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

              {contactData?.projectTypes?.map(
                (project, index) => (

                  <div
                    key={index}
                    className="
                      bg-white
                      border
                      border-gray-300
                      p-4
                      text-center
                      hover:border-[#0057ED]
                      hover:bg-blue-50
                      hover:-translate-y-1
                      transition-all
                    "
                  >

                    <span className="text-[10px] font-semibold text-gray-600">
                      {project}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>


          {/* =================================================
                         WHY WORK WITH ME
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Why Work With Me
              </h2>

            </div>


            <div className="bg-white border border-gray-300 p-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                {contactData?.whyWorkWithMe?.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="
                        group
                        flex
                        gap-2
                        items-center
                        p-2
                        border-b
                        border-gray-100
                        hover:bg-blue-50
                        transition
                      "
                    >

                      <span
                        className="
                          w-5
                          h-5
                          shrink-0
                          flex
                          items-center
                          justify-center
                          bg-green-50
                          border
                          border-green-200
                          text-green-600
                          text-[10px]
                          group-hover:bg-green-500
                          group-hover:text-white
                          transition
                        "
                      >
                        ✓
                      </span>

                      <span className="text-[10px] text-gray-600">
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
                              WORKFLOW
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                How I Work
              </h2>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {contactData?.workflow?.map((step) => (

                <div
                  key={step.step}
                  className="
                    group
                    relative
                    bg-white
                    border
                    border-gray-300
                    p-4
                    hover:border-[#0057ED]
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0px_rgba(0,87,237,0.15)]
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div
                      className="
                        w-8
                        h-8
                        bg-blue-50
                        border
                        border-blue-200
                        text-[#0057ED]
                        flex
                        items-center
                        justify-center
                        font-black
                        text-xs
                        group-hover:bg-[#0057ED]
                        group-hover:text-white
                        transition
                      "
                    >
                      {String(step.step).padStart(2, "0")}
                    </div>

                    <h3 className="text-xs font-bold">
                      {step.title}
                    </h3>

                  </div>

                  <p className="text-[10px] text-gray-500 leading-5">
                    {step.description}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
                         START PROJECT
          ================================================= */}

          <div
            className="
              mt-6
              bg-[#0057ED]
              text-white
              border
              border-[#003fae]
              p-6
              md:p-8
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
              shadow-[5px_5px_0px_rgba(0,0,0,0.2)]
            "
          >

            <div>

              <p className="text-lg font-black font-serif">
                {contactData?.quickMessage?.title}
              </p>

              <p className="text-[10px] text-blue-100 mt-2 max-w-xl leading-5">
                {contactData?.quickMessage?.description}
              </p>

            </div>


            <div className="flex flex-wrap gap-2 shrink-0">

              <a
                href={`mailto:${contactData?.primary?.email}?subject=Project%20Inquiry`}
                className="
                  bg-white
                  text-[#0057ED]
                  px-5
                  py-3
                  text-[10px]
                  font-black
                  border
                  border-white
                  hover:bg-blue-50
                  hover:-translate-y-1
                  transition
                "
              >
                {contactData?.quickMessage?.buttonText}
              </a>


              <a
                href="https://wa.me/9816897620"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-transparent
                  text-white
                  px-5
                  py-3
                  text-[10px]
                  font-black
                  border
                  border-blue-300
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition
                "
              >
                WHATSAPP
              </a>

            </div>

          </div>


          {/* =================================================
                              FOOTER
          ================================================= */}

          <div className="py-5 text-center">

            <p className="text-xs font-bold text-gray-600">
              {contactData?.response?.title}
            </p>

            <p className="text-[10px] text-gray-400 mt-1 max-w-xl mx-auto">
              {contactData?.response?.message}
            </p>

            <p className="text-[9px] text-gray-400 mt-3">
              {contactData?.primary?.email}
              {" • "}
              {contactData?.primary?.phone}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};





const About = ({ dataref, updateWindow }) => {
  const windowData = dataref.current?.About;

  const handleMaximize = () => {
    const currentZ = windowData?.style?.zIndex || 1;
    const isMaximized = windowData?.style?.width === "100%";

    const hw = isMaximized
      ? { width: "80%", height: "80%" }
      : { width: "100%", height: "100%" };

    updateWindow("About", {
      style: {
        ...windowData?.style,
        ...hw,
        zIndex: currentZ,
      },
    });
  };

  const handleDown = () => {
    const currentZ = windowData?.style?.zIndex || 1;

    updateWindow("About", {
      style: {
        ...windowData?.style,
        width: "0%",
        height: "0%",
        zIndex: currentZ,
      },
    });
  };

  const handleClose = () => {
    updateWindow("About", {
      open: false,
    });
  };

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      icon: <FaCode />,
    },
    {
      value: "20+",
      label: "Projects Built",
      icon: <FaRocket />,
    },
    {
      value: "10+",
      label: "Technologies",
      icon: <FaDatabase />,
    },
    {
      value: "24/7",
      label: "Learning Mindset",
      icon: <FaLightbulb />,
    },
  ];

  const technologies = [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Laravel",
    "Tailwind CSS",
    "JavaScript",
    "JWT",
    "REST API",
    "Razorpay",
    "Cloudinary",
    "GSAP",
    "Axios",
  ];

  const strengths = [
    "Full Stack Web Development",
    "Modern Responsive UI",
    "REST API Development",
    "Database Architecture",
    "Authentication & Authorization",
    "Payment Gateway Integration",
    "Admin Dashboard Development",
    "Production Deployment",
  ];

  return (
    <div
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        origin-bottom-left
        overflow-hidden
        duration-300
        transition-all
        bg-white
      "
      style={windowData?.style}
    >
      {/* =====================================================
                            HEADER
      ===================================================== */}

      <div
        className="
          bg-[#0057ED]
          border-t-2
          border-[#0140ad]
          flex
          justify-between
          items-center
          w-full
          p-2
          text-white
          shrink-0
        "
      >
        <div className="flex gap-3 items-center">
          <img
            src="/info.png"
            alt="About"
            className="h-5 w-5 object-contain"
          />

          <p className="font-medium">
            About
          </p>
        </div>

        <div className="flex gap-1 items-center">

          <button
            onClick={handleDown}
            className="hover:bg-blue-600 transition"
          >
            <RxDash className="text-2xl border" />
          </button>

          <button
            onClick={handleMaximize}
            className="hover:bg-blue-600 transition"
          >
            <GrCheckbox className="text-2xl border p-1" />
          </button>

          <button
            onClick={handleClose}
            className="hover:bg-red-600 transition"
          >
            <FaXmark className="text-2xl border p-1" />
          </button>

        </div>
      </div>

      {/* =====================================================
                            CONTENT
      ===================================================== */}

      <div className="flex-1 bg-[#f1f1f1] overflow-auto">

        <div className="max-w-5xl mx-auto p-5">

          {/* =================================================
                              HERO
          ================================================= */}

          <div
            className="
              bg-white
              border
              border-gray-300
              p-6
              relative
              overflow-hidden
            "
          >

            {/* BLUE ACCENT */}

            <div className="absolute left-0 top-0 w-1 h-full bg-[#0057ED]" />

            <div
              className="
                flex
                flex-col
                md:flex-row
                gap-6
                items-center
                md:items-start
              "
            >

              {/* PROFILE IMAGE */}

              <div
                className="
                  w-28
                  h-28
                  shrink-0
                  bg-gray-100
                  border-2
                  border-gray-300
                  p-1
                "
              >
                <img
                  src="/profile.jpeg"
                  alt="Vivek Pundir"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INTRO */}

              <div className="flex-1 text-center md:text-left">

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    items-center
                    justify-center
                    md:justify-start
                  "
                >
                  <h1
                    className="
                      text-2xl
                      font-bold
                      font-serif
                      text-gray-800
                    "
                  >
                    Vivek Pundir
                  </h1>

                  <span
                    className="
                      text-[9px]
                      px-2
                      py-1
                      bg-green-100
                      border
                      border-green-200
                      text-green-700
                      rounded
                      font-bold
                    "
                  >
                    AVAILABLE
                  </span>
                </div>

                <p className="text-sm text-[#0057ED] font-semibold mt-1">
                  Full Stack Native Developer
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                    leading-6
                    max-w-2xl
                    mt-3
                  "
                >
                  I am a full stack developer focused on building modern,
                  scalable and production-ready web applications. I enjoy
                  turning ideas into clean interfaces, powerful backend
                  systems and complete digital products.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
                              STATS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-3
              mt-5
            "
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  border
                  border-gray-300
                  p-4
                  hover:border-[#0057ED]
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >

                <div
                  className="
                    w-9
                    h-9
                    bg-blue-50
                    border
                    border-blue-100
                    text-[#0057ED]
                    flex
                    items-center
                    justify-center
                    mb-3
                  "
                >
                  {item.icon}
                </div>

                <p className="text-xl font-bold font-serif text-gray-800">
                  {item.value}
                </p>

                <p className="text-[9px] text-gray-400 uppercase tracking-wide mt-1">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

          {/* =================================================
                              ABOUT ME
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Who I Am
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-5
              "
            >

              <p
                className="
                  text-xs
                  text-gray-600
                  leading-6
                "
              >
                I work across both frontend and backend development,
                allowing me to understand an application from the user
                interface all the way to the database and server.
              </p>

              <p
                className="
                  text-xs
                  text-gray-600
                  leading-6
                  mt-3
                "
              >
                My main focus is creating applications that are not only
                visually clean, but also maintainable, secure and capable
                of running in real production environments.
              </p>

            </div>

          </div>

          {/* =================================================
                          WHAT I DO
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                What I Do
              </h2>

            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3
              "
            >

              {[
                {
                  icon: <FaCode />,
                  title: "Frontend",
                  text: "Modern responsive interfaces using React, Next.js and Tailwind CSS.",
                },
                {
                  icon: <FaServer />,
                  title: "Backend",
                  text: "Scalable APIs and server-side applications using Node.js and Express.",
                },
                {
                  icon: <FaDatabase />,
                  title: "Database",
                  text: "Structured and efficient database systems using MongoDB and SQL.",
                },
                {
                  icon: <FaRocket />,
                  title: "Deployment",
                  text: "Production deployment, VPS configuration and application maintenance.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    border
                    border-gray-300
                    p-4
                    hover:border-[#0057ED]
                    hover:shadow-sm
                    transition
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      bg-blue-50
                      border
                      border-blue-100
                      text-[#0057ED]
                      flex
                      items-center
                      justify-center
                      text-lg
                      mb-3
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-sm">
                    {item.title}
                  </h3>

                  <p className="text-[10px] text-gray-500 leading-5 mt-2">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* =================================================
                          TECHNOLOGIES
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Technologies I Work With
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-5
              "
            >

              <div className="flex flex-wrap gap-2">

                {technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="
                      text-[10px]
                      px-3
                      py-1.5
                      bg-gray-50
                      border
                      border-gray-200
                      text-gray-600
                      hover:bg-blue-50
                      hover:text-[#0057ED]
                      hover:border-blue-200
                      transition
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* =================================================
                          STRENGTHS
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                My Strengths
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-5
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-2
                "
              >

                {strengths.map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-2
                      p-3
                      bg-gray-50
                      border
                      border-gray-200
                    "
                  >

                    <span
                      className="
                        w-5
                        h-5
                        shrink-0
                        bg-green-50
                        border
                        border-green-100
                        text-green-600
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      <FaCheck className="text-[8px]" />
                    </span>

                    <span className="text-[10px] text-gray-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* =================================================
                        DEVELOPMENT PHILOSOPHY
          ================================================= */}

          <div className="mt-5">

            <div className="flex items-center gap-2 mb-2">

              <div className="w-1 h-5 bg-[#0057ED]" />

              <h2 className="font-bold font-serif">
                Development Philosophy
              </h2>

            </div>

            <div
              className="
                bg-white
                border
                border-gray-300
                p-5
                relative
                overflow-hidden
              "
            >

              <div className="absolute right-0 top-0 w-20 h-20 bg-blue-50 rounded-bl-full" />

              <p
                className="
                  text-sm
                  font-serif
                  font-bold
                  text-gray-700
                  relative
                  z-10
                "
              >
                "Build it clean. Build it scalable. Build it for the real
                world."
              </p>

              <p
                className="
                  text-[11px]
                  text-gray-500
                  leading-6
                  mt-3
                  max-w-3xl
                  relative
                  z-10
                "
              >
                I believe good development is about more than making
                something work. The code should be understandable, the UI
                should be intuitive, the architecture should be scalable
                and the final application should be reliable in production.
              </p>

            </div>

          </div>

          {/* =================================================
                            CTA
          ================================================= */}

          <div
            className="
              mt-5
              bg-[#0057ED]
              text-white
              p-5
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            <div>

              <p className="font-bold text-sm">
                Have an idea?
              </p>

              <p className="text-[10px] text-blue-100 mt-1">
                Let's turn it into a real-world application.
              </p>

            </div>

            <a
              href="mailto:vivek.pundir.dev@gmail.com?subject=Project Inquiry"
              className="
                bg-white
                text-[#0057ED]
                px-5
                py-2.5
                text-[10px]
                font-bold
                hover:bg-gray-100
                transition
              "
            >
              START A PROJECT
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};









