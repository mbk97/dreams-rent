import React from "react";

interface IProps {
  Icon?: any;
  text: string;
  width: string;
  bgColor?: string;
}

const CustomButton = ({ text, Icon, width, bgColor }: IProps) => {
  return (
    <div>
      <div
        className="flex gap-1 items-center h-[39.33px]  px-[15px] py-[7px] rounded-[5px]"
        style={{
          width: width,
          backgroundColor: bgColor ? bgColor : "#201F1D",
        }}
      >
        {Icon && <Icon className="text-white" />}
        <p className="text-white font-medium text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export default CustomButton;
