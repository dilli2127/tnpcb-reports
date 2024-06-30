import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
} from "antd";
import { Grid, Stack } from "@mui/material";
import AntdForm from "../../antdFrom/antdFrom";

const CategoryModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {};
  const FormValue = (values) => {
  };

  const handleChildCancel = (value) => {
    setOpen(value);
  };
  const formItems = [
    {
      label: "Name",
      name: "Name",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },

    {
      label: "Code",
      name: "Code",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Category
      </Button>
      <Modal
        title="Add Category "
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
        footer={["HANDOUTBILLING"]}
      >
        <AntdForm
          formItems={formItems}
          FormValue={FormValue}
          onChildCancel={handleChildCancel}
        />
      </Modal>
    </>
  );
};

export default CategoryModal;
