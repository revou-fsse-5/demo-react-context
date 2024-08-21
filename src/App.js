import React from "react";
import { ThemeProvider, ContextExample } from "./ContextExample.js";
import { AuthProvider, useAuth } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ContextExample />
        <MyComponent />
      </ThemeProvider>
    </AuthProvider>
  );
};

const MyComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={() => login({ name: "John Doe" })}>Log In</button>
      )}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default App;
