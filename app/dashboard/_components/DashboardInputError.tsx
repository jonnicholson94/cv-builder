
export default function DashboardInputError({ error }: { error: string }) {
    return (
        <div className="h-auto w-full flex items-center justify-center mb-[20px]">
            <img className="mr-[10px]" src="/assets/warning.svg" alt="A warning icon to show an error with a user's input on their dashboard" />
            <p className="text-[14px] text-error flex-grow">{error}</p>
        </div>
    )
}