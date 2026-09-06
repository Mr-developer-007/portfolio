"use client"

import AndroidPortfolio from "@/components/AndroidPortfolio";
import Ios from "@/components/Ios";
import Linux from "@/components/Linux";
import WindowCompo from "@/components/WindowCompo";
import { FaLinux, FaWindows } from "react-icons/fa";
import { useState } from "react";
import { FaApple, FaAndroid } from "react-icons/fa";






export default function Home() {
const [selectScreen,setSelectScreen]=useState("default")


  return (
    <div className="">

<div className="md:hidden">
    { selectScreen=="default"  &&  <SelectMobile setSelectScreen={setSelectScreen} /> }

{ selectScreen=="android"  &&  <AndroidPortfolio /> }
{selectScreen=="ios"  &&    <Ios />  }

      </div> 

      <div className="hidden  md:block">

  { selectScreen=="default"  &&  <SelectWinLin setSelectScreen={setSelectScreen} /> }
 { selectScreen=="linux"  &&  <Linux /> }
  {selectScreen=="window"  &&  <WindowCompo/> }

  </div>
</div>
  );
}







const SelectWinLin = ({ setSelectScreen }) => {
  return (
    <div
      className="
        h-screen
        bg-gradient-to-br
        from-black
        via-slate-900
        to-black
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-white text-4xl font-bold text-center mb-3">
          Choose Your Experience
        </h1>

        <p className="text-center text-white/60 mb-12">
          Select an operating system style portfolio
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Windows */}
          <button
            onClick={() => setSelectScreen("window")}
            className="
              group
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              hover:scale-105
              hover:border-blue-500
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col items-center">
              <FaWindows
                size={100}
                className="text-blue-500 group-hover:rotate-6 transition"
              />

              <h2 className="text-white text-3xl font-bold mt-6">
                Windows
              </h2>

              <p className="text-white/60 mt-3 text-center">
                Windows 11 inspired desktop portfolio experience
              </p>
            </div>
          </button>

          {/* Linux */}
          <button
            onClick={() => setSelectScreen("linux")}
            className="
              group
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              hover:scale-105
              hover:border-yellow-500
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col items-center">
              <FaLinux
                size={100}
                className="text-yellow-400 group-hover:rotate-6 transition"
              />

              <h2 className="text-white text-3xl font-bold mt-6">
                Linux
              </h2>

              <p className="text-white/60 mt-3 text-center">
                Interactive terminal-based portfolio experience
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectMobile = ({ setSelectScreen }) => {
  return (
    <div
      className="
        h-screen
        bg-gradient-to-br
        from-black
        via-slate-950
        to-black
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          Select Mobile OS
        </h1>

        <p className="text-white/60 text-center mt-3 mb-12">
          Choose your preferred mobile experience
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* iOS */}
          <button
            onClick={() => setSelectScreen("ios")}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              p-10
              hover:scale-105
              hover:border-white/40
              transition-all duration-300
            "
          >
            <div className="flex flex-col items-center">
              <div
                className="
                  w-32 h-32
                  rounded-[35px]
                  bg-white/15
                  flex items-center justify-center
                  backdrop-blur-xl
                "
              >
                <FaApple
                  size={80}
                  className="
                    text-white
                    group-hover:scale-110
                    transition
                  "
                />
              </div>

              <h2 className="text-white text-3xl font-bold mt-6">
                iOS
              </h2>

              <p className="text-white/60 mt-3 text-center">
                iPhone-inspired portfolio with app icons,
                widgets, blur effects and smooth animations.
              </p>
            </div>
          </button>

          {/* Android */}
          <button
            onClick={() => setSelectScreen("android")}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              p-10
              hover:scale-105
              hover:border-green-500
              transition-all duration-300
            "
          >
            <div className="flex flex-col items-center">
              <div
                className="
                  w-32 h-32
                  rounded-[35px]
                  bg-white/15
                  flex items-center justify-center
                  backdrop-blur-xl
                "
              >
                <FaAndroid
                  size={80}
                  className="
                    text-green-400
                    group-hover:scale-110
                    transition
                  "
                />
              </div>

              <h2 className="text-white text-3xl font-bold mt-6">
                Android
              </h2>

              <p className="text-white/60 mt-3 text-center">
                Android-inspired portfolio with Material UI,
                widgets and modern app drawer design.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};





