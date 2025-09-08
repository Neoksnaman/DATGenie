
'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type RefreshFunction = ((isManualRefresh?: boolean) => void) | null;

interface RefreshContextType {
  refresh: RefreshFunction;
  setRefreshFunction: (fn: RefreshFunction | ((prev: RefreshFunction) => RefreshFunction)) => void;
}

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export const RefreshProvider = ({ children }: { children: ReactNode }) => {
  const [refreshFunction, setRefreshFunction] = useState<RefreshFunction>(null);

  const setRefresh = useCallback((fn: RefreshFunction | ((prev: RefreshFunction) => RefreshFunction)) => {
    setRefreshFunction(fn);
  }, []);

  return (
    <RefreshContext.Provider value={{ refresh: refreshFunction, setRefreshFunction: setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (context === undefined) {
    throw new Error('useRefresh must be used within a RefreshProvider');
  }
  return context;
};
