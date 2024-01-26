
import { Suspense } from "react";
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

import { ICv } from "@/lib/types/cv";
import { updateEmail, updateGithub, updateLinkedIn, updatePhone, updateTwitter } from "@/app/actions";

import DashboardHeader from "../_components/DashboardHeader";
import DashboardTextInput from "../_components/DashboardTextInput";

import Loading from "./loading";
import DashboardPhoneInput from "../_components/DashboardPhoneInput";

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    const cvData: ICv = data![0]

    return (
        <Suspense fallback={ <Loading /> }>
            <DashboardHeader title="Your contact details" content="How employers can contact you" />
            <DashboardPhoneInput id={cvData.id} value={cvData.phone_number} action={updatePhone} />
            <DashboardTextInput id={cvData.id} value={cvData.email_address} type="email" name="email" label="Your email" placeholder="Enter your email address" action={updateEmail} />
            <DashboardTextInput id={cvData.id} value={cvData.twitter} type="text" name="twitter" label="Your Twitter profile" placeholder="https://twitter.com/..." action={updateTwitter} />
            <DashboardTextInput id={cvData.id} value={cvData.linkedIn} type="text" name="linkedin" label="Your LinkedIn profile" placeholder="https://linkedin.com/in/..." action={updateLinkedIn} />
            <DashboardTextInput id={cvData.id} value={cvData.github} type="text" name="github" label="Your GitHub profile" placeholder="https://github.com/..." action={updateGithub} />
        </Suspense>
    )

}