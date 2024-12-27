// Print distance between the first 100 prime numbers
function isPrime(n){
    if (n < 2)
        return false;  
    if (n == 2)
        return true;
    let half = Math.sqrt(n);
    
    for(let i = 2; i <= half; i++){
        if (n % i === 0)
        {
            return false;
        }
    }
    return true;
}
let array_prime = []
let n = 0;
    let i = 2;
    
    while(n < 100)
    {
        if (isPrime(i))
        {
            array_prime.push(i);
            n++;
        }
        i++;
    }
console.log(array_prime[99]-array_prime[0])
