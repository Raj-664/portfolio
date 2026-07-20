import { createContext } from 'react';

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {},
});
