
import type { ICv, IEducation, IJob, ISideProject, ISkill } from "@/lib/types/cv"

import { forwardRef } from "react"

type Props = {
    cv: ICv
}

const Modern = forwardRef<HTMLDivElement, Props>(({ cv }: Props, ref) => {

    return (
        <div ref={ref} id="Modern" className="h-auto w-full bg-[#151621] flex items-center justify-center flex-col p-[30px]" data-testid="modern-template">
            <div className="h-auto w-full flex items-center justify-start">
                { cv.profile_picture && <img className="h-[100px] w-[100px] rounded-rnd mr-[20px]" src={JSON.parse(cv.profile_picture).base64} alt="The user's profile picture" /> }
                <h1 className="text-[36px] text-text font-bold">{cv.name}</h1>
            </div>
            <div className="h-auto w-full flex items-center justify-start mt-[30px]">
                <div className="h-auto mr-[15px] flex items-center justify-center">
                    <img className="h-[20px] w-[20px] mr-[10px]" src="/assets/mobile.svg" alt="The mobile phone number icon" />
                    <p className="text-text">{cv.phone_number}</p>
                </div>
                <div className="h-auto mx-[15px] flex items-center justify-center">
                    <img className="h-[20px] w-[20px] mr-[10px]" src="/assets/email.svg" alt="The email icon" />
                    <p className="text-text">{cv.email_address}</p>
                </div>
            </div>
            <p className="h-auto w-full my-[30px] text-text">{cv.about}</p>
            <span className="h-[1px] w-full bg-[#313248]"></span>
            <div className="h-auto w-full flex items-center justify-start my-[15px]">
                { cv.skills && JSON.parse(cv.skills).map((skill: ISkill) => {
                    return (
                        <span key={skill.id} className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center">{skill.content}</span>
                    )
                }) }
            </div>
            <span className="h-[1px] w-full bg-[#313248]"></span>
            <h2 className="h-auto w-full text-text font-bold my-[15px] text-[20px]">Employment history</h2>
            { cv.jobs && JSON.parse(cv.jobs).map((job: IJob) => {
                return (
                    <div key={job.id} className="h-auto w-full p-[20px] flex items-center justify-center flex-col border border-border mb-[15px] rounded-md">
                        <div className="h-auto w-full flex xs:flex-col md:flex-row xs:items-start md:items-center justify-start">
                            <h3 className="text-text text-[18px] font-bold mr-[30px] xs:mb-[10px] md:mb-[0]">{job.job_title}</h3>
                            <div className="h-auto flex-grow flex items-center justify-center">
                                <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center mr-[15px] text-ellipsis overflow-hidden">{job.employer}</p>
                                <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center text-ellipsis overflow-hidden">{job.start_date} - {job.end_date}</p>
                            </div>
                        </div>
                        <p className="h-auto w-full mt-[10px] text-text">{job.description}</p>
                    </div>   
                )
            })}
            <span className="h-[1px] w-full bg-[#313248]"></span>
            <h2 className="h-auto w-full text-text font-bold my-[15px] text-[20px]">Education</h2>
            { cv.education && JSON.parse(cv.education).map((education: IEducation) => {
                return (
                    <div key={education.id} className="h-auto w-full p-[20px] flex items-center justify-center flex-col border border-border mb-[15px] rounded-md">
                        <div className="h-auto w-full flex xs:flex-col md:flex-row xs:items-start md:items-center justify-start">
                            <h3 className="text-text text-[18px] font-bold mr-[30px] xs:mb-[10px] md:mb-[0]">{education.course}</h3>
                            <div className="h-auto flex-grow flex items-center justify-center">
                                <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center mr-[15px] text-ellipsis overflow-hidden">{education.institution}</p>
                                <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center mr-[15px] text-ellipsis overflow-hidden">{education.start_date} - {education.end_date}</p>
                                <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center text-ellipsis overflow-hidden">{education.grade}</p>
                            </div>
                        </div>
                    </div>   
                )
            })}
            <span className="h-[1px] w-full bg-[#313248]"></span>
            <h2 className="h-auto w-full text-text font-bold my-[15px] text-[20px]">Side projects</h2>
            { cv.side_projects && JSON.parse(cv.side_projects).map((project: ISideProject) => {
                return (
                    <div key={project.id} className="h-auto w-full p-[20px] flex items-center justify-center flex-col border border-border mb-[15px] rounded-md">
                        <div className="h-auto w-full flex items-center justify-start">
                            { project.screenshot && <img src={JSON.parse(project.screenshot?.base64)} alt="The project's image" /> }
                            <h3 className="text-text text-[18px] font-bold mr-[30px]">{project.name}</h3>
                            <p className="h-[35px] px-[15px] border border-border rounded-md text-text text-[12px] flex items-center justify-center mr-[15px]">{project.link}</p>
                        </div>
                        <p className="h-auto w-full mt-[10px] text-text">{project.description}</p>
                    </div>   
                )
            })}
            <span className="h-[1px] w-full bg-[#313248]"></span>
        </div>
    )

})

Modern.displayName = "Modern"

export default Modern