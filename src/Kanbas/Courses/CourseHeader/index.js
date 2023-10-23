import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const CourseHeader = ({ course }) => {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  const breadcrumbLastPart = lastPart.replace(/([a-z])([A-Z])/g, "$1 $2");

  return (
    <div className="wd-kanbas-course-header">
      <nav className="wd-kanbas-course-breadcrumb">
        <ol className="breadcrumb wd-kanbas-breadcrumbs">
          <li className="breadcrumb-item">
            <Link
              to={`/Kanbas/Courses/${course._id}/Home`}
              className="wd-kanbas-course-header-link"
            >
              {course._id}
            </Link>
          </li>
          <li className="wd-breadcrumb-item active">{breadcrumbLastPart}</li>
        </ol>
      </nav>
      <div className="wd-kanbas-course-header-divider">
        <hr />
      </div>
    </div>
  );
};

export default CourseHeader;
