import React, { createContext } from 'react';

export const AuthContext = createContext<any>(null);

export function AuthProvider(props: any) {
  return (
    // <AuthContext.Provider value={{ id: 1, username: 'kpanos' }}>
    //   {props.children}
    // </AuthContext.Provider>
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}
