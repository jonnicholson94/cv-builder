
"use client"

import { useState } from "react"
import { v4 as uuid } from "uuid"
import { toast } from "sonner"

import { IProfilePicture, ISideProject } from "@/lib/types/cv"

import DashboardFormInput from "./DashboardFormInput"
import DashboardFormTextarea from "./DashboardFormTextarea"
import DashboardFormDatePicker from "./DashboardFormDatePicker"
import DashboardFormButton from "./DashboardFormButton"
import DashboardFormPhotoInput from "./DashboardFormPhotoInput"

type Props = {
    id?: string
    name: string
    link: string 
    skills: string[]
    description: string
    screenshot: IProfilePicture | null
    start_date: string 
    end_date: string 
    action: (project: ISideProject) => void
}

export default function DashboardProjectForm({ id = "", name, link, skills, description, screenshot, start_date, end_date, action }: Props) {

    const [newName, setNewName] = useState(name)
    const [newLink, setNewLink] = useState(link)
    const [newSkills, setNewSkills] = useState(skills)
    const [newDescription, setNewDescription] = useState(description)
    const [newScreenshot, setNewScreenshot] = useState<IProfilePicture | null>(screenshot)
    const [startDate, setStartDate] = useState(start_date)
    const [endDate, setEndDate] = useState(end_date)

    const handleSubmit = () => {
        const newProject: ISideProject = {
            id: id,
            name: newName, 
            link: newLink,
            skills: newSkills,
            description: newDescription, 
            screenshot: newScreenshot,
            start_date: startDate,
            end_date: endDate
        }

        action(newProject)
        toast.success("Successfully updated your side projects")

    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <DashboardFormInput label="Project name" type="text" state={newName} setState={setNewName} placeholder="Enter a project name" />
            <DashboardFormInput label="Link" type="text" state={newLink} setState={setNewLink} placeholder="Enter a link to your project" />
            <DashboardFormTextarea label="Description" type="text" state={newDescription} setState={setNewDescription} placeholder="Enter a project description" />
            <DashboardFormPhotoInput label="Screenshot" state={newScreenshot} setState={setNewScreenshot} />
            <DashboardFormDatePicker label="Start date" date={startDate} setDate={setStartDate} />
            <DashboardFormDatePicker label="End date" date={endDate} setDate={setEndDate} end={true} />
            <DashboardFormButton action={handleSubmit} />
        </div>
    )
}