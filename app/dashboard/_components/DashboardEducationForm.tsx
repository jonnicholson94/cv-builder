
"use client"

import { useState } from "react"
import { v4 as uuid } from "uuid"
import { toast } from "sonner"

import { IEducation } from "@/lib/types/cv"

import DashboardFormInput from "./DashboardFormInput"
import DashboardFormTextarea from "./DashboardFormTextarea"
import DashboardFormDatePicker from "./DashboardFormDatePicker"
import DashboardFormButton from "./DashboardFormButton"
import { useRouter } from "next/navigation"

type Props = {
    id?: string
    institution: string 
    course: string 
    grade: string
    start_date: string 
    end_date: string
    showDelete: boolean
    deleteAction?: (education_id: string) => void
    saveAction: (job: IEducation) => void
}

export default function DashboardEducationForm({ id = "", institution, course, grade, showDelete, start_date, end_date, deleteAction, saveAction }: Props) {

    const router = useRouter()

    const [newInstitution, setNewInstitution] = useState(institution)
    const [newCourse, setNewCourse] = useState(course)
    const [newGrade, setNewGrade] = useState(grade)
    const [startDate, setStartDate] = useState(start_date)
    const [endDate, setEndDate] = useState(end_date)

    const handleSubmit = () => {
        const newEducation: IEducation = {
            id: id === "" ? uuid() : id,
            institution: newInstitution,
            course: newCourse, 
            grade: newGrade,
            achievements: [],
            start_date: startDate,
            end_date: endDate
        }

        saveAction(newEducation)
        toast.success("Successfully updated your education")

    }

    const handleDelete = () => {
        deleteAction!(id)
        router.refresh()
        toast.success("Successfully removed your education")
    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <DashboardFormInput label="Course" type="text" state={newCourse} setState={setNewCourse} placeholder="Enter a course" />
            <DashboardFormInput label="Institution" type="text" state={newInstitution} setState={setNewInstitution} placeholder="Enter an institution" />
            <DashboardFormInput label="Description" type="text" state={newGrade} setState={setNewGrade} placeholder="Enter a grade" />
            <DashboardFormDatePicker label="Start date" date={startDate} setDate={setStartDate} />
            <DashboardFormDatePicker label="End date" date={endDate} setDate={setEndDate} end={true} />
            <DashboardFormButton showDelete={showDelete} deleteAction={handleDelete} saveAction={handleSubmit} />
        </div>
    )
}