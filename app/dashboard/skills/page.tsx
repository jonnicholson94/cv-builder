
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

import DashboardHeader from "../_components/DashboardHeader"
import DashboardSkillsList from "../_components/DashboardSkillsList"

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    return (
        <>
            <DashboardHeader title="Skills" content="Add any skills you've got to list on your CV" />
            <DashboardSkillsList id={data![0].id} skills={JSON.parse(data![0].skills)} />
        </>
    )
}