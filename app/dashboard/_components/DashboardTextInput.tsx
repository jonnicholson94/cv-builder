
"use client"

import { useRef, useState } from "react"
import { toast } from "sonner"

import { InputTypes } from "@/lib/types/cv"
import { IApiResponse } from "@/lib/types/api"

import { handleValidation } from "@/lib/handleValidation"

import DashboardLabel from "./DashboardLabel"
import DashboardInputError from "./DashboardInputError"

type Props = {
    id: string
    value: string 
    type: string 
    name: InputTypes
    label: string 
    placeholder: string
    action: (id: string, value: string) => Promise<IApiResponse<string>>
}

export default function DashboardTextInput({ id, value, type, name, label, placeholder, action }: Props) {

    const [state, setState] = useState(value)
    const [inputError, setInputError] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (inputRef) {
                inputRef?.current?.blur()
            }
        }
    }

    return (
        <>
            <DashboardLabel label={label} name={name} />
            <input
                ref={inputRef}
                className={`h-[40px] w-full bg-altBg border ${inputError ? "border-error mb-[10px]" : "border-border"} rounded-sm px-[15px] mt-[5px] text-[14px] text-text placeholder:text-placeholder mb-[20px] focus:border-active focus:outline-none`}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={state}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
            />
            { inputError && <DashboardInputError error={inputError} />}
        </>
    )
}