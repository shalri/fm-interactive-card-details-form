"use client";
import { useCardContext } from "@/contexts/CardContext";

export default function Header() {
  const { cardNumber, cardholderName, cvc, expiryMonth, expiryYear } =
    useCardContext();
  return (
    <header className="relative">
      <section className="relative mb-[100px] px-4 pt-8">
        <div className="relative z-10 ml-auto h-[160px] w-[286px] bg-[url(/images/bg-card-back.png)] bg-contain bg-no-repeat">
          <div className="absolute left-[28px] right-[26px] top-[66px] rounded bg-[#adb5be] px-3 py-[6px] text-right text-xs text-ic-white">
            {cvc ? cvc : "000"}
          </div>
        </div>
        <div className="absolute z-20 -mt-[66px] h-[160px] w-[286px] bg-[url(/images/bg-card-front.png)] px-5 py-[18px] bg-contain bg-no-repeat">
          <div className="bg-[url(/images/card-logo.svg)] bg-no-repeat bg-contain h-[30px] w-auto" />
          <div className="text-ic-white tracking-[0.145em] mt-9 no-wrap tabular-nums">
            {cardNumber ? cardNumber : "0000  0000  0000  0000"}
          </div>
          <div className="flex justify-between mt-3 text-[10px] text-ic-white">
            <div className="uppercase tracking-[0.075em]">
              {cardholderName ? cardholderName : "Jane Appleseed"}
            </div>
            <div className="tracking-[0.075em]">
              {expiryMonth ? expiryMonth : "00"}/
              {expiryYear ? expiryYear : "00"}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
