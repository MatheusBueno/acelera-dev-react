import React from 'react';
import { connect } from 'react-redux';

import UsersBackground from '../../components/UsersBackground';
import UserList from '../../components/UserList';
import Pagination from '../../components/Pagination';
import { usersActions, usersSelectors } from '../../states/users';

const Home = props => {
  const { selectUser, pagination, paginate } = props;

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
          <UserList selectUser={selectUser} users={users} />
        </div>
        <Pagination pages={pagination.pages} page={pagination.page} onPaginate={paginate} />
      </section>
    </UsersBackground>
  );
};

const mapStateToProps = state => ({
  users: usersSelectors.selectUsers(state),
  pagination: usersSelectors.selectPagination(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: ({ query }) => dispatch(usersActions.fetchUsers({ query })),
  selectUser: ({ user }) => dispatch(usersActions.selectUser({ user })),
  paginate: page => dispatch(usersActions.paginate({ page }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
