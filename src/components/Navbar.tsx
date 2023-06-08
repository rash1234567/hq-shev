import React, { useState } from "react";
import logo from "../Assets/Images/moneHQ-logo.png";
import { Link } from "react-router-dom"
import {
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  MenuOutlined,

} from "@ant-design/icons";
import { Divider } from 'antd'
import './layout.css'

//1vw=1.6vh
const urls: { href: string; name: string }[] = [
  { href: '/dashboard', name: 'Dashboard' },
  { href: '/accounting', name: 'Accounting' },
  { href: '/invoices', name: 'Invoices' },
  { href: '/payments', name: 'Payments' },
  { href: '/financial-statement', name: 'Financial Statement' },
];

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState(false);

  const togleSideBar = () => {
    setSidebar(!sidebar)
  }


  return (
    <div className="w-full flex flex-col">
      <nav
        className={
          sidebar
            ? " w-[50%] left-0 z-[20] fixed flex flex-col h-[100vh] lg:w-full items-center justify-between lg:h-[90px] xl:h-[6vw] bg-[#7767E3] lg:bg-[#552AC1] lg:flex-row xl:pl-[10%] text-white nav"
            : "w-[50%] -left-[70%] lg:left-0 z-[20] fixed flex flex-col h-[100vh] lg:w-full items-center justify-between lg:h-[90px] xl:h-[6vw] bg-[#7767E3] lg:bg-[#552AC1] lg:flex-row xl:pl-[10%] text-white nav"
        }
      >
        <div className=" p-2 h-[100%] w-[90%] justify-between lg:p-0 flex-col lg:flex-row lg:w-[60%] flex items-center">
          <img
            src={logo}
            className="hidden lg:block w-[15%] lg:w-[3vw] mt-[3%] lg:mt-0"
            alt="moneyHQ-logo"
          />
          <ul className="flex mt-8 xl:mt-0 h-[60%] xl:h-[100%] items-center justify-around lg:justify-between xl:ml-[3vw] flex-col lg:flex-row lg:w-[85%]">
            {urls.map((url) => {
              return (
                <li key={url.name}>
                  <Link
                    to={url.href}
                    className="block rounded-3xl px-4 py-3 text-[16px] lg:text-[1.2vw] text-white transition hover:bg-[#663FC7]"
                  //   href={href}
                  >
                    {url.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[35%] hidden lg:h-full justify-around items-center lg:flex flex-col lg:flex-row">
          <div className="lg:w-[35%] justify-around flex items-center text-[1vw]">
            <SearchOutlined className="text-red" />
            <SettingOutlined />
            <BellOutlined />
            <QuestionCircleOutlined />
          </div>
          <Divider
            type="vertical"
            style={{ backgroundColor: "white", height: "40%" }}
            className="hidden lg:block"
          />
          <div className="flex w-[45%] items-center">
            <div className="bg-white rounded-full p-4"></div>
            <h1 className="text-[1vw] ml-[2%]">Chris Adolphus</h1>
            <CaretDownOutlined className="ml-2 text-[15px]" />
          </div>
        </div>
      </nav>
      {/* nav div on mobile */}
      <nav className="bg-[#552AC1] text-[#ffffff] z-[-1] w-[100%] flex flex-row lg:hidden justify-around h-[60px] absolute right-0 p-2 top-[0]">
        <img src={logo} className=" w-[45px]" alt="moneyHQ-logo" />
        <div className="w-[30%] hidden justify-around items-center">
          <SearchOutlined />
          <SettingOutlined />
          <BellOutlined />
          <QuestionCircleOutlined />
        </div>
        <Divider
          type="vertical"
          style={{ backgroundColor: "white", height: "100%" }}
        />
        <div className="w-[40%] flex items-center justify-between">
          <div className="flex w-[50%] items-center justify-between">
            <div className="bg-white rounded-full p-4"></div>
            <h1 className="text-xs md:text-sm">Chris Adolphus</h1>
            <CaretDownOutlined />
          </div>
          {/* menu icon */}
          <div
            className="menu-icondiv w-[15%] flex items-center justify-center top-0 right-0"
            onClick={togleSideBar}
          >
            <MenuOutlined />
          </div>
        </div>
      </nav>
      <div className="bg-red mt-[80px] lg:mt-[120px] xl:mt-[9vw] mx-[4vw]">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
