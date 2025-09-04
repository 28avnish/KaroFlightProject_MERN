import React, { useState, useRef, useEffect } from "react";

export const OtpGrid = ({
  length = 6,
  onSubmit,
  onChange,
  autoFocus = true,
  disabled = false,
  submitLabel = "Verify Account",
}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  // expose value changes to parent
  useEffect(() => {
    if (onChange) onChange(otp.join(""));
  }, [otp, onChange]);

  const handleChange = (e, index) => {
    const raw = e.target.value;

    if (raw === "") {
      const next = [...otp];
      next[index] = "";
      setOtp(next);
      return;
    }

    const value = raw.replace(/[^0-9]/g, "");
    if (!value) return;

    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = [...otp];

      if (next[index]) {
        next[index] = "";
        setOtp(next);
        return;
      }

      if (index > 0) {
        next[index - 1] = "";
        setOtp(next);
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").trim();
    if (!/^[0-9]+$/.test(text)) return;

    const digits = text.split("").slice(0, length);
    const newOtp = [...otp];
    digits.forEach((digit, i) => (newOtp[i] = digit));
    setOtp(newOtp);

    if (digits.length === length) {
      inputsRef.current[length - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("").length === length && onSubmit) {
      onSubmit(otp.join(""));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 
              border border-transparent hover:border-slate-200 rounded p-4 outline-none 
              focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100
              disabled:bg-slate-200 disabled:cursor-not-allowed"
            maxLength="1"
            autoFocus={autoFocus && index === 0}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="max-w-[260px] mx-auto mt-4">
        <button
          type="submit"
          disabled={disabled}
          className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 
            px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 
            hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 
            transition-colors duration-150 disabled:bg-slate-400"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};
