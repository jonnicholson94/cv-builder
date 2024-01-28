
import { useMemo } from "react";

import { dateGenerator } from "@/lib/dateGenerator";
import SelectDropdown from "./SelectDropdown";

type Props = {
    label: "Start date" | "End date"
    date: string 
    setDate: React.Dispatch<React.SetStateAction<string>>
    end?: boolean
}

export default function DashboardFormDatePicker({ label, date, setDate, end = false }: Props) {

    const dates = useMemo(() => {

        if (end === true) {
            const list = dateGenerator()
            list.unshift("Ongoing")
            return list
        }

        return dateGenerator()
    }, [end])



    return (
        <>
        <div className="h-auto w-full flex items-center justify-center mb-[20px]">
            <label className="h-auto w-[100px] text-[12px] text-altText text-right mr-[15px]">{label}</label>
            <SelectDropdown list={dates} state={date} setState={setDate}>
                <div className="h-[40px] flex-grow text-[14px] flex items-center justify-center px-[15px] text-text rounded-sm border border-border bg-altBg focus:border-active focus:outline-none">
                    <p className="h-full flex items-center flex-grow text-[12px] text-text text-left">{date === "" ? "No date selected" : date}</p>
                    <img src="/assets/chevron-down.svg" alt="A chevron to indicate a menu can be opened" /> 
                </div>
            </SelectDropdown>
        </div>
        </>
    )
}