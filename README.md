# Africa Payments and Stablecoin Summit

Event site for the Africa Payments and Stablecoin Summit.
Lagos, 9 and 10 June 2027. Convened by the Africa Stablecoin Network.

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

The previous speakers list. To add someone:

1. Put their photo in `public/speakers/` (portrait or square, 800px or larger)
2. Copy one of the blocks in the file, change the name, role and image path
3. If the filename has a space in it, write the space as `%20`

```ts
{
  name: "Full Name",
  role: "Title, Organisation",
  image: "/speakers/File%20Name.jpg",
},
```

The order in the file is the order on the page. There is no limit, the grid
reflows on its own.

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
