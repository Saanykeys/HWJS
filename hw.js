//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26
Explain: 3 + 5 + 7 + 9 + 2 = 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 


for( var i=1; i<21; i++ ) {
    if( (i%3) === 0 && (i%5) === 0 ) {
        console.log( "FizzBuzz" );
    }else if( (i%3) === 0 ) {
        console.log( "Fizz" );
    }else if( (i%5) === 0 ) {
        console.log( "Buzz" );
    }else{
        console.log( i );
    }
}