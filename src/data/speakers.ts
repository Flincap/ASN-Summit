// ---------------------------------------------------------------------------
// PREVIOUS SPEAKERS
//
// These slide across the page in a marquee. Each card shows the photo, the
// name and the title, nothing else.
//
// To add someone:
//   1. Drop a square photo into  public/speakers/  (512x512 or larger, .webp
//      or .jpg both work)
//   2. Copy one block below, change the three lines, save.
//
// The order here is the order they appear. There is no limit, the marquee
// speed is set in SpeakersSection.tsx if you ever need to slow it down.
// ---------------------------------------------------------------------------

export type Speaker = {
  name: string;
  title: string;
  image: string;
};

export const previousSpeakers: Speaker[] = [
  {
    name: "Dr. Emomotimi Agama",
    title: "Director General, Securities and Exchange Commission Nigeria",
    image: "/speakers/01-emomotimi-agama-512.webp",
  },
  {
    name: "Dr. Segun Aina, OFR",
    title: "Founder and President, Africa Fintech Network",
    image: "/speakers/02-segun-aina-512.webp",
  },
  {
    name: "Iyinoluwa Aboyeji",
    title: "Founding Partner, Future Africa",
    image: "/speakers/07-iyinoluwa-aboyeji-512.webp",
  },
  {
    name: "Nathaniel Luz",
    title: "President, Africa Stablecoin Network",
    image: "/speakers/09-nathaniel-luz-512.webp",
  },
  {
    name: "Oni Oluwole Olushola, FCA",
    title: "Deputy Director and Tax Controller, NRPTO, Nigeria Revenue Service",
    image: "/speakers/27-oni-oluwole-olushola-512.webp",
  },
  {
    name: "Sola Adeyinka, CFA, ACCA",
    title: "Chief Executive Officer, Vale Holdings",
    image: "/speakers/03-sola-adeyinka-512.webp",
  },
  {
    name: "Dr. Ayodotun Ibidunni",
    title: "Associate Professor of Entrepreneurship, James Hope University",
    image: "/speakers/04-ayodotun-ibidunni-512.webp",
  },
  {
    name: "Gbenga Omosuyi",
    title: "Head of Global Business Development, Sphere Labs",
    image: "/speakers/05-gbenga-omosuyi-512.webp",
  },
  {
    name: "Tosin Nathaniel-Luz, MBA, CDPO",
    title: "Lead, Nexply Compliance",
    image: "/speakers/06-tosin-nathaniel-luz-512.webp",
  },
  {
    name: "Olamide Adeyemo",
    title: "Head of Commercial, Sporting Lagos",
    image: "/speakers/08-olamide-adeyemo-512.webp",
  },
  {
    name: "Bolarinwa Odupe",
    title: "Chief Executive Officer, Centiiv",
    image: "/speakers/10-bolarinwa-odupe-512.webp",
  },
  {
    name: "Favour Uche",
    title: "Assistant Lead, Policy and Regulatory Affairs, VASPA",
    image: "/speakers/11-favour-uche-512.webp",
  },
  {
    name: "Sogo 'Dowole",
    title: "Co-Founder and Chief Executive Officer, CircleFunds",
    image: "/speakers/12-sogo-dowole-512.webp",
  },
  {
    name: "Hezekiah Suleman",
    title: "Regional Lead, Africa, Mercuryo",
    image: "/speakers/13-hezekiah-suleman-512.webp",
  },
  {
    name: "Afrikanus Kofi Akosah Adusei",
    title: "Executive Director, Africa Web3 Institute",
    image: "/speakers/18-kofi-akosah-adusei-512.webp",
  },
  {
    name: "Ayo Adewuyi",
    title: "Chief Executive Officer, Pouchers Technology",
    image: "/speakers/19-ayo-adewuyi-512.webp",
  },
  {
    name: "Chinedu Obidiegwu",
    title: "Business Development Lead, Luno Nigeria",
    image: "/speakers/20-chinedu-obidiegwu-512.webp",
  },
  {
    name: "Francis Ogbuka",
    title: "Head of Africa, Utila",
    image: "/speakers/21-francis-ogbuka-512.webp",
  },
  {
    name: "Michael Emeeka",
    title: "Country Lead, Nigeria, Blockchain.com",
    image: "/speakers/22-michael-emeeka-512.webp",
  },
  {
    name: "Osaro Jackson",
    title: "Country Manager and Growth Lead, Yellow Card",
    image: "/speakers/23-osaro-jackson-512.webp",
  },
  {
    name: "Chukwuma Ukegbu",
    title: "Global Lead, Sales and Partnerships, Kora",
    image: "/speakers/24-chukwuma-ukegbu-512.webp",
  },
  {
    name: "Mallick Bolakale",
    title: "Co-Founder and Chief Executive Officer, Startbutton",
    image: "/speakers/25-mallick-bolakale-512.webp",
  },
  {
    name: "Oke Omolade Samuel",
    title: "Founder and Chief Executive Officer, Internopay Technologies",
    image: "/speakers/26-oke-omolade-512.webp",
  },
  {
    name: "Ephraim Okorodudu",
    title: "Sales Lead, YDPay",
    image: "/speakers/28-ephraim-okorodudu-512.webp",
  },
  {
    name: "Ifeanyi Olabode",
    title: "Fintech Sales and Business Development Leader, Daya",
    image: "/speakers/29-ifeanyi-olabode-512.webp",
  },

  // --- Add the next speaker below this line ---
  // {
  //   name: "Full Name",
  //   title: "Title, Organisation",
  //   image: "/speakers/file-name.webp",
  // },
];
