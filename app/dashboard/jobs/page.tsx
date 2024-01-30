
import { Suspense, cache } from "react"
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

import type { IJob } from "@/lib/types/cv"

import { saveJobs } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardJobForm from "../_components/DashboardJobForm"
import DashboardCard from "../_components/DashboardCard"
import EmptyDashboard from "../_components/EmptyDashboard"

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Your job history | CV builder',
  }

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    const addJob = async (newJob: IJob) => {

        "use server"

        let jobs = JSON.parse(data![0].jobs!)

        if (jobs === null) {
            jobs = [newJob] 
        } else {
            jobs.push(newJob)
        }

        await saveJobs(data![0].id, jobs)

    }

    const updateJobs = async (newJob: IJob) => {
        "use server"

        let jobs: IJob[] = JSON.parse(data![0].jobs!)

        let foundJob = jobs.findIndex(j => j.id === newJob.id)

        jobs[foundJob] = { ...newJob }

        await saveJobs(data![0].id, jobs)

    }

    const deleteJob = async (job_id: string) => {

        "use server"

        let jobs: IJob[] = JSON.parse(data![0].jobs!)

        let filteredJobs = jobs.filter(j => j.id !== job_id)

        await saveJobs(data![0].id, filteredJobs)

    }

    if (data?.length === 0) {
        return (
            <EmptyDashboard />
        )
    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Your job history" content="Tell employers about your job history" />
                { data![0].jobs === null ? <p className="h-auto w-full text-[14px] text-altText">No jobs added</p> :
                <>
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(data![0].jobs!).map((j: IJob) => {
                            return <DashboardCard key={j.id} title="View your job" description="Make any changes you need to your saved job" heading={j.job_title} subHeading={j.employer} form={<DashboardJobForm id={j.id} job_title={j.job_title} employer={j.employer} job_details={j.description} start_date={j.start_date} end_date={j.end_date} deleteAction={deleteJob} saveAction={updateJobs} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add a new job" description="Enter details about the job you'd like to add" content="Add job" form={<DashboardJobForm job_title="" employer="" job_details="" start_date="" end_date="" saveAction={addJob} />} />
            </Suspense>
        </>
    )
}