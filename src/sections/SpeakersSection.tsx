import React from "react";
import SectionTitle from "../components/SectionTitle";

const speakers = [
  {
    src: "/speakers/Chidubem%20Emelumadu.JPEG",
    name: "Chidubem Emelumadu",
    title: "Ecosystem Lead(Africa), Lisk",
  },
  {
    src: "/speakers/Eseognene%20Onomor.jpg",
    name: "Eseognene Onomor",
    title: "CEO, Roqqu",
  },
  {
    src: "/speakers/Samuel%20Xeus.jpg",
    name: "Samuel Xeus",
    title: "Founder, Nirvana Academy",
  },
  {
    src: "/speakers/Cynthia%20Chisom.png",
    name: "Cynthia Chisom",
    title: "Principal Partner, SDC Startup School",
  },
  {
    src: "/speakers/Ayodeji%20Awosika.JPEG",
    name: "Ayodeji Awosika",
    title: "Founder, Web3Bridge",
  },
  {
    src: "/speakers/Monalisa%20Agbata.jpg",
    name: "Monalisa Agbata",
    title: "CEO and Co-Founder, OneDev",
  },
  {
    src: "/speakers/Franklin%20Peters.jpg",
    name: "Franklin Peters",
    title: "CEO, BoundlessPay",
  },
  {
    src: "/speakers/Edidiong%20Sebastian.JPG",
    name: "Edidiong Sebastian",
    title: "Founder, Techminded Lawyers",
  },
  {
    src: "/speakers/Tony%20Obiajuru.JPEG",
    name: "Tony Obiajuru",
    title: "Event Host",
  },
  {
    src: "/speakers/Sarah%20Idahosa.png",
    name: "Sarah Idahosa",
    title: "Founder, Women in DeFi",
  },
  {
    src: "/speakers/Joseph%20Olaoluwa.jpg",
    name: "Joseph Olaoluwa",
    title: "Managing Editor, Condia",
  },
];

const SpeakersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Meet the Speakers"
          subtitle="Visionaries, leaders, and innovators shaping the future."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-[80%] h-96 md:w-60 md:h-72 overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                <img
                  src={speaker.src}
                  alt={speaker.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-heading font-extrabold text-primary-700 tracking-tight mb-1 drop-shadow-sm transition-colors duration-200 hover:text-secondary-500">
                  {speaker.name}
                </h3>
                <p className="text-sm text-dark-500 mt-1 font-medium">
                  {speaker.title}
                </p>
                <div className="w-10 h-0.5 mx-auto bg-secondary-500 mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
