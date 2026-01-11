"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  name: string;
  type: string;
  short: string;
  description: string;
  tech: string[];
  live: string;
  client?: string;
  server?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Eduloop (ExtraHanden AI)",
    type: "AI Powered Educational Platform (Full Stack)",
    short: "AI-based quiz and learning platform",
    description:
      "Eduloop is a production-ready AI powered educational platform where students can take quizzes on different subjects. The system uses artificial intelligence to dynamically generate questions based on topics, making learning interactive and personalized. It includes authentication, user profiles, quiz history, and performance tracking. This project was built using TypeScript for better scalability and maintainability. It is actively used in production. Login credential is: 93388781.",
    tech: ["TypeScript", "React", "AI Integration", "Node.js", "MongoDB"],
    live: "https://extrahanden.ai",
    client: "https://github.com/BodruddozaRedoy/Eduloop-Samir-Messoussi",
  },
  {
    id: 2,
    name: "Microworker",
    type: "Full Stack Earning Platform",
    short: "Micro-task based earning system",
    description:
      "Microworker is a full stack web platform where users can complete small online tasks and earn money. The system includes user registration, login, task listing, earnings tracking, and admin management. It also supports Firebase authentication and secure API communication between the frontend and backend. This project demonstrates real-world business logic for digital earning platforms.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://microworker-51544.firebaseapp.com/",
    client: "https://github.com/juyel66/Microworker-client",
    server: "https://github.com/juyel66/Microworker-server",
  },
  {
    id: 3,
    name: "AdPortal",
    type: "AI SaaS Advertising Platform",
    short: "Multi-platform ad creation and publishing system",
    description:
      "AdPortal is a powerful AI-powered SaaS platform that allows users to create, manage and publish advertisements across Facebook, Google Ads and TikTok from one unified dashboard. The system includes Stripe payment integration, Redux based state management, and a Django backend with PostgreSQL for data storage. Users can generate ad copy using AI and push campaigns live across multiple platforms.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "Django",
      "PostgreSQL",
      "Stripe",
    ],
    live: "https://adportal-website-by-kuzkuzma.netlify.app/",
    client: "https://github.com/juyel66/AdPortal",
  },
  {
    id: 4,
    name: "Jr Jobs BD",
    type: "Full Stack Job Portal",
    short: "Online job posting and hiring system",
    description:
      "Jr Jobs BD is a modern job portal where employers can post job openings including remote, onsite, hybrid and part-time jobs. Job seekers can browse jobs and apply online. The system includes role-based dashboards, job management, application tracking and secure backend APIs. It was built to simulate a real commercial job marketplace.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "#",
    client: "https://github.com/juyel66/jr-jobs-bd-client",
    server: "https://github.com/juyel66/jr-jobs-bd-server",
  },
  {
    id: 5,
    name: "Eastmond Villas",
    type: "Enterprise Real Estate Platform",
    short: "Large-scale villa booking and management system",
    description:
      "Eastmond Villas is a production-level real estate platform used for villa rentals and sales. It includes three roles: Admin, Agent, and Customer. The platform supports property listings, booking calendars, payments, and management dashboards. It was built using TypeScript and Redux for enterprise-grade scalability and performance.",
    tech: ["React", "TypeScript", "Redux", "Node.js", "MongoDB"],
    live: "https://eastmondvillas.com/",
    client: "https://github.com/juyel66/ricoholder-villas",
  },
  {
    id: 6,
    name: "Asia Wonders",
    type: "Real Estate Web Application",
    short: "Property listing and booking website",
    description:
      "Asia Wonders is a real estate web platform focused on Southeast Asian properties. Users can browse and book properties. The system includes a full backend and frontend architecture, supporting property management and client interactions in a clean and simple UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://asia-wonders.netlify.app/",
    client: "https://github.com/juyel66/southeast-asia-client",
    server: "https://github.com/juyel66/southeast-asia-server",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="mt-20 mb-20 px-5 text-white">
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold border-b-2 border-[#64B5F6] pb-2">
          My <span className="text-[#64B5F6]">Projects</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 ">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#64B5F6] transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-[#64B5F6] text-sm">{p.type}</p>
            <p className="text-gray-300 text-sm mt-2">{p.short}</p>

            <button
              onClick={() => setSelected(p)}
              className="mt-4 px-4 py-2 bg-[#64B5F6] text-black rounded hover:opacity-90"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-xl max-w-xl w-full"
          >
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-[#64B5F6] mb-3">{selected.type}</p>
            <p className="text-gray-300 mb-4">{selected.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#64B5F6]/20 text-[#64B5F6] rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={selected.live}
                target="_blank"
                className="px-4 py-2 bg-[#64B5F6] text-black rounded"
              >
                Live Website
              </a>
              {selected.client && (
                <a
                  href={selected.client}
                  target="_blank"
                  className="px-4 py-2 border border-[#64B5F6] text-[#64B5F6] rounded"
                >
                  Client Code
                </a>
              )}
              {selected.server && (
                <a
                  href={selected.server}
                  target="_blank"
                  className="px-4 py-2 border border-[#64B5F6] text-[#64B5F6] rounded"
                >
                  Server Code
                </a>
              )}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
