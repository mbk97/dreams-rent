import CustomButton from "components/common/CustomButton";
import InputComponent from "components/common/CustomInput";
import Line from "components/common/Line";
import React, { useState } from "react";

const Availability = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = () => {
    setStep(2);
  };
  const handlePrevStep = () => {
    setStep(1);
  };

  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Check Availability</h2>
      <Line />

      <section className="flex gap-5 mb-6">
        <div
          className={`w-full h-[81.33px] flex border items-center justify-center p-4 flex-col rounded-md cursor-pointer
    ${
      step === 1 ? "border-[#127384] bg-[#ecf4f5]" : "border-[#F4F4F4] bg-white"
    }
    shadow-[0px_4px_24px_rgba(225,225,225,0.25)]
  `}
          onClick={handlePrevStep}
        >
          <div
            className={`h-[15px] w-[15px] ${
              step == 1 ? " bg-[#127384]" : "bg-[#dcdcdc]"
            } rounded-[50%] mb-2  flex justify-center items-center`}
          >
            {step == 1 && (
              <div
                className={`rounded-[50%] h-[8px] w-[8px] bg-[#ffffff]`}
              ></div>
            )}
          </div>
          <p className="text-[#111]">Delivery</p>
        </div>
        <div
          className={`w-full h-[81.33px] flex border items-center justify-center p-4 flex-col rounded-md cursor-pointer
    ${
      step === 2 ? "border-[#127384] bg-[#ecf4f5]" : "border-[#F4F4F4] bg-white"
    }
    shadow-[0px_4px_24px_rgba(225,225,225,0.25)]
  `}
          onClick={handleStepChange}
        >
          <div
            className={`h-[15px] w-[15px] ${
              step == 2 ? " bg-[#127384]" : "bg-[#dcdcdc]"
            } rounded-[50%] mb-2  flex justify-center items-center`}
          >
            {step == 2 && (
              <div
                className={`rounded-[50%] h-[8px] w-[8px] bg-[#ffffff]`}
              ></div>
            )}
          </div>
          <p className="text-[#111]">Self Pickup</p>
        </div>
      </section>

      <div>
        {/* bigTablet:w-[340.99px] lg:w-[340.99px] */}
        <div className="w-[100%]  mb-3 ">
          <InputComponent
            type="address"
            placeholder=""
            value=""
            name=""
            handleChange={() => {}}
            label="Delivery Location"
          />
        </div>
        <div className="w-[100%]  mb-3">
          <InputComponent
            type="address"
            placeholder=""
            value=""
            name=""
            handleChange={() => {}}
            label="Return Location"
          />
        </div>
        <section>
          <p className="block text-[15px] text-[#111] font-medium mb-2">
            Pickup Date
          </p>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[100%]">
              <InputComponent
                type="date"
                placeholder=""
                value=""
                name=""
                handleChange={() => {}}
                label=""
              />
            </div>
            <div className="w-[100%]">
              <InputComponent
                type="time"
                placeholder=""
                value=""
                name=""
                handleChange={() => {}}
                label=""
              />
            </div>
          </div>
        </section>
        <section>
          <p className="block text-[15px] text-[#111] font-medium mb-2">
            Return Date
          </p>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-[100%]">
              <InputComponent
                type="date"
                placeholder=""
                value=""
                name=""
                handleChange={() => {}}
                label=""
              />
            </div>
            <div className="w-[100%]">
              <InputComponent
                type="time"
                placeholder=""
                value=""
                name=""
                handleChange={() => {}}
                label=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-[25px]">
        <CustomButton text="Book" width="100%" bgColor="#FFA633" />
        <div className="my-[10px]" />
        <CustomButton text="Enquire Us" width="100%" bgColor="#127384" />
      </div>
    </div>
  );
};

export default Availability;
