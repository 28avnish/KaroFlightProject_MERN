export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) || "Please enter a valid email address";
};

export const validateMobileNumber = (value) => {
  if (!value) return true; // allow empty (optional)
  return /^[0-9]{10}$/.test(value) || "Mobile number must be exactly 10 digits";
};
