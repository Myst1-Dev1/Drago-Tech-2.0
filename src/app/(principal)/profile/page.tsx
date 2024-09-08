'use server';
import User from '@/Models/User';

import { ProfileData } from "@/components/principal/ProfileData";
import { cookies } from 'next/headers';

export default async function Profile() {
    const cookie:any = cookies().get('user');
    const user = await User.findById(cookie?.value);

    return (
        <>
            <ProfileData user={user} />
        </>
    )
}