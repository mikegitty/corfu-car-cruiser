
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import BookingWidget from "@/components/BookingWidget";
import Fleet from "@/components/Fleet";
import SpecialOffers from "@/components/SpecialOffers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <div className="min-h-screen font-poppins">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <div className="container mx-auto px-4 py-6 -mt-6 relative z-40">
        <BookingWidget language={language} isSticky />
      </div>
      <BrandStrip language={language} />
      <Fleet language={language} />
      <SpecialOffers language={language} />
      <WhyChooseUs language={language} />
      <Location language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
