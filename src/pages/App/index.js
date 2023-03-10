import { HashRouter } from "react-router-dom";
import { Sanctum } from "react-sanctum";
import { API_URL } from "../../constants";
import RouteDefinitions from "./RouteDefinitions";

export default function App() {
  return (
    <Sanctum
      config={{
        apiUrl: API_URL,
        csrfCookieRoute: "sanctum/csrf-cookie",
        signInRoute: "login",
        signOutRoute: "logout",
        userObjectRoute: "user",
        usernameKey: "username",
      }}
    >
      <HashRouter>
        <RouteDefinitions />
      </HashRouter>
    </Sanctum>
  );
}
