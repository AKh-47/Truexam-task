import React from "react";
import "./ScoringTask.scss";

export default function Scoring() {
  return (
    <div className="scoring">
      <h1 className="scoring__heading main-heading">Scoring Tasks</h1>
      <div className="scoring__content">
        <div className="scoring__left">
          <h2 className="scoring__img-title">Student Name - Task ID</h2>
          <div className="scoring__preview">
            <div className="scoring__original">
              <span className="scoring__img-type">Original</span>
            </div>
            <div className="scoring__edited">
              <span className="scoring__img-type">Edited</span>
            </div>
          </div>
          <div className="scoring__left-bottom">
            <div className="scoring__score">
              Score:{" "}
              <input
                // maxlength="1"
                // 10 is 2 digits
                className="scoring__score-input"
                type="text"
                placeholder="X"
              />{" "}
              / 10
            </div>
          </div>
        </div>
        <div className="scoring__right"></div>
      </div>
    </div>
  );
}
