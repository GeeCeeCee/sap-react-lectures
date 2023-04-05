import React from "react";

const InputBoxWithClear: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default InputBoxWithClear;
