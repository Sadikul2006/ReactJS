import { useState } from "react";
function InputExample() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name || "Guest"}</p>
    </div>
  );
}

export default InputExample;
