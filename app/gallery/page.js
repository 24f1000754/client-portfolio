"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AftabGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/aftab")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="pt-[56px] min-h-screen bg-[#F8F4E9]">

      {/* Header Section */}
      <div className="relative bg-[#1A1A1A] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F8F4E9]">
            Gallery
          </h1>

          <div className="w-24 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

          <p className="text-gray-300 mt-4 text-lg">
            Academic activities, research work, conferences and memorable moments.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((src, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={`/photos/${src}`}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              <div className="h-2 bg-[#556B2F]"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}