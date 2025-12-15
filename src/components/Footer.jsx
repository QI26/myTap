import React from "react";
import { FaInstagram, FaWhatsapp, FaGlobe, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const socialLinks = {
    instagram: "https://www.instagram.com/mytap.5/#",
    facebook: "https://www.facebook.com/profile.php?id=61576567108335&mibextid=wwXIfr&rdid=YeDb6lCjgcIrIVmN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17UBWJ2W1Y%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
  };

  return (
    <footer className="bg-white w-full border-t border-gray-200 py-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Tagline */}
        <p className="text-gray-600 text-sm text-center md:text-left">
        MyTap — Creators of NFC Business Cards and Landing Pages
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-pink-500">
            <FaInstagram className="text-3xl" />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-700">
            <FaFacebook className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
