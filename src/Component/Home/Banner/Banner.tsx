"use client";

import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router";
import SocialIcons from "../../Shared/SocialIcons";
import juyel from "../../../assets/juyel.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-lg md:text-xl lg:text-2xl font-light text-gray-300"
            >
              It&apos;s Me
            </h3>

            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              MD. JUYEL RANA
            </h1>

            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200"
            >
              I&apos;m a{" "}
              <span className="text-blue-400">
                <Typewriter
                  words={[
                    "Full-Stack Developer_",
                    "Node Js Developer_",
                    "MERN Stack Developer_",
                  ]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                />
              </span>
            </h3>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              I am a MERN Stack Web Developer skilled in Tailwind CSS,
              JavaScript, TypeScript, React.js, and Next.js. I have experience
              with Firebase, Node.js, Express.js, MongoDB, and Mongoose. I also
              use Redux, Ant Design, and ShadCN to build modern, responsive web
              apps. On the backend, I work confidently with both NoSQL
              (MongoDB, Mongoose) and SQL (PostgreSQL, Prisma, SQL) databases.
            </p>

            {/* Social Icons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="pt-4 text-white flex justify-center lg:justify-start"
            >
              <SocialIcons />
            </div>

            {/* Button */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="pt-6 flex justify-center lg:justify-start"
            >
              <Link to="/contact">
                <button className="px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex-1 flex justify-center lg:justify-end"
          >


          <div className="relative mt-10 group h-[330px] w-[300px] md:h-[400px] md:w-[350px] lg:h-[500px] lg:w-[400px]">

  {/* Animated Glow Border */}
  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

  {/* Main Card */}
  <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-blue-500/40">

    {/* Shine Effect */}
    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/10 via-white/20 to-transparent"></div>

    {/* Image */}
    <img
      src={juyel}
      alt="JUYEL"
      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
    />

    {/* Subtle Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

  </div>
</div>


            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
