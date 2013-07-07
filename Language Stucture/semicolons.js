/*In javascript semicolons are used to seperate statements from each other .
The semicolons are optional . It is not required When we seperate two statements
 using a line break.

It is option of style to either use semicolons between every statements or leave 
out in normal places and use in places which requires them.    	
*/

var x = 10 ;
var y = 15 ;

console.info('The above statements are \n \n var x = 10 ;\n var y = 15 ; \n \nand are perfecty valid statements')
console.info('The value of x is ' + x + '\nThe value of y is ' + y)

var m = 20 ;var n = 25 ;

console.info('The above statement is \n \n var m = 10 ;var n = 15 ; \n \n and are perfecty valid statements')
console.info('The value of m is ' + m + '\nThe value of n is ' + n)

/* Javascript does not replace every line break with a semicolon , It just 
inserts on if it cannot parse the code further
*/

var num
num
=
50

console.info('The above statement is \n \n var num \n num \n = \n 50 \n \n and is parsed as \n \n var num;\n num = 50')
console.info('The value of num is ' + num)

/* In the similar way , the below statement 

var y = x + f
(a+b).toString()

will be parsed as

var y = x + f(a+b).toString();

So if the following line has '[' , '/', '+', '-' then the chances are that it may be parsed wrongly
*/

/*
There are two exceptions for these rule
The first one is for return , break , continue statements
*/


var f = function(){
	return
	true
}

var res = f()

console.info('The above statement is \n \n var f = function(){ \n 	return \n \n	true \n   } \n \n var res = f()\n')
console.info('The above function returns undefined against expectation of returning true')
console.info('The vaule of res is ' + res)

/*
The second one is for post-increment and pre-increment operators
*/

var a = 1;
var b = 1;

a
++
b

console.info('\nThe above statement is \n a \n++\nb\n')
console.info('It is parsed as a; ++b; and not as a++; b')
console.info('The value of a is ' + a + '\nThe value of b is ' + b)

