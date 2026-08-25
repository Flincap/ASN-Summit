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

  dateLine: "June 9-10, 2027",
  city: "Lagos, Nigeria",
  venue: "Oriental Hotel, Lagos, Nigeria",
  venueAddress: "3 Lekki-Epe Expressway, Victoria Island, Lagos, Nigeria",

  // Used by the countdown. Mixer opens on the evening of Wednesday 9 June.
  startsAt: "2027-06-09T17:00:00+01:00",

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

// The two days, shown in the Programme section.
export const programme = [
  {
    day: "Day one",
    date: "Wednesday 9 June",
    title: "Executive mixer",
    access: "By invitation",
    time: "Evening",
    description:
      "A closed-room reception for invited executives, regulators and partners. Introductions before the programme proper, with the guest list kept deliberately small.",
  },
  {
    day: "Day two",
    date: "Thursday 10 June",
    title: "Main conference",
    access: "General and delegate passes",
    time: "Full day",
    description:
      "A full day of plenaries, panels and closed sessions on stablecoin regulation, cross-border settlement and the payment rails being built underneath African finance.",
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
