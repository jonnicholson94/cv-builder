
type Props = {
    showDelete?: boolean
    deleteAction: () => void
    saveAction: () => void
}

export default function DashboardFormButton({ showDelete = false, deleteAction, saveAction }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-end">
            { showDelete && <button className="h-[35px] px-[15px] bg-error text-ctaText font-bold rounded-sm text-[12px] mr-[10px]" onClick={deleteAction}>Delete</button> }
            <button className="h-[35px] px-[15px] bg-cta text-ctaText font-bold rounded-sm text-[12px]" onClick={saveAction}>Save changes</button>
        </div>
    )
}