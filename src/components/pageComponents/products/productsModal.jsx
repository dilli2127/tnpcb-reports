import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import { Grid, Stack } from "@mui/material";
import AntdForm from "../../antdFrom/antdFrom";

const ProductModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
  };
  const FormValue = (values) => {
    console.log("values",values)
  };

  const handleChildCancel = (value) => {
    setOpen(value);
  };
  let formColumns =1
  const formItems = [
    {
      label: "Name",
      name: "Name",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },
    {
      label: "Catagory",
      name: "Catagory",
      rules: [{ required: false, message: "Please input!" }],
      component: <Select />,
    },
   
    {
        label: "Code",
        name: "Code",
        rules: [{ required: true, message: "Please input!" }],
        component: <Input />,
      },
    
    {
      label: "Decription",
      name: "Decription",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input.TextArea />,
    },
    {
      label: "Price",
      name: "Price",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber style={{ width: "100%" }} />,
    },
    {
      label: "Batch",
      name: "Batch",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },
    {
      label: "Expairy Date",
      name: "Expairy Date",
      rules: [{ required: true, message: "Please input!" }],
      component: <DatePicker />,
    },
   
   
    
   
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={formColumns<=1?600:1200}
        footer={[
          "HANDOUTBILLING"
        ]
        }
      >
        <AntdForm formItems={formItems} FormValue={FormValue} onChildCancel={handleChildCancel} formColumns={formColumns} />
      </Modal>
    </>
  );
};

export default ProductModal;
