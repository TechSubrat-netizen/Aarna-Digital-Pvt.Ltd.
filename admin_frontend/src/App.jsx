import { useState } from 'react';
import AdminDashboard from "./AdminDashboard"
import LoginPage from "./LoginPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(null);

  const handleLogin = (adminData) => {
    setAdmin(adminData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdmin(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <AdminDashboard admin={admin} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
