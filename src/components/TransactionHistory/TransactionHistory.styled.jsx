import styled from 'styled-components';
// import React from 'react';

export const TransactionHistoryTable = styled.table`
  margin: auto;
  -webkit-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  border-radius: 5px;
`;
export const TitleTh = styled.th`
  width: 250px;
  height: 40px;
  background-color: #0ab0b5;

  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`;
export const CurrencyTd = styled.td`
  height: 40px;

  font-size: 13px;
  font-weight: 300;
  text-align: center;
  color: #969595;
  background-color: ${props => (props.$index % 2 === 0 ? 'white' : '#DEEAF0')};
`;
