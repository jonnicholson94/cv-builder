
import { register } from "@/app/actions";

import AuthButton from "../_components/AuthButton";
import AuthForm from "../_components/AuthForm";
import AuthInput from "../_components/AuthInput";
import AuthTitle from "../_components/AuthTitle";
import AuthLink from "../_components/AuthLink";

export default function Page() {
    return (
        <AuthForm action={register}>
            <AuthTitle content="Register for an account" />
            <AuthInput placeholder="Enter your email" type="email" />
            <AuthInput placeholder="Enter your password" type="password" />
            <AuthButton />
            <AuthLink link="/auth/sign-in" content="Already got an account?" />
        </AuthForm>
    )
}