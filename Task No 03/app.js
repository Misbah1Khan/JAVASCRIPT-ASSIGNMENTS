var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var even = [];
var odd = [];

for(var i = 0; i < num.length; i++){

    if (num[i] % 2 === 0) {
        even.push(num[i]);
    } else {
        odd.push(num[i]);
    }
}

document.write(`<h1>Even Numbers:</h1><br>`);
document.write(`Even: ${even}<br>`);
document.write(`<h1>Odd Numbers:</h1><br>`);
document.write(`Odd: ${odd}<br>`);

