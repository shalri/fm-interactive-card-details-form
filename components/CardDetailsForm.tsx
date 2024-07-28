"use client";
import { useCardContext } from "@/contexts/CardContext";
import { FormEvent, useState } from "react";
import { validators } from "@/lib/validators";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useFormValidation, Errors } from "@/hooks/useFormValidation";
import ErrorMessage from "@/animations/ErrorMessage";


export default function CardDetailsForm() {
  const {
    setCardholderName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCvc,
    setIsConfirmed,
    ...cardDetails
  } = useCardContext();

  const { errors, validateField, validateAllFields } = useFormValidation();
  const [errorCount, setErrorCount] = useState(0);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 16) {
      const formattedNumber = validators.formatCardNumber(input);
      setCardNumber(formattedNumber);
      validateField("cardNumber", formattedNumber);
    }
  };

  const handleChange = (field: keyof Errors, value: string) => {
    switch (field) {
      case "cardholderName":
        setCardholderName(value)
        break;
      case "expiryMonth":
        setExpiryMonth(value)
        break;
      case "expiryYear":
        setExpiryYear(value)
        break;
      case "cvc":
        setCvc(value)
        break;
      default:
        break;
    }
    validateField(field, value)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateAllFields(cardDetails)
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      setErrorCount((prev) => prev + 1)
    } else {
      setIsConfirmed(true)
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== "");

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 100 }}
        className="pt-[38px] px-6 pb-11 sm:max-w-[380px] sm:p-0 overflow-hidden">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full space-y-[19px] sm:space-y-6 [&_label]:mb-2 [&_label]:text-[.75rem] [&_label]:uppercase [&_label]:tracking-[0.175em] sm:-mt-1 [&_label]:text-ic-very-dark-violet"
        >
          <div
            className="flex flex-col">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              placeholder="e.g. Jane Appleseed"
              value={cardDetails.cardholderName}
              onChange={(e) => handleChange("cardholderName", e.target.value)}
              className={cn(
                "duration-400 form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet transition-all placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet",
                errors.cardholderName && "border-red-500",
              )}
            />
            <ErrorMessage error={errors.cardholderName} key="cardholderName-error" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardDetails.cardNumber}
              onChange={handleCardNumberChange}
              className={cn(
                "duration-400 form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet transition-all placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet",
                errors.cardNumber ? "border-red-500" : "border-ic-light-grayish-violet",
              )}
            />
            <ErrorMessage error={errors.cardNumber} key="cardNumber-error" />
          </div>
          <div className="grid grid-cols-4 gap-x-3 sm:pb-[18px]">
            <div className="col-span-2">
              <label htmlFor="expiryMonth" className="nowrap block">
                Exp. Date (mm/yy)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                  className={cn(
                    "col-span-1 w-full duration-400 form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet transition-all placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet",
                    errors.expiryMonth && "border-red-500",
                  )}
                  value={cardDetails.expiryMonth}
                  onChange={(e) => handleChange("expiryMonth", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="YY"
                  maxLength={2}
                  className={cn(
                    "col-span-1 w-full duration-400 form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet transition-all placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet",
                    errors.expiryYear && "border-red-500",
                  )}
                  value={cardDetails.expiryYear}
                  onChange={(e) => handleChange("expiryYear", e.target.value)}
                />
              </div>
            </div>
            <ErrorMessage error={errors.expiryMonth || errors.expiryYear} key="expiry-error" className="col-span-2 col-start-1 row-start-2" />
            {/* <ErrorMessage error={errors.expiryYear} key="expiryYear-error" className="col-span-1 col-start-2 row-start-2" /> */}
            <div className="col-span-2">
              <label htmlFor="cvc" className="block">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="e.g. 123"
                maxLength={3}
                value={cardDetails.cvc}
                onChange={(e) => handleChange("cvc", e.target.value)}
                className={cn(
                  "col-span-2 w-full duration-400 form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] text-ic-very-dark-violet transition-all placeholder:text-ic-light-grayish-violet focus:ring-ic-very-dark-violet",
                  errors.cvc && "border-red-500",
                )}
              />
            </div>
            <ErrorMessage key="cvc-error" error={errors.cvc} className="col-span-2 col-start-3 row-start-2" />
          </div>
          <motion.button
            key={hasErrors ? "error" + errorCount : "no-error"}
            animate={
              hasErrors
                ? { x: [0, -5, 5, -5, 5, 0], backgroundColor: ["#ef4444", "#ff0000", "#21092f"] }
                : {}
            }
            transition={{ duration: 0.4 }}
            type="submit"
            className={cn(
              "!mt-7 w-full rounded-lg bg-ic-very-dark-violet py-3 text-ic-white !sm:mt-0 ",
            )}
          >
            Confirm
          </motion.button>
        </motion.form>
      </motion.section>
    </AnimatePresence>
  );
}
