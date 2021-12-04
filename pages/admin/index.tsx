import { Loading } from "components/basics/Loading";
import { isEmpty } from "lib/helpers";

import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  if (!router.isReady) {
    return <div>Loading</div>;
  }

  const { token } = router.query;

  if (isEmpty(token)) {
    router.push(`/`);
  }

  // Call api
  const res = { code: 200, sessionToken: "this-is-my-session-token" };
  if (res.code === 200) {
    // Move to cookies
    window.localStorage.setItem("sessionToken", res.sessionToken)
    router.push(`/admin/profiles`);
  }

  return <Loading />;
}
