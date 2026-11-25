class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const occurrences = new Map();
    const result = Array.from({ length: nums.length + 1 }, () => []);
    for (const n of nums) {
      occurrences.set(n, (occurrences.get(n) ?? 0) + 1);
    }

    for (const [k, v] of occurrences) {
      result[v].push(k);
    }

    const top = [];
    for (let i = result.length - 1; i > 0 && top.length < k; i--) {
      top.push(...result[i]);
    }

    return top.slice(0, k);
  }
}
