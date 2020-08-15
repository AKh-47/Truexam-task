import React from "react";
import "./ScoringTask.scss";
import ScoringCard from "./ScoringCard";
import submissions from "../../TestData";

export default function ScoringAll() {
  return (
    <>
      <h2 className="scoring__all-subheading">Select a Task</h2>
      <div className="scoring__all">
        {submissions.map((sub) => (
          <ScoringCard
            key={sub.taskID}
            orgImg={sub.original}
            taskId={sub.taskID}
          />
        ))}
      </div>
    </>
  );
}
