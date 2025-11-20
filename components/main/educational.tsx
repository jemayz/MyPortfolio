"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const Educational = () => {
  const educationData = [
    {
      title: "Bachelor of Computer Science",
      institution: "International Islamic University Malaysia (IIUM)",
      date: "Oct 2022 - Present",
      details: "Specializing in Data Science and Computer Intelligence",
      gpa: "CGPA: 3.77",
      highlight: "Dean's List Awards for 6 consecutive semesters",
    },
    {
      title: "Foundation in Engineering & CS",
      institution: "International Islamic University Malaysia (IIUM)",
      date: "Aug 2021 - Aug 2022",
      details: "Foundation in Engineering and Computer Science",
      gpa: "CGPA: 3.81",
      highlight: "Graduated with Excellence",
    },
  ];

  return (
    <div className="flex flex-col relative items-center justify-start min-h-screen w-full h-full -z-20 overflow-hidden pb-20">
      {/* Header Title */}
      <div className="w-full h-auto flex flex-col items-center justify-center mt-20 mb-10 z-[20]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-center text-transparent text-[40px] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4"
        >
          Educational Background
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center w-full max-w-4xl z-[20]">
        {/* The Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={
              index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)
            }
            className={`relative flex items-center justify-between w-full mb-12 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Spacer for Desktop to center the timeline */}
            <div className="hidden md:block w-5/12" />

            {/* The Dot on the Line */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#040015] border-2 border-cyan-500 z-10 shadow-[0_0_10px_#00f0ff]" />

            {/* The Content Card */}
            <div className=" w-[90%] ml-10 mr-10 md:ml-0 md:w-5/12 p-4 border border-[#7042F88B] bg-[#0300145e] backdrop-blur-md rounded-xl shadow-lg hover:shadow-[#7042F866] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <h4 className="text-md text-purple-300 mb-2">
                {item.institution}
              </h4>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="py-1 px-3 text-sm rounded-full bg-[#2b0c68] text-gray-200 border border-purple-500">
                  {item.date}
                </span>
                <span className="py-1 px-3 text-sm rounded-full bg-cyan-900/40 text-cyan-200 border border-cyan-500">
                  {item.gpa}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-2">{item.details}</p>

              {/* Highlight/Award Section */}
              <div className="mt-3 pt-3 border-t border-[#2A0E61] flex items-center">
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200 text-sm font-semibold">
                  {item.highlight}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[-1]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
