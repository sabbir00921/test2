const sumNumber = (nums, target) => {
    let s = "sabbir";
    let list = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
               list.push(i,j)
            }
        }
    }
    return list;
}

console.log(sumNumber([2,7,11,15],9))