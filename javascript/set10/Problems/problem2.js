// Calculate 70! with high precision (all digits)
let product = 1
let a = 1
let i = 1
while (i <= 70){
    product = product*a
    a=a+1
    i+=1
}
console.log(product)