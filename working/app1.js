
var firstname = 'Jane';

// this is an expression and immediately invoke it meaning calling the function
(function (lastname){
    var firstname = 'John';
    console.log(firstname + ' ' +lastname);
}('Doe'));


console.log(firstname);