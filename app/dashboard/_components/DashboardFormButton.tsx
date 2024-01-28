
type Props = {
    action: () => void
}

export default function DashboardFormButton({ action }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-end">
            <button className="h-[35px] px-[15px] bg-cta text-ctaText font-bold rounded-sm text-[12px]" onClick={action}>Save changes</button>
        </div>
    )
}