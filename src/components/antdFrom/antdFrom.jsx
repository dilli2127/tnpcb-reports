import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Box, Grid, Stack } from "@mui/material";

const AntdForm = (props) => {
  var { FormValue, formItems, onChildCancel ,formColumns} = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
let columns = formColumns? formColumns:1
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const handleCancel = () => {
    setOpen(false);
    onChildCancel(open);
  };

  var onFinish = (values) => {
    FormValue(values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
    >
    {formItems.map((item, index) => (
        index % columns === 0 && (
          <Stack key={index}>
            <Grid container spacing={2}>
              {[...Array(columns)].map((_, columnIndex) => {
                const currentIndex = index + columnIndex;
                return (
                  currentIndex < formItems.length && (
                    <Grid item xs={12 / columns} key={currentIndex}>
                      <Box>
                        <Form.Item
                          key={formItems[currentIndex].name}
                          label={formItems[currentIndex].label}
                          name={formItems[currentIndex].name}
                          rules={formItems[currentIndex].rules}
                        >
                          {formItems[currentIndex].component}
                        </Form.Item>
                      </Box>
                    </Grid>
                  )
                );
              })}
            </Grid>
          </Stack>
        )
      ))}


      <Form.Item
        wrapperCol={{
          offset: formItemLayout.labelCol.sm.span,
          span: formItemLayout.wrapperCol.sm.span,
        }}
      >
          <Grid container>
            <Grid xs={6}></Grid>
            <Grid xs={3}>
              <Button type="primary" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
            <Grid xs={3}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
      </Form.Item>
    </Form>
  );
};

export default AntdForm;
