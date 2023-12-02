import styled from 'styled-components';
import React from 'react';

const TransactionHistoryTable = styled.table`
  margin: auto;
  -webkit-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  border-radius: 5px;
`;
const TitleTh = styled.th`
  width: 250px;
  height: 40px;
  background-color: #0ab0b5;

  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`;
const CurrencyTd = styled.td`
  height: 40px;

  font-size: 13px;
  font-weight: 300;
  text-align: center;
  color: #969595;
  background-color: ${props => (props.$index % 2 === 0 ? 'white' : '#DEEAF0')};
`;

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TitleTh>Type</TitleTh>
          <TitleTh>Amount</TitleTh>
          <TitleTh>Currency</TitleTh>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <CurrencyTd $index={index}>{item.type}</CurrencyTd>
            <CurrencyTd $index={index}>{item.amount}</CurrencyTd>
            <CurrencyTd $index={index}>{item.currency}</CurrencyTd>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};
