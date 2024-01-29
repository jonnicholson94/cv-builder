
import { Suspense, cache } from "react";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

import { updateName } from "@/app/actions";

import { ICv } from "@/lib/types/cv";

import DashboardHeader from "../_components/DashboardHeader";
import DashboardTextInput from "../_components/DashboardTextInput";
import DashboardPhotoInput from "../_components/DashboardPhotoInput";
import Loading from "./loading";

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your details" content="Tell employers a little more about who you are" />
            <DashboardTextInput id={data![0].id} value={data![0].name} type="text" name="name" label="Your name" placeholder="Enter your name" action={updateName} />
            <DashboardPhotoInput id={data![0].id} name="profile-picture" label="Your picture" picture={data![0].profile_picture} />
        </Suspense>
    )

}