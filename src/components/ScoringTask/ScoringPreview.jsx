import React, { useState } from "react";
import "./ScoringTask.scss";
import submissions from "../../TestData";

export default function ScoringPreview({ match }) {
  const [score, setScore] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = submissions.find(
    (sub) => sub.taskID.toLowerCase() === match.params.id.toLowerCase()
  );

  if (!data) {
    return (
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>ID not Found</h1>
    );
  }

  const orgImg = data.original;
  const editedImgs = data.submissions;

  const updateScore = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 10) {
      setScore(e.target.value);
    }
  };

  const prevImgHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((old) => old - 1);
    }
  };

  const nextImgHandler = () => {
    if (currentIndex < editedImgs.length - 1) {
      setCurrentIndex((old) => old + 1);
    }
  };

  return (
    <div className="scoring__content">
      {/* <h2 className="scoring__img-title">Student Name - Task ID</h2> */}
      <div className="scoring__preview">
        <div
          style={{ backgroundImage: `url("${orgImg}")` }}
          className="scoring__original"
        >
          <span className="scoring__img-type">Original</span>
        </div>
        <div
          style={{ backgroundImage: `url("${editedImgs[currentIndex]}")` }}
          className="scoring__edited"
        >
          <span className="scoring__img-type">Edited</span>
        </div>
      </div>
      <a
        href={editedImgs[currentIndex]}
        style={{ textDecoration: "none", width: "max-content" }}
        download
      >
        <div className="scoring__download btn-white">
          {" "}
          <i className="fa fa-download scoring__download-icon"></i> Download
          File
        </div>
      </a>
      <div className="scoring__bottom">
        <div onClick={prevImgHandler} className="scoring__previous btn-white">
          {"< Prev"}
        </div>
        <div className="scoring__score">
          Score:{" "}
          <input
            // maxlength="1"
            // 10 is 2 digits
            className="scoring__score-input"
            type="number"
            placeholder="X"
            value={score}
            onChange={(e) => updateScore(e)}
          />{" "}
          / 10
        </div>
        <div onClick={nextImgHandler} className="scoring__next btn-white">
          {"Next >"}
        </div>
      </div>
    </div>
  );
}
