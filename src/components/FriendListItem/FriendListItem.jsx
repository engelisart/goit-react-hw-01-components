import {
  FriendListItemContainer,
  FriendListItemStatus,
  FriendListItemImage,
  FriendListItemName,
} from '../FriendListItem/FriendListItem.styled';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <FriendListItemContainer key={id}>
      <FriendListItemStatus
        $status={isOnline.toString()}
      ></FriendListItemStatus>
      <FriendListItemImage src={avatar} alt="User Avatar" width="48" />
      <FriendListItemName>{name}</FriendListItemName>
    </FriendListItemContainer>
  );
}
