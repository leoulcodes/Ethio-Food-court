


import { cookies } from "next/headers";

export async function POST(request) {
  const { username, password } = await request.json();

  // Demonstration only: replace with real credential verification.
  if (username !== "admin" || password !== "demo-password") {
    return Response.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Demonstration only: generate a random token.
  const token = crypto.randomUUID();

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json({ message: "Login successful" });
}
