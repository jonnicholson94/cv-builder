
import { Suspense, cache } from "react";

import { fetchCv, updateName } from "@/app/actions";

import { ICv } from "@/lib/types/cv";

import DashboardHeader from "../_components/DashboardHeader";
import DashboardTextInput from "../_components/DashboardTextInput";
import DashboardPhotoInput from "../_components/DashboardPhotoInput";
import Loading from "./loading";

export default async function Page() {

    const cachedFetch = cache(fetchCv)

    const { data, error } = await cachedFetch()

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your details" content="Tell employers a little more about who you are" />
            <DashboardTextInput id={data!.id} value={data!.name} type="text" name="name" label="Your name" placeholder="Enter your name" action={updateName} />
            <DashboardPhotoInput id={data!.id} name="profile-picture" label="Your picture" picture={data!.profile_picture} />
        </Suspense>
    )

}