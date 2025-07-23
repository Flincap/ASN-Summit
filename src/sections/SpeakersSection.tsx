import React from "react";
import SectionTitle from "../components/SectionTitle";

const speakers = [
  {
    src: "/speakers/Emomotimi%20Agama.JPG",
    name: "Dr. Emomotimi Agama",
    title: "DG, Securities and Exchange Commission",
  },
  {
    src: "/speakers/Nathaniel%20Luz.jpg",
    name: "Nathaniel Luz",
    title: "President, Africa Stablecoin Network",
  },
  {
    src: "/speakers/Iyinoluwa%20Aboyeji.PNG",
    name: "Iyinoluwa E. Aboyeji",
    title: "Founding Partner, Future Africa",
  },
  {
    src: "/speakers/Harry%20Obi.jpg",
    name: "Harry Obi",
    title: "Co-Lead, Superteam NG",
  },
  {
    src: "/speakers/TNL.JPG",
    name: "Tosin N. Luz",
    title: "CEO, Nexply Compliance",
  },
  {
    src: "/speakers/Obinna%20Iwuno.jpg",
    name: "Obinna Iwuno",
    title: "President, SiBAN",
  },
  {
    src: "/speakers/Ike%20Ekemah.png",
    name: "Ike Ekemah",
    title: "Marketing & Commnuncations Manager, Zabira Technologies",
  },
  {
    src: "/speakers/Zane%20Suren.jpeg",
    name: "Zane Suren",
    title:
      "Managing Director, Commercial, Middle East and Africa Company- Zodia",
  },
  {
    src: "/speakers/Chidubem%20Emelumadu.JPEG",
    name: "Chidubem Emelumadu",
    title: "Ecosystem Lead(Africa), Lisk",
  },
  {
    src: "/speakers/Franklin%20Peters.jpg",
    name: "Franklin Peters",
    title: "CEO, BoundlessPay",
  },
  {
    src: "/speakers/Boyejo%20Oluwafemi.jpeg",
    name: "Boyejo Oluwafemi",
    title: "Founder, Upesa",
  },
  {
    src: "/speakers/Zunnurayn%20Idris.jpg",
    name: "Zunnurayni Idris",
    title: "CEO, BCH HUB",
  },
  {
    src: "/speakers/Gbenga%20Omosuyi.PNG",
    name: "Gbenga Omosuyi",
    title: "Head of Strategic Partnerships at BitGo",
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
    src: "/speakers/Samuel%20Xeus.jpg",
    name: "Samuel Xeus",
    title: "Founder, Nirvana Academy",
  },
  {
    src: "/speakers/Monalisa%20Agbata.jpg",
    name: "Monalisa Agbata",
    title: "CEO and Co-Founder, OneDev",
  },
  {
    src: "/speakers/Sarah%20Idahosa.png",
    name: "Sarah Idahosa",
    title: "Founder, Women in DeFi",
  },
  {
    src: "/speakers/Eseognene%20Onomor.jpg",
    name: "Eseognene Onomor",
    title: "CEO, Roqqu",
  },
  {
    src: "/speakers/Nicolas%20Akpas.jpg",
    name: "Nicolas Akpas",
    title: "CEO, Chainconsults",
  },
  {
    src: "/speakers/Damilare%20Aregbesola.JPG",
    name: "Damilare Aregbesola",
    title: "West-Africa Lead, Base",
  },
  {
    src: "/speakers/Edidiong%20Sebastian.JPG",
    name: "Edidiong Sebastian",
    title: "Founder, Techminded Lawyers",
  },
  {
    src: "/speakers/Joseph%20Olaoluwa.jpg",
    name: "Joseph Olaoluwa",
    title: "Managing Editor, Condia",
  },
  {
    src: "/speakers/Zebulun%20Ajayi.jpg",
    name: "Zebulun Ajayi",
    title: "Web3 Creative Director",
  },
  {
    src: "/speakers/Tony%20Obiajuru.JPEG",
    name: "Tony Obiajuru",
    title: "Event Host",
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
                  className="object-cover w-full h-full rounded-md"
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
