import Image from "next/image";
import Linkedin from "./components/Linkedin";
import Heading from "./components/Heading";
import Gmail from "./components/Gmail";
import Orcid from "./components/Orcid";

export default function Home() {
  return (
    <div className="pt-[56px]">
      <div>
        <img className="md:w-[100vw] md:h-[80vw] lg:w-full lg:h-auto object-cover h-[100vw] w-[100vw]" src="iitdm.jpg" alt="no image" />
      </div>
      <div className="summary mx-14 flex flex-col md:flex-row">
        <div className="summarycontent px-4 py-3 w-full md:w-[80%] animate-slideInLeft">
          <div className="font-bold text-lg">Hi this is me</div>
          <div className="font-bold text-[#013571] text-2xl">
            Dr. Mohammad Aftab Alam Ansari
          </div>
          <div className="font-bold text-lg">(Mechanical Engineer)</div>
          <div className="font-bold text-xl">
            Ph.D. Specialization: Additive Manufacturing
          </div>
          <div className="flex gap-2">
            <div><Linkedin /></div>
            <div><Gmail /></div>
            <div><Orcid /></div>
          </div>
        </div>
        <div className="summarypic flex justify-center md:justify-end animate-slideInRight">
          <img
            className="rounded-s-full w-[80%] md:w-[50%]"
            src="aftab.png"
            alt="no image"
          />
        </div>
      </div>
      <div className="about mx-8 my-3">
        <div className="flex gap-2">
          <Heading title="Professional Summary" />
        </div>
        <div className="text-xl mx-11">
          As a highly enthusiastic and motivated professional, I aspire to create a transformative interdisciplinary
          learning environment through my five years of research experience in additive manufacturing and
          biomaterials. Having garnered valuable insights from interdisciplinary research groups followed by
          entrepreneurial experiences through engagement at the Incubation center, I am committed to enriching the
          academic journey which promotes entrepreneurship. I aim to foster a dynamic educational experience by
          integrating practical and output-focused methodologies, aligning with the demands of the contemporary
          entrepreneurial ecosystem.
        </div>
      </div>
      <div className="interest my-[50px] flex flex-col md:flex-row">
        <div className="left w-full md:w-[50vw]">
          <img className="w-[230px] rounded-lg mx-auto" src="logo.jpg" alt="" />
        </div>
        <div className="right mx-auto bg-[#a6c9f0] px-12 py-[55px] rounded-[60px] w-full md:w-[40vw]">
          <div className="flex gap-2">
            <img className="w-[30px]" src="icons/summary.svg" alt="" />
            <h1 className="font-bold text-3xl text-black">Areas of Interest</h1>
          </div>
          <div>
            <ul className="mx-[6px]">
              <li className="flex gap-2"><img src="icons/arrows.svg" alt="" />Design-CAD Modelling</li>
              <li className="flex gap-2"><img src="icons/arrows.svg" alt="" />Additive Manufacturing</li>
              <li className="flex gap-2"><img src="icons/arrows.svg" alt="" />Biomaterials and Smart graft for BTE</li>
              <li className="flex gap-2"><img src="icons/arrows.svg" alt="" />Entrepreneurship</li>
              <li className="flex gap-2"><img src="icons/arrows.svg" alt="" />Research and Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="referees mx-8">
        <div className="quotes bg-[#013571] text-white my-4 mx-11 flex flex-col md:flex-row">
          <div className="pic md:w-[350px] mx-auto">
            <img className="w-full h-auto" src="mechanical.jpeg" alt="no image" />
          </div>
          <div className="content-center font-bold text-[18px] px-[30px] text-center md:text-left">
            "There’s nothing I believe in more strongly than getting young people interested in science and engineering, for a better tomorrow, for all humankind"
            <div className="text-end mt-2">
              - Bill Nye
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


