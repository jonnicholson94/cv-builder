
"use client"

import { useRouter } from "next/navigation";

export default function CvHeader() {

    const router = useRouter()

    return (
        <header className="h-[50px] w-full flex items-center justify-start px-[15px]">
            <button className="h-[35px] flex items-center justify-center" onClick={() => router.back()}>
                <img className="mr-[5px]" src="/assets/arrow-left.svg" alt="A left facing arrow to show the user can go back" />
                <p className="text-text text-[14px]">Go back</p>
            </button>
        </header>
    )
}