import React, { createContext, useState } from 'react';

export const SidebarContext = createContext<any>(null);

export function SidebarProvider(props: any) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = (value: boolean) => {
    setSidebarOpen(!value);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen: isSidebarOpen,
        toggle: toggleSidebar,
        close: closeSidebar,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}
