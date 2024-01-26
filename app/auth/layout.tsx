import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-primaryBg">
            <div className="h-auto xs:w-[95%] md:w-[500px] flex items-center justify-start mb-[20px]">
                <Link href="/">
                    <img className="h-auto w-[100px]" src="/word-logo-white.svg" alt="The primary logo, used as a link to go back to the homepage" />
                </Link>
            </div>
            
            { children }
            
        </div>
    )
}