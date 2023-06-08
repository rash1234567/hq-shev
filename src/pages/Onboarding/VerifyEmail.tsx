import React from "react";
import { Form, Input } from "antd";

function VerifyEmail() {
  return (
    <div className=" w-[95%] xl:w-[75%] mt-[10%] md:mt-[30%] flex flex-col items-start justify-center">
      <h1 className="text-xl self-start md:text-2xl xl:text-3xl font-bold text-[#021645]">
        Check your email for a code
      </h1>
      <p className="text-0.6rem self-start md:text-sm xl:text-base text-[#414141] mt-2">
        We’ve sent a 6-character code to hello@accountable.global. This code
        will expire shortly.
      </p>
      <div className="mt-10 w-[90%]">
        <Form.Item name="verificationCode" className="w-full flex" noStyle>
          <div className="flex w-full justify-between codediv">
            <Input.Group className="w-[48%] flex items-center justify-between">
              <Input style={{ height: "4rem", width: "32%" }} />
              <Input style={{ height: "4rem", width: "32%" }} />
              <Input style={{ height: "4rem", width: "32%" }} />
            </Input.Group>
            <Input.Group className="w-[48%] flex items-center justify-between">
              <Input style={{ height: "4rem", width: "32%" }} />
              <Input style={{ height: "4rem", width: "32%" }} />
              <Input style={{ height: "4rem", width: "32%" }} />
            </Input.Group>
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default VerifyEmail;
