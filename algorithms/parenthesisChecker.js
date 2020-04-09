/*
Let’s say your teammate is working on a JavaScript code that won’t run because the brackets (square, curly, round) are not properly nested. You then decide to write a Parentheses Checker function, which efficiently checks whether or not the input string’s opening and closing brackets are correctly nested.
*/

function balancedParentheses(str) {}

console.log(balancedParentheses("{[]()}") === true);
console.log(balancedParentheses("{[(])}") === false);
console.log(balancedParentheses("{[}") === false);

/*
function balancedParentheses(str) {
  var brackets = str.split("");
  var stack = [];

  for (let i = 0; i < brackets.length; i++) {
    el = brackets[i];

    if (el === ")") {
      if (stack.pop() !== "(") return false;
    } else if (el === "}") {
      if (stack.pop() !== "{") return false;
    } else if (el === "]") {
      if (stack.pop() !== "[") return false;
    } else {
      stack.push(brackets[i]);
    }
  }

  return true;
}
*/
