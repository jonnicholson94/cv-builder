
"use client"

import { useRef, useState } from "react";
import { toast } from "sonner";

import { InputTypes } from "@/lib/types/cv";
import { IApiResponse } from "@/lib/types/api";

import DashboardLabel from "./DashboardLabel";
import DashboardInputError from "./DashboardInputError";
import { handleValidation } from "@/lib/handleValidation";

type Props = {
    id: string
    value: string 
    action: (id: string, value: string) => Promise<IApiResponse<string>>
}

export default function DashboardPhoneInput({ id, value, action}: Props) {

    const [state, setState] = useState(value)
    const [focus, setFocus] = useState(false)
    const [inputError, setInputError] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const handleBlur = async () => {
        setFocus(false)

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputError(() => handleValidation(e.target.value, "phone"))

        setState(e.target.value)

    }

    return (
        <>
            <DashboardLabel label="Your phone number" name="phone-number" />
            <div className={`h-[40px] w-full border ${focus ? "border-active" : inputError ? "border-error" : "border-border"} rounded-sm bg-altBg mt-[5px] mb-[20px] flex items-center justify-center`}>
                <div className="h-full px-[15px] border-r border-border flex items-center justify-center">
                    <p className="text-altText text-[12px]">+44</p>
                </div>
                <input ref={inputRef} className="h-full flex-grow bg-altBg outline-none text-[14px] text-text placeholder:text-placeholder rounded-sm px-[15px]" id="phone_number" type="text" name="phone" value={state} onChange={(e) => handleChange(e)} placeholder="Enter your phone number" onFocus={() => setFocus(true)} onBlur={handleBlur} onKeyDown={handleKeyDown} />
            </div>
            { inputError && <DashboardInputError error={inputError} />}
        </>
    )
}