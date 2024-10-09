import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('user')?.value;
    const page401 = new URL('/page401', request.url);
    const homeURL = new URL('/', request.url);

    if (!token) {
        if (request.nextUrl.pathname === '/signIn') {
            return NextResponse.next();
        }
        return NextResponse.redirect(page401);
    }

    if (request.nextUrl.pathname === '/signIn' || request.nextUrl.pathname === '/signUp') {
        return NextResponse.redirect(homeURL);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/profile',
        '/signIn',
        '/signUp',
    ],
};
