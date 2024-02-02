
"use client"

import { useFormStatus } from "react-dom"

export default function AuthButton() {

    const { pending } = useFormStatus()

    return (
        <button className={`h-[40px] w-full bg-cta flex items-center justify-center text-ctaText font-bold text-[14px] rounded-sm mt-[15px] mb-[30px] ${pending && "opacity-70"}`} type="submit" disabled={pending}>
            { pending ? <img className="h-[15px] w-[15px] animate-spin" src="/assets/loader.svg" alt="A spinner to indicate a form is being submitted" /> : "Continue" }
        </button>
    )
}