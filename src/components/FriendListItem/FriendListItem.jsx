import {
  FriendListItemContainer,
  FriendListItemStatus,
  FriendListItemImage,
  FriendListItemName,
} from '../FriendListItem/FriendListItem.styled';

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
