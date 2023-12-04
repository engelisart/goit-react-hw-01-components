import styled from 'styled-components';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 11px;
`;

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendListContainer>
  );
};
