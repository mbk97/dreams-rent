import React from "react";

interface IProps {
  Icon?: any;
  text: string;
  width: string;
  bgColor?: string;
  textColor?: string;
}

const CustomButton = ({ text, Icon, width, bgColor, textColor }: IProps) => {
  return (
    <div>
      <div
        className="flex gap-1 justify-center items-center h-[39.33px]  px-[15px] py-[7px] rounded-[5px]"
        style={{
          width: width,
          backgroundColor: bgColor ? bgColor : "#201F1D",
        }}
      >
        {Icon && (
          <Icon
            style={{
              color: textColor ? textColor : "white",
            }}
          />
        )}
        <p
          className=" font-medium text-[16px] text-center"
          style={{
            color: textColor ? textColor : "white",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default CustomButton;
