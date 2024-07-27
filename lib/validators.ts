// utils/validators.ts
export const validators = {
  isValidCardNumber(cardNumber: string) {
    if (!cardNumber) return "Can't be blank";
    const cleanedCardNumber = cardNumber.replace(/[^\d]/g, "");
    if (cleanedCardNumber !== cardNumber.replace(/\s+/g, "")) {
      return "Invalid card number";
    }
    if (!/^\d{12,19}$/.test(cleanedCardNumber)) {
      return "Invalid card number";
    }
    return "";
  },

  formatCardNumber(input: string) {
    const cleanedInput = input.replace(/\D/g, "");
    const parts = cleanedInput.match(/[\s\S]{1,4}/g) || [];
    return parts.join(" ");
  },

  isValidCvc(cvc: string) {
    if (!cvc) return "Can't be blank";
    if (!/^\d{3,4}$/.test(cvc)) {
      return "Invalid CVC";
    }
    return "";
  },

  isValidCardholderName(name: string) {
    if (!name) return "Can't be blank";
    if (!/^[a-zA-Z ]+$/.test(name.trim())) {
      return "Invalid name";
    }
    return "";
  },

  isValidExpiryMonth(month: string) {
    if (!month) return "Can't be blank";
    const number = Number(month);
    if (isNaN(number) || number < 1 || number > 12) {
      return "Invalid month";
    }
    return "";
  },

  isValidExpiryYear(year: string) {
    if (!year) return "Can't be blank";
    if (!/^\d{2}$/.test(year)) {
      return "invalid year";
    }
    return "";
  },
};
