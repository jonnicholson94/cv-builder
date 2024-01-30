import HomepageHeader from "./_components/HomepageHeader";
import HomepageHero from "./_components/HomepageHero";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Build a tech CV in minutes | CV builder',
  }

export default function Home() {
  return (
    <section className="h-auto w-screen min-h-screen bg-primaryBg flex items-center justify-start flex-col">
      <HomepageHeader />
      <HomepageHero />
    </section>
  );
}
