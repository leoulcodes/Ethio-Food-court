# Addis Eats component boundary map

```text
app/layout.jsx                         SERVER
└── Providers.jsx                      CLIENT boundary
    ├── Header.jsx                     SERVER
    │   └── CartSummary.jsx             CLIENT leaf
    ├── app/menu/page.jsx              SERVER
    │   └── FilterShell.jsx            CLIENT boundary
    │       └── DishList.jsx            SERVER child via `children`
    │           └── DishCard.jsx        SERVER
    │               └── AddToCartButton CLIENT leaf
    └── Footer.jsx                     SERVER

CartProvider.jsx                       CLIENT context/provider
```

The important direction is: server components render the page and pass server-rendered children through the client shell; only interactive leaves cross into client JavaScript.
