class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        result.push(1);
      } else {
        result.push(result[result.length - 1] * nums[i - 1]);
      }
    }

    let suffixProduct = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
      result[j] = result[j] * suffixProduct;
      suffixProduct *= nums[j];
    }
    return result;
  }
}
