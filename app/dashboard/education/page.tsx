
import { Suspense, cache } from "react"
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

import type { IEducation } from "@/lib/types/cv"

import { saveEducation } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardEducationForm from "../_components/DashboardEducationForm"
import DashboardCard from "../_components/DashboardCard"
import EmptyDashboard from "../_components/EmptyDashboard"

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Your education | CV builder',
  }

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    const addEducation = async (newEducation: IEducation) => {

        "use server"

        let education = JSON.parse(data![0].education!)

        if (education === null) {
            education = [newEducation]
        } else {
            education.push(newEducation)
        }

        await saveEducation(data![0].id, education)

    }

    const updateEducation = async (newEducation: IEducation) => {
        "use server"

        let education: IEducation[] = JSON.parse(data![0].education!)

        let foundEducation = education.findIndex(e => e.id === newEducation.id)

        education[foundEducation] = { ...newEducation }

        await saveEducation(data![0].id, education)

    }

    const deleteEducation = async (education_id: string) => {

        "use server"

        let education: IEducation[] = JSON.parse(data![0].education!)

        let filteredEducation = education.filter(e => e.id !== education_id)

        await saveEducation(data![0].id, filteredEducation)

    }

    if (data?.length === 0) {
        return (
            <EmptyDashboard />
        )
    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Your education" content="Tell employers about education" />
                { JSON.parse(data![0].education) === null || JSON.parse(data![0].education).length === 0 ? <p className="h-auto w-full text-[14px] text-altText">No education added</p> :
                <>
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(data![0].education!).map((e: IEducation) => {
                            return <DashboardCard key={e.id} title="View your education" description="Make any changes you need to your saved education" heading={e.course} subHeading={e.institution} form={<DashboardEducationForm id={e.id} institution={e.institution} course={e.course} grade={e.grade} start_date={e.start_date} end_date={e.end_date} deleteAction={deleteEducation} saveAction={updateEducation} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add some education" description="Enter details about the education you'd like to add" content="Add education" form={<DashboardEducationForm institution="" course="" grade="" start_date="" end_date="" saveAction={addEducation} />} />
            </Suspense>
        </>
    )
}