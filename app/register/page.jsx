


"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "../../actions";

export default function RegisterPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRequirements = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "One number",
      valid: /\d/.test(password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await registerUser(formData);

      if (!result.success) {
        setError(result.error || "Registration failed. Please try again.");
        return;
      }

      router.push(result.redirectTo || "/menu");
      router.refresh();
    });
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <main className="min-h-screen bg-[#FFF9F3]">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link href="/menu" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-xl font-bold text-white">
            A
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Addis<span className="text-orange-600">Eats</span>
          </span>
        </Link>

        <div className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-bold text-orange-600 transition hover:text-orange-700"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* Registration Content */}
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">

        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-orange-100/50 lg:grid-cols-2">

          {/* Left Side - Welcome Panel */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-[#B9471F] p-12 text-white lg:flex">

            <div className="relative z-10">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                Welcome to Addis Eats
              </span>

              <h1 className="mt-10 max-w-md text-5xl font-extrabold leading-tight">
                Good food.
                <br />
                Great moments.
                <br />
                <span className="text-orange-200">
                  Delivered to you.
                </span>
              </h1>

              <p className="mt-6 max-w-sm text-base leading-7 text-orange-100">
                Discover the authentic taste of Ethiopia. Create your
                account and enjoy your favorite meals with just a few clicks.
              </p>
            </div>

            <div className="relative z-10 mt-16">
              <div className="mb-5 h-px w-full bg-white/20" />

              <p className="text-sm font-medium text-orange-100">
                Bringing the taste of Ethiopia closer to you.
              </p>

              <p className="mt-2 text-xs text-orange-200">
                © {new Date().getFullYear()} Addis Eats. All rights reserved.
              </p>
            </div>

            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/10" />
            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border-[50px] border-orange-400/20" />

            <div className="absolute right-16 top-1/2 text-8xl opacity-20">
              ✦
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-12">

            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                  Create your account
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                  Join Addis Eats
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Create an account to explore our menu and enjoy easy ordering.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    minLength={2}
                    className={inputClass}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0912345678 or +251912345678"
                    autoComplete="tel"
                    required
                    className={inputClass}
                  />

                  <p className="mt-1.5 text-xs text-gray-400">
                    Use your Ethiopian mobile number.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputClass} pr-20`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-orange-600 hover:text-orange-700"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {passwordRequirements.map((requirement) => (
                      <div
                        key={requirement.label}
                        className="flex items-center gap-2 text-xs"
                      >
                        <span
                          className={
                            requirement.valid
                              ? "font-bold text-green-600"
                              : "text-gray-300"
                          }
                        >
                          {requirement.valid ? "✓" : "○"}
                        </span>

                        <span
                          className={
                            requirement.valid
                              ? "text-green-600"
                              : "text-gray-400"
                          }
                        >
                          {requirement.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className={labelClass}
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      required
                      className={`${inputClass} pr-20`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-orange-600 hover:text-orange-700"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 accent-orange-600"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm leading-6 text-gray-500"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-semibold text-orange-600 hover:underline"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-orange-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700 hover:shadow-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending ? "Creating your account..." : "Create Account"}
                </button>

              </form>

              {/* Sign In Link */}
              <p className="mt-7 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-bold text-orange-600 hover:text-orange-700"
                >
                  Sign in here
                </Link>
              </p>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
                <span>🍽️</span>
                <span>Made with love for food lovers.</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
