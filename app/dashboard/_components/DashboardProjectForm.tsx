
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
import { useRouter } from "next/navigation"

type Props = {
    id?: string
    name: string
    link: string 
    skills: string[]
    description: string
    screenshot: IProfilePicture | null
    start_date: string 
    end_date: string 
    showDelete: boolean
    deleteAction?: (id: string) => void
    saveAction: (project: ISideProject) => void
}

export default function DashboardProjectForm({ id = "", name, link, skills, description, screenshot, start_date, end_date, showDelete, deleteAction, saveAction }: Props) {

    const router = useRouter()

    const [newName, setNewName] = useState(name)
    const [newLink, setNewLink] = useState(link)
    const [newSkills, setNewSkills] = useState(skills)
    const [newDescription, setNewDescription] = useState(description)
    const [newScreenshot, setNewScreenshot] = useState<IProfilePicture | null>(screenshot)
    const [startDate, setStartDate] = useState(start_date)
    const [endDate, setEndDate] = useState(end_date)

    const handleSubmit = () => {

        if (newName === "" || newLink === "" || newDescription === "" || startDate === "" || endDate === "") {
            toast.error("Make sure to fill in all of the fields before saving your project")
            return
        }

        const newProject: ISideProject = {
            id: uuid(),
            name: newName, 
            link: newLink,
            skills: newSkills,
            description: newDescription, 
            screenshot: newScreenshot,
            start_date: startDate,
            end_date: endDate
        }

        saveAction(newProject)
        toast.success("Successfully updated your side projects")

    }

    const handleDelete = () => {
        deleteAction!(id)
        router.refresh()
        toast.success("Successfully removed your project")
    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <DashboardFormInput label="Project name" type="text" state={newName} setState={setNewName} placeholder="Enter a project name" />
            <DashboardFormInput label="Link" type="text" state={newLink} setState={setNewLink} placeholder="Enter a link to your project" />
            <DashboardFormTextarea label="Description" type="text" state={newDescription} setState={setNewDescription} placeholder="Enter a project description" />
            <DashboardFormPhotoInput label="Screenshot" state={newScreenshot} setState={setNewScreenshot} />
            <DashboardFormDatePicker label="Start date" date={startDate} setDate={setStartDate} />
            <DashboardFormDatePicker label="End date" date={endDate} setDate={setEndDate} end={true} />
            <DashboardFormButton showDelete={showDelete} deleteAction={handleDelete} saveAction={handleSubmit} />
        </div>
    )
}