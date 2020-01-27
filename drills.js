const Stack = require('./stack')
const Queue = require('./queue')

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

//number 3

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

function sort(stack) {

    let sortedStack = new Stack();

    while (!stack) {
        let temp = stack.pop();


        while (sortedStack && (peek(sortedStack) > temp)) {
            stack.push(sortedStack.pop());
        }
        sortedStack.push(temp);
    }
    while (sortedStack) {
        stack.push(sortedStack.pop());
    }

    console.log('Sorted stack = ', sortedStack)
}

let testStack = new Stack
testStack.push(1);
testStack.push(4);
testStack.push(6);
testStack.push(2);

const starTrekQ = new Queue();

isQueueEmpty(starTrekQ);

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

isQueueEmpty(starTrekQ);

function peekQueue(q) {
    return q.first.val;
}

console.log(peekQueue(starTrekQ));

function isQueueEmpty(q) {
    if (!q.first) {
        return console.log('queue is empty')
    } else {
        return console.log('queue is not empty')
    }
}

function displayQueue(q) {
    let str = '';
    let node = q.first;
    while (node !== null) {
        str += node.val + " "
        node = node.next;
    }
    console.log(str);
}

starTrekQ.dequeue();
starTrekQ.dequeue();
displayQueue(starTrekQ);

//9

const dancingTeam = new Queue();
dancingTeam.enqueue({ gender: 'F', name: 'Jane' });
dancingTeam.enqueue({ gender: 'M', name: 'Frank' });
dancingTeam.enqueue({ gender: 'F', name: 'Madonna' });
dancingTeam.enqueue({ gender: 'M', name: 'David' });
dancingTeam.enqueue({ gender: 'F', name: 'Beyonce' });
dancingTeam.enqueue({ gender: 'M', name: 'Chris' });
dancingTeam.enqueue({ gender: 'M', name: 'Sherlock' });
dancingTeam.enqueue({ gender: 'M', name: 'John' });

function pairUp(team) {
    const maleTeam = new Queue();
    const femaleTeam = new Queue();

    while (dancingTeam.first !== null) {
        const nextPerson = dancingTeam.first.val;
        dancingTeam.dequeue();

        if (nextPerson.gender === 'F') {
            femaleTeam.enqueue(nextPerson.name)
        }
        else {
            maleTeam.enqueue(nextPerson.name)
        }

        if (femaleTeam.first !== null && maleTeam.first !== null) {
            const pairs = femaleTeam.first.val + ' ' + maleTeam.first.val
            console.log(pairs);
            femaleTeam.dequeue();
            maleTeam.dequeue();
        }


    }
}

pairUp(dancingTeam)







// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));



// [1, 3, 4, 2, 6]






