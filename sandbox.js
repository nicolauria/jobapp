var reverse = function (x) {
  num = Math.abs(x).toString().split("").reverse().join("");
  res = x < 0 ? 0 - num : num;
  const max = Math.pow(2, 31);
  if (res > max || res < -max) return 0;
  return res;
};

console.log(reverse(-123));
