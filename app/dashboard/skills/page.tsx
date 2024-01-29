
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")
}