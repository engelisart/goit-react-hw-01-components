import styled from 'styled-components';
import FriendListItem from '../FriendListItem/FriendListItem.styled';

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
      {friends.map(friend => FriendListItem({ friend }))}
    </FriendListContainer>
  );
};
