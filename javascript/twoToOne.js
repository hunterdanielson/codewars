// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    // your code
      const result = [];
      const temp = s1.concat(s2).split("").sort();
      temp.reduce((previous,current) => {
          if (current !== previous) {
              result.push(current);
              return current;
          } else {
              return previous;
          }
      },0);
      return result.join("");
  }