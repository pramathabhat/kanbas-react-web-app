import DashboardTile from "./DashboardTile";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container.fluid d-flex flex-row flex-wrap wd-paddingtop-20px wd-width-100p">
      <div className="wd-dashboard-heading">
        <span className="wd-font-size-30px">Dashboard</span>
        <hr />
      </div>
      {courses.map((course, index) => (
        <DashboardTile key={course._id} course={course} index={index} />
      ))}
    </div>
  );
}

export default Dashboard;
