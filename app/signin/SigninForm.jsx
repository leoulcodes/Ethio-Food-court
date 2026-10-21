

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Invalid username or password.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex items-center justify-center bg-orange-50 px-4 py-12 sm:py-16">
      <div className="w-full max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/60 sm:p-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🍲
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome Back!
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Sign in to discover your favorite Ethiopian dishes.
          </p>
        </div>

        {/* Sign-in Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="username"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-20 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-4 text-sm font-semibold text-gray-500 transition hover:text-orange-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-orange-200/60 transition hover:bg-orange-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-orange-600 transition hover:text-orange-700"
          >
            Create an account
          </Link>
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span>🔒</span>
          Secure sign-in to your Addis Eats account
        </div>
      </div>
    </section>
  );
}