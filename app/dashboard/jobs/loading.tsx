import DashboardHeader from "../_components/DashboardHeader";
import DashboardTableHeader from "../_components/DashboardTableHeader";
import DashboardTableSkeletonItem from "../_components/DashboardTableSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your job history" content="Tell employers about your job history" />
            <DashboardTableHeader firstOption="Job title" secondOption="Employer" thirdOption="Start date" fourthOption="End date" />
            <DashboardTableSkeletonItem />
            <DashboardTableSkeletonItem />
            <DashboardTableSkeletonItem />
        </>
    )
}