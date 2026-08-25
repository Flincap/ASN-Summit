import React, { createContext, useCallback, useContext, useState } from "react";

type RegistrationValue = {
  isOpen: boolean;
  openRegistration: () => void;
  closeRegistration: () => void;
};

const RegistrationContext = createContext<RegistrationValue>({
  isOpen: false,
  openRegistration: () => {},
  closeRegistration: () => {},
});

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openRegistration = useCallback(() => setIsOpen(true), []);
  const closeRegistration = useCallback(() => setIsOpen(false), []);

  return (
    <RegistrationContext.Provider
      value={{ isOpen, openRegistration, closeRegistration }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
