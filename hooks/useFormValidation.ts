import { validators } from "@/lib/validators";
import { useCallback, useState } from "react";

export interface Errors {
  cardholderName: string
  cardNumber: string
  expiryMonth: string
  expiryYear: string
  cvc: string
}

export function useFormValidation() {
  const [errors, setErrors] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  })

  const validateField = useCallback((field: keyof Errors, value: string) => {
    let error = "";
    switch (field) {
      case "cardholderName":
        error = validators.isValidCardholderName(value);
        break;
      case "cardNumber":
        error = validators.isValidCardNumber(value);
        break;
      case "expiryMonth":
        error = validators.isValidExpiryMonth(value);
        break;
      case "expiryYear":
        error = validators.isValidExpiryYear(value);
        break;
      case "cvc":
        error = validators.isValidCvc(value);
        break;
      default:
        break
    }
    setErrors(prevErrors => ({ ...prevErrors, [field]: error }))
  }, [])

  const validateAllFields = useCallback((values: Errors) => {
    const newErrors = {
      cardholderName: validators.isValidCardholderName(values.cardholderName),
      cardNumber: validators.isValidCardNumber(values.cardNumber),
      expiryMonth: validators.isValidExpiryMonth(values.expiryMonth),
      expiryYear: validators.isValidExpiryYear(values.expiryYear),
      cvc: validators.isValidCvc(values.cvc),
    }
    setErrors(newErrors)
    return newErrors
  }, [])

  return {
    errors,
    validateField,
    validateAllFields,
  }
}
