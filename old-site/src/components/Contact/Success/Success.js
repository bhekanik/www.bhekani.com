import React, { useEffect, useContext } from "react";

import "./success.css";

import { Context } from "../../../App";

const Success = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "success" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        linkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
      }
    });
  }, []);

  return (
    <div className="success">
      <h1 className="success__heading">Success</h1>
      <p className="success__desc">
        Thank you for reaching out, I will be in touch with you as soon as
        possible
      </p>
    </div>
  );
};

export default Success;
