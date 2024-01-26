import { InputTypes } from "./types/cv"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:(?:\+|00)44|0)7(?:[0-9]\s?){9}$/;
const twitterRegex = /^https:\/\/twitter\.com\/.+$/;
const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/.+$/

export const handleValidation = (input: string, type: InputTypes): string => {

    if (type === "name") {
        if (input === "") {
            return "Your name needs to be at least one character"
        }
    } else if (type === "phone") {
        if (!phoneRegex.test(input)) {
            return "Please enter a valid UK mobile phone number"
        }
    } else if (type === "email") {
        if (!emailRegex.test(input)) {
            return "Please enter a valid email address"
        }
    } else if (type === "twitter") {
        if (!twitterRegex.test(input)) {
            return "Please enter a valid twitter profile handle"
        }
    } else if (type === "linkedin") {
        if (!linkedInRegex.test(input)) {
            return "Please enter a valid LinkedIn profile link"
        }
    }

    return ""

}