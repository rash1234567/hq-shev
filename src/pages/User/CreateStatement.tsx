import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import circlePlus from "../../Assets/Icons/Vectorcircle-plus.svg";


function CreateStatement() {
    const positionsArray = [
        { position: "QB", heading: "Quarterback" },
        { position: "OL", heading: "Offensive Line" },
        { position: "WR", heading: "Wide Receiver" },
        { position: "TE", heading: "Tight End" },
        { position: "RB", heading: "Running Back" },
    ];

    const [selectedPosition, setSelectedPosition] = useState("");

    function getFlag(langCode: string) {
        var first = langCode.charCodeAt(0) + 127397;
        var second = langCode.charCodeAt(1) + 127397;
        var flag = `&#${first};&#${second};`;
        return flag;
    }

    function handlePositionClick(position: string) {
        setSelectedPosition(position);
    }

    const positionMenu = (
        <Menu onClick={({ key }) => handlePositionClick(key)}>
            {positionsArray.map(({ position, heading }) => (
                <Menu.Item key={position}>{heading}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="">
            back
            <div className="mx-auto w-[90%] w-[80%] xl:w-[32.6vw]">
                <h2 className="font-bold text-[28px] xl:text-[1.9vw] leading-[140%] text-[#021645] mb-3">
                    Start creating your financial statement
                </h2>
                <p className="text-[16px] xl:text-[1.1vw] font-[400] mb-10 xl:mb-[2.7vw] text-[#414141]">
                    Select a reporting currency and choose a source of financial
                    transactions which would be used to create your trial balance
                </p>
                <div className='flex flex-col mt-3'>
                    <h6>Reporting Currency</h6>
                    <div
                        className="w-full px-2 py-3 rounded-md relative mt-2 antd-dropdownmenu"
                        style={{ border: "1px solid #CFCFCF" }}
                    >
                        <Dropdown
                            overlay={positionMenu}
                            overlayStyle={{ width: "100%" }}
                            getPopupContainer={(trigger) =>
                                trigger.parentNode as HTMLElement
                            }
                        >
                            <a
                                className="ant-dropdown-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                {selectedPosition
                                    ? positionsArray.find(
                                        (pos) => pos.position === selectedPosition
                                    )?.heading
                                    : "Select Position"}
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className="text-[16px] xl:text-[1.1vw] font-[400] mb-4 text-[#414141]">
                        Select a source for your financial transaction
                    </p>
                    <div className="flex justify-between items-center text-[16px] xl:text-[1.1vw] text-primary w-[90%] font-[600]">
                        <span className="flex items-center cursor-pointer" >
                            {" "}
                            <img src={circlePlus} alt="plus" /> Add from my bank(s)
                        </span>
                        <span>or</span>
                        <span className="flex items-center cursor-pointer">
                            <img src={circlePlus} alt="plus" /> Upload bank statements
                        </span>
                    </div>
                    <button className="bg-primary w-full py-[1vw] rounded-lg text-white mt-8 xl:mt-[2.5vw] text-[16px] xl:text-[1.1vw]">
                        Create trial balance
                    </button>
                </div>
            </div>
            {/* <SelectBankModal visible={visible} setVisible={setVisible} setNext={setNext} onNext={() => setNext(next + 1)} next={next} selectedBanks={selectedBanks} />

            <UploadBankStatementModal visible={statementModalVisible} setNext={setNext} setVisible={setStatementModalVisible} onNext={() => setNext(next + 1)} next={next} selectedBanks={selectedBanks} /> */}
        </div>
    );
}

export default CreateStatement;
