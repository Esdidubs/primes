let num = 1000000;
let primes = [];
let primeStr = ``;

for(let i=2; i<= num; i++){
    if(primeCheck(i)){
        primes.push(i);
    }
}

function primeCheck(num){
    for(let j=2; j<=Math.sqrt(num); j++){
        if(!(num==j) && num % j == 0){
            return false;
        }
    }
    return true;
}

for(let i=0; i<primes.length; i++){
    if(i>0 && i%10 == 0){
        primeStr += `<br />`
    }
    primeStr += ` ${primes[i]} `
}

$('#primes').replaceWith(` 
    <div id="primes">
        <h1>Prime numbers up to ${num}</h1>
        <p>${primeStr}</p>
    </div>
`);