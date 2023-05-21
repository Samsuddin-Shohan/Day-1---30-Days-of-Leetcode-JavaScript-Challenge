/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 var reduce = function(nums, fn, init) {
    let acc = init;
    let result =0;
    for (let i =0;i<nums.length;i++){
       let value = fn(acc,nums[i]);
       acc=value;
    }
    return acc;
};
console.log(reduce([1, 2, 3], function sum(accum, curr) { return accum + curr ; }, 400));