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

const UnitModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
  };
  const FormValue = (values) => {
    console.log("values", values)
  };

  const handleChildCancel = (value) => {
    setOpen(value);
  };
  let formColumns = 1
  const formItems = [
    {
      label: "Name",
      name: "Name",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },


    {
      label: "Short Code",
      name: "ShortCode",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input />,
    },

    {
      label: "Decription",
      name: "Decription",
      rules: [{ required: true, message: "Please input!" }],
      component: <Input.TextArea />,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Unit
      </Button>
      <Modal
        title="Add Unit"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={formColumns <= 1 ? 600 : 1200}
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

export default UnitModal;
