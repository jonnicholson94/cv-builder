
import DashboardHeader from "../_components/DashboardHeader"
import DashboardSkeletonItem from "../_components/DashboardSkeletonItem"

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your contact details" content="How employers can speak to you" />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
        </>
    )
}