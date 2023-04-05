import React, { useCallback, useState } from "react";

function CountMultiplier() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const incrementCount = useCallback(() => {
    setCount(count + multiplier);
  }, [count, multiplier]);

  const handleChangeMultiplier = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);
      setMultiplier(value);
    },
    []
  );

  return (
    <div>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <label>
        Set Multiplier:
        <input
          type="number"
          value={multiplier}
          onChange={handleChangeMultiplier}
        />
      </label>
    </div>
  );
}

export default CountMultiplier;
