import { Spinner, Stack } from "react-bootstrap";
import UserInfoCard from "../../components/User/UserInfoCard";
import PasswdChangeForm from "../../components/User/PasswdChangeForm";
import useResult from "../../hooks/useResult";
import useApiService from "../../hooks/useApiService";
import ErrorList from "../../components/_Shared/ErrorList";

export default function Account({ user, logout, passwdChanged }) {
  const { errors, getResult, isPending } = useResult();
  const {
    user: { changePassword },
  } = useApiService();

  return (
    user && (
      <>
        <Stack className="mb-2">
          <UserInfoCard logout={logout} user={user} />
        </Stack>

        <Stack>
          {isPending && <Spinner />}
          <ErrorList response={errors} />
          <PasswdChangeForm
            onFormSubmit={(data) =>
              getResult(changePassword(data), passwdChanged)
            }
          />
        </Stack>
      </>
    )
  );
}
