
type Props = {
    firstOption: string 
    secondOption: string 
    thirdOption: string 
    fourthOption: string
}

export default function DashboardTableHeader({ firstOption, secondOption, thirdOption, fourthOption }: Props) {
    return (
        <div className="h-[30px] w-full flex items-center justify-center border-b border-border mt-[20px] px-[15px]">
            <p className="h-full w-[30%] flex-grow text-[12px] text-altText mr-[10px]">{firstOption}</p>
            <p className="h-full w-[30%] text-[12px] text-altText mr-[10px]">{secondOption}</p>
            <p className="h-full w-[20%] text-[12px] text-altText mr-[10px] xs:hidden md:flex">{thirdOption}</p>
            <p className="h-full w-[20%] text-[12px] text-altText xs:hidden md:flex">{fourthOption}</p>
        </div>
    )
}