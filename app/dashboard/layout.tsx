import MobileNavbar from "./_components/MobileNavbar";
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <section className="h-screen w-screen flex items-center justify-center bg-primaryBg">
            <Sidebar />
            <div className="min-h-screen flex-grow flex items-center justify-start flex-col">
                <div className="h-[60px] w-full xs:flex lg:hidden items-center justify-start px-[15px]">
                    <MobileNavbar />
                </div>
                <div className="h-auto xs:w-[95%] md:w-[500px]">
                    { children }
                </div>
            </div>
        </section>
    )

}