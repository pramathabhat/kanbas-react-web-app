import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger wd-btn-cancel">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success wd-btn-save me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
