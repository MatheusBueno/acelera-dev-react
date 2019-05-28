const selectUsers = ({ users, page, limit }) =>
  users.slice((page - 1) * limit, page * limit);
const selectUser = ({ user }) => user;
const selectPagination = ({ pages, page, limit }) => ({ pages, page, limit });

export default {
  selectUsers,
  selectUser,
  selectPagination
};
