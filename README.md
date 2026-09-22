# Kingschoice Med & More

Multi-page informational website for Kingschoice Med & More, a Nigerian medical
and laboratory equipment distributor. There is no shopping cart or checkout —
every product and call-to-action routes to WhatsApp (or email) to place an order.

## Stack

Next.js (App Router, static export) + Tailwind CSS. Deployable to Vercel or any
static host.

## Pages

- `/` — Home
- `/about` — About
- `/products` — Products / Catalogue
- `/delivery` — Delivery
- `/contact` — Locations & Contact

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` produces a static
site in `out/` that can be deployed anywhere.

## Business data

Business facts (phone, email, addresses, delivery policy) live in
`lib/constants.ts`. Product catalogue data lives in `lib/products.ts` — the
current list is a representative placeholder catalogue and should be replaced
with the real product line-up.
