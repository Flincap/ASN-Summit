// ---------------------------------------------------------------------------
// Every fact about the Summit lives here. Change it once and the whole site
// follows. If you edit the dates, also update the JSON-LD block in index.html
// so search engines see the same dates.
// ---------------------------------------------------------------------------

export const event = {
  name: "Africa Payments and Stablecoin Summit",
  shortName: "APASS",
  tagline: "Enhancing adoption of a borderless digital economy",
  strapline:
    "The continent's senior banking, payments and finance leadership, in one room.",

  dateLine: "June 8-10, 2027",
  city: "Lagos, Nigeria",
  venue: "Landmark Centre, Victoria Island, Lagos",
  venueAddress: "Water Corporation Road, Victoria Island, Lagos, Nigeria",

  // Used by the countdown. Mixer opens on the evening of Tuesday 8 June.
  startsAt: "2027-06-08T17:00:00+01:00",

  delegates: 750,
  convener: "Africa Stablecoin Network",
  conveneUrl: "https://afristablecoin.org",
  siteUrl: "https://summit.afristablecoin.org/",

  registration: {
    general: "https://luma.com/uv7sqk8g",
    delegate: "https://tix.africa/discover/apass",
  },
  sponsorshipForm:
    "https://airtable.com/appVErDCDv9PrIqXy/pagD6K1a5x4jLwdAw/form",

  contact: {
    email: "apass@afristablecoin.org",
    phone: "+234 903 983 0751",
    phoneHref: "+2349039830751",
  },

  social: {
    x: "https://www.x.com/afristablecoin",
    linkedin: "https://www.linkedin.com/company/afristablecoin",
    instagram: "https://www.instagram.com/afristablecoin",
    facebook: "https://www.facebook.com/afristablecoin",
  },
};

// Photo library and recap film from the last edition.
export const gallery = {
  // Google Drive folder holding the full photo set.
  driveUrl:
    "https://drive.google.com/drive/folders/16mrdO5-lheId1-mZ_m3sY4QoVHuT8pXa",
  // Recap film. videoId is the part of the YouTube link after youtu.be/
  videoUrl: "https://youtu.be/x8DxbBTnbgs",
  videoId: "x8DxbBTnbgs",
};

// The three days, shown in the Programme section.
export const programme = [
  {
    day: "Day one",
    date: "Tuesday 8 June",
    title: "Executive mixer",
    access: "By invitation",
    time: "Evening",
    description:
      "A closed-room reception for invited executives, regulators and partners. Introductions before the programme proper, with the guest list kept deliberately small.",
  },
  {
    day: "Day two",
    date: "Wednesday 9 June",
    title: "Conference day one",
    access: "General and delegate passes",
    time: "Full day",
    description:
      "The opening plenary and the first full day of panels, on stablecoin regulation, legislative design and the treatment of digital assets under African law.",
  },
  {
    day: "Day three",
    date: "Thursday 10 June",
    title: "Conference day two",
    access: "General and delegate passes",
    time: "Full day",
    description:
      "A second day on cross-border settlement, the payment rails being built underneath African finance, and the closing plenary.",
  },
];

// What the programme covers. Add or remove freely.
export const themes = [
  {
    title: "Stablecoin regulation and legislative design",
    body: "How African law is being written for stablecoins, and what the drafters are learning from MiCA, the GENIUS Act and the frameworks now moving through African legislatures.",
  },
  {
    title: "Cross-border settlement",
    body: "Settlement in African currencies, the correspondent banking gap, and the infrastructure being stood up to close it.",
  },
  {
    title: "Digital assets under African law",
    body: "Licensing, custody, reserve treatment and supervision, from the regulators and institutions that carry the responsibility.",
  },
  {
    title: "The next payment rails",
    body: "Instant payment systems now run in more than thirty African countries. What that means for banks, for fintechs and for the customers behind them.",
  },
];
