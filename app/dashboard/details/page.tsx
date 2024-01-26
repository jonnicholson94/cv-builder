
import { Suspense } from "react";
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

    const cvData: ICv = data![0]

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your details" content="Tell employers a little more about who you are" />
            <DashboardTextInput id={cvData.id} value={cvData.name} type="text" name="name" label="Your name" placeholder="Enter your name" action={updateName} />
            <DashboardPhotoInput id={cvData.id} name="profile-picture" label="Your picture" picture={cvData.profile_picture} />
        </Suspense>
    )

}