import React, { useState } from "react";
import { Modal, Upload, Button } from "antd";
import {
  InboxOutlined,
  FileOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";

const { Dragger } = Upload;
function UploadDocument() {
  // const handleUpload = ( info: <UploadFile<any>>) => {
  //   // Handle file upload logic here
  //   console.log(info);

  // };
  const [openModal, setOpenModal] = useState(false);

  return (
    <Modal
      open={openModal}
      closable={false}
      footer={null}
      title={
        <div className="text-[20px] uploadfileTitle xl:text-[1.5vw] flex w-full font-bold items-center justify-between">
          <h1>Upload document</h1>
          <CloseCircleOutlined />
        </div>
      }
    >
      <div className="w-full text-[16px] xl:text-[1.1vw] text-[#414141]">
        <h1 className="font-bold">Instructions</h1>
        <ol className="list-decimal ml-[4%] w-[80%] w-[100%] font-normal ">
          <li>
            Download this{" "}
            <span className="underline text-[#5D5FEF]">template</span> we have
            created{" "}
          </li>
          <li>Edit your statement into the template</li>
          <li>Upload your statement below 👇 </li>
        </ol>
      </div>
      <div className="w-full mt-4 xl:mt-[1vw]">
        {/* <Dragger
          beforeUpload={() => false}
          // onChange={handleUpload}
          multiple={false}
        >
          <p className="ant-upload-drag-icon">
            <FileOutlined />
          </p>
          <p className="ant-upload-text">
            Drag your file here or select file(s) to upload
          </p>
        </Dragger> */}
      </div>
      <button className="bg-primary w-full py-[1vw] rounded-lg text-white mt-8 xl:mt-[2.5vw] text-[16px] xl:text-[1.1vw]">
        Upload documents
      </button>
    </Modal>
  );
}

export default UploadDocument;
