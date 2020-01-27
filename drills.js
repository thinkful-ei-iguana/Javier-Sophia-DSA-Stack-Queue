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

    


}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));



