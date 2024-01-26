
import Link from "next/link";
import { headers } from "next/headers";

import { navLinks } from "@/lib/navLinks";

export default function Sidebar() {

    const head = headers()

    // TODO: Review getting the headers, as seems unreliable

    const currentLink = head.get("next-url")

    return (
        <div className="min-h-screen w-[300px] border-r border-border flex items-center justify-start flex-col p-[20px]">
            <div className="h-auto w-full flex items-center justify-start">
                <Link href="/">
                    <img className="h-[20px] w-[20px]" src="/square-logo-white.svg" alt="The primary icon, used to navigate home" />
                </Link>
            </div>
            <Link href="/cv" className="h-auto w-full flex items-center justify-center border-border bg-altBg mt-[30px] px-[20px] rounded-md">
                <div className="h-auto flex-grow flex items-start justify-center flex-col my-[10px]">
                    <h2 className="h-auto w-full text-text text-[14px] font-bold">View your CV</h2>
                    <p className="h-auto w-full text-altText text-[12px]">View, edit and export your CV</p>
                </div>
                <img src="/assets/chevron-right.svg" alt="A chevron to indicate a new page can be opened to view your CV" />
            </Link>
            <nav className="h-auto w-full flex items-center justify-center flex-col mt-[30px]">
                { navLinks.map(link => {
                    return (
                        <Link key={link.link} href={link.link} className={`h-[35px] w-full ${currentLink === link.link && "bg-altBg font-bold text-text"} flex items-center justify-start hover:bg-hover rounded-md px-[10px]`}>
                            <img className="h-[20px] w-[20px] mr-[10px]" src={link.icon} alt={`The respective icon for the nav link: ${link.content}`} />
                            <p className={`text-[14px] ${currentLink === link.link ? "text-text" : "text-altText"}`}>{link.content}</p>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}