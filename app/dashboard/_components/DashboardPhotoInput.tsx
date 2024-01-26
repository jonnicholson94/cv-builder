
"use client"

import { useState } from "react"

import DashboardLabel from "./DashboardLabel"
import { IProfilePicture } from "@/lib/types/cv"
import { updateProfilePicture } from "@/app/actions"
import { toast } from "sonner"

type Props = {
    id: string
    label: string
    name: string
    picture: string | null
}

export default function DashboardPhotoInput({ id, label, name, picture }: Props) {

    const [state, setState] = useState<IProfilePicture>(picture ? JSON.parse(picture) : { title: "", base64: "" })

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files![0]
        
        if (selectedFile) {
            const reader = new FileReader()

            reader.onloadend = async () => {
                const base64 = reader.result 
                const name = selectedFile.name 

                setState({ title: name, base64: base64 as string })
                const { data, error } = await updateProfilePicture(id, JSON.stringify({ title: name, base64: base64 as string }))

                if (data) {
                    toast.success(data)
                } else {
                    toast.error(error)
                }
            }

            reader.readAsDataURL(selectedFile)
            
        }
        
    }

    return (
        <>
            <DashboardLabel label={label} name={name} />
            <div className="h-auto w-full mt-[5px] flex items-center justify-center">
                <div className="h-[40px] w-[40px] rounded-rnd bg-altBg mr-[10px] flex items-center justify-center">
                    { state.base64 && <img className="h-[40px] w-[40px] rounded-rnd" src={state.base64} alt="The user's profile picture" /> }
                </div>
                <p className="h-auto flex-grow text-altText text-[12px]">{state.title ? state.title : "No photo selected"}</p>
                <label className="h-[35px] rounded-md bg-altBg border border-border px-[15px] flex items-center justify-center text-text text-[12px] font-bold" htmlFor={name}>Upload</label>
                <input className="hidden" type="file" id={name} accept="image/png, image/jpg" onChange={handleUpload} />
            </div>
        </>
    )
}