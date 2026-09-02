# Africa Payments and Stablecoin Summit

Event site for the Africa Payments and Stablecoin Summit.
Lagos, 8 to 10 June 2027. Convened by the Africa Stablecoin Network.

Live at https://summit.afristablecoin.org/

## Running it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
```

## The two files you will actually edit

Everything that changes often has been pulled into two files so you never have
to go hunting through components.

### `src/data/event.ts`

Dates, venue, ticket links, the sponsorship form, the contact email and phone,
social links, the programme for each day, and the agenda themes.

If you change the **dates**, change them in two places: this file, and the
`application/ld+json` block near the top of `index.html`. That block is the
Schema.org Event markup that Google, LinkedIn and calendar apps read, so the
two have to agree.

### `src/data/speakers.ts`

The previous speakers list, which slides across the page in two rows. Each
card shows the photo, the name and the title, nothing else. To add someone:

1. Put a square photo in `public/speakers/` (512x512 or larger, .webp or .jpg)
2. Copy one of the blocks in the file, change the three lines

```ts
{
  name: "Full Name",
  title: "Title, Organisation",
  image: "/speakers/file-name.webp",
},
```

The order in the file is the order they appear. There is no limit. The
marquee speed is set in `src/sections/SpeakersSection.tsx` if you ever want to
slow it down.

### `src/data/brands.ts`

The two logo rows under "Brands that have graced the stage". Top row is
sponsors and institutional partners, bottom row is exhibitors and brands. Put
logo files in `public/sponsors/` or `public/brands/` and add a line. Logos sit
on white cards, so transparent PNG, WEBP or SVG all work.

## Gallery and recap film

Both live in `src/data/event.ts` under `gallery`:

- **Photo library**: the `driveUrl` points at the Google Drive folder. Two
  buttons in the Gallery section open it in a new tab.
- **Recap film**: `videoId` is the part of a YouTube link after `youtu.be/`.
  Change that one string to swap the film.

The video does not load YouTube's scripts until someone actually presses play,
and it uses the no-cookie domain. The still frame comes from YouTube, with a
fallback if the video has no high-resolution thumbnail.

The sliding photo rows read from `public/gallery/`, which expects files named
`speaking-01-640.webp` through `speaking-10-640.webp`, and the same for
`exhibiting-` and `attending-`. Ten per row. If you change the count, update
the number in `src/sections/GallerySection.tsx`.

## Registration

The Register button opens a small dialog offering two passes. Both open in a
new tab:

- General Pass: https://luma.com/uv7sqk8g
- Delegate Pass: https://tix.africa/discover/apass

Sponsorship goes straight to the Airtable form, also in a new tab.

## Stack

Vite, React, TypeScript, Tailwind, Framer Motion. No backend, no database.
Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages.
Build command `npm run build`, publish directory `dist`.
