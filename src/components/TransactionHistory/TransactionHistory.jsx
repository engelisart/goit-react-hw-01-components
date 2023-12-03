import {
  TransactionHistoryTable,
  TitleTh,
  CurrencyTd,
} from '../TransactionHistory/TransactionHistory.styled';

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
