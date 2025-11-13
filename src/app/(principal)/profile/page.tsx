'use server';

import { ProfileData } from "@/components/principal/ProfileData";
import { GetUser } from "@/services/fetchData/user";

export default async function Profile() {
    const user = await GetUser();

    return (
        <>
            <ProfileData user = {user} />
        </>
    )
}