"use client";
import { useCardContext } from "@/contexts/CardContext";
import { FormEvent, useState } from "react";
import { validators } from "@/lib/validators";
import { cn } from "@/lib/utils";

export default function CardDetailsForm() {
  const {
    setCardholderName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCvc,
    ...cardDetails
  } = useCardContext();

  const [errors, setErrors] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 16) {
      const formattedNumber = validators.formatCardNumber(input);
      setCardNumber(formattedNumber);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = {
      cardholderName: validators.isValidCardholderName(
        cardDetails.cardholderName,
      ),

      cardNumber: validators.isValidCreditCardNumber(cardDetails.cardNumber),

      expiryMonth: validators.isValidExpiryMonth(cardDetails.expiryMonth),

      expiryYear: validators.isValidExpiryYear(cardDetails.expiryYear),

      cvc: validators.isValidCvc(cardDetails.cvc),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      console.log("Form submitted successfully");
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== "");

  return (
    // {/* <section className="flex flex-col items-center justify-center"> */}
    <section className="mt-[38px] px-6 pb-11">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-[19px] [&_label]:mb-2 [&_label]:text-[.75rem] [&_label]:uppercase [&_label]:tracking-[0.175em] [&_label]:text-ic-very-dark-violet"
      >
        <div className="flex flex-col">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
            value={cardDetails.cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className={cn(
              "form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet transition-all duration-400",
              errors.cardholderName && "border-red-500",
            )}
          />
          {errors.cardholderName && (
            <span className="text-sm text-red-500">
              {errors.cardholderName}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardDetails.cardNumber}
            onChange={handleCardNumberChange}
            className="form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet placeholder:text-ic-light-grayish-violet"
          />
        </div>
        {errors.cardNumber && (
          <span className="text-sm text-red-500">{errors.cardNumber}</span>
        )}
        <div className="grid grid-cols-4 gap-x-3">
          <div className="col-span-2">
            <label htmlFor="expiryMonth" className="nowrap block">
              Exp. Date (mm/yy)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM"
                className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet placeholder:text-ic-light-grayish-violet"
                value={cardDetails.expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
              />
              <input
                type="text"
                placeholder="YY"
                className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet placeholder:text-ic-light-grayish-violet"
                value={cardDetails.expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
              />
            </div>
          </div>
          {errors.expiryMonth && (
            <span className="col-span-1 col-start-1 row-start-2 text-sm text-red-500">
              {errors.expiryMonth}
            </span>
          )}
          {errors.expiryYear && (
            <span className="col-span-1  col-start-2 row-start-2 text-sm text-red-500">
              {errors.expiryYear}
            </span>
          )}
          <div className="col-span-2">
            <label htmlFor="cvc" className="block">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              value={cardDetails.cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet placeholder:text-ic-light-grayish-violet"
            />
          </div>
          {errors.cvc && (
            <span className="col-span-2  col-start-3 row-start-2 text-sm text-red-500">
              {errors.cvc}
            </span>
          )}
        </div>
        <button
          type="submit"
          className={cn(
            "!mt-7 w-full rounded-lg bg-ic-very-dark-violet py-3 text-ic-white",
          )}
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
