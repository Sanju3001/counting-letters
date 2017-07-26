

function countIndices(expression) {

var newExpression = expression.replace(/ /g, "");

var result = {};

  for (var i = 0; i < newExpression.length; i++) {

    if (result[newExpression[i]] == undefined ) {
      result[newExpression[i]] = [i];
    } else {
      result[newExpression[i]].push(i);
    }
  }

console.log(result);

}

countIndices("lighthouse in the house");

