
import DashboardHeader from "../_components/DashboardHeader";
import DashboardCardSkeletonItem from "../_components/DashboardCardSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Side projects" content="Tell employers about any of your side projects" />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
            <DashboardCardSkeletonItem />
        </>
    )
}