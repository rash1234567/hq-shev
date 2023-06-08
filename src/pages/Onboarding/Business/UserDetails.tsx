import React from "react";
import {Form, Input, Button, Checkbox} from 'antd'

type SelectUserTypeProps = {
  onNext: () => void;
};
function UserDetails({ onNext }: SelectUserTypeProps) {
  interface FormValues {
    name: string;
    email: string;
    password: string;
    remember: boolean;
  }
  const onFinish = (values: FormValues) => {
    console.log(values);
    onNext()
  };

  return (
    <div className="xl:w-[70%] mx-auto mt-2 xl:-mt-3">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#021645]">
          Tell us a little about yourself
        </h1>
        <p className=" w-[90%] text-[0.6rem] md:text-sm xl:text-base text-[#414141]">
          We want to get to know you a little better, enter your details to
          create your free account.
        </p>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          className="mt-10 w-[100%] text-xl"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your preferred name!",
              },
            ]}
          >
            <Input
              placeholder="Preferred Name"
              className="h-14 focus:outline-none focus:border-[1px] focus:border-[#9473E5] border-[1px] border-solid border-[#E7E7E7] w-[100%] text-[0.6rem] md:text-sm xl:text-base text-[#414141]"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Email address"
              className="h-14 focus:outline-none focus:border-[1px] focus:border-[#9473E5] border-[1px] border-solid border-[#E7E7E7] w-[100%] text-[0.6rem] md:text-sm xl:text-base text-[#414141]"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="h-14 focus:outline-none focus:border-[1px] focus:border-[#9473E5] border-[1px] border-solid border-[#E7E7E7] w-[100%] text-[0.6rem] md:text-sm xl:text-base text-[#414141]"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              className="mr-1"
            >
              <Checkbox className="focus:ring-2 focus:ring-purple-500 text-[0.6rem] md:text-sm xl:text-base text-[#414141]">
                Yes I accept the privacy policy and terms of service
              </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <button className="w-full h-14 flex items-center justify-center bg-[#552AC14D] rounded-md text-[#FFFFFF] text-[0.6rem] md:text-sm xl:text-base">
              Create your account
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default UserDetails;
