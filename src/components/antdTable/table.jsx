import { Space, Table, Tag } from 'antd';
import React from 'react'
 const table =(props) => {
  return (
    <div>
      <Table columns={props?.columns} dataSource={props?.data} />
    </div>
  )
}
export default table;
