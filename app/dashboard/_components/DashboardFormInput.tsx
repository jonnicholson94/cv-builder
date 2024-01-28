
"use client"

import { useState } from "react"

import { handleValidation } from "@/lib/handleValidation"

import { InputTypes } from "@/lib/types/cv"
import DashboardInputError from "./DashboardInputError"

type Props = {
    label: string 
    type: InputTypes
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}

export default function DashboardFormInput({ label, type, state, setState, placeholder }: Props) {

    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setErrorMessage(() => handleValidation(e.target.value, type))

        setState(e.target.value)
    }

    return (
        <>
        <div className={`h-auto w-full flex items-center justify-center ${errorMessage ? "mb-[10px]" : "mb-[20px]"}`}>
            <label className="h-auto w-[100px] text-[12px] text-altText text-right mr-[15px]">{label}</label>
            <input className={`h-[40px] flex-grow text-[14px] px-[15px] text-text rounded-sm border ${errorMessage ? "border-error mb-[10px]" : "border-border"} bg-altBg focus:border-active focus:outline-none`} type="text" placeholder={placeholder} value={state} onChange={(e) => handleChange(e)} />
        </div>
        { errorMessage && <DashboardInputError error={errorMessage} /> }
        </>
    )
}