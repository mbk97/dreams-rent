import floatImg from "assets/images/breadcrumbright.png";
import floatImgTwo from "assets/images/footer-right.png";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { footerData, payData, social_media_icons } from "data/data";

const Footer = () => {
  return (
    <footer className="bg-[#201F1D] h-[auto] lg:h-[505px] relative  flex flex-col justify-between">
      <div className="px-4">
        <div className="absolute left-0 top-[20px] hidden lg:block">
          <img src={floatImg} alt="" />
        </div>
        <div className="absolute bottom-[50px] right-[0px] hidden lg:block">
          <img src={floatImgTwo} alt="" />
        </div>
        <section className="flex flex-wrap lg:justify-center lg:flex-nowrap pt-8 gap-[10px] md:gap-[40px] lg:gap-[60px] w-[96%]">
          {footerData.map((item) => {
            return (
              <div key={item.title} className="z-[10px] w-full sm:w-auto">
                <div>
                  <h3 className="text-white text-[18px] sm:text-[20px] font-medium">
                    {item.title}
                  </h3>
                  <div className="bg-primary h-[4px] mt-1 w-[27px]"></div>
                </div>
                <div className="mt-5">
                  {item.links.map((link, index) => {
                    return (
                      <div key={index}>
                        <p className="text-[#676767] text-[14px] mb-5">
                          {link}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className=" w-full sm:w-auto">
            <div className="mb-3">
              <h3 className="text-white text-[18px] sm:text-[20px] font-medium">
                Contact Info
              </h3>
              <div className="bg-primary h-[4px] mt-1 w-[27px]"></div>
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="rounded-[4px] grid place-items-center h-[50px] w-[50px] bg-primary">
                  <LuPhoneCall className="text-[white]" size={20} />
                </div>
                <p className="text-[#676767] text-[14px]">+ 1 (888) 760 1940</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="rounded-[4px] grid place-items-center h-[50px] w-[50px] bg-primary">
                  <LuMail className="text-[white]" size={20} />
                </div>
                <p className="text-[#676767] text-[14px]">
                  support@example.com
                </p>
              </div>
            </div>
            <div className="lg:w-full w-[92vw]">
              <div className="bg-white h-[55px] px-2 rounded-[5px] w-[100%] lg:w-[451px] flex gap-5 items-center ">
                <LuMail className="text-[#676767]" size={22} />
                <input
                  type="text"
                  className="bg-[transparent] h-[45px] w-[90%] outline-none"
                  placeholder="Enter Your Email Here"
                />
                <div className="rounded-[4px] grid place-items-center h-[41.33px] w-[41.33px] bg-primary">
                  <FiSend className="text-[white]" size={20} />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                {social_media_icons.map(({ Icon, bg, id }) => {
                  return (
                    <div key={id}>
                      <div
                        className={`rounded-[50%] grid place-items-center h-[36px] w-[36px] p-2`}
                        style={{
                          background: bg,
                        }}
                      >
                        <Icon className="text-[white]" size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#212121] h-[101px] md:h-[70px] w-[100%] mt-7 mx-auto z-10 p-4 lg:p-7">
        <div className="flex items-center flex-wrap md:flex-nowrap  justify-center md:justify-between w-[90%]">
          <p className="text-[#676767] text-[14px] mb-5 md:mb-0">
            © 2024 Dreams Rent. All Rights Reserved.
          </p>

          <div className="flex gap-4 ">
            {payData.map((pay) => {
              return (
                <div
                  className="w-[46px] h-[30px] bg-[#ffffff] rounded-[5px] grid place-items-center"
                  key={pay.id}
                >
                  <img src={pay.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
