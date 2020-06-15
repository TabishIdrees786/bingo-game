var a = prompt("Enter Number 0-9");
var b = Math.random() * 10;
b = Math.floor(b);

if (+a === b) {
    document.write("You Win Bingoooo <br>")
} else if (+a === b + 1 || +a === b - 1) {
    document.write("Your Number are very Close " + "<br>")
} else {
    document.write("You Lose <br>")
}
document.write("Number is " + b)