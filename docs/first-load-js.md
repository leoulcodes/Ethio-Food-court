# First Load JS — /menu

## Measurement protocol

Run the baseline (old implementation):

```bash
npm run build
```

Copy the exact `/menu` row from Next.js into the table.

Then run the refactored implementation:

```bash
npm run build
```

Copy the new `/menu` row into the table.

| Version | `/menu` First Load JS | Difference |
|---|---:|---:|
| Before: client menu + useFetch | **RECORD FROM ORIGINAL BUILD** | — |
| After: server menu + leaf clients | **RECORD FROM REFACTORED BUILD** | Before − After |

### Explanation

The refactor should reduce the JavaScript required by `/menu` because:

1. Menu data fetching no longer runs in the browser.
2. `useFetch`, `useEffect`, menu loading state, and menu error state are removed from the route.
3. `DishList` and `DishCard` are Server Components.
4. The cart provider is isolated instead of making the entire menu tree client-rendered.
5. Search/category interaction is confined to `FilterShell`.
6. Add-to-cart behavior is confined to `AddToCartButton`.

Do not claim a numeric improvement until both builds have been run under the same Node/Next/package-lock environment.

## Optional raw build evidence

Keep the two build outputs or paste the relevant Next.js route table below:

```text
BEFORE:
[ paste npm run build output here ]

AFTER:
[ paste npm run build output here ]
```
