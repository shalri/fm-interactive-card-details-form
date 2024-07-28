import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numericInput(e: React.KeyboardEvent<HTMLInputElement>) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
}

export function preventNumericInput(e: React.KeyboardEvent<HTMLInputElement>) {
  if (/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
}

