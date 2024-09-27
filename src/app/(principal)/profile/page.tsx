'use server';

import { ProfileData } from "@/components/principal/ProfileData";
import { fetchUser } from '@/services/fetchData/fetchUser';

import { cookies } from 'next/headers';

export default async function Profile() {
    const cookie: any = cookies().get('user');
    const userId = cookie?.value;

    console.log('cookie value',userId);

   const user = await fetchUser(userId);
   console.log(user);

    return (
        <>
            <ProfileData user={user} />
        </>
    )
}