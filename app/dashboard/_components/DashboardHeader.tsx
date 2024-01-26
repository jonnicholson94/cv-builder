
type Props = {
    title: "Your contact details" | "Your details" | "Your job history" | "Your education" | "Side projects" | "About you" | "Skills"
    content: string
}

export default function DashboardHeader({ title, content }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-center flex-col xs:mt-[30px] md:mt-[100px]">
            <h1 className="h-auto w-full text-[20px] font-bold text-text">{title}</h1>
            <p className="h-auto w-full text-[14px] text-altText mt-[5px]">{content}</p>
            <span className="h-[1px] w-full flex items-center justify-center bg-border mt-[10px] mb-[30px]"></span>
        </div>
    )
}