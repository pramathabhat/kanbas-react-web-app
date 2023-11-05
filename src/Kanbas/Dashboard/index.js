import React from "react";
import DashboardTile from "./DashboardTile";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  return (
    <>
      <h1>Dashboard</h1>
      <hr />
      <span className="wd-published-courses ms-3">
        Published courses ({courses ? courses.length : 0})
      </span>
      <br />
      <div className="mt-4 mb-4">
        <div className="row">
          <div className="col">
            <button className="m-1 btn btn-secondary wd-addBtn" onClick={addNewCourse}>
              Add
            </button>
            <button className="m-1 btn btn-secondary" onClick={updateCourse}>
              Update
            </button>
          </div>
          <div className="col">
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="row row-cols-lg-3 g-3">
        {courses.map((course, index) => (
          <DashboardTile
            key={course._id}
            course={course}
            index={index}
            deleteCourse={deleteCourse}
            setCourse={setCourse}
            updateCourse={updateCourse}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
