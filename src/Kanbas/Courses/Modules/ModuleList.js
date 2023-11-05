import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule as setModuleAction,
} from "./modulesReducer";
import "./index.css";
import { IoMdMore } from "react-icons/io";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {}, [courseId, dispatch]);

  const handleAddModule = () => {
    dispatch(addModule({ ...module, course: courseId }));
  };

  const handleDeleteModule = (moduleId) => {
    dispatch(deleteModule(moduleId));
  };

  const handleUpdateModule = () => {
    dispatch(updateModule(module));
  };

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
      <ul className="list-group wd-module-list">
        <li className="list-group-item">
          <div className="wd-formWrapper">
            <div className="wd-formLeftWrapper">
              <input
                className="form-control wd-modName"
                value={module.name}
                onChange={(e) => dispatch(setModuleAction({ ...module, name: e.target.value }))}
              />
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(setModuleAction({ ...module, description: e.target.value }))
                }
              />
            </div>
            <div className="wd-formRightWrapper">
              <button className="btn btn-secondary wd-addModBtn" onClick={handleAddModule}>
                Add
              </button>
              <button className="btn btn-secondary" onClick={handleUpdateModule}>
                Update
              </button>
            </div>
          </div>
        </li>

        {modules
          .filter((mod) => mod.course === courseId)
          .map((mod, index) => (
            <li key={index} className="list-group-item wd-module-item">
              <h3 className="wd-module-title">{mod.name}</h3>
              <p className="wd-module-description">{mod.description}</p>
              <div className="wd-module-actions">
                <button
                  className="btn btn-secondary wd-deleteBtn"
                  onClick={() => handleDeleteModule(mod._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(setModuleAction(mod))}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;
