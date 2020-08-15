import React, { useState, useRef } from "react";
import "./CreatingTask.scss";

export default function Scoring() {
  const [imgEmpty, setImgEmpty] = useState(true);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const inputRef = useRef();
  const previewRef = useRef();

  const submitHandler = () => {
    // LOGIC TO SEND DATA TO BACK-END
  };

  const previewImage = () => {
    setImgEmpty(false);

    const oFReader = new FileReader();
    oFReader.readAsDataURL(inputRef.current.files[0]);

    oFReader.onload = (oFREvent) => {
      console.log(previewRef.current);
      previewRef.current.src = oFREvent.target.result;
      console.log(previewRef.current);
    };
  };

  let preview = <img className="creating__img-prev" ref={previewRef}></img>;

  if (imgEmpty) {
    preview = <div className="creating__img-empty">Choose an Image</div>;
  }

  return (
    <div className="creating">
      <div
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
        className="btn-back"
      >
        {"<- Back"}
      </div>
      <h1 className="creating__heading main-heading">Create a Task</h1>
      <div className="creating__content">
        <div className="creating__left">
          {preview}
          <div className="creating__left-bottom">
            <input
              type="file"
              id="file"
              className="creating__file-input"
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={previewImage}
            />
            <label htmlFor="file" className="creating__file-label btn-white">
              Choose An Image
            </label>
            <div
              onClick={submitHandler}
              className="creating__submit-btn btn-white"
            >
              SUBMIT
            </div>
          </div>
        </div>

        <div className="creating__right">
          <input
            placeholder="Task Name"
            type="text"
            className="creating__task-name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            name="description"
            className="creating__description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
