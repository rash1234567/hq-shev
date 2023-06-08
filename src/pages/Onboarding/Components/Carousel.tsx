import React, { useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import greenChecked from '../../../Assets/Icons/greenChecked.svg';
import glo from '../../../Assets/Images/glo 2.png';
import kuda from '../../../Assets/Images/Kuda.png';
import guo from '../../../Assets/Images/guo_transport 2.png';
import quote from '../../../Assets/Images/quote.png';
import jackDaniels from '../../../Assets/Images/jack-daniels.png';


const CarouselWithDots: React.FC = () => {
  const carouselRef = useRef<any>(null);

  return (
    <Carousel
      ref={carouselRef}
      className="xl:h-full w-full onboarding-carousel"
      autoplay
      autoplaySpeed={5000}
      effect="fade"
    >
      <div className="w-full flex items-center justify-center xl:h-screen">
        <div className=" w-[85%] md:w-[60%] mx-auto my-[17%]">
          <div className="">
            <h6 className="text-[#021645] text-[30px] md:text-[40px]  md:leading-[52px] xl:leading-[3.6vw] xl:text-[2.7vw] font-[400]">
              Take your finance actions to the next level
            </h6>
            <p className="text-[16px] leading-[24px] xl:leading-[1.7vw] xl:text-[1.1vw] font-[400] mt-2">
              Take back over 40% of your time with automated accounting.
            </p>
          </div>
          <div className="mt-[4vh] xl:mt-[2.2vw]">
            {['One service we want to promote', 'Second service we want to promote', 'Third service we want to promote'].map((text, index) => {
              return (
                <div key={index} className="flex items-center mt-[3vh] xl:mt-[1.7vw] w-full">
                  <img src={greenChecked} alt="green checked" width={'14px'} />
                  <span className="text-[16px] leading-[24px] xl:leading-[1.7vw] xl:text-[1.1vw] text-[#021645] font-[400] ml-2">
                   {text}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-[7vh] xl:mt-[] font-[400] text-[16px] leading-[24px] xl:leading-[1.7vw] xl:text-[1.1vw]">
            The best forward thinking brands use{' '}
            <span className="text-[#021645] font-[400]">MoneHQ</span>{' '}
          </div>
          <div className="flex items-center mt-4 w-full">
            <img src={kuda} alt="kuda logo" className="w-[30%]" />
            <img src={glo} alt="glo logo" className="mx-5 w-[10%]" />
            <img src={guo} alt="guo transport logo" className="w-[20%]" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center xl:h-screen">
        <div className='w-[85%] md:w-[60%] mx-auto py-8'>
          <img src={quote} alt="quote" width={'23%'} />
          <img src={jackDaniels} alt="jack daniels" width={'100%'} className='mt-2' />
          <p className='mt-4 text-[#04050F] text-lg font-[400]'>
          “I used to spend over 14 hours getting my financial statement done. Now, with MoneHq, I get it done in less than 2 minutes”
          </p>
          <p className='text-end mt-4 text-[#021645] text-lg font-[400] mr-2'>Jack Daniels</p>
          <p className='text-end text-sm font-[400] mt-1 mr-2'>CEO, Gucci</p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselWithDots;