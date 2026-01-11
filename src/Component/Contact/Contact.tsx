"use client";

import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import SocialIcons from "../Shared/SocialIcons";

const Contact = () => {
  return (
    <div className="mb-5 lg:mb-10  mt-20">
      {/* Title */}
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block mb-5 lg:mb-10">
          Contact <span className="text-[#64B5F6]">Me</span>
        </h1>
      </div>

      <div className="mx-auto text-white px-5 flex justify-center items-center">
        <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center">
          
          {/* Contact Info */}
        <div className="flex-1">
              <div className="flex gap-7 flex-col w-full">
            <div className="flex gap-2 items-center">
              <IoLogoWhatsapp className="text-xl text-[#64B5F6]" />
              <p>+8801747498166</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-xl text-[#64B5F6]" />
              <p>mdjuyelrana.com.bd1@gmail.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaLocationDot className="text-xl text-[#64B5F6]" />
              <p>Wireless Gate, Mohakhali, Dhaka-1212</p>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

          {/* Static Form */}
          <div className="w-full flex-2">
            <form className="grid grid-cols-2 gap-5">
              <input
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2 focus:outline-none focus:ring-2 focus:ring-[#64B5F6]"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="block px-3 py-2 w-full col-span-2 lg:col-span-1 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6]"
                type="text"
                placeholder="Phone Number"
              />

              <select
                className="block px-3 py-2 w-full col-span-2 lg:col-span-1 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#64B5F6]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option>Web Development</option>
                <option>Bug Fixing</option>
                <option>Consultation</option>
              </select>

              <input
                className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2 focus:outline-none focus:ring-2 focus:ring-[#64B5F6]"
                type="email"
                placeholder="Email Address"
              />

              <textarea
                className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#64B5F6]"
                placeholder="Your Message"
              />

              <div className="flex col-span-2 justify-center items-center mt-2">
                <button
                  type="button"
                  className="px-8 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium shadow-md transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
