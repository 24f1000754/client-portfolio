import React from "react";
import Heading from "../components/Heading";
import Bullets from "../components/Bullets";

const Page = () => {
return ( <div className="pt-[56px] min-h-screen bg-[#F8F4E9]">

```
  {/* Hero Section */}
  <div className="relative">
    <img
      src="/coneference2.jpg"
      alt="Conference Presentations"
      className="w-full h-[35vh] md:h-[45vh] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
          Conferences
        </h1>

        <div className="w-28 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

        <p className="text-gray-300 mt-4 text-lg">
          International and National Conference Presentations
        </p>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

    <Heading title="Conference Presentation (Oral / Poster)" />

    {/* International Conferences */}
    <div className="bg-[#556B2F] text-white px-6 py-4 rounded-2xl text-2xl font-bold mt-8 mb-6">
      International Conferences
    </div>

    <div className="space-y-6">

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain and
              Himansu Sekhar Nanda, “Design and Fabrication of
              Osteoconductive Hybrid Scaffolds for Bone Augmentation through
              Fuse Filament Fabrication” Tsukuba Biomedical Engineering
              Forum 2022, <b>Japan</b> (Oral).
            </>
          }
        />
      </div>

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain,
              Himansu Sekhar Nanda, “Preparation of 3D Printed Highly Filled
              Calcium Sulfate-Poly Lactic Acid Biocomposite Scaffolds with
              Improved Mechanical and Degradation Properties” at
              <b> TERMIS-AP</b> Webinar Student Paper Presentation Contest,
              <b> China</b>, 1st December 2023.
            </>
          }
        />
      </div>

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain,
              Himansu Sekhar Nanda, “Design and Development of Mechanically
              Competent Composite Biomaterials for Biomanufacturing”,
              Biomaterials International 2024, Bangkok,
              <b> Thailand</b>.
            </>
          }
        />
      </div>

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Himansu Sekhar Nanda,
              “Ceramic Reinforced Polymer Composites for Additive
              Manufacturing of Implants and Scaffolds”, 2nd International
              Conference on Nanotechnology Research and Innovation,
              University of Aveiro, 2024,
              <b> Portugal</b>.
            </>
          }
        />
      </div>

    </div>

    {/* National Conferences */}
    <div className="bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl text-2xl font-bold mt-12 mb-6">
      National Conferences
    </div>

    <div className="space-y-6">

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              Mohammad Aftab Alam Ansari, Prashant Kumar Jain and Himansu
              Sekhar Nanda, <b>
                “Preparation and Characterization of Biphasic Poly-(Lactic
                Acid) Bone Scaffold using Fused Filament Fabrication”
              </b>
              , presented at <b>CHEMCON-2021</b>, CSIR-IMMT,
              Bhubaneswar, <b>India</b> (Poster Presentation).
            </>
          }
        />
      </div>

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Prashant Kumar Jain and
              Himansu Sekhar Nanda, “Fabrication and Characterization
              Poly-(Lactic Acid) Based Radial Gradient Porous Scaffold for
              Bone Augmentation using Fused Filament Fabrication”,
              <b> BIOTEM-2021</b>, Manipal,
              <b> India</b> (Poster).
            </>
          }
        />
      </div>

      <div className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
        <Bullets
          title={
            <>
              <b>Ansari, Mohammad Aftab Alam</b>, Himansu Sekhar Nanda,
              “Design and 3D Printing Wollastonite Reinforced PLA/PCL
              Composite Scaffolds for Bone Tissue Engineering”, APA-EPNOE-GFL
              International Conference on Polymers for Advanced Technology
              (APA 2024), Jaipur,
              <b> India</b>.
            </>
          }
        />
      </div>

    </div>

  </div>
</div>


);
};

export default Page;
