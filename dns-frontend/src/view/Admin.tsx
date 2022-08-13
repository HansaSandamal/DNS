import React, { useState } from "react";
import AddItem from "../components/AddItem";

import UserDetails from "./UserDetails";

const Admin: React.FC = () => {
  const user = [
    {
      userName: "hansa",
      email: "usia",
      userImg: "url",
    },
    {
      userName: "yasiru",
      email: "chhhg",
      userImg: "urlgt",
    },
  ];
  return (
    <React.Fragment>
      <AddItem />
      <UserDetails user={user} />
    </React.Fragment>
  );
};
export default Admin;
