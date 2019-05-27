const selectUsers = ({ users: { users, page, limit } }) =>
  users.slice((page - 1) * limit, page * limit);
const selectUser = ({ users }) => users.user;
const selectPagination = ({ users: { pages, page, limit } }) => ({ pages, page, limit });

export default {
  selectUsers,
  selectUser,
  selectPagination
};
