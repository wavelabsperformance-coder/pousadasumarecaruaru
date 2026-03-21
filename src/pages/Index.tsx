import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import AccommodationsSection from "@/components/home/AccommodationsSection";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import GallerySection from "@/components/home/GallerySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <AccommodationsSection />
    <AmenitiesSection />
    <GallerySection />
    <ReviewsSection />
    <LocationSection />
    <CTASection />
  </Layout>
);

export default Index;
