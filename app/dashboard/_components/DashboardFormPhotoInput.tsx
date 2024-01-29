
"use client"

import { IProfilePicture, InputTypes } from "@/lib/types/cv"

type Props = {
    label: string 
    state: IProfilePicture | null
    setState: React.Dispatch<React.SetStateAction<IProfilePicture | null>>
}

export default function DashboardFormPhotoInput({ label, state, setState }: Props) {

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files![0]
        
        if (selectedFile) {
            const reader = new FileReader()

            reader.onloadend = async () => {
                const base64 = reader.result 
                const name = selectedFile.name 

                setState({ title: name, base64: base64 as string })

            }

            reader.readAsDataURL(selectedFile)
            
        }
        
    }

    return (
        <>
        <div className={`h-auto w-full flex items-center justify-center mb-[20px]`}>
            <label className="h-auto w-[100px] text-[12px] text-altText text-right mr-[15px]">{label}</label>
            <div className="h-[40px] flex-grow flex items-center justify-start">
                <div className="h-[30px] w-[30px] rounded-rnd border border-border mr-[10px]">
                    { state?.base64 && <img className="h-[30px] w-[30px] rounded-rnd" src={state.base64} alt={state.title} />}
                </div>
                <p className="h-auto flex-grow text-[12px] text-altText">{state?.title ? state.title : "No screenshot uploaded"}</p>
                <label className="h-[35px] px-[15px] border border-border rounded-sm text-[12px] font-bold flex items-center justify-center text-text" htmlFor="screenshot">Upload</label>
                <input className="hidden" id="screenshot" type="file" accept="png/*, jpg/*" onChange={handleUpload} />
            </div>
        </div>
        </>
    )
}
