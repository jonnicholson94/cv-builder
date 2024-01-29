
"use client"

import DialogPopup from "./DialogPopup"

type Props = {
    title: string 
    description: string
    firstValue: string 
    secondValue: string 
    thirdValue: string 
    fourthValue: string
    form: React.ReactNode
}

export default function DashboardTableItem({ title, description, firstValue, secondValue, thirdValue, fourthValue, form }: Props) {

    return (
        <DialogPopup title="View your job" description="Make any changes you need to your saved job" form={form}>
            <div className="h-[40px] w-full flex items-center justify-center mb-[5px] cursor-pointer px-[15px] hover:bg-hover">
                <p className="h-full w-[30%] flex-grow text-text text-[12px] rounded-sm flex items-center justify-start truncate overflow-hidden">{firstValue}</p>
                <p className="h-full w-[30%] text-text text-[12px] mx-[10px] rounded-sm flex items-center justify-start truncate overflow-hidden">{secondValue}</p>
                <p className="h-full w-[20%] text-altText text-[12px] mr-[10px] rounded-sm xs:hidden md:flex items-center justify-start truncate overflow-hidden">{thirdValue}</p>
                <p className="h-full w-[20%] text-altText text-[12px] rounded-sm xs:hidden md:flex flex items-center justify-start truncate overflow-hidden">{fourthValue}</p>
            </div>
        </DialogPopup>
    )
}