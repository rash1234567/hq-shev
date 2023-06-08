import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Loading from "../../Assets/Icons/LOADING.svg";
import wait from "../../Assets/Icons/Frame 427319544.svg";
import { Input, message } from "antd";
import contentCopy from "../../Assets/Icons/content_copy.svg";
import noFile from "./noFile.svg";
import { trialBalance } from "./dummyData";
import pencil from "../../Assets/Icons/Vector (1).svg";
import vectorOpen from "../../Assets/Icons/Vectoropen.svg";
import { MoreOutlined } from '@ant-design/icons';

const Component1 = ({ setTransaction }: any) => {
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
    <div className=" ">
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="text-[20px] xl:text-[1.3vw] font-semibold text-[#021645]">
          Trial Balance
        </div>

        <div>
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            className="border-[#552AC1]  hover:border-[#552AC1] outline-[#552AC1]"
          >
            <Button className="mr-2 text-[#552AC1]">
              Export as <DownOutlined />
            </Button>
          </Dropdown>
          <Button className="bg-[#552AC1] w-[7vw] h-[2.5vw] text-white text-[14px] xl:text-[1vw]">
            Save
          </Button>
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
          {trialBalance.length < 1 ? (
            <div className="h-[100%] w-full flex flex-col items-center justify-center  py-[5%]">
              <img src={Loading} alt="" />
              <span className="mx-auto text-center w-[30%] mt-[0.9vw]">
                We are generating your trial balance. This might take 5 minutes.
              </span>
              <div className="w-[90%] bg-[#FFFCEB] flex py-4 px-8 rounded-lg mt-[3vw]">
                <div>
                  <h3 className="text-[#021645] text-[28px] xl:text-[1.6vw] font-[700]">
                    While you wait...
                  </h3>
                  <p className="text-[#414141] text-[16px] leading-[23px] xl:leading-[1.8vw] xl:text-[1.1vw] font-[400]">
                    {" "}
                    Invite other businesses from your community to get free 3
                    months worth of subscription
                  </p>
                  <div className="flex items-center mt-[1vw] ">
                    <span className="flex items-center border border-solid border-[#D4DDE2] py-2 px-3 rounded-lg h-full">
                      <input
                        value={link}
                        readOnly
                        className="outline-none border-none"
                      />
                      {/* <CopyOutlined onClick={handleCopyLink} /> */}
                      <img src={contentCopy} alt="copy button" />
                      <span className="text-sm">Copy link</span>
                    </span>
                    <button
                      className="text-sm py-2 px-3 primary text-white rounded-lg ml-2"
                      onClick={handleInviteByEmail}
                    >
                      Invite via Email
                    </button>
                  </div>
                </div>
                <div>
                  <img src={wait} alt="wait icon" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full px-2 overflow-y-scroll h-[60vh]">
              {trialBalance.map((item, index) => (
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
                    {item.subs.map((sub, subIndex) => (
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
                            onClick={() => setTransaction(sub)}
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
          )}
        </div>
      </div>
    </div>
  );
};

interface Transaction {
  name: string
  transactions: {
    amount: string;
    date: string;
    description: string;
  }[]
}

interface TransactionItemProps {
  handleEdit: () => void;
  transaction: Transaction | null;
}

const Component2: React.FC<TransactionItemProps> = ({ handleEdit, transaction }) => {
  useEffect(() => {
    console.log(transaction)
  }, [transaction])

  return (
    <div className=" border border-[#D4DDE2] rounded-lg md:min-h-[70vh]">
      <div className="text-[16px] xl:text-[1.2vw] font-semibold text-[#021645] px-2 py-3">
        {transaction === null ? "Charts Transactions" : transaction.name}
      </div>
      <hr />
      <div>
        {transaction === null ? (
          <div className="w-full py-[15%] flex flex-col items-center justify-center  ">
            <img src={noFile} />{" "}
            <p className="text-[18px] xl:text-[1.2vw] w-1/2 text-center font-semibold mt-[2vw]">
              Click on an account to view the transactions here
            </p>
          </div>
        ) : (
          <div>
            {
              transaction.transactions.map((transaction: {
                amount: string;
                date: string;
                description: string;
              }, index: number) => {
                return (
                  <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2 px-2  xl:px-[1vw] text-[12px] xl:text-[0.9vw]">
                    <div>
                      <span className="text-[#191919]  font-[500]">{transaction.amount}</span>
                      <p className="text-[#A0A0A0] font-[400]">{transaction.description}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#04151F] font-[400] mr-2">{transaction.date}</span>
                      <MoreOutlined onClick={handleEdit} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};

const TrialBalance = () => {
  const [transaction, setTransaction] = useState(null)
  const handleEdit = () => {
    console.log('clicked')
  }
  return (
    <div>
      <div>Go Back</div>
      <h1 className="page-title">Trial Balance</h1>
      <div className=" mx-auto">
        <div className="flex flex-wrap mt-[3.5vw]">
          <div className="w-full md:w-[65%]">
            <Component1 setTransaction={setTransaction} />
          </div>
          <div className="w-full md:w-[35%]">
            <Component2 transaction={transaction} handleEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialBalance;
