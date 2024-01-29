
export interface ICv {
    id: string 
    user_id: string 
    name: string 
    profile_picture: string | null
    phone_number: string 
    email_address: string 
    twitter: string 
    github: string 
    linkedIn: string 
    jobs: string | null 
    education: string | null 
    side_projects: string | null
    about: string 
    skills: ISkill[]
}

export interface IProfilePicture {
    title: string 
    base64: string
}

export interface IJob {
    id: string 
    job_title: string 
    employer: string 
    description: string 
    achievements: IAchievement[]
    start_date: string
    end_date: string
}

export interface IAchievement {
    id: string 
    content: string 
}

export interface IEducation {
    id: string 
    institution: string 
    course: string 
    grade: string 
    achievements: IAchievement[]
    start_date: string 
    end_date: string
}

export interface ISideProject {
    id: string 
    name: string 
    description: string 
    link: string 
    screenshot: IProfilePicture | null 
    skills: string[]
    start_date: string 
    end_date: string
}

export interface ISkill {
    id: string 
    content: string
}

export type InputTypes = "name" | "phone" | "email" | "twitter" | "linkedin" | "github" | "text"