const Stack = require('./stack')

let main = function () {
    let starTrek = new Stack()

    starTrek.isEmpty(starTrek)
    starTrek.push('kirk')
    starTrek.push('spock')
    starTrek.push('mccoy')
    starTrek.push('scotty')
    starTrek.peek(starTrek)
    starTrek.isEmpty(starTrek)

    console.log(JSON.stringify(starTrek))
}

main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let palindrome = new Stack(); //empty

    let reversedString = '';

    //push characters up to palindrome stack
    for (let i = 0; i < s.length; i++) {
        palindrome.push(s[i])
    }

    //pop from the end and add to the empty string
    for (let i = 0; i < s.length; i++) {
        reversedString = reversedString + palindrome.pop();
    }

    if (s === reversedString) {
        return true;
    }

    else {
        return false;
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));



