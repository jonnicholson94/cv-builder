
import { Suspense } from "react"
import { cookies } from "next/headers"

import type { ICv, IJob } from "@/lib/types/cv"

import { createClient } from "@/lib/supabase/server"
import { saveJobs } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import DashboardTableHeader from "../_components/DashboardTableHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardJobForm from "../_components/DashboardJobForm"
import DashboardTableItem from "../_components/DashboardTableItem"

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: cv, error } = await supabase.from("cv").select("*")

    const addJob = async (newJob: IJob) => {

        "use server"

        let jobs = JSON.parse(cv![0].jobs)

        if (jobs === null) {
            jobs = [newJob] 
        } else {
            jobs.push(newJob)
        }

        await saveJobs(cv![0].id, jobs)

    }

    const updateJobs = async (newJob: IJob) => {
        "use server"

        let jobs: IJob[] = JSON.parse(cv![0].jobs)

        let foundJob = jobs.findIndex(j => j.id === newJob.id)

        jobs[foundJob] = { ...newJob }

        await saveJobs(cv![0].id, jobs)

    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Your job history" content="Tell employers about your job history" />
                { cv![0].jobs === null ? <p className="h-auto w-full text-[14px] text-altText">No jobs added</p> :
                <>
                    <DashboardTableHeader firstOption="Job title" secondOption="Employer" thirdOption="Start date" fourthOption="End date" />
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(cv![0].jobs).map((j: IJob) => {
                            return <DashboardTableItem key={j.id} firstValue={j.job_title} secondValue={j.employer} thirdValue={j.start_date} fourthValue={j.end_date} form={<DashboardJobForm id={j.id} job_title={j.job_title} employer={j.employer} job_details={j.description} start_date={j.start_date} end_date={j.end_date} action={updateJobs} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add a new job" description="Enter details about the job you'd like to add" content="Add job" form={<DashboardJobForm job_title="" employer="" job_details="" start_date="" end_date="" action={addJob} />} />
            </Suspense>
        </>
    )
}