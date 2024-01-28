
import DashboardHeader from "../_components/DashboardHeader";
import DashboardTableHeader from "../_components/DashboardTableHeader";
import DashboardTableSkeletonItem from "../_components/DashboardTableSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Your education" content="Tell employers about your education" />
            <DashboardTableHeader firstOption="Job title" secondOption="Employer" thirdOption="Start date" fourthOption="End date" />
            <DashboardTableSkeletonItem />
            <DashboardTableSkeletonItem />
            <DashboardTableSkeletonItem />
        </>
    )
}