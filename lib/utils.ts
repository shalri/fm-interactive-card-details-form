import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isCreditCardNumberValid(cardNumber: string) {
  const cleanedCardNumber = cardNumber.replace(/[^\d]/g, "");

  // Check if the cleaned card number is numeric and has length betwenn 12 and
  // 19
  if (/^\d{12,19}$/.test(cleanedCardNumber)) {
    return true;
  }
  return false;
}

export function formatCardNumber(input: string) {
  // Remove non-digit characters from the input
  const cleanedInput = input.replace(/\D/g, "");

  // Split the cleaned input into groups of 4 characters each
  const parts = cleanedInput.match(/[\s\S]{1,4}/g) || [];

  // Join the parts with a space separator
  return parts.join(" ");
}

export function isCvcValid(cvc: string) {
  // Check if the CVC is a 3 or 4-digit numeric value
  return /^\d{3,4}$/.test(cvc);
}

export function isCardholderName(name: string) {
  return /^[a-zA-Z ]+$/.test(name.trim());
}

export function isValidExpiryMonth(month: string) {
  const number = Number(month);
  return !isNaN(number) && number > 0 && number < 13;
}

export function isValidExpiryYear(year: string) {
  return /^\d{2}|\d{4}$/.test(year);
}
