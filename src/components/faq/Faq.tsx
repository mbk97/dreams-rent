import Line from "components/common/Line";
import { faqs } from "data/data";
import React, { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">FAQ's</h2>
      <Line />
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item bg-[#fcfcfc] mb-[15px] p-[20px] h-[auto] cursor-pointer border border-[#F4F4F4]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(241, 241, 241, 0.2509803922)",
            }}
          >
            <div
              className="faq-question flex justify-between"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-[#111]">{faq.question}</p>
              <div>
                <span className="arrow">
                  {activeIndex === index ? (
                    <IoIosArrowDropupCircle className="text-primary" />
                  ) : (
                    <IoIosArrowDropdownCircle className="text-[grey]" />
                  )}
                </span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p className="text-[#676767] mt-[10px]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
