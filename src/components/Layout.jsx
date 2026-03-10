import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <UserProfile />
      <main>{children}</main>
    </>
  );
}

export default Layout;
