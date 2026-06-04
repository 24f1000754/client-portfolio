import React from "react";
import Heading from "../components/Heading";
import Details from "../components/Details";
import Bullets from "../components/Bullets";

const page = () => {
  return (
    <div className="bg-[#F8F5EC] pt-[26px] min-h-screen">
      {/* Image Header */}
      <img
        className="w-full h-[180px] md:h-[250px] lg:h-[300px] object-cover"
        src="experience.jpg"
        alt="Experience Header"
      />

      {/* Content Section */}
      <div className="pt-2 px-4 sm:px-8 lg:px-16">
        <div>
          <Heading title="Experience" />

          {/* IIT Bombay Experience */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 my-8">
            {/* Left Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-full w-[300px] sm:w-[400px] lg:w-[700px]"
                src="/photos/iitbombay2nd.jpg"
                alt="IIT Bombay"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mt-3">
                <img src="icons/flower.svg" alt="Icon" className="w-6 h-6" />
                <div className="font-bold text-lg sm:text-xl">
                  Institute Post Doc Fellow (IPDF)
                </div>
              </div>

              <div className="ml-8 text-sm sm:text-base">
                Indian Institute of Technology (IIT) Bombay | [August 2025 -
                Present]
              </div>

              <div className="my-3 space-y-2">
                <Bullets title="Material formulation, rheology, 3D-printing, design and bio-fabrication of composite scaffolds for Bone Tissue Engineering (BTE)." />
              </div>
            </div>
          </div>
          

          {/* IISc Bangalore Experience */}
          <div className="flex flex-col lg:flex-row gap-6 my-8">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mt-3">
                <img src="icons/flower.svg" alt="Icon" className="w-6 h-6" />
                <div className="font-bold text-lg sm:text-xl">
                  Project Associate
                </div>
              </div>

              <div className="ml-8 text-sm sm:text-base">
                Indian Institute of Science (IISc), Bangalore | [February 2025 -
                May 2025]
              </div>

              <div className="my-3 space-y-2">
                <Bullets title="Computational Fluid Dynamics (CFD) study of ceramic materials for medical applications." />
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-full w-[300px] sm:w-[400px] lg:w-[700px]"
                src="/iisc bangalore.jpg"
                alt="IISc Bangalore"
              />
            </div>
          </div>

          {/* First Experience Section */}
          <div className="flex flex-col lg:flex-row gap-6 my-8">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mt-3">
                <img src="icons/flower.svg" alt="Icon" className="w-6 h-6" />
                <div className="font-bold text-lg sm:text-xl">
                  Manager (Research and Development)
                </div>
              </div>
              <div className="ml-8 text-sm sm:text-base">
                IIITD Innovation & Incubation Center, Delhi | [September
                2023-November 2024]
              </div>
              <div className="my-3 space-y-2">
                <Bullets title="Established a state-of-the-art Innovation Lab worth ₹1.5 Crores, funded by DSIIDC & DST Delhi." />
                <Bullets title="Mentored hardware prototyping projects for UG students and helped them grab grants." />
                <Bullets title="Hands on experience on FDM, FGF, resin-based additive manufacturing techniques." />
                <Bullets title="Mentored early-stage startups and student innovators through E-cell, with successful startup registrations under guidance." />
                <Bullets title="Oversee government-funded programs (e.g., MeitY TIDE 2.0, DST NIDHI PRAYAS, SISF) to support startups at various stages." />
                <Bullets title="Conducted seminars and workshops on additive manufacturing, CAD modeling, and related technologies to enhance skill development." />
                <Bullets title="Evaluate startups as part of E-Cell mentoring and startup evaluation committees." />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-full w-[300px] sm:w-[400px] lg:w-[700px]"
                src="iiitdelhi.jpg"
                alt="IIIT Delhi"
              />
            </div>
          </div>

          {/* Second Experience Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 my-8">
            {/* Left Column */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-full w-[300px] sm:w-[400px] lg:w-[700px]"
                src="iiitdmj.jpg"
                alt="IIITDM Jabalpur"
              />
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mt-3">
                <img src="icons/flower.svg" alt="Icon" className="w-6 h-6" />
                <div className="font-bold text-lg sm:text-xl">
                  Teaching Assistantship and Lab Experience
                </div>
              </div>
              <div className="ml-8 text-sm sm:text-base">
                Indian Institute of Information Technology, Design &
                Manufacturing, Jabalpur | [June 2019-Dec 2023]
              </div>
              <div className="my-3 space-y-2">
                <Bullets title="Prepared teaching slides and taught “Engineering Graphics (EG)” to 1st year UG students." />
                <Bullets title="Prepared teaching slides and taught “Introduction to IoT for smart manufacturing” to 1st year UG students." />
                <Bullets title="Lab Assistant of Workshop-CAM & Follower." />
                <Bullets title="Operation and maintenance of FDM, FGF and DLP 3D Printers." />
                <Bullets title="Operation and Maintenance of Desktop CNC machine, MFI machine, Single screw extruder, UTM Machine, Mechanical stirrer, Sonicator, Lyophilizer." />
                <Bullets title="Mess committee representative for continuously 2 years. Smooth running and management of mess facilities of 1600 students." />
                <Bullets title="Project Mentor of PR201 for UG students for developing handwriting CNC machine." />
              </div>
            </div>
          </div>
        </div>

        {/* Positions of Responsibility Section */}
        <div className="my-6">
          <Heading title="Positions of Responsibility" />
          <div className="my-3 py-6 px-3 bg-[#d5e3f3] rounded-md space-y-2">
            <Bullets title="Managing “Design & Innovation Lab” at IIITD, Delhi (August 2023-Present)." />
            <Bullets title="Establishment and management, “Drone Innovation Lab (DIL)” at IIITD-IC (March 2023-Present)." />
            <Bullets title="Handling all CAD modelling and Additive manufacturing projects at “Fused Filament Fabrication (FFF) Lab”, IIITDM Jabalpur (November 2019-August 2022)." />
            <Bullets title="Establishment and maintenance of “Biomedical Engineering & Technology (BET) Lab”, IIITDM (November 2019-August 2022)." />
            <Bullets title="Additive manufacturing at CAD/CAM Lab, IIITDM Jabalpur (November 2019-August 2022)." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
