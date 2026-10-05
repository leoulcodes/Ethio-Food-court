# Addis Eats — Server / Client Refactor

This version deliberately separates server-rendered data from client-side interaction.

## Architecture

- `app/menu/page.jsx` is an **async Server Component**.
- `lib/menu.js` reads `data/menu.json` on the server with `fs/promises`.
- `DishList` and `DishCard` are Server Components.
- `FilterShell` is the small client boundary responsible only for search/category interaction.
- `AddToCartButton` is a client leaf.
- `CartSummary` is a client leaf.
- `CartProvider` is isolated in `components/Providers.jsx`.
- `Providers` is the only app-wide provider boundary.
- The menu page does **not** use `useFetch`, `useEffect`, `useState`, loading state, or error state.

## Important requirement: children instead of importing DishList

The menu page deliberately does this:

```jsx
<FilterShell dishes={dishes}>
  <DishList dishes={dishes} />
</FilterShell>
```

`FilterShell` does not import `DishList`. The server-rendered list is passed as `children`, so the client boundary does not pull the entire menu rendering tree into client JavaScript.

## Why FilterShell can filter server-rendered children

The server sends each card with:

- `data-menu-card`
- `data-category`
- `data-search`

The small `FilterShell` client component changes `hidden` on those existing DOM nodes. It does not move the dish data or DishList into the browser bundle.

For a larger production application, a URL/search-params approach or server-side filtering can be preferable. This implementation follows the requested exercise architecture.

## "use client" audit

Expected client files:

- `components/Providers.jsx`
- `components/cart/CartProvider.jsx`
- `components/cart/CartSummary.jsx`
- `components/cart/AddToCartButton.jsx`
- `components/menu/FilterShell.jsx`
- `app/cart/page.jsx` because the cart page consumes interactive context

Everything else is server by default.

## First Load JS measurement

Install and build:

```bash
npm install
npm run build
```

Then inspect the route table printed by Next.js. Record the `/menu` First Load JS value in `docs/first-load-js.md`.

For an apples-to-apples comparison, build the old implementation first, before replacing it, and record its `/menu` value.

The repository includes the measurement commands and an explicit before/after worksheet. The exact byte value is environment/version dependent and should not be fabricated.

## GitHub

After testing:

```bash
git init
git add .
git commit -m "refactor menu into server and client boundaries"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
