
//var expression = new String(process.argv.slice(2));

function countLetters(expression) {

var newExpression = expression.replace(/ /g, "");

var result = {};

  for (var i = 0; i < newExpression.length; i++) {

    if (result[newExpression[i]] == undefined ) {
      result[newExpression[i]] = 1;
    } else {
      result[newExpression[i]]++;
    }
  }

console.log(result);

}

countLetters("lighthouse in the house");

