import React from "react";
import UserList from "../../components/UserList";
import Pagination from "../../components/Pagination";
import users from "./users.json";

const Home = props => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        paddingTop: "72px"
      }}
    >
      <div
        style={{
          flexGrow: 1,
          marginTop: "20px",
          alignItems: "center",
          display: "flex"
        }}
      >
        <UserList users={users} />
      </div>
      <Pagination pages={10} page={1} />
    </section>
  );
};

export default Home;
