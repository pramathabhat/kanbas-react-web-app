import ModuleList from "../Modules/ModuleList";
import "./index.css";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div className="row wd-home-page">
      <div className="col col-8">
        <ModuleList />
      </div>
      <div className="col col-3">
        <CourseStatus />
      </div>
    </div>
  );
}
export default Home;
