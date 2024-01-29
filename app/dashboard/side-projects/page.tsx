
import { Suspense, cache } from "react"
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

import type { ICv, ISideProject } from "@/lib/types/cv"

import { saveProjects } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import DashboardTableHeader from "../_components/DashboardTableHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardTableItem from "../_components/DashboardTableItem"
import DashboardProjectForm from "../_components/DashboardProjectForm"

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").select("*")

    const addSideProject = async (newProject: ISideProject) => {

        "use server"

        let projects = JSON.parse(data![0].side_projects!)

        if (projects === null) {
            projects = [newProject] 
        } else {
            projects.push(newProject)
        }

        await saveProjects(data![0].id, projects)

    }

    const updateProjects = async (newProject: ISideProject) => {
        "use server"

        let projects: ISideProject[] = JSON.parse(data![0].side_projects!)

        let foundProject = projects.findIndex(p => p.id === newProject.id)

        projects[foundProject] = { ...newProject }

        await saveProjects(data![0].id, projects)

    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Side projects" content="Tell employers about any of your side projects" />
                { data![0].side_projects === null ? <p className="h-auto w-full text-[14px] text-altText">No projects added</p> :
                <>
                    <DashboardTableHeader firstOption="Name" secondOption="Link" thirdOption="Start date" fourthOption="End date" />
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(data![0].side_projects!).map((p: ISideProject) => {
                            return <DashboardTableItem key={p.id} firstValue={p.name} secondValue={p.link} thirdValue={p.start_date} fourthValue={p.end_date} form={<DashboardProjectForm name={p.name} link={p.link} skills={p.skills} description={p.description} screenshot={p.screenshot} start_date={p.start_date} end_date={p.end_date} action={updateProjects} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add a project" description="Enter details about the project you'd like to add" content="Add project" form={<DashboardProjectForm name="" link="" skills={[]} description="" screenshot={null} start_date="" end_date="" action={addSideProject} />} />
            </Suspense>
        </>
    )
}