
"use client"

import { useRouter } from "next/navigation"

import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

export default function EmptyDashboard() {

    const router = useRouter()

    const supabase = createClient()

    const handleClick = async () => {
        const { data, error } = await supabase.from("cv").insert({})

        if (data) {
            router.refresh()
            toast.success("Successfully created your CV. Have fun!")
            return 
        } else {
            toast.error("There's been a problem creating your CV. Please try again.")
        }

    }

    return (
        <div className="h-screen w-full flex items-start justify-center flex-col">
            <img className="h-[50px] w-[50px]" src="/assets/rocket.svg" alt="A rocket icon to encourage the user to create a CV" />
            <h2 className="w-full text-[24px] text-text font-bold mt-[20px]">Get started building your CV</h2>
            <p className="w-full text-left text-[16px] text-altText mt-[10px] mb-[30px]">You don&apos;t currently have a CV saved. Get started with building one now.</p>
            <button className="h-[40px] px-[20px] bg-cta rounded-sm text-text text-[14px] font-bold flex items-center justify-center" onClick={handleClick}>
                Get started
            </button>
        </div>
    )
}