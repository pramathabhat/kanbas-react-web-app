import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Signin from "./Users/signin";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";

function Kanbas() {
  const URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;
  console.log(URL);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "new Department",
    credits: 3,
  });
  const [courses, setCourses] = useState([]);

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };

  const deleteCourse = async (course) => {
    await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse(course);
  };

  useEffect(() => {
    findAllCourses();
  }, []);
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ width: "100%", marginLeft: "10px" }}>
          <Routes>
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="Dashboard" />} />
            {/* <Route path="Account" element={<h1>Account</h1>} /> */}
            {/* <Route path="Account" element={<Account />} /> */}
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
