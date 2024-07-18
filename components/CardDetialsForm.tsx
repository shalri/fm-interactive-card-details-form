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
    <div className="flex flex-col items-center justify-center text-center">
      <form action="" className="space-y-4">
        <div>
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            value={cardDetails.cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardDetails.cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="rounded border p-2"
          />
        </div>
        <div className="flex">
          <div className="mr-2">
            <label htmlFor="expiryMonth">Expiry Month</label>
            <input
              type="text"
              className="rounded border p-2"
              value={cardDetails.expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-2">
            <label htmlFor="expiryYear">Expiry Year</label>
            <input
              type="text"
              className="rounded border p-2"
              value={cardDetails.expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cardDetails.cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="rounded border p-2"
          />
        </div>
      </form>
    </div>
  );
}
