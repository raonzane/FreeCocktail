import React from 'react';
import { Container, Select, Option } from './Dropdown.style';

const Dropdown = function Dropdown() {
  return (
    <div>
      <Select>
        <Option value="">칵테일 베이스</Option>
        <Option value="0">Champagne</Option>
        <Option value="1">Cognac</Option>
        <Option value="2">Gin</Option>
        <Option value="3">Rum</Option>
        <Option value="4">Tequila</Option>
        <Option value="5">Vodka</Option>
        <Option value="6">Whisky</Option>
        <Option value="7">Other</Option>
      </Select>
    </div>
  );
};

export default Dropdown;
