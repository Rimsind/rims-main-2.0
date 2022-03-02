import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "./authReducer";
import { parseCookies, destroyCookie } from "nookies";
import useSWR from "swr";
import axios from "axios";
import { apiUrl } from "config/api";
import { useState } from "react";
import { useRouter } from "next/router";

export const GlobalContext = createContext();

const initialState = {
  loading: false,
  token: null,
  user: null,
  error: null,
};

const GlobalProvider = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(authReducer, initialState);
  const [profile, setProfile] = useState();

  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "user");
    destroyCookie(null, "token");
    router.push("/");
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const { token, user } = parseCookies();
      if (!!token && !!user) {
        auth.token = token;
        auth.user = JSON.parse(user);

        const profileData = async () => {
          const { data } = await axios.get(
            `${apiUrl}/patients/${auth?.user?.profileId}`,
            {
              headers: {
                authorization: `Bearer ${auth.token}`,
              },
            }
          );
          return data;
        };

        setProfile(profileData);
      }
    }
    loadUserFromCookies();
  }, []);

  return (
    <GlobalContext.Provider value={{ auth, dispatchAuth, profile, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => useContext(GlobalContext);

export default GlobalProvider;
