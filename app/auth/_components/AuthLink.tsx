import Link from "next/link"

type Props = {
    content: string 
    link: "/auth/register" | "/auth/sign-in"
}

export default function AuthLink({ content, link }: Props) {
    return (
        <Link className="h-auto w-full text-text text-[12px] underline mb-[30px]" href={link}>
            { content }
        </Link>
    )
}