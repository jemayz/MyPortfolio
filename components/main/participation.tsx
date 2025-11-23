"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Participation = () => {
  const hackathons = [
    {
      title: "KitaHack 2025",
      level: "National Level",
      date: "April 2025",
      organizer: "Google Developer Groups",
      image: "/participations/Kitahack.jpeg",
    },
    {
      title: "UMHackathon 2025",
      level: "National Level",
      date: "April 2025",
      organizer: "Universiti Malaya",
      image: "/participations/UMHackathon.jpeg",
    },
    {
      title: "VHack USM 2025",
      level: "National Level",
      date: "March 2025",
      organizer: "Universiti Sains Malaysia",
      image: "/participations/VHack.jpeg",
    },
    {
      title: "I-Hax 2024",
      level: "National Level",
      date: "2024",
      organizer: "IIUM",
      image: "/participations/I-Hax.jpeg",
    },
  ];

  return (
    <div className="flex flex-col text-center items-center justify-center min-h-[50vh] w-full py-10">
      {/* Section Title */}
      <div className="mb-10 z-[20]">
        <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Hackathon Participation
        </h1>
      </div>

      {/* Grid Layout (Replaces Slider) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-10 z-[20]">
        {hackathons.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#030014]"
          >
            {/* Image Container */}
            <div className="relative w-full h-[230px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col items-center text-center gap-2">
              {/* Title with Gradient Effect */}
              <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-colors duration-300">
                {item.title}
              </h2>

              {/* Level Badge */}
              <span className="px-3 py-1 text-xs font-semibold text-cyan-200 border border-cyan-500/50 bg-cyan-500/10 rounded-full">
                {item.level}
              </span>

              {/* Organizer & Date */}
              <div className="mt-2 text-sm">
                <p className="text-gray-300">{item.organizer}</p>
                <p className="text-purple-400 text-xs mt-1 font-mono">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent hover:border-purple-500/50 rounded-lg transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};
