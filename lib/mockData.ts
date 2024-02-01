
import type { IJob, IEducation, ISideProject, ICv, ISkill } from "./types/cv"

export const jobs: IJob[] = [
    {
        id: "1",
        job_title: "Product Manager",
        employer: "LOVESPACE",
        description: "I worked as a Product Manager",
        achievements: [],
        start_date: "November 2023",
        end_date: "Ongoing"
    }
]

export const education: IEducation[] = [
    { 
        id: "123",
        course: "Bla",
        institution: "Example",
        achievements: [],
        grade: "321",
        start_date: "Example date",
        end_date: "Example end date"
    }
]

export const sideProjects: ISideProject[] = [
    {
        id: "321",
        name: "Cv builder",
        description: "It's an app to build CVs",
        screenshot: null, 
        skills: [],
        link: "https://cv-builder.vercel.app",
        start_date: "April 2021",
        end_date: "May 2021"
    }
]

export const skills: ISkill[] = [
    {
        id: "123",
        content: "React"
    },
    {
        id: "321",
        content: "Next.js"
    }
]

export const cv: ICv = {
    id: "123",
    user_id: "321",
    name: "Jon Nicholson",
    email_address: "jon.nicholson@email.com",
    phone_number: "0711",
    twitter: "https://twitter.com/jonnicholson",
    linkedIn: "https://linkedin.com/in/jonnicholson",
    github: "https://github.com/jonnicholson",
    jobs: JSON.stringify(jobs),
    education: JSON.stringify(education),
    profile_picture: null,
    about: "Example content about me",
    side_projects: JSON.stringify(sideProjects),
    skills: JSON.stringify(skills)
}