
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/actions"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export async function register(formData: FormData): Promise<string> {
    

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

    const email = formData.get("email") as string 
    const password = formData.get("password") as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        console.log(error.message)
        return error.message
    }

    redirect("/dashboard/details")

}

export async function updateName(id: string, name: string): Promise<string> {

    const { data, error } = await supabase.from("cv").update({ "name": name }).eq("id", id)

    if (error) {
        return error.message
    }

    return "Successfully updated your name"

}

export async function updateProfilePicture(id: string, picture: string): Promise<string> {

    const { data, error } = await supabase.from("cv").update({ "profile_picture": picture }).eq("id", id)

    if (error) {
        return error.message 
    }

    return "Successfully updated your name"

}