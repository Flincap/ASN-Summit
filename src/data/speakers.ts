// ---------------------------------------------------------------------------
// PREVIOUS SPEAKERS
//
// To add someone:
//   1. Drop their photo into  public/speakers/
//      (square or portrait works best, roughly 800x800 or larger)
//   2. Copy one block below, change the three lines, save.
//
// Filenames with spaces are fine, but write the space as %20 in `image`.
// The order here is the order they appear on the page.
// ---------------------------------------------------------------------------

export type Speaker = {
  name: string;
  role: string;
  image: string;
};

export const previousSpeakers: Speaker[] = [
  {
    name: "Dr. Emomotimi Agama",
    role: "Director General, Securities and Exchange Commission Nigeria",
    image: "/speakers/Emomotimi%20Agama.JPG",
  },
  {
    name: "Iyinoluwa Aboyeji",
    role: "Founding Partner, Future Africa",
    image: "/speakers/Iyinoluwa%20Aboyeji.PNG",
  },
  {
    name: "Nathaniel Luz",
    role: "President, Africa Stablecoin Network",
    image: "/speakers/Nathaniel%20Luz.jpg",
  },
  {
    name: "Tosin Nathaniel Luz",
    role: "Chief Executive Officer, Nexply Compliance",
    image: "/speakers/TNL.JPG",
  },

  // --- Add the next speaker below this line ---
  // {
  //   name: "Full Name",
  //   role: "Title, Organisation",
  //   image: "/speakers/File%20Name.jpg",
  // },
];
