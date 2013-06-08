//javascript comments.
console.info('This shows you how a valid comments can be entered in javascript')
console.info('==========================================================================')
console.info('sample 1: Single line comment')
console.info('intialing a variable i')
var i = 0;
console.info('initial value of "i" is ' , + i)
console.info('The next line in the file is : \n//i = i + 1')
//i = i + 1
console.info('This line will concidered a  comment as it starts with "//", and it is ignored')
console.info('Value of i is :' + i)
console.info('It remains unchanged')
console.info('When you use "//" ,from there till end od that line , its will ignored')
console.info('try removing the "//" and execute this file , the value will be 1')
console.info('==========================================================================')
console.info('sample 2: Multiline comment')
console.info('you can give a Multiline comment with starting /* and ending with */ , javascript will ignore these lines .')
console.info('intialing a variable j')
var j = 5;
console.info('Value of j is :' + 5)
console.info('next lines in the file are : \n/*for (var k=0;k<5;k++)\n{ \nj = j + 1\n}*/')
/*for (var k=0;k<5;k++)
{ 
j = j + 1
}*/
console.info('Value of j is :' + j)
console.info('The value of j remains unchanged as the for loop is between /* and */')
console.info('Try removing the /* and */ , the value of the j will be incremengted to 10' )

