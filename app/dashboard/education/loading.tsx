
import DashboardHeader from "../_components/DashboardHeader";
import DashboardCardSkeletonItem from "../_components/DashboardCardSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your education" content="Tell employers about your education" />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
        </>
    )
}