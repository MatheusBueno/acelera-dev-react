import React from 'react';
import PropTypes from 'prop-types';
import { Container, Avatar, Title } from './styles';

const UserItem = ({ user }) => <Container>
  <Avatar src={user.avatar_url} />
  <Title>{user.login}</Title>
</Container>;

UserItem.defaultProps = {
  user: {}
}

UserItem.propTypes = {
  user: PropTypes.object
};

export default UserItem;