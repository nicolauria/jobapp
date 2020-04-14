function permutations(string) {
  let letters = string.split("");
  let results = [[letters.shift()]];

  while (letters.length) {
    const curLetter = letters.shift();
    let tempResults = [];

    results.forEach((result) => {
      let idx = 0;
      while (idx <= result.length) {
        const tmp = [...result];
        tmp.splice(idx, 0, curLetter);
        tempResults.push(tmp);
        idx++;
      }
    });

    results = tempResults;
  }

  return results
    .map((arr) => arr.join(""))
    .filter((el, idx, self) => self.indexOf(el) === idx);
}
