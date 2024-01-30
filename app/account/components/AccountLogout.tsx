
"use client"

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AccountLogout() {

    const supabase = createClient()
    const router = useRouter()

    const handleLogout = () => {
        
        supabase.auth.signOut()

        router.push("/auth/sign-in")
        
    }

    return (
        <button className="h-[40px] w-full bg-error text-text font-bold text-[14px] flex items-center justify-center mt-[30px] rounded-sm" onClick={handleLogout}>
            Sign out
        </button>
    )
}