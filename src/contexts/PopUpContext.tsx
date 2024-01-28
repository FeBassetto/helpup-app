// PopUpContext.tsx
import { createContext, useState, ReactNode } from "react";

export type PopUpContextDataProps = {
  isOpen: boolean;
  onPressAction: () => void;
  openModal: (onPressAction: () => void) => void;
  closeModal: () => void;
};

export const PopUpContext = createContext<PopUpContextDataProps>(
  {} as PopUpContextDataProps
);

type PopUpProviderProps = {
  children: ReactNode;
};

export function PopUpProvider({ children }: PopUpProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [onPressAction, setOnPressAction] = useState<() => void>(() => {});

  const openModal = (newOnPressAction: () => void) => {
    setIsOpen(true);
    setOnPressAction(() => newOnPressAction);
  };

  const closeModal = () => {
    setIsOpen(false);
    setOnPressAction(() => {});
  };

  return (
    <PopUpContext.Provider
      value={{ isOpen, openModal, onPressAction, closeModal }}
    >
      {children}
    </PopUpContext.Provider>
  );
}
