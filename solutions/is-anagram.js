class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const occurrences = {};
    for (const char of s) {
      if (occurrences[char]) {
        occurrences[char] += 1;
      } else {
        occurrences[char] = 1;
      }
    }
    for (const char of t) {
      if (!occurrences[char]) {
        return false;
      }
      occurrences[char] -= 1;
    }
    return true;
  }
}
