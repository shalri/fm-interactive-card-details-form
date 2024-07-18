"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CardContextProps {
  cardholderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  setCardholderName: (name: string) => void;
  setExpiryMonth: (month: string) => void;
  setExpiryYear: (year: string) => void;
  setCardNumber: (number: string) => void;

  setCvc: (cvc: string) => void;
}

const CardContext = createContext<CardContextProps | null>(null);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <CardContext.Provider
      value={{
        cardholderName,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvc,
        setCardholderName,
        setCardNumber,
        setExpiryMonth,
        setExpiryYear,
        setCvc,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCardContext() {
  const context = useContext(CardContext);
  if (context === null) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
}
