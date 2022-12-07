nums = [2,7,11,15]
target = 9;

var twoSum = function(nums, target) {
    var vals = {};

    for(var i = 0; i < nums.length; i++) {
        if(target - nums[i] in vals) {
            return [vals[target-nums[i]], i];
        } else {
            vals[nums[i]] = i;
        }
    }
    return [];
};

console.log(twoSum(nums, target));