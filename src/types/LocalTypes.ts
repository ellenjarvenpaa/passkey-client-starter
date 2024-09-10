import { UserWithNoPassword } from '@sharedTypes/DBTypes';

type AuthContextType = {
  user: UserWithNoPassword | null;
  registerResult: UserWithNoPassword | null;
  handleLogin: (email: string) => void;
  handleLogout: () => void;
  handleAutoLogin: () => void;
  handleRegister: (user: UserWithNoPassword) => void;
};

export type { AuthContextType };
