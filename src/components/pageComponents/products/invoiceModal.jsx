import React, { useState } from "react";
import { Button, DatePicker, InputNumber, Modal, notification, Radio } from "antd";
import AntdForm from "../../antdFrom/antdFrom";

const ProductModal = (props) => {
  const { RangePicker } = DatePicker;
  const [open, setOpen] = useState(false);

  const FormValue = (values) => {
    console.log("values", values);
    const existingItemsString = localStorage.getItem('PromotionItems');
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];
    const newItem = { id: existingItems.length + 1, ...values };
    existingItems.push(newItem);
    const updatedItemsString = JSON.stringify(existingItems);
    localStorage.setItem('PromotionItems', updatedItemsString);
    notification.success({
      message: 'Item Added',
      description: 'The item has been successfully added to Promotion.',
    });
    handleChildCancel(false)
  };
  const handleChildCancel = (value) => {
    setOpen(value);
  };
  let formColumns = 3;
  const formItems = [
    {
      label: "Date",
      name: "Date",
      rules: [{ required: true, message: "Please input!" }],
      component: <RangePicker />,
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "DuplicatePromoInSameBill",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Applicable in Single Bill",
      name: "ApplicableinSingleBill",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Allow Exempted Hierarchy",
      name: "AllowExemptedHierarchy",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Allow New SR Bills",
      name: "AllowNewSRBills",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Promotion Amount Editable",
      name: "PromotionAmountEditable",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Applicable Before GST",
      name: "ApplicableBeforeGST",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Where CRM Promo Y/N",
      name: "WhereCRMPromoY/N",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Promotion Applied on MC",
      name: "PromotionAppliedonMC",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Additional Discount Allowed",
      name: "AdditionalDiscountAllowed",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Additional Disc Limit Amount",
      name: "AdditionalDiscLimitAmount",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Additional Disc Limit %",
      name: "AdditionalDiscLimit%",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Colorstone Disc Allowed",
      name: "ColorstoneDiscAllowed",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Diamond Disc Allowed",
      name: "DiamondDiscAllowed",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "MRP Discount Applicable",
      name: "MRPDiscountApplicable",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "MRP Disc Amount",
      name: "MRPDiscAmount",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "MRP Disc Percentage",
      name: "MRPDiscPercentage",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Apply on DMD Value",
      name: "ApplyonDMDValue",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Diamond Disc Amt Limit",
      name: "DiamondDiscAmtLimit",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Diamond Disc Per Limit",
      name: "DiamondDiscPerLimit",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Apply on Color tone Value",
      name: "ApplyonColortoneValue",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Colorstone Disc Amt limit",
      name: "ColorstoneDiscAmtlimit",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "Color stone Discper limit",
      name: "ColorstoneDiscperlimit",
      rules: [{ required: true, message: "Please input!" }],
      component: <InputNumber />,
    },
    {
      label: "ApplyOn MRP Value",
      name: "ApplyOnMRPValue",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
  ];

  const nestedInputs = [
    {
      label: "Date",
      name: "RangePicker",
      rules: [{ required: true, message: "Please input!" }],
      component: <RangePicker />,
    },
    {
      label: "Date",
      name: "RangePicker",
      rules: [{ required: true, message: "Please input!" }],
      component: <RangePicker />,
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
    {
      label: "Duplicate Promo In Same Bill",
      name: "Select",
      rules: [{ required: true, message: "Please input!" }],
      component: (
        <Radio.Group>
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      ),
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Invoice
      </Button>
      <Modal
        size="xl"
        title="INVOICE"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={formColumns <= 1 ? 1000 : 2000}
        footer={[
          <img
            key="footer-image"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Kalyan_Jewellers_logo.svg"
            alt="Kalyan Jewellers Logo"
            style={{ marginLeft: "20px", height: "60px" }}
          />,
        ]}
      >
        <AntdForm
          formItems={formItems}
          FormValue={FormValue}
          onChildCancel={handleChildCancel}
          formColumns={formColumns}
          splitLabelAndField={false}
          nested={false}
          nestedInputs={nestedInputs}
        />
      </Modal>
    </>
  );
};

export default ProductModal;
