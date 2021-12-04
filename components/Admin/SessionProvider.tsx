import { useRouter } from "next/router";

export const SessionProvider = ({ children }) => {
  const router = useRouter();
  if (!router.isReady) {
    return <div>Loading</div>;
  }

  const sessionToken = window.localStorage.getItem("sessionToken");

  if (!sessionToken) {
    const { token } = router.query;
    router.push(`/admin?token=${token}`);
  }

  return children;
};
