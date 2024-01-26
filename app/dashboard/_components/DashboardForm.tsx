
type Props = {
    children: React.ReactNode
    action: (formData: FormData) => void
}

export default function DashboardForm({ children, action }: Props) {
    return (
        <form action={action}>
            { children }
        </form>
    )
}