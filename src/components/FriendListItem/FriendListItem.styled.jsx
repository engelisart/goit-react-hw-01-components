import styled from 'styled-components';

const FriendListItemContainer = styled.li`
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

const FriendListItemStatus = styled.span`
  background-color: ${props => (props.$status === 'true' ? 'green' : 'red')};
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const FriendListItemImage = styled.img`
  border: 1px solid black;
  border-radius: 5px;
`;

const FriendListItemName = styled.p`
  font-weight: bold;
`;

export default function FriendListItem({ friend }) {
  return (
    <FriendListItemContainer key={friend.id}>
      <FriendListItemStatus
        $status={friend.isOnline.toString()}
      ></FriendListItemStatus>
      <FriendListItemImage src={friend.avatar} alt="User Avatar" width="48" />
      <FriendListItemName>{friend.name}</FriendListItemName>
    </FriendListItemContainer>
  );
}

/* export default function FriendListItem({ friend }) {
  return (
    <li key={friend.id} className="item">
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
} */
