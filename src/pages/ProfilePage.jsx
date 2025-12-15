import React from "react";
import IconLink from "../components/IconLink";
import { FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";
import defaultProfile from "../assets/default-profile.jpeg";
import placeholderCover from "../assets/placeholder-cover.jpg";

export default function ProfilePage() {
  const links = {
    instagram: "https://www.instagram.com/nu.drip_?igsh=bWFraHE0b2xxYjMx",
    web: "https://nudrip.co/",
    whatsapp: "https://wa.me/+923096837474",
  };

  return (
    <div className="flex justify-center w-full">
      {/* PROFILE CARD */}
      <div className="w-full max-w-3xl bg-white overflow-hidden">
        {/* COVER */}
        <div className="relative w-full">
          <img
            src={placeholderCover}
            alt="cover"
            className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          {/* PROFILE IMAGE */}
          <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-gray-600 overflow-hidden bg-white">
              <img
                src={defaultProfile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-20 pb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            NüDrip
          </h1>
          <p className="text-teal-600 text-lg md:text-xl mt-2">Drip to vibe</p>

          {/* ICON LINKS */}
          <div className="mt-6 flex justify-center gap-8">
            <IconLink href={links.instagram} label="Instagram">
              <FaInstagram className="text-3xl transition-colors" />
            </IconLink>

            <IconLink href={links.web} label="Website">
              <FaGlobe className="text-3xl transition-colors" />
            </IconLink>

            <IconLink href={links.whatsapp} label="WhatsApp">
              <FaWhatsapp className="text-3xl transition-colors" />
            </IconLink>
          </div>
        </div>
      </div>
    </div>
  );
}
