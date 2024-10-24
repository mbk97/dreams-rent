import React from "react";
import Navigation from "components/navigation/Navigation";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Rating from "components/rating/Rating";
import ExtraService from "components/review/ExtraService";
import CarFeatures from "components/carFeatures/CarFeatures";
import Policies from "components/policies/Policies";
import DescriptionListing from "components/description/DescriptionListing";
import FAQ from "components/faq/Faq";
import PricingDetails from "components/pricingDetails/PricingDetails";
import OwnerDetails from "components/ownerDetails/OwnerDetails";
import Share from "components/share/Share";
import Location from "components/location/Location";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Rating />
      <div className="mt-10"></div>
      <div className="lg:mx-[120px] mx-[10px]">
        <ExtraService />
        <CarFeatures />
        <Policies />
        <DescriptionListing />
        <FAQ />
        <PricingDetails />
        <OwnerDetails />
        <Share />
        <Location />
      </div>
      <div className="mt-10"></div>
      <Footer />
    </div>
  );
}

export default App;
