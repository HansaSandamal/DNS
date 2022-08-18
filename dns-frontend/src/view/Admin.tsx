import React, { useState } from "react";
import AddItem from "../components/AddItem";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

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
        
    <div className="backgroundAdmin">
    <AddItem />
    </div>
      
      
    </React.Fragment>
  );
};
export default Admin;
