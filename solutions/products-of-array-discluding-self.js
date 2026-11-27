class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const prefixes = [];
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        prefixes.push(1);
      } else {
        prefixes.push(prefixes[prefixes.length - 1] * nums[i - 1]);
      }
    }

    const suffixes = [];
    for (let j = nums.length - 1; j >= 0; j--) {
      if (j === nums.length - 1) {
        suffixes.push(1);
      } else {
        suffixes.push(suffixes[suffixes.length - 1] * nums[j + 1]);
      }
    }

    const result = [];
    for (let k = 0; k < nums.length; k++) {
      result.push(prefixes[k] * suffixes[nums.length - k - 1]);
    }

    return result;
  }
}
