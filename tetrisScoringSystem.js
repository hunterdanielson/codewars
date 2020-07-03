function getScore(arr) {
  let total = 0;
  let cleared = 0;
  arr.forEach((clear, i) => {
    let level = 1 + Math.floor(cleared / 10);

    switch (clear) {
      case 1:
        total += 40 * level;
        cleared += 1;
        break;
      case 2:
        total += 100 * level;
        cleared += 2;
        break;
      case 3:
        total += 300 * level;
        cleared += 3;
        break;
      case 4:
        total += 1200 * level;
        cleared += 4;
        break;
    }
  });
  return total;
}
