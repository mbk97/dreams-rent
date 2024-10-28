import Line from "components/common/Line";
import React, { useState } from "react";
import { IoRemoveOutline } from "react-icons/io5";

const DescriptionListing = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => setShow(!show);
  return (
    <div
      style={{
        boxShadow: "0px 4px 24px rgba(225, 225, 225, 0.25)",
      }}
      className="h-[auto]  bg-[#fff] rounded-[10px] p-[15px]"
    >
      <h2 className="text-[#111] text-[18px]">Description of Listing</h2>
      <Line />

      <div>
        <p className="text-[14px] mb-[15px] text-[#676767] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className="text-[14px] mb-[15px] text-[#676767]">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <p className="text-[14px] mb-[15px] text-[#676767]">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        {show && (
          <p className="text-[14px] mb-[15px] text-[#676767]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        )}

        <div
          className="flex items-center gap-3 text-[#127384] cursor-pointer"
          onClick={handleShow}
        >
          <IoRemoveOutline />
          <p className=" font-semibold text-[15px]">
            Show {show ? "Less" : "More"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionListing;
