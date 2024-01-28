
export default function DashboardTableSkeletonItem() {
    return (
        <div className="h-[40px] w-full flex items-center justify-center mb-[5px]">
            <span className="h-full flex-grow bg-hover animate-pulse mr-[10px] rounded-sm"></span>
            <span className="h-full flex-grow bg-hover animate-pulse mr-[10px] rounded-sm"></span>
            <span className="h-full w-[75px] bg-hover animate-pulse mr-[10px] rounded-sm"></span>
            <span className="h-full w-[70px] bg-hover animate-pulse rounded-sm"></span>
        </div>
    )
}