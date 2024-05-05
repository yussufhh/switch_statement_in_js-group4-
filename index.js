// // //switch statement in javascript
// // //A switch statement in JavaScript is a control flow statement that allows the 
// program to execute different blocks of code based on the value of a specified expression. 
// It provides an efficient way to handle multiple possible conditions without using multiple 
// nested if statements. The switch statement evaluates an expression and then compares the 
// resulting value to multiple cases. If a match is found, the corresponding block of code 
// associated with that case is executed. If no match is found, an optional default case can be executed.

// // In simpler terms, a switch statement allows you to take different
//  actions depending on the value of a variable or expression. It's like a
//   traffic cop directing incoming traffic to different lanes based on the 
//   destination each car is headed towards.

// syntax in switch statement in JS
//switch (expression) {
   // case value1:
      // code block to be executed if expression === value1
    //  break;
   // case value2:
      // code block to be executed if expression === value2
      //break;
    // more cases can be added as needed
    //default:
      // code block to be executed if expression doesn't match any case
  //}
  //EXAMPLES OF SWITCH STATEMENT
  //1)
//   var score = 88;
// var grade;

// switch (true) {
//   case score >= 90:
//     grade = "A";
//     break;
//   case score >= 80:
//     grade = "B";
//     break;
//   case score >= 70:
//     grade = "C";
//     break;
//   case score >= 60:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(grade); // Output: B
const work = "cook";
let salary;

switch (work) {
  case "cook":
    salary = 10000;
    break;
  case "driver":
    salary = 20000;
    break;
  case "teacher":
    salary = 30000;
    break;
  case "manager":
    salary = 40000;
    break;
  default:
    salary = 0; // Default salary if work doesn't match any case
}

console.log(salary); // Output: 10000



