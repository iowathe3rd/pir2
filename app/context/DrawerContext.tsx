import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface DrawerContextType {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prevState) => !prevState);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
