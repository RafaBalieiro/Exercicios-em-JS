const convertToNum = function (s) {
  const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = [];

  for (let i = 0; i < s.length; i++) {
    for (let key in romanToNum) {
      if (s[i] === key) roman.push(romanToNum[key]);
    }
  }

  if (s.includes("IV") || s.includes("IX")) roman.push(-2);
  if (s.includes("XL") || s.includes("XC")) roman.push(-20);
  if (s.includes("CD") || s.includes("CM")) roman.push(-200);

  return roman.reduce((sum, value) => (sum += value));
};

console.log(convertToNum("MMMMCM"));
