import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import DashboardHeader from "../_components/DashboardHeader";
import DashboardTextInput from "../_components/DashboardTextInput";
import { ICv } from "@/lib/types/cv";
import { Suspense } from "react";
import Loading from "./loading";
import DashboardPhotoInput from "../_components/DashboardPhotoInput";

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    const cvData: ICv = data![0]

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your details" content="Tell employers a little more about who you are" />
            <DashboardTextInput id={cvData.id} value={cvData.name} type="text" name="name" label="Your name" placeholder="Enter your name" />
            <DashboardPhotoInput id={cvData.id} name="profile-picture" label="Your picture" picture={cvData.profile_picture} />
        </Suspense>
    )

}