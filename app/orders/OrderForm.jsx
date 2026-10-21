


// "use client";

// import { useState } from "react";

// export default function OrderForm() {
//   const [message, setMessage] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     const order = {
//       dish: formData.get("dish"),
//       quantity: Number(formData.get("quantity"))
//     };

//     const response = await fetch("/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(order)
//     });

//     const result = await response.json();
//     setMessage(result.message);

//     if (response.ok) {
//       event.target.reset();
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Place Your Food Order</h2>

//       <label>
//         Choose a dish:
//         <select name="dish" required>
//           <option value="">Select a dish</option>
//           <option value="Doro Wat">Doro Wat</option>
//           <option value="Shiro Wat">Shiro Wat</option>
//           <option value="Tibs">Tibs</option>
//         </select>
//       </label>

//       <br />

//       <label>
//         Quantity:
//         <input
//           type="number"
//           name="quantity"
//           min="1"
//           defaultValue="1"
//           required
//         />
//       </label>

//       <br />

//       <button type="submit">Place Order</button>

//       <p>{message}</p>
//     </form>
//   );
// }



"use client";

import { useState } from "react";

export default function OrderForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    const formData = new FormData(event.target);

    const order = {
      dish: formData.get("dish"),
      quantity: Number(formData.get("quantity")),
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const result = await response.json();

      setMessage(result.message);
      setSuccess(response.ok);

      if (response.ok) {
        event.target.reset();
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-50 px-4 py-12">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl shadow-orange-100">
        {/* Header */}
        <div className="bg-orange-600 px-8 py-8 text-center text-white">
          <div className="mb-3 text-5xl">🍲</div>
          <h1 className="text-3xl font-bold tracking-tight">
            Addis Eats
          </h1>
          <p className="mt-2 text-sm text-orange-100">
            Delicious Ethiopian food, made with love.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Place Your Order
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Choose your favorite dish and quantity.
            </p>
          </div>

          <div>
            <label
              htmlFor="dish"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Select your dish
            </label>

            <select
              id="dish"
              name="dish"
              required
              defaultValue=""
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              <option value="" disabled>
                Choose a delicious meal
              </option>
              <option value="Doro Wat">🍗 Doro Wat</option>
              <option value="Shiro Wat">🥣 Shiro Wat</option>
              <option value="Tibs">🥩 Tibs</option>
              <option value="Beyaynetu">🥗 Beyaynetu</option>
              <option value="Kitfo">🍽️ Kitfo</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Quantity
            </label>

            <input
              id="quantity"
              type="number"
              name="quantity"
              min="1"
              max="20"
              defaultValue="1"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition duration-200 hover:bg-orange-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Placing Order..." : "Place Order →"}
          </button>

          {message && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl p-4 text-sm font-medium ${
                success
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "border border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <p className="text-center text-xs text-gray-400">
            Fresh flavors. Authentic Ethiopian cuisine. ❤️
          </p>
        </form>
      </div>
    </main>
  );
}
