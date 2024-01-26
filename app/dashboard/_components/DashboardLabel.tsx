
export default function DashboardLabel({ label, name }: { label: string, name: string }) {
    return (
        <label className="h-auto w-full text-[12px] text-altText" htmlFor={name}>{label}</label>
    )
}