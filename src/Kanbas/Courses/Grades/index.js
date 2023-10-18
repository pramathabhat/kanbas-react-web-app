import database from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { RiFilterLine } from "react-icons/ri";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignmentsList = database.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrolledStudents = database.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  console.log(database.grades);

  return (
    <div className="col col-11 wd-grades">
      <div className="mb-4">
        <div className="d-flex justify-content-end">
          <div className="m-1">
            <button className="btn btn-secondary">
              <i className="fa-solid fa-file-import"></i> Import
            </button>
          </div>
          <div className="m-1">
            <button className="btn btn-secondary">
              <i className="fa-solid fa-file-export"></i> Export
            </button>
          </div>
          <div className="m-1">
            <button className="btn btn-secondary">
              <FaCog />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Student Names</h3>
            <input
              className="form-control"
              type="text"
              placeholder="Search Students"
              id="text-fields-text"
            />
            <br />
            <button className="btn btn-secondary">
              <RiFilterLine /> Apply Filter
            </button>
          </div>
          <div className="col">
            <h3>Assignment Names</h3>
            <input
              className="form-control"
              type="text"
              placeholder="Search Assignments"
              id="text-fields-text"
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignmentsList.map((assignment) => (
              <th key={assignment._id}>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {enrolledStudents.map((enrollment) => {
              const user = database.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignmentsList.map((assignment) => {
                    const grade = database.grades.find(
                      (g) => g.student === enrollment.user && g.assignment === assignment._id
                    );
                    console.log(
                      grade,

                      enrollment.user,

                      assignment._id,
                      database.grades
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
