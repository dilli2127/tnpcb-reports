import React, { useEffect, useState } from "react";
import AntdTable from "../antdTable/table";
import { Modal, notification, Space, Table, Tag } from "antd";
import { Button, Grid, Stack, Typography } from "@mui/material";
import InvoiceModal from "../pageComponents/products/invoiceModal";
const Products = () => {
  const [promotionItems, setPromotionItems] = useState([]);
  const columns = [
    {
      title: "Invoice",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Additional DiscLimit",
      dataIndex: "AdditionalDiscLimit%",
      key: "AdditionalDiscLimit%",
    },
    {
      title: "MRP Discount Applicable",
      dataIndex: "MRPDiscountApplicable",
      key: "MRPDiscountApplicable",
    },
    {
      title: "Diamond DiscAmt Limit",
      key: "DiamondDiscAmtLimit",
      dataIndex: "DiamondDiscAmtLimit",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a onClick={() => editItem(record.id)}>Edit</a> */}
          <a onClick={() => showDeleteConfirm(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteItem(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const getPromotionItems = () => {
    // Retrieve the existing PromotionItems from local storage
    const existingItemsString = localStorage.getItem('PromotionItems');
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];
    setPromotionItems(existingItems);
  };
  useEffect(() => {
    getPromotionItems();
  }, [promotionItems]);
  const editItem = (id) => {
    const existingItemsString = localStorage.getItem('PromotionItems');
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];
    const itemToEdit = existingItems.find(item => item.id === id);
    if (itemToEdit) {
      console.log("Edit item:", itemToEdit);
      localStorage.setItem('PromotionItems', JSON.stringify(existingItems));
      setPromotionItems([...existingItems]); // Update state to trigger re-render
    }
  };

  // Delete handler
  const deleteItem = (id) => {
    const existingItemsString = localStorage.getItem('PromotionItems');
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];
    const updatedItems = existingItems.filter(item => item.id !== id);
    localStorage.setItem('PromotionItems', JSON.stringify(updatedItems));
    setPromotionItems(updatedItems); // Update state to trigger re-render
    notification.success({
      message: 'Item Deleted',
      description: 'The item has been successfully deleted.',
    });
  };
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4">Invoice</Typography>
        <Grid container spacing={2}>
          <Grid xs={10}></Grid>
          <Grid xs={2}>
            <InvoiceModal />
          </Grid>
        </Grid>
        <div>
          <Table columns={columns} dataSource={promotionItems} />
        </div>
      </Stack>
    </>
  );
};
export default Products;
