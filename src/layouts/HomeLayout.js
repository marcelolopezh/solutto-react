import React from "react";
import "../scss/home.scss";

export default function HomeLayout(props) {
  const { children } = props;
  return (
    <div className="body">
      {children}
    </div>
  );
}
