
import DashboardHeader from "../_components/DashboardHeader"
import DashboardSkeletonItem from "../_components/DashboardSkeletonItem"

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your details" content="Tell employers a little more about who you are" />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
        </>
    )
}