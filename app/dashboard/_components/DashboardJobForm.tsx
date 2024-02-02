
"use client"

import { useState } from "react"
import { v4 as uuid } from "uuid"
import { toast } from "sonner"

import { IJob } from "@/lib/types/cv"

import DashboardFormInput from "./DashboardFormInput"
import DashboardFormTextarea from "./DashboardFormTextarea"
import DashboardFormDatePicker from "./DashboardFormDatePicker"
import DashboardFormButton from "./DashboardFormButton"
import { useRouter } from "next/navigation"

type Props = {
    id?: string
    job_title: string 
    employer: string 
    job_details: string 
    start_date: string 
    end_date: string 
    showDelete: boolean
    deleteAction?: (job_id: string) => void
    saveAction: (job: IJob) => void
}

export default function DashboardJobForm({ id = "", job_title, employer, job_details, start_date, end_date, showDelete, deleteAction, saveAction }: Props) {

    const router = useRouter()

    const [jobTitle, setJobTitle] = useState(job_title)
    const [jobEmployer, setJobEmployer] = useState(employer)
    const [jobDetails, setJobDetails] = useState(job_details)
    const [startDate, setStartDate] = useState(start_date)
    const [endDate, setEndDate] = useState(end_date)

    const handleSubmit = () => {

        if (jobTitle === "" || jobEmployer === "" || jobDetails === "" || startDate === "" || endDate === "") {
            toast.error("Make sure to fill in all of the fields before saving your job")
            return
        }

        const newJob: IJob = {
            id: id === "" ? uuid() : id,
            job_title: jobTitle,
            employer: jobEmployer,
            description: jobDetails,
            achievements: [],
            start_date: startDate,
            end_date: endDate
        }

        saveAction(newJob)
        toast.success("Successfully updated your job history")

    }

    const handleDelete = () => {
        deleteAction!(id)
        router.refresh()
        toast.success("Successfully removed your job")
    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <DashboardFormInput label="Job title" type="text" state={jobTitle} setState={setJobTitle} placeholder="Enter a job title" />
            <DashboardFormInput label="Employer" type="text" state={jobEmployer} setState={setJobEmployer} placeholder="Enter an employer" />
            <DashboardFormTextarea label="Description" type="text" state={jobDetails} setState={setJobDetails} placeholder="Enter a job description" />
            <DashboardFormDatePicker label="Start date" date={startDate} setDate={setStartDate} />
            <DashboardFormDatePicker label="End date" date={endDate} setDate={setEndDate} end={true} />
            <DashboardFormButton showDelete={showDelete} deleteAction={handleDelete} saveAction={handleSubmit} />
        </div>
    )
}