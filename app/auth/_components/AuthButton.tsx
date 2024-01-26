
"use client"

import { useFormStatus } from "react-dom"

export default function AuthButton() {

    const { pending } = useFormStatus()

    return (
        <button className={`h-[40px] w-full bg-cta text-ctaText font-bold text-[14px] rounded-sm mt-[15px] mb-[30px] ${pending && "opacity-70"}`} type="submit" disabled={pending}>Continue</button>
    )
}