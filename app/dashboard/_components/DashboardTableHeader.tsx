
type Props = {
    firstOption: string 
    secondOption: string 
    thirdOption: string 
    fourthOption: string
}

export default function DashboardTableHeader({ firstOption, secondOption, thirdOption, fourthOption }: Props) {
    return (
        <div className="h-[30px] w-full flex items-center justify-center border-b border-border mt-[20px] mb-[20px]">
            <p className="h-full w-[40%] flex-grow text-[12px] text-altText mr-[10px]">{firstOption}</p>
            <p className="h-full w-[20%] text-[12px] text-altText mr-[10px]">{secondOption}</p>
            <p className="h-full w-[20%] text-[12px] text-altText mr-[10px]">{thirdOption}</p>
            <p className="h-full w-[20%] text-[12px] text-altText">{fourthOption}</p>
        </div>
    )
}