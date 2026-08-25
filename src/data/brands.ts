// ---------------------------------------------------------------------------
// BRANDS AND SPONSORS
//
// Logos that slide across the "Brands that have graced the stage" section.
// Put new logo files in  public/sponsors/  or  public/brands/  and add a line
// below. Logos sit on white cards, so a transparent PNG, WEBP or SVG works
// best. Anything with a solid white background is fine too.
// ---------------------------------------------------------------------------

export type Brand = {
  name: string;
  logo: string;
};

// Headline row: sponsors and institutional partners.
export const sponsors: Brand[] = [
  { name: "Nigeria Revenue Service", logo: "/sponsors/nrs-320.webp" },
  { name: "VASPA", logo: "/sponsors/vaspa-320.webp" },
  { name: "Kora", logo: "/sponsors/kora-320.webp" },
  { name: "Centiiv", logo: "/sponsors/centiiv.svg" },
  { name: "Nexply Compliance", logo: "/sponsors/nexply-compliance-320.webp" },
  { name: "LEDiG", logo: "/sponsors/ledig-320.webp" },
  { name: "Startbutton", logo: "/sponsors/startbutton-320.webp" },
  { name: "Onrapay", logo: "/sponsors/onrapay-320.webp" },
  { name: "Daya", logo: "/sponsors/daya-320.webp" },
];

// Second row: exhibitors and brands from previous editions.
export const brands: Brand[] = [
  { name: "Lisk", logo: "/brands/lisk-240.webp" },
  { name: "Zabira", logo: "/brands/zabira-240.webp" },
  { name: "Flincap", logo: "/brands/flincap-240.webp" },
  { name: "Oneremit", logo: "/brands/oneremit-240.webp" },
  { name: "Roqqu", logo: "/brands/roqqu-240.webp" },
  { name: "Sphere", logo: "/brands/sphere-240.webp" },
  { name: "Solana Superteam", logo: "/brands/solana-superteam-240.webp" },
  { name: "Apex", logo: "/brands/apex-240.webp" },
  { name: "DigitPay", logo: "/brands/digitpay-240.webp" },
  { name: "fUSD", logo: "/brands/fusd-240.webp" },
  { name: "Upesa", logo: "/brands/upesa-240.webp" },
  { name: "Sswerv", logo: "/brands/sswerv-240.webp" },
  { name: "Crello", logo: "/brands/partner-crello-240.webp" },
];
