import { Outlet } from "react-router-dom";
import { NavB } from "./NavB";

export default function Layout() {
  return (
    <>
      <NavB />
      <Outlet />
    </>
  );
}
