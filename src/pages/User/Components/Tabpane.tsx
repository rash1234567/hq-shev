import React, { useState } from 'react';
import { Tabs, Button, Select } from 'antd';
import noFile from '../noFile.svg'

const { TabPane } = Tabs;
const { Option } = Select;

const TabsPane = () => {
  const [activeTab, setActiveTab] = useState('created');
  const [createdData, setCreatedData] = useState<string[]>([]);
  const [importedData, setImportedData] = useState<string[]>([]);
  const [receivedData, setReceivedData] = useState<string[]>([]);
  const [filter, setFilter] = useState('all');

  const handleTabChange = (tabKey:string) => {
    setActiveTab(tabKey);
  };

  const handleAddNew = () => {
    switch (activeTab) {
      case 'created':
        setCreatedData([...createdData, 'New Item']);
        break;
      case 'imported':
        setImportedData([...importedData, 'New Item']);
        break;
      case 'received':
        setReceivedData([...receivedData, 'New Item']);
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (value:string) => {
    setFilter(value);
  };

  const filterData = (data:any) => {
    if (filter === 'all') {
      return data;
    }
    return data.filter((item:any) => item === filter);
  };

  return (
    <div className="p-4">
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Created" key="created">
          <div className="mt-4">
            {createdData.length > 0 ? createdData.map((item, index) => (
              <div key={index}>{item}</div>
            )) : <div className='w-full h-[100%] flex items-center justify-center  py-[25%] flex-col'>
            <img src={noFile}/>
            <p className='my-[2vw] text-lg xl:leading-[1.9vw] xl:text-[1.1vw] text-center w-1/2 font-semibold'>You have not created any financial statement yet</p>
            <button className='py-[1.6vh] px-[3.2vh] xl:py-[1vw] xl:px-[2vw] rounded-lg primary text-white text-[16px] xl:text-[1.1vw]'>
              Create new trial balance
            </button>
            </div> }
          </div>
        </TabPane>
        <TabPane tab="Imported" key="imported">
          <div className="mt-4">
          {importedData.length > 0 ? importedData.map((item, index) => (
              <div key={index}>{item}</div>
            )) :<div className='w-full h-[100%] flex items-center justify-center  py-[25%] flex-col'>
            <img src={noFile}/>
            <p className='my-[2vw] text-lg xl:leading-[1.9vw] xl:text-[1.1vw] text-center w-1/2 font-semibold'>You have not created any financial statement yet</p>
            <button className='py-[1.6vh] px-[3.2vh] xl:py-[1vw] xl:px-[2vw] rounded-lg primary text-white text-[16px] xl:text-[1.1vw]'>
              Create new trial balance
            </button>
            </div>}
          </div>
        </TabPane>
        <TabPane tab="Received" key="received" >
          <div className="mt-4">
          {receivedData.length > 0 ? receivedData.map((item, index) => (
              <div key={index}>{item}</div>
            )) : <div className='w-full h-[100%] flex items-center justify-center  py-[25%] flex-col'>
            <img src={noFile}/>
            <p className='my-[2vw] text-lg xl:leading-[1.9vw] xl:text-[1.1vw] text-center w-1/2 font-semibold'>You have not created any financial statement yet</p>
            <button className='py-[1.6vh] px-[3.2vh] xl:py-[1vw] xl:px-[2vw] rounded-lg primary text-white text-[16px] xl:text-[1.1vw]'>
              Create new trial balance
            </button>
            </div> }
          </div>
        </TabPane>
        <TabPane>
            <div className="ml-4 bg-yellow-400">
            <Select defaultValue="all" style={{ width: 120,backgroundColor:'red' }} onChange={handleFilterChange}>
                <Option value="all">All</Option>
                <Option value="filter1">Filter 1</Option>
                <Option value="filter2">Filter 2</Option>
            </Select>
            </div>
        </TabPane>
      </Tabs>
        
    </div>
  );
};

export default TabsPane;
