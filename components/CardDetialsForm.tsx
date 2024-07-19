"use client";
import { useCardContext } from "@/contexts/CardContext";

export default function CardDetailsForm() {
  const {
    setCardholderName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCvc,
    ...cardDetails
  } = useCardContext();

  return (
    // {/* <section className="flex flex-col items-center justify-center"> */}
    <section className="mt-[38px] px-6">
      <form
        action=""
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
            className="form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] placeholder:text-ic-light-grayish-violet"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardDetails.cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="form-input rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] placeholder:text-ic-light-grayish-violet"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <label htmlFor="expiryMonth" className="block">
              Exp. Date (mm/yy)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM"
                className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] placeholder:text-ic-light-grayish-violet"
                value={cardDetails.expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
              />
              <input
                type="text"
                placeholder="YY"
                className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] placeholder:text-ic-light-grayish-violet"
                value={cardDetails.expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
              />
            </div>
          </div>
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
              className="form-input w-full rounded border border-ic-light-grayish-violet px-4 py-[9px] text-[18px] placeholder:text-ic-light-grayish-violet"
            />
          </div>
        </div>
      </form>
      <button className="mt-7 w-full rounded-lg bg-ic-very-dark-violet py-3 text-ic-white">
        Confirm
      </button>
    </section>
  );
}
