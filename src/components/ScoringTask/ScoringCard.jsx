import React from "react";
import { Link } from "react-router-dom";
import "./ScoringTask.scss";

export default function ScoringCard({ orgImg, taskId }) {
  return (
    <Link
      to={`/score/${taskId}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{ backgroundImage: `url("${orgImg}")` }}
        className="scoring__card"
      >
        <span className="scoring__card-text">{taskId}</span>
      </div>
    </Link>
  );
}
