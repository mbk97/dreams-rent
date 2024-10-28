import React from "react";
import Availability from "components/availability/Availability";
import CarFeatures from "components/carFeatures/CarFeatures";
import CarSelection from "components/carsSelection/CarsSelection";
import DescriptionListing from "components/description/DescriptionListing";
import FAQ from "components/faq/Faq";
import Gallery from "components/gallery/Gallery";
import LeaveAReply from "components/leaveAReply/LeaveAReply";
import Location from "components/location/Location";
import OwnerDetails from "components/ownerDetails/OwnerDetails";
import Policies from "components/policies/Policies";
import PricingDetails from "components/pricingDetails/PricingDetails";
import ExtraService from "components/review/ExtraService";
import Reviews from "components/review/Reviews";
import Share from "components/share/Share";
import Specifications from "components/specifications/Specifications";
import VideoComponent from "components/videoComponent/VideoComponent";
import InterestedSection from "components/interestedSection/InterestedSection";

const MainLayout = () => {
  return (
    <div className="xl:px-[120px] px-[10px] md:px-[20px]">
      <div className="flex flex-wrap xl:flex-nowrap gap-6 ">
        {/* Main Content */}
        <div className="xl:w-[66.66666667%] w-[100%]">
          <CarSelection />
          <div className="my-5" />
          <ExtraService />
          <div className="my-5" />
          <DescriptionListing />
          <div className="my-5" />
          <Specifications />
          <div className="my-5" />
          <CarFeatures />
          <div className="my-5" />
          <Gallery />
          <div className="my-5" />
          <VideoComponent />
          <div className="my-5" />
          <FAQ />
          <div className="my-5" />
          <Policies />
          <div className="my-5" />
          <Reviews />
          <div className="my-5" />
          <LeaveAReply />
        </div>

        {/* Sticky Sidebar */}
        <div className="xl:w-[33.33333333%] w-[100%]">
          <div className="sticky top-0 space-y-5">
            <PricingDetails />
            <Availability />
            <OwnerDetails />

            <div className="space-y-5">
              <Location />
              <Share />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <InterestedSection />
      </div>
    </div>
  );
};

export default MainLayout;
