import DefaultLayout from "@/layouts/default";
import { Divider } from "@nextui-org/react";
//import KramatasBanner from "@/components/herobanner";
import Products from "@/components/products/products";
import CTA from "@/components/ctaSection/ctaparlax";
import ContactUs from "@/components/contact/contactus";
//import TeamSection from "@/components/teamsection";
import AboutSection from "@/components/about/aboutsection";
import FeatureSection from "@/components/features/featuresection";
import SliderBanner from "@/components/sliderBanner/sliderbanner";
import Testimonials from "@/components/testimonials/testimonials";
import TeamSectionNew from "@/components/Team/teamsectionlatest";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <SliderBanner/>
    <Divider/>
    <AboutSection/>
    <FeatureSection/>
    <Divider/>
    <Products/>
    <TeamSectionNew/>
    <CTA/>
  <Testimonials/>
    <Divider/>
    <ContactUs/>
    </DefaultLayout>
  );
}
