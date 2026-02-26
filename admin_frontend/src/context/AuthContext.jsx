import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Auto-login on refresh
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    const accessToken = localStorage.getItem("accessToken");

    if (storedAdmin && accessToken) {
      setAdmin(JSON.parse(storedAdmin));
    }

    setLoading(false);
  }, []);

  // ✅ Login
  const login = (admin, accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("admin", JSON.stringify(admin));

    setAdmin(admin);
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("admin");

    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};