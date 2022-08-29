import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "../services/auth";

const AuthContextData = {
  signed: false,
  usuario: {},
  sindicato: {},
  sindicatos: [],
  Loading: true,
  saveUsuario: () => {},
  saveSindicato: () => {},
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext(AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNauth:user");
      const storageToken = await AsyncStorage.getItem("@RNauth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signin();

    setUser(response.user);

    await AsyncStorage.setItem("@RNauth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@RNauth:token", response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
