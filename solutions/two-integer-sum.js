class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let needed;
    const seen = new Map();
    for (const [i, num] of nums.entries()) {
      needed = target - num;
      if (seen.get(needed) >= 0) {
        return [i, seen.get(needed)];
      }
      seen.set(num, i);
    }
  }
}
