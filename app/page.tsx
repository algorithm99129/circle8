import { Nav, Footer } from "@/components/Nav";
import { Hero, Intro } from "@/components/Hero";
import { Story } from "@/components/Story";
import { HowItWorks } from "@/components/HowItWorks";
import { Week } from "@/components/Week";
import { Benefits, Compare } from "@/components/Benefits";
import { Pricing, Privacy, Faq } from "@/components/Pricing";
import { EarlyAccess } from "@/components/EarlyAccess";

export default function Home() {
  return (
    <div className="wrap">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Intro />
        <HowItWorks />
        <Week />
        <Benefits />
        <Compare />
        <Pricing />
        <Privacy />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
