import { createContext } from 'react';

interface RefreshContextType {
  refresh: () => void;
  refreshTrigger: boolean;
}

export const RefreshContext = createContext<RefreshContextType>({ refresh: () => {}, refreshTrigger: false });
