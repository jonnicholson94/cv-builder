
import { Suspense, cache } from "react"
import { cookies } from "next/headers"

import { createClient } from "@/lib/supabase/server"

import type { ICv, ISideProject } from "@/lib/types/cv"

import { saveProjects } from "@/app/actions"

import DashboardHeader from "../_components/DashboardHeader"
import Loading from "./loading"
import DashboardAddButton from "../_components/DashboardAddButton"
import DashboardProjectForm from "../_components/DashboardProjectForm"
import DashboardCard from "../_components/DashboardCard"
import EmptyDashboard from "../_components/EmptyDashboard"

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Your side projects | CV builder',
  }

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

    const deleteProject = async (project_id: string) => {
        "use server"

        let projects: ISideProject[] = JSON.parse(data![0].side_projects!)

        const filteredProjects = projects.filter(p => p.id !== project_id)

        await saveProjects(data![0].id, filteredProjects)
    }

    if (data?.length === 0) {
        return (
            <EmptyDashboard />
        )
    }

    return (
        <>  
            <Suspense fallback={<Loading />}>
                <DashboardHeader title="Side projects" content="Tell employers about any of your side projects" />
                { JSON.parse(data![0].side_projects) === null || JSON.parse(data![0].side_projects).length === 0 ? <p className="h-auto w-full text-[14px] text-altText">No projects added</p> :
                <>
                    <div className="h-auto w-full flex items-center justify-center flex-col">
                        { JSON.parse(data![0].side_projects!).map((p: ISideProject) => {
                            return <DashboardCard key={p.id} title="View your project" description="Make changes to your saved project" heading={p.name} subHeading={p.link} form={<DashboardProjectForm name={p.name} link={p.link} skills={p.skills} description={p.description} screenshot={p.screenshot} start_date={p.start_date} end_date={p.end_date} deleteAction={deleteProject} saveAction={updateProjects} />} />
                        })}
                    </div>
                </> }
                <DashboardAddButton title="Add a project" description="Enter details about the project you'd like to add" content="Add project" form={<DashboardProjectForm name="" link="" skills={[]} description="" screenshot={null} start_date="" end_date="" saveAction={addSideProject} />} />
            </Suspense>
        </>
    )
}