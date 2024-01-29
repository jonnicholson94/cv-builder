
"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navLinks } from "@/lib/navLinks"

export default function MobileNavbar() {

    const path = usePathname()

    return (
        <NavigationMenu.Root>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        <div className="h-[40px] w-[40px] rounded-rnd border border-border flex items-center justify-center bg-altBg">
                            <img src="/assets/hamburger.svg" alt="A hamburger icon to indicate the mobile menu can be opened" />
                        </div>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="h-auto w-[300px] absolute top-[0px] flex items-center justify-center flex-col bg-primaryBg rounded-md border border-border p-[20px]">
                        <Link href="/cv" className="h-auto w-full flex items-center justify-center border-border bg-altBg px-[20px] rounded-md">
                            <div className="h-auto flex-grow flex items-start justify-center flex-col my-[10px]">
                                <h2 className="h-auto w-full text-text text-[14px] font-bold">View your CV</h2>
                                <p className="h-auto w-full text-altText text-[12px]">View, edit and export your CV</p>
                            </div>
                            <img src="/assets/chevron-right.svg" alt="A chevron to indicate a new page can be opened to view your CV" />
                        </Link>
                        <nav className="h-auto w-full flex items-center justify-center flex-col mt-[30px]">
                            { navLinks.map(link => {
                                return (
                                    <Link key={link.link} href={link.link} className={`h-[40px] w-full ${path === link.link && "bg-altBg font-bold text-text"} flex items-center justify-start hover:bg-hover rounded-md px-[10px]`}>
                                        <img className="h-[20px] w-[20px] mr-[10px]" src={link.icon} alt={`The respective icon for the nav link: ${link.content}`} />
                                        <p className={`text-[14px] ${path === link.link ? "text-text" : "text-altText"}`}>{link.content}</p>
                                    </Link>
                                )
                            })}
                        </nav>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )

}