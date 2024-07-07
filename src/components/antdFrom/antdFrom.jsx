import React, { useState } from "react";
import { Form, Button } from "antd";
import { Box, Grid } from "@mui/material";

const AntdForm = (props) => {
  const { FormValue, formItems, onChildCancel, formColumns } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const columns = formColumns ? formColumns : 1;

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
  };

  const handleCancel = () => {
    setOpen(false);
    onChildCancel(open);
  };

  const onFinish = (values) => {
    FormValue(values);
  };

  return (
    <Box
    sx={{
      position: 'relative', // Required for absolute positioning of the pseudo-element
      '::before': {
        content: '""', // Necessary for the pseudo-element to show
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/7f/Kalyan_Jewellers_logo.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '600px 600px', 
        zIndex: 0, // Place the pseudo-element behind the content
        opacity: 0.1, // Adjust the opacity as needed
      },
      height: '100%', // Make sure the box takes the full height of its parent
    }}
    >
      <Form {...formItemLayout} form={form} onFinish={onFinish}>
        {formItems.map((item, index) => (
          index % columns === 0 && (
            <Grid container spacing={2} key={index}>
              {[...Array(columns)].map((_, columnIndex) => {
                const currentIndex = index + columnIndex;
                return (
                  currentIndex < formItems.length && (
                    <Grid item xs={12 / columns} key={currentIndex}>
                      <Box >
                        <Form.Item
                          label={formItems[currentIndex].label}
                          name={formItems[currentIndex].name}
                          rules={formItems[currentIndex].rules}
                          style={{
                            color: '#ff0000', // Label text color
                            fontWeight: 'bold', // Make the label bold
                            paddingLeft: '8px', // Add some padding to the left of the label
                          }}
                        >
                          {formItems[currentIndex].component}
                        </Form.Item>
                      </Box>
                    </Grid>
                  )
                );
              })}
            </Grid>
          )
        ))}

        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item xs={1}>
            <Button type="primary" onClick={handleCancel} block>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default AntdForm;
