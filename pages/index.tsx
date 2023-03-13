import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/PageSection/HeroSection";
import ServiceSlider from "../components/Slider/ServiceSlider";
import CustomSlider from "../components/Slider/BaseSlider";
import WorkSection from "../components/PageSection/WorkSection";
import BrandSection from "../components/PageSection/BrandSection";
import HowItWorks from "../components/PageSection/HowItWorks";
import WhyChooseUs from "../components/PageSection/WhyChooseUs";
import FeatureSection from "../components/PageSection/FeatureSection";
import ReviewSection from "../components/PageSection/ReviewSection";
import DesignServicesSection from "../components/PageSection/DesignServicesSection";
import PricingSection from "../components/PageSection/PricingSection";
import FaqSection from "../components/PageSection/FaqSection";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSlider />
      <WorkSection />
      <BrandSection />
      <HowItWorks />
      <WhyChooseUs />
      <FeatureSection />
      <ReviewSection />
      <DesignServicesSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
};

export default Home;
