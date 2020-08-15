import React from "react";
import { Link } from "react-router-dom";

import "./TeacherMain.scss";

export default function TeacherMain() {
  return (
    <div className="teacher">
      <h1 className="teacher__heading main-heading">Welcome, Teacher</h1>
      <div className="teacher__content">
        <Link
          style={{ textDecoration: "none", width: "max-content" }}
          to="/add"
        >
          <div className="teacher__button btn-white">Add a Task</div>
        </Link>
        <Link
          style={{ textDecoration: "none", width: "max-content" }}
          to="/score"
        >
          <div className="teacher__button btn-white">Review Tasks</div>
        </Link>
      </div>
    </div>
  );
}
