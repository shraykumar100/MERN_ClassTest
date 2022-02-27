var num = Number(prompt("Enter which nth fibonacci number you want:"));
var arr = [0, 1];

for (var i = 0; i < (num - 2); i++) {
    var a = arr[i];
    var b = arr[i + 1];
    var c = a + b;
    arr.push(c);
}
alert(`The desired fibonacci number is ${arr[num - 1]}`);
