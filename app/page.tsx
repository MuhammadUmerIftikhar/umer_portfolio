import {
  getProfile,
  getTechStack,
  getExpertise,
} from "@/lib/sanity/queries";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioGallery from "@/components/PortfolioGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default async function Page() {
  /* Fetch all Sanity data in parallel — each returns null when Sanity is
     not yet configured, components gracefully fall back to static data. */
  const [profile, techStack, expertise] = await Promise.all([
    getProfile(),
    getTechStack(),
    getExpertise(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero            profile={profile} />
        <StatsBar />
        <Technologies    techStack={techStack} />
        <Skills />
        <Expertise       expertise={expertise} />
        <FeaturedProjects />
        <PortfolioGallery />
        <ExperienceTimeline />
        <Testimonials />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer profile={profile} />
    </>
  );
}
