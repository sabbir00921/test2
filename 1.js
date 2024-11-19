const isPalindrome = (x) => {
    x = x.toString();
    let list = [];
    for (let i = 0; i < x.length; i++) {
        list.push(x[i])
    }
    const reversList = list.reverse()
    const addjoin = reversList.join('');

    if (addjoin == x) {
        return "palindrome Number"
    } else {
        return "Not a Palindrome Number"
    }
}

console.log(isPalindrome(12))