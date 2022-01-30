var startPoint = 1;
var endPoint = Number(prompt("Enter a number to find prime number from 1 to that number:"));
var desiredNumbers = [];
if (isNaN(endPoint)) {
    console.log("Please enter a valid number!");
} else {
    for (var i = startPoint; i <= endPoint; i++) {
        var result = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                result = 1;
                break;
            }
        }
        if (i > 1 && result == 0) {
            desiredNumbers.push(i);
        }
    }
    console.log(`The prime numbers between 1 to ${endPoint} are ${desiredNumbers}`);
}
