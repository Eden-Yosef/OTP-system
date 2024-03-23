const generateCode = (temperatures) => {
  
  const codeOTP = temperatures.reduce((acc, curr) => {
    if (typeof curr === "string") {
      acc += curr.substring(0, 2);
    }
    return acc;
  });
  return codeOTP;
};

export default generateCode;
