import React from "react";

const page = () => {
  const contacts = [
    {
      icon: "icons/location.svg",
      title: "Location",
      value: "Baghmali, Hajipur, Bihar",
    },
    {
      icon: "icons/phone.svg",
      title: "Phone",
      value: "+91-98236560580 | +91-8789640641",
    },
    {
      icon: "icons/gmail.svg",
      title: "Email",
      value: "ansari.aftab.in@gmail.com",
      link: "mailto:ansari.aftab.in@gmail.com",
    },
    {
      icon: "icons/linkedin.svg",
      title: "LinkedIn",
      value: "View Profile",
      link: "https://www.linkedin.com/in/aftab-alam-b5815a121/",
    },
    {
      icon: "icons/orcid.svg",
      title: "ORCID",
      value: "0000-0001-5559-4721",
      link: "https://orcid.org/0000-0001-5559-4721",
    },
  ];

  return (
    <div className="bg-[#F8F4E9] min-h-screen pt-[56px]">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/contact.png"
          alt="Contact Banner"
          className="w-full h-[40vh] md:h-[55vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F8F4E9]">
              Contact
            </h1>

            <div className="w-28 h-1 bg-[#556B2F] mt-4 rounded-full"></div>

            <p className="text-gray-300 mt-5 text-lg">
              Get in touch for academic collaborations, research, and
              professional inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#DDD6C8]">
          {/* Header */}
          <div className="bg-[#1A1A1A] px-8 py-10 text-center">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-[#556B2F]">
              <img
                src="/aftab.png"
                alt="Dr. Aftab Alam Ansari"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#F8F4E9] mt-6">
              Dr. Mohammad Aftab Alam Ansari
            </h2>

            <p className="text-gray-400 mt-2">
              Researcher • Academician • Engineer
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-[#E7E1D5] bg-[#FAF8F2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-[#556B2F] p-3 rounded-xl">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#556B2F] text-lg">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-[#556B2F] transition duration-300 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-12 bg-[#556B2F] rounded-3xl p-10 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#F8F4E9]">
            Let's Connect
          </h3>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Open to academic collaborations, research discussions, project
            guidance, and professional networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
