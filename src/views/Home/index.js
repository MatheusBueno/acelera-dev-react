import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import UsersBackground from '../../components/UsersBackground';
import UserList from '../../components/UserList';
import Pagination from '../../components/Pagination';
import { usersActions, usersSelectors } from '../../states/users';

const Home = props => {
  const { fetchUsers } = props;
  useEffect(() => {
    fetchUsers({ query: 'tom' });
  }, [fetchUsers]);

  const { users } = props;
  return (
    <UsersBackground users={users}>
      <section
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          paddingTop: '72px'
        }}
      >
        <div
          style={{
            flexGrow: 1,
            marginTop: '20px',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <UserList users={users} />
        </div>
        <Pagination pages={10} page={1} />
      </section>
    </UsersBackground>
  );
};

const mapStateToProps = state => ({
  users: usersSelectors.selectUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: ({ query }) => dispatch(usersActions.fetchUsers({ query }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
