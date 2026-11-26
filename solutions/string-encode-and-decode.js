class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((str) => `${str.length}#${str}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let i = 0;
    const strs = [];
    while (i < str.length) {
      const placeHolder = str.indexOf("#", i);
      const currentLength = Number(str.slice(i, placeHolder));
      strs.push(str.slice(placeHolder + 1, placeHolder + currentLength + 1));
      i = currentLength + placeHolder + 1;
    }
    return strs;
  }
}
