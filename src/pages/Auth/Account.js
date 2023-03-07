import { Stack } from "react-bootstrap";
import UserInfoCard from "../../components/User/UserInfoCard";
import PasswdChangeForm from "../../components/User/PasswdChangeForm";

export default function Account({ user, logout, passwdChanged }) {
  return (
    user && (
      <>
        <Stack className="mb-2">
          <UserInfoCard logout={logout} user={user} />
        </Stack>

        <Stack>
          <PasswdChangeForm responseInfo={{}} onFormSubmit={(data) => {}} />
        </Stack>
      </>
    )
  );
}
