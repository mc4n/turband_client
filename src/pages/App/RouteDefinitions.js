import { Routes, Navigate, Route } from "react-router-dom";
import Layout from "./Layout";
import Auth from "../Auth";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import AuthRuled from "../Auth/AuthRuled";

export default function RouteDefinitions() {
  return (
    <Routes>
      <Route path="/auth" element={<Layout />}>
        <Route
          element={
            <AuthRuled onlyGuest={true}>
              <Auth />
            </AuthRuled>
          }
        >
          <Route index element={<Navigate to="./login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="posts" />} />
        <Route path="/posts" element={<AuthRuled>"posts..."</AuthRuled>}>
          <Route index element={"posts"} />
        </Route>
      </Route>

      <Route index element={"index"} />

      <Route path="*" element={<p>Not Found!</p>}></Route>
    </Routes>
  );
}
