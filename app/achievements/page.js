import React from "react";
import Heading from "../components/Heading";
import Bullets from "../components/Bullets";

const Page = () => {
  return (
    <div className="pt-[56px] min-h-screen bg-[#F8F4E9]">

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/achievements.jpg"
          alt="Achievements"
          className="w-full h-[35vh] md:h-[45vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
              Achievements
            </h1>

            <div className="w-28 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

            <p className="text-gray-300 mt-4 text-lg">
              Awards, invited lectures, recognitions and academic accomplishments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        {/* Invited Lectures */}
        <div className="bg-white rounded-3xl shadow-lg border border-[#DDD6C8] p-8 mb-10">

          <Heading title="Invited Lectures" />

          <div className="mt-8 space-y-5">

            <div className="bg-[#FAF8F2] border border-[#E5DED0] rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
              <Bullets
                title="Delivered an invited lecture on 'Additive Manufacturing of Polymers: Scope of Entrepreneurship' in MSME (GoI) sponsored five-days advanced ESDP held at NIT Jalandhar during 16th to 20th December, 2023."
              />
            </div>

            <div className="bg-[#FAF8F2] border border-[#E5DED0] rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
              <Bullets
                title="Delivered a lecture at the Electronics Design Carnival on the topic 'Introduction to Rapid Prototyping' organized by IIIT Delhi between 1st July to 12th July, 2024."
              />
            </div>

          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[#1A1A1A] rounded-3xl shadow-2xl p-8">

          <div className="mb-8">
            <Heading title="Achievements" />
          </div>

          <div className="space-y-5">

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    <b>Silver Award</b> for Paper Presentation at TERMIS-AP
                    Webinar Student Paper Presentation Contest held online
                    during 01-02 December 2023, China.
                  </>
                }
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    <b>Best Poster Presentation Award</b> at the 74th Annual
                    Session of Indian Institute of Chemical Engineers{" "}
                    <b>(CHEMCON-2021)</b> held from 26th to 30th December 2021
                    at CSIR-Institute of Minerals and Materials Technology,
                    Bhubaneswar, India.
                  </>
                }
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    Thesis work was funded by <b>State Key Laboratory</b>,
                    Fudan University, <b>China</b>.
                  </>
                }
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    <b>GATE 2017 Qualified</b> with 359 Gate Score.
                  </>
                }
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    Received Merit Scholarship for outstanding performance in
                    Class XII.
                  </>
                }
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-white hover:bg-white/15 transition-all duration-300">
              <Bullets
                title={
                  <>
                    Listed in the <b>Top One Percentage</b> of students who
                    achieved maximum marks in the Higher Secondary Examination
                    2012 in the state of Bihar.
                  </>
                }
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;