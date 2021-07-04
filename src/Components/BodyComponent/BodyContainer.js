import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

const BodyContainer = () => {
  return (
    <div className="body">
      <Sidebar />
      <Container />
    </div>
  );
};

export default BodyContainer;
