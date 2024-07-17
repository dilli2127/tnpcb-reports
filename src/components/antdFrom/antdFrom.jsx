import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { Box, Grid, Typography } from "@mui/material";
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const AntdForm = (props) => {
  const { FormValue, formItems, onChildCancel, formColumns, splitLabelAndField, nested, nestedInputs,wrapperCol,labelCol } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const columns = formColumns ? formColumns : 1;
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
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/7f/Kalyan_Jewellers_logo.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '600px 600px',
          zIndex: 0,
          opacity: 0.1,
        },
        height: '100%',
      }}
    >
      <Form form={form} onFinish={onFinish}>
        <Grid container spacing={2}>
          {formItems.map((item, index) => (
            <Grid item xs={12 / columns} key={index}>
              {splitLabelAndField ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant="body1" style={{ color: 'MenuText', fontWeight: 'bold', paddingLeft: '8px', fontSize:"14px" }}>
                    {item.label}
                    {item.rules?.some(rule => rule.required) && <Typography component="span" color="error">*</Typography>}
                  </Typography>
                  <Form.Item
                    name={item.name}
                    rules={item.rules}
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    {item.component}
                  </Form.Item>
                </Box>
              ) : (
                <Form.Item
                  label={
                    <Typography variant="body1" style={{ color: 'MenuText', fontWeight: 'bold', paddingLeft: '8px', fontSize:"14px" }}>
                      {item.label}
                      {/* {item.rules?.some(rule => rule.required) && <Typography component="span" color="error">*</Typography>} */}
                    </Typography>
                  }
                  name={item.name}
                  rules={item.rules}
                  // labelCol={{ span: labelCol }}
                  // wrapperCol={{ span: wrapperCol }}
                  style={{
                    fontWeight: 'bold',
                    paddingLeft: '8px',
                    width: '100%',
                  }}
                >
                  {item.component}
                </Form.Item>
              )}
            </Grid>
          ))}

          {nested && (
            <Form.List name="nestedItems">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Grid container spacing={2} alignItems="center" justifyContent="center" key={key}>
                      <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                          {nestedInputs.map((input, idx) => (
                            <Grid item xs={12 / 4}  key={idx}>
                              <Form.Item
                                {...restField}
                                name={[name, input.name]}
                                fieldKey={[fieldKey, input.name]}
                                rules={[{ required: true, message: `Missing ${input.label}` }]}
                                label={input.label}
                                style={{ fontWeight: "bold" }}
                              >
                                <Input placeholder={input.label} />
                              </Form.Item>
                            </Grid>
                          ))}
                          <Grid item xs={1} alignItems="center">
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                  <Grid container justifyContent="center">
                    <Grid item xs={6}>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '100%' }}
                        icon={<PlusOutlined />}
                      >
                        Add More Field
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </Form.List>
          )}
        </Grid>

        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button type="primary" onClick={handleCancel} block>
              Cancel
            </Button>
          </Grid>
          <Grid item>
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
