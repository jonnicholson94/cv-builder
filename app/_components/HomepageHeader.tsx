import Link from "next/link";

export default function HomepageHeader() {
    return (
        <header className="h-[50px] w-full flex items-center justify-center px-[15px]">
            <div className="h-auto flex-grow flex items-center justify-start">
                <Link href="/">
                    <img className="h-auto w-[100px]" src="/word-logo-white.svg" alt="The primary icon for CV builder" />
                </Link>
            </div>
            <div className="h-auto flex-grow flex items-center justify-end">
                <Link className="h-[35px] px-[15px] bg-cta rounded-sm text-text font-bold text-[12px] flex items-center justify-center" href="/auth/sign-in">
                    Sign in
                </Link>
            </div>
        </header>
    )
}