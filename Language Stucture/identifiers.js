//'An Identifier is nothing but a name to represent a thing in javascript such as a variable or function'
//A vaild Identifier must start with a letter or a underscore(_) or a dollar sign($).
//the remaining charecters can be a anything in letters , digits , underscores and dollar sign
console.info('The following identifiers are legal: \ni\nthis_is_a_sample_variable\n$value\n_start')
var i = 1;
var this_is_a_sample_variable;
var $value ;
var _start;
//For editing practicality , ASCII letters and digits are used commonly
//But javascript allows entire Unicode set.
console.info('The following identifiers are also legal: \nδ\nΩ\ncoût')
var δ = 1.2;
var Ω;
var coût;
console.info('=================================================')
//Identifier name other than this is not accepted and throws the following error "SyntaxError: Unexpected token ILLEGAL"
console.info('The following line contains : \n//var 1j;')
console.info('It contains a illegal identifier , uncomment it and try running the code , it will throw "SyntaxError: Unexpected token ILLEGAL"')
//var 1j;