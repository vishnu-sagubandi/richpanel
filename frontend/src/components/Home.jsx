import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Home() {
  let { user } = useContext(AuthContext);

  if (!user.new) {
    return <Navigate to="/currentplan" replace />;
  } else {
    return <Navigate to="/plans" replace />;
  }
}

export default Home;
