import CvHeader from "./_components/CvHeader";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'View and export your CV | CV builder',
  }

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-auto min-h-screen w-screen bg-primaryBg flex items-center justify-start flex-col">
            <CvHeader />
            <div className="h-auto w-[90%] flex items-center justify-center flex-col mt-[50px]">
                { children }
            </div>
        </div>
    )
}