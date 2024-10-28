import React, { useState } from "react";
import logo from "assets/svgs/logo.svg";
import smallLogo from "assets/images/logo-small.png";
import mobileLogo from "assets/svgs/mobile_logo.svg";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { navData } from "data/data";
import CustomButton from "components/common/CustomButton";
import { FaRegUser, FaLock } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";

const Navigation = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [dropdownId, setDropdownId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleClick = (id: number) => {
    setDropdownId(dropdownId === id ? null : id);
  };

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="flex md:h-[85px] h-[65px] w-[100%] relative">
      {/* Desktop Navigation */}
      <section className="h-[100%] bg-[#ffffff] w-full px-[15px] shadow-sm items-center justify-between hidden bigTablet:flex">
        <div className="flex items-center gap-4 ">
          <BiMenuAltLeft
            size={40}
            className="text-primary hidden bigTablet:block lg:hidden"
            onClick={handleOpenMenu}
          />
          <img src={logo} alt="Logo" className="" />
        </div>
        <div
          className="flex space-x-6 bigTablet:hidden lg:block"
          onMouseLeave={handleMouseLeave}
        >
          {navData.map(({ id, title, options }) => (
            <div
              className="relative inline-block"
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center focus:outline-none cursor-pointer gap-1">
                <h3 className="text-[#2F2F2F] font-medium py-2 rounded text-[14px] xl:text-[16px]">
                  {title}
                </h3>
                <div className="text-[#2F2F2F] mt-1">
                  <IoIosArrowDown size={20} />
                </div>
              </div>

              {hoveredId === id && (
                <div className="dropdown-content absolute bg-white border-t-2 border-t-primary shadow-lg rounded py-2 w-48 z-10 pointer-events-auto">
                  {options?.map(({ optionId, text }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-primary"
                      key={optionId}
                    >
                      {text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className=" inline-block cursor-pointer gap-2">
            <h3 className="text-[#2F2F2F] font-medium py-2 rounded text-[16px]">
              Contact
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CustomButton width="112.7px" text="Sign In" Icon={FaRegUser} />
          <CustomButton
            width="112.7px"
            text="Sign Up"
            Icon={FaLock}
            bgColor="#FFA633"
          />
        </div>
      </section>

      {/* Mobile Navigation */}
      {/* <section className=" w-[100%] h-[65px] bg-[red]"> */}
      <div className="flex items-center bigTablet:hidden justify-between w-[65%] px-4">
        <BiMenuAltLeft
          size={40}
          className="text-primary"
          onClick={handleOpenMenu}
        />
        <img src={smallLogo} alt="Small Logo" />
      </div>

      {open && (
        <div className="absolute top-0 left-0 bg-[#201F1D] h-[100vh] w-[65%] z-50">
          <div className="">
            <div className="bg-[white] w-[100%] flex justify-between items-center gap-10 h-[65px] ">
              <img
                src={mobileLogo}
                alt="mobile logo"
                className="w-[150px] pl-2"
              />
              <IoMdClose
                onClick={handleCloseMenu}
                className="text-primary pr-3"
                size={30}
              />
            </div>

            {navData.map(({ id, title, options }) => (
              <div key={id} className="relative">
                <div className="flex items-center justify-between focus:outline-none cursor-pointer gap-2 border-b  border-b-[#828282] px-2">
                  <h3 className="text-white font-medium py-2 text-[14px] leading-[20px]">
                    {title}
                  </h3>
                  <div
                    className="text-white mt-1"
                    onClick={() => handleClick(id)}
                  >
                    <IoIosArrowDown size={20} />
                  </div>
                </div>

                {dropdownId === id && (
                  <div
                    className={` w-full block z-10 transition-max-height duration-3000 ease-in-out `}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {options?.map(({ optionId, text }) => (
                      <a
                        href="#"
                        className="block px-2 py-2 text-white font-medium text-[12px]"
                        key={optionId}
                      >
                        {text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between focus:outline-none cursor-pointer gap-2 border-b  border-b-[#828282] px-2">
              <h3 className="text-white font-medium py-2 text-[14px] leading-[20px]">
                Contact
              </h3>
            </div>
            <div className="flex items-center justify-between focus:outline-none cursor-pointer gap-2 border-b  border-b-[#828282] px-2">
              <h3 className="text-white font-medium py-2 text-[14px] leading-[20px]">
                Sign Up
              </h3>
            </div>
            <div className="flex items-center justify-between focus:outline-none cursor-pointer gap-2   px-2">
              <h3 className="text-white font-medium py-2 text-[14px] leading-[20px]">
                Sign In
              </h3>
            </div>
          </div>
        </div>
      )}
      {/* </section> */}
    </nav>
  );
};

export default Navigation;
