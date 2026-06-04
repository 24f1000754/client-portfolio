import Linkedin from "./components/Linkedin";
import Heading from "./components/Heading";
import Gmail from "./components/Gmail";
import Orcid from "./components/Orcid";

export default function Home() {
  return (
    <div className="bg-[#d1f18f]  text-[#1A1A1A] pt-[56px]">

      {/* Hero Banner */}
      <div
        className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/iitdm.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Dr. Mohammad Aftab Alam Ansari
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-[#EAE2CF]">
              Mechanical Engineer | Researcher | Innovator
            </p>

            <p className="mt-2 text-sm md:text-lg">
              Ph.D. in Additive Manufacturing, Bone Tissue Engineering &
              Patient-Specific Implant Design
            </p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-[#556B2F] mb-4">
              About Me
            </h2>

            <div className="w-24 h-1 bg-[#B89B5E] mb-8"></div>

            <p className="text-lg leading-8 text-gray-700">
              Dedicated researcher, innovator and educator with expertise in
              Additive Manufacturing, Biomaterials and Product Development.
              Passionate about interdisciplinary research, entrepreneurship and
              technology-driven innovation.
            </p>

            <div className="flex gap-5 mt-8">
              <Linkedin />
              <Gmail />
              <Orcid />
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="aftab.png"
              alt="Profile"
              className="w-[320px] h-[320px] object-cover rounded-full border-[8px] border-[#556B2F] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Professional Summary */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-[10px] border-[#556B2F]">

          <h2 className="text-3xl font-bold text-[#556B2F] mb-6">
            Professional Summary
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            As a highly enthusiastic and motivated professional, I aspire to
            create a transformative interdisciplinary learning environment
            through my five years of research experience in additive
            manufacturing and biomaterials.

            Having garnered valuable insights from interdisciplinary research
            groups followed by entrepreneurial experiences through engagement at
            the Incubation Center, I am committed to enriching the academic
            journey that promotes entrepreneurship.

            I aim to foster a dynamic educational experience by integrating
            practical and output-focused methodologies aligned with the demands
            of the contemporary entrepreneurial ecosystem.
          </p>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <img
              src="logo.jpg"
              alt=""
              className="w-[300px] rounded-3xl shadow-xl"
            />
          </div>

          <div className="bg-[#F2EEDF] border border-[#556B2F] rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-[#556B2F] mb-8">
              Areas of Interest
            </h2>

            <div className="grid gap-4">

              {[
                "Design & CAD Modelling",
                "Additive Manufacturing",
                "Biomaterials & Smart Grafts",
                "Entrepreneurship",
                "Research & Development",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 font-medium hover:translate-x-2 transition-all"
                >
                  ✓ {item}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
        <div className="bg-[#3E4A24] rounded-3xl overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-3">

            <div>
              <img
                src="mechanical.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-2 flex items-center p-10">

              <div className="text-[#F8F5EC]">

                <div className="text-6xl mb-4">❝</div>

                <p className="text-xl md:text-2xl leading-10 italic">
                  There’s nothing I believe in more strongly than getting young
                  people interested in science and engineering, for a better
                  tomorrow, for all humankind.
                </p>

                <div className="mt-6 text-right text-lg font-semibold text-[#DCCCA3]">
                  — Bill Nye
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
