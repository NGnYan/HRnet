import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";

function Layout() {
  return (
    <>
      <Sidebar />
      <UserProfile />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
