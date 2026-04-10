import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="Tape ici..." />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}

export default FocusInput;