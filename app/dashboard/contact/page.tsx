
import { Suspense, cache } from "react";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

import { ICv } from "@/lib/types/cv";
import { updateEmail, updateGithub, updateLinkedIn, updatePhone, updateTwitter } from "@/app/actions";

import DashboardHeader from "../_components/DashboardHeader";
import DashboardTextInput from "../_components/DashboardTextInput";

import Loading from "./loading";
import DashboardPhoneInput from "../_components/DashboardPhoneInput";

export const revalidate = 300

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your contact details" content="How employers can contact you" />
            <DashboardPhoneInput id={data![0].id} value={data![0].phone_number} action={updatePhone} />
            <DashboardTextInput id={data![0].id} value={data![0].email_address} type="email" name="email" label="Your email" placeholder="Enter your email address" action={updateEmail} />
            <DashboardTextInput id={data![0].id} value={data![0].twitter} type="text" name="twitter" label="Your Twitter profile" placeholder="https://twitter.com/..." action={updateTwitter} />
            <DashboardTextInput id={data![0].id} value={data![0].linkedIn} type="text" name="linkedin" label="Your LinkedIn profile" placeholder="https://linkedin.com/in/..." action={updateLinkedIn} />
            <DashboardTextInput id={data![0].id} value={data![0].github} type="text" name="github" label="Your GitHub profile" placeholder="https://github.com/..." action={updateGithub} />
        </Suspense>
    )

}