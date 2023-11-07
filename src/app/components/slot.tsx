"use client";

import { useRef, useState } from "react";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";
import Reward from "./reward";

export default function Slot() {
  const counterRef = useRef<SlotCounterRef>(null);

  const slotDummyValues = ["😎", "😂", "😇", "🥰"];

  const [slotValues, setSlotValues] = useState(["😎", "😂", "😇"]);
  const [isCorrect, setIsCorrect] = useState<string>();

  const handleStartClick = () => {
    setIsCorrect(undefined);

    const value1 = getRandomValue();
    const value2 = getRandomValue();
    const value3 = getRandomValue();

    // const value1 = "😎";
    // const value2 = "😎";
    // const value3 = "😎";

    setSlotValues([value1, value2, value3]);
    counterRef.current?.startAnimation();

    if (value1 === value2 && value2 === value3) {
      setTimeout(() => {
        setIsCorrect(value1);
      }, 700);
    }
  };

  function getRandomValue(): string {
    const randomInt = Math.floor(Math.random() * 4);
    return slotDummyValues[randomInt];
  }

  return (
    <div className="flex flex-col justify-center">
      <SlotCounter
        startValueOnce
        autoAnimationStart={false}
        animateUnchanged
        startValue={["😎", "😂", "😇"]}
        value={slotValues}
        dummyCharacters={slotDummyValues}
        ref={counterRef}
        containerClassName="p-2 border rounded-md bg-gray-100/20"
        charClassName="text-3xl p-2 pt-1"
        valueClassName="p-2 pt-0 text-3xl mt-10"
      />
      <button
        className="block mt-3 py-2 px-2.5 tracking-wider border rounded-md"
        onClick={handleStartClick}
      >
        Start
      </button>
      <div className="h-3 mt-2">
        {isCorrect && <Reward currentEmoji={isCorrect} />}
      </div>
    </div>
  );
}
