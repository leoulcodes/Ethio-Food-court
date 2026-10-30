

// import { NextResponse } from "next/server";


// export function middleware(request) {

//     const session = request.cookies.get("session");
    
// if (!session) {
//     const url = new URL("/signin", request.url);
//     url.searchParams.set("next", request.nextUrl.pathname);
//     return NextResponse.redirect(url);
// }
//     return NextResponse.next();
// }

// export const config={
//     matcher:["/checkout/:path*", "/orders/:path*", "/cart/:path*"]
// }





import { NextResponse } from "next/server";

export function middleware(request) {
    const session = request.cookies.get("session")?.value;

    // Debugging
    console.log("Middleware executed:", request.nextUrl.pathname);
    console.log("Session:", session);

    if (!session) {
        const signinUrl = new URL("/signin", request.url);

        signinUrl.searchParams.set(
            "next",
            request.nextUrl.pathname
        );

        return NextResponse.redirect(signinUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/checkout/:path*",
        "/orders/:path*",
        "/cart/:path*"
    ]
};
