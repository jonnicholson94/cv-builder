
"use client"

import { useState } from "react"
import { toast } from "sonner"

import { InputTypes } from "@/lib/types/cv"
import { IApiResponse } from "@/lib/types/api"

import { handleValidation } from "@/lib/handleValidation"

import DashboardLabel from "./DashboardLabel"
import DashboardInputError from "./DashboardInputError"

type Props = {
    id: string
    value: string 
    name: InputTypes
    label: string 
    placeholder: string
    action: (id: string, value: string) => Promise<IApiResponse<string>>
}

export default function DashboardTextarea({ id, value, name, label, placeholder, action }: Props) {

    const [state, setState] = useState(value)
    const [inputError, setInputError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setInputError(() => handleValidation(e.target.value, name))

        setState(e.target.value)
    }

    const handleBlur = async () => {

        if (value === state) {
            return
        }

        if (inputError !== "") {
            return
        }

        const { data, error } = await action(id, state)

        if (error) {
            toast.error(error)
        } else {
            toast.success(data)
        }
        
    }

    return (
        <>
            <DashboardLabel label={label} name={name} />
            <textarea
                className={`h-[120px] w-full bg-altBg border ${inputError ? "border-error mb-[10px]" : "border-border"} rounded-sm p-[15px] mt-[5px] text-[14px] text-text placeholder:text-placeholder mb-[20px] focus:border-active focus:outline-none`}
                id={name}
                name={name}
                placeholder={placeholder}
                value={state}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
            />
            { inputError && <DashboardInputError error={inputError} />}
        </>
    )
}