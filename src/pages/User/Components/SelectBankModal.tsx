import { Modal, Button, Badge } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const banks = ['First Bank', 'FCMB', 'Wema'];

type bankModalFuncType ={
    visible:boolean,
    onCancel:()=>void
}

const SelectBankModal = ({ visible, onCancel}:bankModalFuncType) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="continue" type="primary" onClick={onCancel}>
          Continue
        </Button>,
      ]}
    >
      <h2 className="text-2xl font-bold mb-4">Select Bank</h2>

      {banks.map((bank) => (
        <div key={bank} className="flex items-center justify-between mb-2">
          <span>{bank}</span>
          <Badge count={4} />
        </div>
      ))}

      <div className="flex items-center mt-4">
        <a href="#" className="flex items-center">
          <PlusOutlined className="mr-1" />
          Add New Bank
        </a>
      </div>
    </Modal>
  );
};

export default SelectBankModal;
