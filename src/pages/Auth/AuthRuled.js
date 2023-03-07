import { Navigate } from "react-router-dom";
import { useSanctum } from "react-sanctum";

export default function AuthRuled({ onlyGuest = false, children }) {
  const { authenticated } = useSanctum();

  if (authenticated !== null && authenticated !== undefined) {
    if (onlyGuest === authenticated)
      return <Navigate to={onlyGuest ? "/" : "/auth"} />;
    else return children;
  }
  return null;
}
