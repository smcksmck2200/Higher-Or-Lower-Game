//alert('The computer picked a number between 1 and 100. Enter your guess')


let y = Math.floor(Math.random() * 100 + 1);

let input = 10;

document.getElementById('submitInput', 'addCount').onclick = function() {

    let x = document.getElementById('inputField').value;

    if (x == y) {
        alert('YOU ARE A WINNER!!! YOU GUESSED IT IN ' + input + " TRIES ");

    } else if (x > y) {
        input--;
        alert(`YOUR TOO HIGH!! THINK OF A NUMBER LOWER THAN ${x}!
        YOU HAVE ${input} MORE GUESSES!`);

    } else {
        input--;
        alert(`YOUR TOO LOW!! THINK OF A NUMBER HIGHER THAN ${x}! 
        YOU HAVE ${input} MORE GUESSES!`);
    }

    document.querySelector('#count').innerHTML = input
    if (input < 1) {
        alert(`GAME OVER! YOU'VE HAD 10 GUESSES, BETTER LUCK NEXT TIME!`);
        document.querySelector('body').classList.remove('red-bkg');
        document.querySelector('body').classList.add('red-bkg');
    } else
        x = document.getElementById('inputField').value = "";
}