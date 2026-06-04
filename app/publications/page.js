import React from "react";
import Heading from "../components/Heading";

const publications = [
  {
    year: "2025",
    title:
      "Influence of Pore Geometry on the Compressive Strength and Cell-Materials Interaction of 3D Printed PLA Scaffolds",
    authors:
      "Ansari, Mohammad Aftab Alam, Prashant Kumar Jain, and Himansu Sekhar Nanda",
    journal: "Polymer-Plastics Technology and Materials",
    impact: "SCIE • Q2 • IF 2.7",
    doi: "https://doi.org/10.1080/25740881.2025.2463571",
  },
  {
    year: "2024",
    title:
      "Design and Development of 3D Printed Shape Memory Triphasic Polymer-Ceramic Bioactive Scaffolds for Bone Tissue Engineering",
    authors:
      "Ansari, Mohammad Aftab Alam, Pooja Makwana, Rajesh Vasita, Prashant Kumar Jain, Bindiya Dhimmar & Himansu Sekhar Nanda",
    journal: "Journal of Materials Chemistry B",
    impact: "SCI • Q1 • IF 6.1",
    doi: "https://doi.org/10.1039/D4TB00785A",
  },
  {
    year: "2023",
    title:
      "Preparation of 3D Printed Calcium Sulfate Filled PLA Scaffolds with Improved Mechanical and Degradation Properties",
    authors:
      "Ansari, Mohammad Aftab Alam, Prashant Kumar Jain and Himansu Sekhar Nanda",
    journal: "Journal of Biomaterials Science, Polymer Edition",
    impact: "SCIE • Q2 • IF 3.68",
    doi: "https://doi.org/10.1080/09205063.2023.2167374",
  },
  {
    year: "2023",
    title: "Engineered Stimuli-Responsive Smart Grafts for Bone Regeneration",
    authors:
      "Ansari, Mohammad Aftab Alam, Dash M, Camci-Unal G, Jain PK et al.",
    journal: "Current Opinion in Biomedical Engineering",
    impact: "SCIE • Q2 • IF 3.9",
    doi: "https://doi.org/10.1016/j.cobme.2023.100493",
  },
  {
    year: "2023",
    title:
      "Development of Highly Filled Calcium Sulfate-Poly Lactic Acid Biocomposite Feedstock for Low-Cost Fused Filament Fabrication",
    authors:
      "Ansari, Mohammad Aftab Alam, Pooja Makwana, Rajesh Vasita, Prashant Kumar Jain and Himansu Sekhar Nanda",
    journal: "Ceramics International",
    impact: "SCIE • Q1 • IF 5.2",
    doi: "https://doi.org/10.1016/j.ceramint.2023.09.105",
  },
  {
    year: "2022",
    title:
      "Engineering Biomaterials to 3D-Print Scaffolds for Bone Regeneration: Practical and Theoretical Consideration",
    authors:
      "Ansari, Mohammad Aftab Alam, Aleksandra A. Golebiowska, Madhusmita Dash, Prasoon Kumar, Prashant Kumar Jain, Syam P. Nukavarapu, Seeram Ramakrishna & Himansu Sekhar Nanda",
    journal: "Biomaterials Science",
    impact: "SCI • Q1 • IF 7.59",
    doi: "https://doi.org/10.1039/D2BM00035K",
  },
  {
    year: "Ongoing",
    title:
      "Effect of Pore Geometry on the Cell Proliferation of 3D Printed PLA Scaffolds for BTE Application",
    authors: "Ansari, Mohammad Aftab Alam et al.",
    journal: "Manuscript Under Preparation",
    impact: "Research Work",
    doi: "",
  },
  {
    year: "Submitted",
    title:
      "Additive Manufacturing Assisted Patient-Centric Surgical Planning and Procedures: A New Paradigm in Healthcare",
    authors: "Shivi Tripathi, Ansari, Mohammad Aftab Alam et al.",
    journal: "Advanced Functional Materials",
    impact: "IF 15",
    doi: "",
  },
];

const Page = () => {
  return (
    <div className="pt-[56px] min-h-screen bg-[#F8F4E9]">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/publication.jpg"
          alt="Publications"
          className="w-full h-[35vh] md:h-[45vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
              Publications
            </h1>

            <div className="w-28 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

            <p className="text-gray-300 mt-4 text-lg">
              Peer-reviewed international journals, research articles and
              scholarly contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <Heading title="Peer-Reviewed International Journal Publications" />

        <div className="mt-10 space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-[#DDD6C8] shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-[#556B2F] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {pub.year}
                </span>

                <span className="bg-[#F3EFE4] text-[#556B2F] px-4 py-1 rounded-full text-sm font-semibold">
                  {pub.impact}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-relaxed">
                {pub.title}
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {pub.authors}
              </p>

              <p className="mt-3 text-[#556B2F] font-semibold">{pub.journal}</p>

              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-5 bg-[#1A1A1A] text-white px-5 py-2 rounded-xl hover:bg-[#556B2F] transition duration-300"
                >
                  View Publication →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Ongoing Work */}
        <div className="mt-12 bg-[#1A1A1A] rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#F8F4E9] mb-6">
            Ongoing & Submitted Manuscripts
          </h2>

          <div className="space-y-5">
            <div className="bg-white/10 p-5 rounded-2xl text-white">
              Effect of Pore Geometry on the Cell Proliferation of 3D Printed
              PLA Scaffolds for BTE Application
              <span className="block text-[#C9D6A3] mt-2">
                Manuscript Under Preparation
              </span>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl text-white">
              Additive Manufacturing Assisted Patient-Centric Surgical Planning
              and Procedures: A New Paradigm in Healthcare
              <span className="block text-[#C9D6A3] mt-2">
                Submitted in Advanced Functional Materials (IF 15)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
