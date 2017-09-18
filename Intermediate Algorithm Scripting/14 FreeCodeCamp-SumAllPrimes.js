/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 14 - Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Requirements/Sample Output:
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function sumPrimes(num) {
  var temp = [];
  var sum = 0;
  for (var i = 2; i <= num; i++) {
     if (isPrime(i) == true) {
        temp.push(i);
     }
  }
  
  for(var j=0; j<temp.length; j++) {
    sum += temp[j];
  }
  
  return sum;
}

function isPrime(n) {
    for (var i = 2; i < (n / 2 + 1); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

sumPrimes(977);
