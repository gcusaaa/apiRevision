exports.subtraction = (a, b) => {
    return b > a ?
    `${b} is great then ${a}` :
    a + b
}
// console.log(utils.subtraction(5, 8)); 

 // Output: -3

// exports.subtraction = (a, b) => {
//     if(b == 0){
//         throw new Error("Cannot subtract by zero")
//     } else{
//         return a - b;
//     }
// };

// // exporting the functions using object literal syntax
// export const multiplication = (a, b) => a * b;
// export const division = (a, b) => {
//     if(b === 0){
//        throw new Error('Cannot divide by Zero'); 
//     }else{
//       return a / b;    
//     }
// };