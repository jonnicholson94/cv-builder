
"use client"

import { useState } from "react"

import DialogPopup from "./DialogPopup"

type Props = {
    title: string 
    description: string
    content: string
    form: React.ReactNode
}

export default function DashboardAddButton({ title, description, content, form }: Props) {

    return (
        <DialogPopup title={title} description={description} form={form}>
            <div className="h-auto w-full flex items-center justify-start mt-[20px]">
                <p className="h-[35px] px-[20px] bg-altBg rounded-sm border border-border flex items-center justify-center text-[12px] font-bold text-text">{content}</p>
            </div>
        </DialogPopup>
        
    )
}