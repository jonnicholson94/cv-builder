
import { passwordReset } from "@/app/actions";

import AuthButton from "../_components/AuthButton";
import AuthForm from "../_components/AuthForm";
import AuthInput from "../_components/AuthInput";
import AuthTitle from "../_components/AuthTitle";
import AuthLink from "../_components/AuthLink";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Request a password reset | CV builder',
}

export default function Page() {
    return (
        <AuthForm action={passwordReset}>
            <AuthTitle content="Request a password reset" />
            <AuthInput placeholder="Enter your email" type="email" />
            <AuthButton />
            <AuthLink link="/auth/sign-in" content="Back to sign in" />
        </AuthForm>
    )
}