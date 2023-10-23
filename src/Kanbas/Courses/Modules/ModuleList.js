import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { IoMdMore } from "react-icons/io";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <>
      <div className="wd-flex-3 wd-width-100p">
        <div className="wd-no-wrap">
          <div className="wd-display-flex-align-center">
            <div className="wd-flexgrow-1-display-flex-justifycontent">
              <button className="btn btn-secondary">Collapse All</button>
              <button className="btn btn-secondary wd-margin-left-5px">View Progress</button>
              <button className="btn btn-secondary dropdown-toggle wd-margin-left-5px">
                <i className="far fa-check-circle" style={{ color: "#0d8604" }}></i> Publish All
              </button>
              <button className="btn btn-danger wd-margin-left-5px">
                <i className="fas fa-plus"></i> Module
              </button>
              <button className="btn btn-secondary wd-margin-left-5px">
                <IoMdMore className="wd-button-padding-top-bottom-4px" />
              </button>
            </div>
          </div>
          <div className="wd-paddingtop-10px">
            <hr />
          </div>
        </div>
      </div>
      <ul className="list-group module-list">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item module-item">
              <h3 className="module-title">{module.name}</h3>
              <p className="module-description">{module.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;
