import React from "react";
import "./CreatingTask.scss";

export default function Scoring() {
  return (
    <div className="creating">
      <h1 className="creating__heading main-heading">Create a Task</h1>
      <div className="creating__content">
        <div className="tet">placeholder</div>

        <div className="creating__right">
          <input
            placeholder="Task Name / ID"
            type="text"
            className="creating__task-name"
          />
          <textarea
            placeholder="Task Description"
            name="description"
            className="creating__description"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
