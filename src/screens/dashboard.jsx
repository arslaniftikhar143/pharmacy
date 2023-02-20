import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export default function dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="container__main">
        <div className="container__main__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
