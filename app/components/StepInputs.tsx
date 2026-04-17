"use client";

import { useState, useRef } from "react";

export default function StepInputs({ total = 3 }: { total?: number }) {
  const [enabled, setEnabled] = useState<boolean[]>(
    Array(total).fill(false).map((_, i) => i === 0)
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const newState = [...enabled];

      if (index + 1 < total) {
        newState[index + 1] = true;
        setEnabled(newState);

        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 0);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {enabled.map((isEnabled, i) => (
        <input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          disabled={!isEnabled}
          onKeyDown={(e) => handleEnter(e, i)}
          placeholder={`Input ${i + 1}`}
          className="border p-2 rounded"
        />
      ))}
    </div>
  );
}