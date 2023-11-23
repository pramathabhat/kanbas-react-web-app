import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import CourseHeader from "./CourseHeader";
import Home from "./Home";
import Grades from "./Grades";
import Assignment from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses({ courses }) {
  // const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);
  const URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;

  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
      <CourseHeader course={course} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignment />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
