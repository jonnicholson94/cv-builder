
"use client"

import { useState } from "react"

import { updateName } from "@/app/actions"
import DashboardLabel from "./DashboardLabel"

type Props = {
    id: string
    value: string 
    type: string 
    name: string
    label: string 
    placeholder: string
}

export default function DashboardTextInput({ id, value, type, name, label, placeholder }: Props) {

    const [state, setState] = useState(value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const handleBlur = () => {

        if (value === state) {
            return
        }

        updateName(id, state)
    }

    return (
        <>
            <DashboardLabel label={label} name={name} />
            <input
                className="h-[40px] w-full bg-altBg border border-border rounded-sm px-[15px] mt-[5px] text-[14px] text-text placeholder:text-placeholder mb-[20px]"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={state}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
            />
        </>
    )
}