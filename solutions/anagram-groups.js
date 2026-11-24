class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let key;
    const map = new Map();
    for (const str of strs) {
      key = this.normalize(str);
      if (map.has(key)) {
        map.get(key).push(str);
      } else {
        map.set(key, [str]);
      }
    }
    return [...map.values()];
  }

  normalize(str) {
    const counts = new Array(26).fill(0);
    let value;
    for (let i = 0; i < str.length; i++) {
      value = str.charCodeAt(i);
      value -= 97;
      counts[value] += 1;
    }
    return counts.join("-");
  }
}
