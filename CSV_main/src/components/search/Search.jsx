import React from "react";
import { Input } from "antd";

const { Search } = Input;

const CustomSearch = ({ handleSearch }) => {
  return (
    <Search
      placeholder="Enter Search Input"
      onSearch={handleSearch}
      enterButton="Search"
      size="large"
      allowClear
      className="font-bold"
    />
  );
};

export default CustomSearch;
