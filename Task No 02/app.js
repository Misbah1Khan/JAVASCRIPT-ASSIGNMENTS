var word = prompt("Enter a word");

var data = word.split('').reverse().join('');

if(word === data){
    console.log(`${word} is a palindrome`);
}
else{
    console.log(`${word} is not a palindrome`);
}
