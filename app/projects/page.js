import React from "react";
import Heading from "../components/Heading";

const page = () => {
  return (
    <div className="pt-[56px] min-h-screen bg-[#F8F4E9]">

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/projects.jpg"
          alt="Projects"
          className="w-full h-[35vh] md:h-[45vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
              Projects
            </h1>

            <div className="w-28 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

            <p className="text-gray-300 mt-4 text-lg">
              Research projects, academic work and innovation contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        <Heading title="Academic Projects Undertaken" />

        {/* PhD Project */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl border border-[#DDD6C8] p-8 hover:shadow-2xl transition-all duration-300">

          <div className="inline-block bg-[#556B2F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Doctoral Research
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
            Design and Development of 3D-Printed Bioactive Bone Scaffolds with Improved Mechanical Strength
          </h2>

          <p className="mt-5 text-gray-700 leading-relaxed">
            We developed osteoconductive feedstock suitable for fused filament
            fabrication (FFF) techniques to fabricate patient-specific bone
            scaffolds for tissue engineering applications.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#556B2F] mb-4">
              Research Highlights
            </h3>

            <div className="space-y-4">

              <div className="bg-[#FAF8F2] border border-[#E7E1D5] p-5 rounded-2xl">
                <p>
                  Bioactive Hybrid Scaffold Manufacturing via Surface
                  Modification of 3D-Printed Hydrophobic Scaffolds under
                  Start-up Research Grant.
                </p>
              </div>

              <div className="bg-[#FAF8F2] border border-[#E7E1D5] p-5 rounded-2xl">
                <p>
                  Biomimetic Bone Scaffold of Tailored Radial Porosity Gradient
                  using Fused Deposition Manufacturing under Research Scholar
                  Grant.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* M.Tech */}
        <div className="mt-10 bg-[#1A1A1A] rounded-3xl shadow-xl p-8 text-white">

          <div className="inline-block bg-[#556B2F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            M.Tech Project
          </div>

          <h2 className="text-2xl font-bold">
            Design and Development of Scaffold using 3D Printing
          </h2>

          <div className="mt-4 text-[#C9D6A3] font-semibold">
            Duration: 6 Months
          </div>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Designed and developed porous structures of varying porosity using
            advanced 3D printing techniques to enhance scaffold performance for
            engineering and biomedical applications.
          </p>

        </div>

        {/* BE Project */}
        <div className="mt-10 bg-white rounded-3xl shadow-xl border border-[#DDD6C8] p-8 hover:shadow-2xl transition-all duration-300">

          <div className="inline-block bg-[#556B2F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            B.E Project
          </div>

          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Design and Fabrication of Treadmill Bike
          </h2>

          <div className="mt-4 text-[#556B2F] font-semibold">
            Duration: 1 Year
          </div>

          <p className="mt-5 text-gray-700 leading-relaxed">
            A treadmill bike is an innovative transportation concept that
            combines walking and cycling. The project focused on design,
            fabrication and testing of a treadmill-operated bicycle system.
          </p>

        </div>

      </div>
    </div>
  );
};

export default page;