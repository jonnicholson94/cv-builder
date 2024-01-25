
export interface ICv {
    id: string 
    user_id: string 
    name: string 
    profile_picture: string 
    phone_number: string 
    email_address: string 
    twitter: string 
    github: string 
    linkedIn: string 
    jobs: string | null 
    education: string | null 
    side_projects: string | null
    about: string 
    skills: string[]
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
    screenshot: string 
    skills: string[]
}

