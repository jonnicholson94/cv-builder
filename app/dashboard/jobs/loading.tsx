import DashboardHeader from "../_components/DashboardHeader";
import DashboardCardSkeletonItem from "../_components/DashboardCardSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your job history" content="Tell employers about your job history" />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
        </>
    )
}