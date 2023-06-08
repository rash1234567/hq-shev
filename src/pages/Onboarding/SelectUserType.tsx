import React from "react";
import businessIcon from "../../Assets/Icons/business-icon.svg";
import people from '../../Assets/Icons/people.svg'

type SelectUserTypeProps = {
  onNext: () => void;
};

function SelectUserType({ onNext }: SelectUserTypeProps) {
  return (
    <div className="xl:w-[70%] mx-auto mt-2 xl:-mt-3">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#021645]">
          Let’s get you started
        </h1>
        <p className="text-[0.6rem] md:text-sm xl:text-base text-[#414141]">
          Tell us the type of account you want to setup today!
        </p>
        <div
          className="flex items-center p-1 md:p-2 xl:p-4 mt-10 rounded-md cursor-pointer " onClick={onNext}
          style={{ border: "1px solid #E7E7E7" }}
        >
          <img src={people} className="w-[20%]" />
          <div className="flex flex-col ml-1 md:ml-4 xl:w-[50%]">
            <h2 className="text-[#021645] text-xs md:text-base xl:text-xl font-semibold">
              Individual
            </h2>
            <p className="md:text-sm text-xs text-[#414141] xl:text-base">
              Create your own personal account on MoneHq
            </p>
          </div>
        </div>
        <div
          className="flex items-center p-2 xl:p-4 mt-6 rounded-md cursor-pointer" onClick={onNext}
          style={{ border: "1px solid #E7E7E7" }}
        >
          <img src={businessIcon} className="w-[20%]" />
          <div className="flex flex-col ml-4 xl:w-[50%]">
            <h2 className="text-[#021645] text-xs md:text-base xl:text-xl font-semibold">
              Business
            </h2>
            <p className="md:text-sm text-xs text-[#414141] xl:text-base">
              Either your business or a company you work for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectUserType;
