"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isUserSession, setIsUserSession] = useState(false);

  useEffect(() => {
    // Check if the user session exists in sessionStorage
    const userSession = sessionStorage.getItem("user");
    setIsUserSession(!!userSession);

    if (!loading && !user && !userSession) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || (!user && !isUserSession)) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
