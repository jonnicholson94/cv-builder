
import { cache } from "react"
import { fetchCv } from "@/app/actions"

export default async function Page() {

    const cachedFetch = cache(fetchCv)

    const { data: cv, error } = await cachedFetch()
}