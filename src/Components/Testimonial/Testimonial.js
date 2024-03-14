import React from "react";
import Arrow from "../../Assests/Icons/testimonialarrow.svg";
import Arrow2 from "../../Assests/Icons/tarrow2.svg";
import Img1 from "../../Assests/Images/testimonial1.png";

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-row gap-44 justify-center py-20 px-20 pb-32">
        <div className="flex flex-col gap-8 w-[613px]">
          <div className="flex flex-row gap-4 items-center">
            <hr className="border border-[#525596] w-20" />
            <p className="text-[#525596] text-[20px] font-Nunito Sans">
              TESTIMONIAL
            </p>
          </div>
          <p className="text-[#2F327D] text-[60px] font-Nunito Sans font-semibold">
            What They Say?
          </p>
          <div className="flex flex-col gap-4 text-[#696984] text-[24px] font-poppins">
            <p className="">
              HopingMinds has got more than 100k positive ratings from our users
              around the world.{" "}
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
          </div>
          <p className="text-[#696984] text-[24px] font-poppins">
            Are you too? Please give your assessment
          </p>
          <div className="flex flex-row">
            <div className="w-[400px] h-[80px] border border-[#49BBBD] text-[#49BBBD] text-[22px] font-poppins flex justify-between items-center rounded-full">
              <div className="flex justify-center items-center pl-12">
                <p>Write your assessment</p>
              </div>
              <div className="w-[80px] h-[80px] border border-[#49BBBD] rounded-full flex justify-center">
                <img src={Arrow} className="self-center" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[726px]">
          <img src={Img1} className="w-[560px] h-[700px]" />
          <div
            className="w-[80px] h-[80px] absolute bg-[#ffffff] rounded-full right-28 top-[42%] flex justify-center items-center text-3xl text-[#1EA4CE] font-bold"
            style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            <img src={Arrow2} className="self-center" />
          </div>
          <div className="absolute flex flex-row gap-10 justify-center rounded-xl shadow-2xl w-[660px] h-[300px] bg-[#ffffff] right-0 top-[72%]">
            <div className="bg-[#1DBF73] text-[#1DBF73] w-14 rounded-l-xl">.</div>
            <div className="flex relative">
              <hr className="h-[130px] border border-[#BDBDD1] absolute top-12" />
              </div>
            <div className="flex flex-col justify-between pr-10 pt-10 pb-8">
              <p className="text-[#5F5F7E] text-[22px] font-Nunito Sans leading-9 text-justify">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. HopingMinds is exactly what our business has been
                lacking."
              </p>
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#5F5F7E] text-[24px] font-Nunito Sans font-semibold">
                  Gloria Rose
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FBA333] text-xl font-bold flex justify-end">  &#11088;&#11088;&#11088;&#11088;&#11088;</p>
                  <p className="text-[#80819A] text-[18px] font-Nunito Sans">
                    12 reviews at Yelp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
