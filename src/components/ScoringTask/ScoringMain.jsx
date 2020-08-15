import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ScoringTask.scss";

export default function ScoringMain() {
  const [searchTask, setSearchTask] = useState("");

  return (
    <div className="scoring__main">
      <div className="scoring__main-top">
        <input
          type="text"
          placeholder="Task Name / ID"
          className="scoring__main-input"
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
        <Link
          style={{
            textDecoration: "none",
          }}
          to={`/score/${searchTask}`}
        >
          <div className="scoring__main-button scoring__main-button--search btn-white">
            Search by ID
          </div>
        </Link>
      </div>
      <Link
        style={{
          textDecoration: "none",
          width: "max-content",
          margin: "auto",
        }}
        to="/score/all"
      >
        <div className="scoring__main-button scoring__main-button--view-all btn-white">
          View All Submissions
        </div>
      </Link>
    </div>
  );
}
