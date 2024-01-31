
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

import CvTemplatePicker from "./_components/CvTemplatePicker";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Build your CV | CV builder',
}


export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    return (
        <>
            <CvTemplatePicker cv={data === null ? null : data[0]} />
        </>
    )
}