
import DialogPopup from "./DialogPopup"

type Props = {
    title: string 
    description: string
    heading: string 
    subHeading: string
    form: React.ReactNode
}

export default function DashboardCard({ title, description, heading, subHeading, form }: Props) {
    return (
        <DialogPopup title={title} description={description} form={form}>
            <div className="h-auto w-full bg-altBg border border-border flex items-center justify-center mb-[10px] cursor-pointer p-[15px] rounded-sm hover:bg-hover overflow-hidden">
                <div className="h-auto w-[90%] flex flex-col items-start justify-start mr-[15px] overflow-hidden">
                    <h1 className="h-auto w-full text-left text-[16px] font-bold text-text text-ellipsis overflow-hidden">{heading}</h1>
                    <p className="h-auto w-full text-left text-[14px] text-altText">{subHeading}</p>
                </div>
                <img className="h-[20px] w-[20px]" alt="A chevron to indicate a card can be clicked on" src="/assets/chevron-right.svg" />
            </div>
        </DialogPopup>
    )
}