import styled from 'styled-components';

export const FriendListItemContainer = styled.li`
  list-style: none;
  display: flex;
  padding: 15px;
  gap: 15px;
  align-items: center;
  background-color: white;
  width: 210px;
  -webkit-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 15px -9px rgba(66, 68, 90, 1);
`;

export const FriendListItemStatus = styled.span`
  background-color: ${props => (props.$status === 'true' ? 'green' : 'red')};
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const FriendListItemImage = styled.img`
  border: 1px solid black;
  border-radius: 5px;
`;

export const FriendListItemName = styled.p`
  font-weight: bold;
`;
