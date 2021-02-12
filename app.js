// Number to stop at
let num = 1000000;

// variable to count number of primes
let count = 0;

let primes = [];
let primeStr = ``;


// Pushes primes into array. Starts at 2 to avoid trouble with 1.
for(let i=2; i<= num; i++){
    if(primeCheck(i)){
        primes.push(i);
    }
}

// check to see if it's a prime
function primeCheck(num){

    // only checks up to the square root because that's the highest untested value possible
    for(let j=2; j<=Math.sqrt(num); j++){

        // it's not prime if a number can go into it an equal number of times with no remainder
        if(num % j == 0){
            return false;
        }
    }

    count++;
    return true;
}

// loop to create the string to show the user
for(let i=0; i<primes.length; i++){

    // only 10 numbers per line. if more, creates a linebreak
    if(i>0 && i%10 == 0){
        primeStr += `<br />`
    }

    primeStr += ` ${primes[i]} `
}

// displays the data to the user
$('#primes').replaceWith(` 
    <div id="primes">
        <h1> There are ${count}<br>
        prime numbers up to ${num}</h1>
        <p>${primeStr}</p>
    </div>
`);