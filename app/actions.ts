
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/actions"
import { IApiResponse } from "@/lib/types/api"
import { ICv, IEducation, IJob, ISideProject, ISkill } from "@/lib/types/cv"
import { revalidatePath } from "next/cache"

export async function register(formData: FormData): Promise<string> {

    const cookieStore = cookies()
const supabase = createClient(cookieStore)
    
    const email = formData.get("email") as string 
    const password = formData.get("password") as string

    const { error } = await supabase.auth.signUp({ email, password })  

    if (error) {
        console.log(error.message)
        return error.message
    }

    redirect("/dashboard/details")

}

export async function signIn(formData: FormData): Promise<string> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const email = formData.get("email") as string 
    const password = formData.get("password") as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        console.log(error.message)
        return error.message
    }

    redirect("/dashboard/details")

}

export async function passwordReset(formData: FormData): Promise<string> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const email = formData.get("email") as string 

    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) {
        console.log(error.message)
        return error.message
    }

    return "Successfully sent you a reset email"

}

export async function updateName(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "name": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your name",
        error: null
    }

}

export async function updateProfilePicture(id: string, picture: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "profile_picture": picture }).eq("id", id)

    if (error) {
        return {
            data: null, 
            error: error.message 
        }
    }

    return {
        data: "Successfully updated your profile picture",
        error: null
    }

}

export async function updateEmail(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "email": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your email",
        error: null
    }
}

export async function updatePhone(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "phone_number": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your phone number",
        error: null
    }

}

export async function updateTwitter(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "twitter": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message 
        }
    }

    return {
        data: "Successfully updated your Twitter handle",
        error: null
    }
}

export async function updateLinkedIn(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "linkedIn": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your LinkedIn handle",
        error: null
    }
}

export async function updateGithub(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "github": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your Github handle",
        error: null
    }
}

export async function saveJobs(id: string, value: IJob[]): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "jobs": JSON.stringify(value) }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    revalidatePath("/")

    return {
        data: "Successfully updated your jobs",
        error: null
    }
}

export async function saveEducation(id: string, value: IEducation[]): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "education": JSON.stringify(value) }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    revalidatePath("/")

    return {
        data: "Successfully updated your education",
        error: null
    }
}

export async function saveProjects(id: string, value: ISideProject[]): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "side_projects": JSON.stringify(value) }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    revalidatePath("/")

    return {
        data: "Successfully updated your projects",
        error: null
    }
}

export async function updateAbout(id: string, value: string): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "about": value }).eq("id", id)

    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your about profile",
        error: null
    }
}

export async function updateSkills(id: string, value: ISkill[]): Promise<IApiResponse<string>> {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.from("cv").update({ "skills": JSON.stringify(value) }).eq("id", id)
    
    if (error) {
        return {
            data: null,
            error: error.message
        }
    }

    return {
        data: "Successfully updated your skills",
        error: null
    }

}