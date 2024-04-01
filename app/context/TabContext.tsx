import React, { createContext, useContext, useState } from "react";

// Define types for tab context
type TabContextValues = {
  activeTab: number;
  handleChangeTab: (value: number) => void;
};

// Initial values for tab context
const initialTabContextValues: TabContextValues = {
  activeTab: 0,
  handleChangeTab: () => {},
};

// Create tab context
const TabContext = createContext<TabContextValues>(initialTabContextValues);

// Tab provider component
export const TabProvider: React.FC = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Function to handle tab change
  const handleChangeTab = (newValue: number) => {
    setActiveTab(newValue);
    window.location.hash = `tab-${newValue}`;
  };

  return (
    <TabContext.Provider value={{ activeTab, handleChangeTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Custom hook to use tab context
export const useTabs = (): TabContextValues => useContext(TabContext);
