
"use client"

import { ICv, IEducation, IJob, ISideProject, ISkill } from "@/lib/types/cv"
import { forwardRef } from "react"

type Props = {
    cv: ICv
}

const Basic = forwardRef<HTMLDivElement, Props>(({ cv }: Props, ref) => {

    return (
        <div ref={ref} id="Basic" className="h-auto w-full bg-[#fff] flex items-center justify-center flex-col px-[5%] py-[30px] rounded-sm" data-testid="basic-template">

            <h1 className="h-auto w-full text-[36px] font-bold">{cv.name}</h1>
            <p className="h-auto w-full text-[20px] mt-[5px]">{cv.email_address} | {cv.phone_number}</p>

            <div className="h-auto w-full flex items-center justify-center mt-[15px]">
                <span className="h-[1px] flex-grow bg-[#000]"></span>
                <p className="mx-[20px]">About me</p>
                <span className="h-[1px] flex-grow bg-[#000]"></span>
            </div>
            <p className="h-auto w-full text-[16px] mt-[5px]">{cv.about}</p>

            <div className="h-auto w-full flex items-center justify-center mt-[15px]">
                <span className="h-[1px] flex-grow bg-[#000]"></span>
                <p className="mx-[20px]">Skills</p>
                <span className="h-[1px] flex-grow bg-[#000]"></span>
            </div>
            <ul className="h-auto w-full px-[15px]">
                { cv.skills && JSON.parse(cv.skills).map((skill: ISkill) => {
                    return <li key={skill.id} className="list-disc">{skill.content}</li>
                })}
            </ul>

            <div className="h-auto w-full flex items-center justify-center mt-[15px]">
                <span className="h-[1px] flex-grow bg-[#000]"></span>
                <p className="mx-[20px]">Employment</p>
                <span className="h-[1px] flex-grow bg-[#000]"></span>
            </div>
            { cv.jobs && JSON.parse(cv.jobs).map((job: IJob) => {
                return (
                    <div key={job.id} className="h-auto w-full my-[15px]">
                        <h2 className="h-auto w-full text-[18px] font-bold">{job.job_title}</h2>
                        <p>{job.employer} | {job.start_date} - {job.end_date}</p>
                        <p className="text-[14px] mt-[5px]">{job.description}</p>
                    </div>
                )
            })}

            <div className="h-auto w-full flex items-center justify-center mt-[15px]">
                <span className="h-[1px] flex-grow bg-[#000]"></span>
                <p className="mx-[20px]">Education</p>
                <span className="h-[1px] flex-grow bg-[#000]"></span>
            </div>
            { cv.education && JSON.parse(cv.education).map((e: IEducation) => {
                return (
                    <div key={e.id} className="h-auto w-full my-[15px]">
                        <h2 className="h-auto w-full text-[18px] font-bold">{e.course}</h2>
                        <p>{e.institution} | {e.start_date} - {e.end_date} | {e.grade}</p>
                    </div>
                )
            })}

        <div className="h-auto w-full flex items-center justify-center mt-[15px]">
                <span className="h-[1px] flex-grow bg-[#000]"></span>
                <p className="mx-[20px]">Side projects</p>
                <span className="h-[1px] flex-grow bg-[#000]"></span>
            </div>
            { cv.side_projects && JSON.parse(cv.side_projects).map((p: ISideProject) => {
                return (
                    <div key={p.id} className="h-auto w-full my-[15px]">
                        <h2 className="h-auto w-full text-[18px] font-bold">{p.name}</h2>
                        <p>{p.link}</p>
                        <p>{p.description}</p>
                    </div>
                )
            })}
        </div>
    )

})

Basic.displayName = "Basic"

export default Basic