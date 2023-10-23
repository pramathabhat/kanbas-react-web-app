import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import {
  MdImportExport,
  MdLibraryBooks,
  MdHome,
  MdMessage,
  MdAssessment,
  MdEvent,
} from "react-icons/md";
import "./index.css";

const CourseStatus = () => {
  return (
    <div className="d-none d-md-block wd-flex-1 wd-padding-left-5p wd-course-status">
      <div className="wd-flex-col-container">
        <h4>Course Status</h4>
        <hr />
        <div className="wd-flex-row-container wd-paddingbottom-6p justify-content-center align-items-center">
          <button className="btn btn-secondary" style={{ marginRight: "10px" }}>
            <FaTimesCircle style={{ color: "#141d2e" }} />
            &nbsp;Unpublish
          </button>
          <button className="btn btn-success">
            <FaCheckCircle style={{ color: "#eaf0f0" }} />
            &nbsp;Published
          </button>
        </div>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdImportExport style={{ color: "#eaf0f0" }} />
          &nbsp;Import Existing Content
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdLibraryBooks style={{ color: "#eaf0f0" }} />
          &nbsp;Import from Commons
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdHome style={{ color: "#eaf0f0" }} />
          &nbsp;Choose Home Page
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdMessage style={{ color: "#eaf0f0" }} />
          &nbsp;View Course Stream
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdEvent style={{ color: "#eaf0f0" }} />
          &nbsp;New Announcement
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdAssessment style={{ color: "#eaf0f0" }} />
          &nbsp;New Analytics
        </button>
        <button
          className="btn wd-button-margin-7px"
          style={{ backgroundColor: "lightgray", textAlign: "left" }}
        >
          <MdEvent style={{ color: "#eaf0f0" }} />
          &nbsp;View Course Notifications
        </button>
        <span>
          <b>To Do</b>
          <br />
        </span>
        <a href="#" className="wd-link-color-crimson">
          Grade A1-HTML
        </a>
        <hr />
        <span>
          <b>Coming Up</b>
          <br />
        </span>
        <a href="#" className="wd-link-color-crimson">
          Lecture 1
        </a>
        <a href="#" className="wd-link-color-crimson">
          Quiz
        </a>
        <a href="#" className="wd-link-color-crimson">
          Grade A1-HTML
        </a>
        <hr />
      </div>
    </div>
  );
};

export default CourseStatus;
