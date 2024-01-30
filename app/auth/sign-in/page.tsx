
import { signIn } from "@/app/actions"

import AuthForm from "../_components/AuthForm"
import AuthTitle from "../_components/AuthTitle"
import AuthInput from "../_components/AuthInput"
import AuthButton from "../_components/AuthButton"
import AuthLink from "../_components/AuthLink"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Sign in to your account | CV builder',
}

export default function Page() {
    return (
        <AuthForm action={signIn}>
            <AuthTitle content="Sign in to your account" />
            <AuthInput placeholder="Enter your email" type="email" />
            <AuthInput placeholder="Enter your password" type="password" />
            <AuthLink link="/auth/forgot-password" content="Forgot your password?" />
            <AuthButton />
            <AuthLink link="/auth/register" content="Not got an account?" />
        </AuthForm>
    )
}