
import { Suspense, cache } from "react";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

import { updateAbout } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader";

import Loading from "./loading";
import DashboardTextarea from "../_components/DashboardTextarea";

export const revalidate = 300

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="About you" content="Tell employers a little more about who you are" />
            <DashboardTextarea id={data![0].id} value={data![0].about} name="text" label="About" placeholder="Talk about yourself..." action={updateAbout} />
        </Suspense>
    )

}