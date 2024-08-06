import React from "react";
import { Table, Tag, Space } from "antd";

const OlmmsReportsTable = () => {
  const dataSource = [
    {
      key: '1',
      reportTitle: 'Quarterly Financial Report',
      date: '2024-07-15',
      status: 'Completed',
    },
    {
      key: '2',
      reportTitle: 'Annual Performance Review',
      date: '2024-06-10',
      status: 'Pending',
    },
    {
      key: '3',
      reportTitle: 'Market Research Analysis',
      date: '2024-05-20',
      status: 'In Progress',
    },
    {
      key: '4',
      reportTitle: 'Customer Satisfaction Survey',
      date: '2024-04-30',
      status: 'Completed',
    },
  ];

  const columns = [
    {
      title: 'Report Title',
      dataIndex: 'reportTitle',
      key: 'reportTitle',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color;
        switch (status) {
          case 'Completed':
            color = 'green';
            break;
          case 'Pending':
            color = 'orange';
            break;
          case 'In Progress':
            color = 'blue';
            break;
          default:
            color = 'default';
        }
        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href={`#${record.key}`}>View</a>
          <a href={`#${record.key}`}>Edit</a>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
      scroll={{ y: 500 }} // Adjust as needed
    />
  );
};

export default OlmmsReportsTable;
