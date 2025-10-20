# Gift Sanitary Napkins

A small Next.js informational landing site for Gift Sanitary Napkins. The site highlights product information, accessibility-focused content, an about page, and a contact section. It's built with the Next.js App Router and TypeScript.

## Project overview

- Next.js (App Router) site with server and client components.
- Responsive landing pages and accessible components.
- Product data is stored in `lib/products.ts` and used to render the product showcase.
- A sitemap is generated via the route handler at `app/sitemap.xml/route.ts`.

## Features

- Hero section with carousel/visuals
- Features and product showcase sections
- Contact form section (static front-end contact UI)
- SEO-friendly metadata and sitemap
- Image and static asset hosting via the `public/` folder

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS for styling
- Framer Motion / GSAP used for animations

## Important files

- `app/layout.tsx` — root layout and metadata
- `app/page.tsx` — home page
- `app/about/page.tsx` — about page
- `app/sitemap.xml/route.ts` — sitemap route
- `components/navigation.tsx` — top navigation
- `components/footer.tsx` — footer component
- `components/home/*` — hero, features, product and contact sections
- `lib/products.ts` — product data used by the product showcase
- `public/` — static assets (images, verification files)

## Run locally

Make sure you have pnpm installed, then:

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start
```

See the `package.json` scripts for exact commands.

## Notes

- Update product entries in `lib/products.ts` to change what's showcased.
- Static files (images) belong in `public/images/`.
- The project is intentionally small and easy to extend; feel free to add pages or components under `app/` and `components/`.

## License

Include a license file if you plan to open-source this project.

Enjoy working on the site — it's structured to be straightforward to maintain and extend.

## Author / Contact

Ibrahim Khedr — <techofreact@gmail.com>
