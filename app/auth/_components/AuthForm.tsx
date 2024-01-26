
type Props = {
    children: React.ReactNode
    action: (formData: FormData) => Promise<string>
}

export default function AuthForm({ children, action }: Props) {

    return (
        <form className="h-auto p-[30px] xs:w-[95%] md:w-[500px] bg-altBg rounded-md" action={action}>
            { children }
        </form>
    )
}