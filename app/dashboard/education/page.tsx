
import { Suspense, cache } from "react"

import type { ICv, IEducation } from "@/lib/types/cv"

import { fetchCv, saveEducation } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import DashboardTableHeader from "../_components/DashboardTableHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardTableItem from "../_components/DashboardTableItem"
import DashboardEducationForm from "../_components/DashboardEducationForm"

export const revalidate = 300

export default async function Page() {

    // const cookieStore = cookies()
    // const supabase = createClient(cookieStore)

    const cachedFetch = cache(fetchCv)

    const { data, error } = await cachedFetch()

    // const { data: cv, error } = await supabase.from("cv").select("*")

    const addEducation = async (newEducation: IEducation) => {

        "use server"

        let education = JSON.parse(data!.education!)

        if (education === null) {
            education = [newEducation]
        } else {
            education.push(newEducation)
        }

        await saveEducation(data!.id, education)

    }

    const updateEducation = async (newEducation: IEducation) => {
        "use server"

        let education: IEducation[] = JSON.parse(data!.education!)

        let foundEducation = education.findIndex(e => e.id === newEducation.id)

        education[foundEducation] = { ...newEducation }

        await saveEducation(data!.id, education)

    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Your education" content="Tell employers about education" />
                { data!.education === null ? <p className="h-auto w-full text-[14px] text-altText">No education added</p> :
                <>
                    <DashboardTableHeader firstOption="Job title" secondOption="Employer" thirdOption="Start date" fourthOption="End date" />
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(data!.education!).map((e: IEducation) => {
                            return <DashboardTableItem key={e.id} firstValue={e.course} secondValue={e.institution} thirdValue={e.start_date} fourthValue={e.end_date} form={<DashboardEducationForm id={e.id} institution={e.institution} course={e.course} grade={e.grade} start_date={e.start_date} end_date={e.end_date} action={updateEducation} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add some education" description="Enter details about the education you'd like to add" content="Add education" form={<DashboardEducationForm institution="" course="" grade="" start_date="" end_date="" action={addEducation} />} />
            </Suspense>
        </>
    )
}