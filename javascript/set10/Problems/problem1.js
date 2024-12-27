// Calculate Fibonacci(500) with high precision (all digits)

let sum = 0
let a = 0
let b = 1
let i = 2
while( i <= 500 ){
    sum = a+b
    a=b
    b=sum
    i+=1
}
console.log(sum)