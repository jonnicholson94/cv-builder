import DashboardHeader from "../_components/DashboardHeader";
import DashboardSkeletonItem from "../_components/DashboardSkeletonItem";

export default function Loading() {
    return (
        <>
            <DashboardHeader title="Skills" content="Add any skills you've got to list on your CV" />
            <DashboardSkeletonItem />
        </>
    )
}