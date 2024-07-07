import React, { useState } from "react";
import { Button, DatePicker, Input, InputNumber, Modal, Select } from "antd";
import { Grid, Stack } from "@mui/material";
import AntdForm from "../../antdFrom/antdFrom";

const ProductModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {};
  const FormValue = (values) => {
    console.log("values", values);
  };

  const handleChildCancel = (value) => {
    setOpen(value);
  };
  let formColumns = 3;
  const formItems = [
    {
      label: "From Date",
      name: "FromDate",
      rules: [{ required: true, message: "Please input!" }],
      component: <DatePicker />,
    },
    {
      label: "To Date",
      name: "ToDate",
      rules: [{ required: true, message: "Please input!" }],
      component: <DatePicker />,
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Applicable in Single Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Allow Exempted Hierarchy",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Allow New SR Bills",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Promotion Amount Editable",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Applicable Before GST",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Where CRM Promo Y/N",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Promotion Applied on MC",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Additional Discount Allowed",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Additional Disc Limit Amount",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Additional Disc Limit %",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Colorstone Disc Allowed",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Diamond Disc Allowed",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "MRP Discount Applicable",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "MRP Disc Amount",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "MRP Disc Percentage",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Apply on DMD Value",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Diamond Disc Amt Limit",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Diamond Disc Per Limit",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Apply on Color tone Value",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
    {
      label: "Colorstone Disc Amt limit",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Colorstone Disc per limit",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Apply On MRP Value",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: <Select />,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Modal
        size="xl"
        title="INVOICE"
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
          splitLabelAndField={false}
        />
      </Modal>
    </>
  );
};

export default ProductModal;
