import React, { useState } from 'react'
import './Onboarding.css'
import logo from '../../Assets/Images/moneHQ-logo.png'
import CarouselWithDots from './Components/Carousel'
import BusinessDetails from './Business/UserDetails'
import SelectUserType from './SelectUserType';
import VerifyEmail from './VerifyEmail'

function Onboarding() {
  const [next, setNext] = useState(0);

 type OnNextHandler = () => void;

  const nextPage : OnNextHandler = () => {
    setNext(next + 1)
  }

  return (
    <div className="flex flex-col-reverse xl:flex-row">
      <div className="w-full xl:w-1/2 xl:h-screen p-6 xl:p-12">
        <img src={logo} alt="moneHQ logo" />
        <div className="w-full flex flex-col">
          {next == 0 && <SelectUserType onNext={nextPage} />}
          {next == 1 && <BusinessDetails onNext={nextPage} />}
          {next == 2 && <VerifyEmail />}
        </div>
      </div>
      <div className="w-full xl:w-1/2 xl:h-screen bg-[#FBFAFF]">
        <CarouselWithDots />
      </div>
    </div>
  );
}

export default Onboarding
