import React from "react";

const page = () => {
  const academics = [
    {
      title: "Ph. D",
      detail:
        "Indian Institute of Information Technology, Design & Manufacturing, Jabalpur | 2019 - 2023 | 8.4 CGPA",
    },
    {
      title: "M. Tech.",
      detail:
        "Indian Institute of Information Technology, Design & Manufacturing, Jabalpur | 2019 | 7.80 CGPA",
    },
    {
      title: "B.E. (ME)",
      detail:
        "P.E.S College of Engineering | Dr. BAMU, Aurangabad | 2016 | 71.70%",
    },
    {
      title: "HSC",
      detail:
        "Dr. Zakir Hussain School, Patna | BSEB, Patna | 2012 | 77.00%",
    },
    {
      title: "SSC",
      detail:
        "St. Paul’s High School, Hajipur | CBSE, Delhi | 2010 | 79.80%",
    },
  ];

  const certifications = [
    {
      title: "Teaching and Learning in General Programs (TALG)",
      detail: "NPTEL (SWAYAM) | Jul-Aug 2022",
    },
    {
      title: "Effective Engineering Teaching in Practice",
      detail: "NPTEL (SWAYAM) | Jan-Feb 2021",
    },
    {
      title: "Ansys Workbench",
      detail: "EICT Academy, IIITDM Jabalpur | 5 Days",
    },
    {
      title: "MAGICS & MIMICS",
      detail: "EICT Academy, IIITDM Jabalpur | 5 Days",
    },
    {
      title: "Additive Manufacturing",
      detail: "RRCAT, Indore | 5 Days",
    },
    {
      title: "ECGuiD with MATLAB",
      detail: "EICT Academy, IIITDM Jabalpur | 5 Days",
    },
    {
      title: "AutoCAD",
      detail: "Venus Technology, Aurangabad | 2 Months",
    },
    {
      title: "CREO Parametric 2.0",
      detail: "Venus Technology, Aurangabad | 1 Month",
    },
  ];

  const skills = [
    {
      title: "Modeling Software",
      detail: "SolidWorks • Fusion 360 • AutoCAD",
    },
    {
      title: "Simulation Software",
      detail: "Ansys CAE",
    },
    {
      title: "3D Printing Software",
      detail: "Flash Print • Cura • Repetier Host",
    },
    {
      title: "Biomedical Image Processing",
      detail: "MAGICS & MIMICS",
    },
    {
      title: "Languages",
      detail: "MATLAB • CNC Coding",
    },
    {
      title: "Testing Equipment",
      detail:
        "UTM, Profilometer, Goniometer, MFI, DSC, TGA, UV-VIS Spectrophotometer",
    },
  ];

  return (
    <div className="bg-[#F8F4E9] min-h-screen text-[#1a1a1a] pt-[56px]">
      
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/academic2.jpg"
          alt="Academic Background"
          className="w-full h-[45vh] md:h-[65vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
              Academic Profile
            </h1>

            <div className="w-32 h-1 bg-[#7A8F49] mt-4 rounded-full"></div>

            <p className="text-gray-300 mt-5 max-w-2xl text-lg">
              Academic achievements, certifications and technical expertise in
              engineering, manufacturing and research.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Academic Section */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-10 bg-[#556B2F] rounded-full"></div>
            <h2 className="text-3xl font-bold">Academic Background</h2>
          </div>

          <div className="grid gap-5">
            {academics.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#DDD6C8] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#556B2F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-10 bg-[#556B2F] rounded-full"></div>
            <h2 className="text-3xl font-bold">Certified Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-[#C9D6A3]">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-300 text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-10 bg-[#556B2F] rounded-full"></div>
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((item, index) => (
              <div
                key={index}
                className="bg-[#556B2F] text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <div className="w-12 h-[2px] bg-[#F8F4E9] mb-4"></div>

                <p className="text-gray-100 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default page;