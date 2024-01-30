
import { cookies } from "next/headers";

import { createClient } from "@/lib/supabase/server";

import AccountHeader from "./components/AccountHeader";
import AccountDetail from "./components/AccountDetail";
import AccountLogout from "./components/AccountLogout";
import { Suspense } from "react";
import AccountSkeleton from "./components/AccountSkeleton";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Your CV builder account | CV builder',
}

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.auth.getUser()

    console.log(data)

    return (
        <div className="h-auto min-h-screen w-screen bg-primaryBg flex items-center justify-start flex-col">
            <AccountHeader />
            <div className="h-auto xs:w-[90%] md:w-[500px] flex items-center justify-center flex-col mt-[50px]">
                <Suspense fallback={<AccountSkeleton />}>
                    <AccountDetail detail="Email" content={data.user?.email ? data?.user?.email : "No email provided"} />
                    <AccountLogout />
                </Suspense>
            </div>
        </div>
    )
}