import React from "react";
import HeroBanner from "../components/Herosection";
import ShoeCategorySection from "../components/ShoeCategorySection";
import ShippingGuaranteeBanner from "../components/ShippingGuaranteeBanner";
import TrendingNow from "../components/TrendingNow";
import ImageGrid from "../components/ImageGrid";
import PromoBanner from "../components/PromoBanner";
import NewArrivals from "../components/NewArrivals";
import BrandsShowcase from "../components/BrandsShowcase";



const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ShoeCategorySection />
      <ShippingGuaranteeBanner />
      <TrendingNow />
      <ImageGrid />
      <PromoBanner/>
      <NewArrivals/>
      <BrandsShowcase/>


    </>
  );
};

export default HomePage;
