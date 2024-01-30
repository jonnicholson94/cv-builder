import Link from "next/link";

export default function HomepageHero() {
    return (
        <section className="h-auto w-full flex items-center justify-center flex-col mt-[100px]">
            <h1 className="h-auto xs:w-[95%] md:w-[750px] text-[60px] text-text font-bold text-center">Build a CV, really fast</h1>
            <p className="h-auto xs:w-[95%] md:w-[750px] text-[24px] text-altText text-center mt-[20px]">No more painful editing of your CV. Add your details, pick a beautiful design and export it, all in one place.</p>
            <Link className="h-[50px] px-[30px] font-bold text-text bg-cta rounded-sm flex items-center justify-center mt-[40px]" href="/auth/register">
                Get started
            </Link>
            <div className="h-[800px] w-[90%] border border-[2px] border-active rounded-md mt-[100px] mb-[100px] shadow-[0px_10px_0px_0px_#83C0C1]">

            </div>
        </section>
    )
}