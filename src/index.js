import React from "react";
import ReactDOM from "react-dom/client";
import NameEtc from "./Name/NameEtc";
import SchoolEtc from "./School/SchoolEtc";
import WorkEtc from "./Work/Work";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameEtc />
    <SchoolEtc />
    <WorkEtc />
  </React.StrictMode>
);
