import React, { useState } from "react";
import { Button, DatePicker,Input,InputNumber, Modal, Radio, Select} from "antd";
import AntdForm from "../antdFrom/antdFrom";


const ProductModal = (props) => {
  const { RangePicker } = DatePicker;
  const [open, setOpen] = useState(false);
  const handleOk = () => {};
  const FormValue = (values) => {
    console.log("values", values);
  };

  const handleChildCancel = (value) => {
    setOpen(value);
  };
  let formColumns =1;
  const formItems = [
    {
        label: "Template Name",
        name: "Select",
        rules: [{ required: true, message: "Please input!" }],
        component: <Select />,
      },
      {
        label: "Definition",
        name: "TextArea",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input.TextArea />,
      },
      {
        label: "Promtion Name",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Select />,
      },
      {
        label: "Promtion Definition",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Select />,
      },
      {
        label: "Category",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Select />,
      },
  
  ];

  const nestedInputs=[
    {
      label: "division",
      name: "Input",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },
    {
        label: "Applicable Area",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
   
      {
        label: "Batch No",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
      {
        label: "Base Parms",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
      {
        label: "Parms Code",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
      {
        label: "Operator",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
      {
        label: "Value From",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
      {
        label: "Value To",
        name: "Input",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
  
  ]
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Promotion
      </Button>
      <Modal
        size="xl"
        title="New Promotion Configuration"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={formColumns <= 1 ? 1000 : 2000}
        footer={[
          <img key="footer-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Kalyan_Jewellers_logo.svg" alt="Kalyan Jewellers Logo" style={{ marginLeft: '20px', height: '60px' }} />
        ]}
      >
        <AntdForm
          formItems={formItems}
          FormValue={FormValue}
          onChildCancel={handleChildCancel}
          formColumns={formColumns}
          splitLabelAndField={true}
          nested={true}
          nestedInputs={nestedInputs}
        />
      </Modal>
    </>
  );
};

export default ProductModal;
