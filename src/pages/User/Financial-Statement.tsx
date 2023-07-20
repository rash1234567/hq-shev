import React, { useState } from 'react'
import TabsPane from './Components/Tabpane'
import noFile from './noFile.svg';
import UploadDocument from "./Components/UploadDocument";
import { Menu, Dropdown, message, Button } from "antd";
import vectorOpen from "../../Assets/Icons/Vectoropen.svg";
// import { trialBalance } from "./dummyData";
import { DownOutlined } from '@ant-design/icons';
import contentCopy from "../../Assets/Icons/content_copy.svg";
import pencil from "../../Assets/Icons/Vector (1).svg";


function FinancialStatement() {
  let trialBalance: any = []
  const [transaction, setTransaction] = useState(null);
  const handleEdit = () => {
    console.log("clicked");
  };

  const capitalizeFirstLetter = (str: string) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  const [link, setLink] = useState("https://example.com");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    message.success("Link copied to clipboard");
  };

  const handleInviteByEmail = () => {
    // Implement your invite via email logic here
    message.info("Invite via email clicked");
  };

  return (
    <div className="w-[100%] flex-col">
      <div className="flex justify-between">
        <h1 className="page-title">Financial Statement</h1>
        <button className="primary px-[1.4vw] py-[1.1vw] rounded-lg text-white">
          New trial balance
        </button>
      </div>
      <div className="grid grid-cols-3 mt-[3.5vw] gap-2">
        <div className=" min-h-[80vh] col-span-3 xl:col-span-1 border border-solid border-gray-300 rounded-lg ">
          <TabsPane />
        </div>

        <div className="col-span-2">
          <div className="flex items-center justify-between mb-4 px-4">
            <div className="text-[20px] xl:text-[1.3vw] font-semibold text-[#021645] flex">
              <h1>Untitled</h1>
              <img
                src={pencil}
                alt="edit-icon"
                className="ml-[1%] xl:w-[1.3vw]"
              />
            </div>

            <div>
              <Button className=" mr-2 font-[500] text-[#552AC1] text-[14px] xl:text-[1vw] border-[#552AC1]  hover:border-[#552AC1] outline-[#552AC1]">
                Create Statement
              </Button>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                className="bg-[#552AC1] font-[500] w-[7vw] h-[2.5vw] text-white text-[14px] xl:text-[1vw]"
              >
                <Button className="">
                  Export as <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
          <hr />
          <div>
            <div className="grid grid-cols-3 gap-4 text-[16px] xl:text-[1.1vw]  font-semibold text-[#021645] px-4 my-4">
              <div className="col-span-2">
                <span className="">ACCOUNTS</span>
              </div>
              <div className="flex justify-between">
                <span className="">DEBIT(₦)</span>
                <span className="">CREDIT(₦)</span>
              </div>
            </div>
            <hr />
            <div className="min-h-full md:min-h-[60vh]">

                <div className="w-full px-2 overflow-y-scroll h-[60vh]">
                {trialBalance?.map((item: any, index: number) => (
                    <div key={index}>
                      <div
                        className="w-full flex items-center py-3 px-4 bg-[#EFF3FB]"
                        style={{ borderTop: "1px solid #657A9A" }}
                      >
                        <h3 className="text-[#021645] text-[12px] xl:text-[0.8vw] font-[700]">
                          {capitalizeFirstLetter(item.type)}
                        </h3>
                        <img
                          src={pencil}
                          alt="edit-icon"
                          className="ml-[0.5%] xl:w-[0.8vw]"
                        />
                      </div>
                      <div>
                      {item.subs.map((sub: any, subIndex: any) => (
                          <div
                            key={subIndex}
                            className="grid grid-cols-3 gap-4 text-[14px] xl:text-[1vw]  font-semibold text-[#4C5259] px-4 my-4"
                          >
                            <div className="col-span-2 flex items-center">
                              <span className="">{sub.name}</span>
                              <img
                                src={vectorOpen}
                                alt="save-icon"
                                className="ml-[1%] xl:w-[0.8vw]"
                              />
                            </div>
                            <div className="flex justify-between font-[500]">
                              <span className="">{sub.credit}</span>
                              <span className="">{sub.debit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadDocument />
    </div>
  );
}

export default FinancialStatement

  // < div className = " min-h-[80vh] col-span-3 xl:col-span-1 border border-solid border-gray-300 rounded-lg p-3" >
  //         <h3 className='py-1 xl:py-[1vw] text-[#021645] text-[20px] xl:text-[1.2vw] font-[600]'>Statements Created</h3>
          // <div>
          //   {
          //     [1, 2, 3].map((item) => (
          //       <div key={item} className='flex'>
          //         {/* <img src={ } alt="wait icon" /> */}
          //         <span>
          //           <span>title</span>
          //           <span>tap to open</span>
          //         </span>
          //       </div>
          //     ))
          //   }
          // </div>
  //       </div >
