import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string | any;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}
