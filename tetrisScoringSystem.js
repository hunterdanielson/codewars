// The scoring formula is built on the idea that more difficult line clears should be awarded more points. For example, a single line clear is worth 40 points, clearing four lines at once (known as a Tetris) is worth 1200.

// A level multiplier is also used. The game starts at level 0. The level increases every ten lines you clear. Note that after increasing the level, the total number of cleared lines is not reset.

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
