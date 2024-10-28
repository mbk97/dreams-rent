import React, { ChangeEvent, useState } from "react";

interface IInputProps {
  type: string;
  placeholder?: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
  labelStyle?: string;
  required?: boolean;
}

const InputComponent = ({
  type,
  placeholder,
  value,
  name,
  handleChange,
  label,
  className,
  labelStyle,
  disabled,
  required,
}: IInputProps) => {
  return (
    <div className="relative w-[100%]">
      <label
        htmlFor={name}
        className={`mb-3 ${labelStyle} block text-[15px] text-[#111] font-medium`}
      >
        {label} {required && <span className="text-red-700"> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        datatype=""
        className={`${className} w-[100%] border-[#F4F4F4] outline-[#F4F4F4]  rounded-[5px] h-[47px]  px-[20px]  bg-[#f5f5f5] focus:bg-transparent transition-colors duration-300"
        `}
      />
    </div>
  );
};

export default InputComponent;
