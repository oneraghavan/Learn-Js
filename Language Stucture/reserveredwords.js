//reserverd keywords are names that the language uses itself. You cannot use any of these as identifiers.
//the following are the words you connot you.
/*
break    ,   else     , instanceof  , true
case     ,   false    , new         , try
catch    ,   finally  , null        , typeof	 
continue ,   for      , return      , var
debugger ,   function , switch      , void
default  ,   if       , this        , while
delete   ,   in       , throw       , with 
do
*/
console.info('The next line is \n//var break;')
console.info('When you uncomment it and run the program , it throws error: \nSyntaxError: Unexpected token break')
//var break;

console.info('=======================================')
/*apartment this there are couple of words , that are currently not used in the 
lauguage , but reserved to be used in the future versions.
The folloing are such words.
*/
/*
class   ,    enum     , extends     , super
const   ,    export   , import      
*/
console.info('The next line is \n//var export;')
console.info('When you uncomment it and run the program , it throws error: \nUnexpected reserved word')
//var export;
console.info('=======================================')
//In addition to these , following words are reserved words in strict mode
/*
implements  , let      , private   , public , arguments , eval
interface   , package  , protected , static , yield
*/
/*
As ECMAScript 3 reserved all javascript keywords . But in ECMAScript 5 , these have been relaxed ,
But if you want your code to work on ECMAScript 3 environment . Do use these words.

abstract   ,boolean   ,byte      ,char   ,class   ,const         ,double   
enum       ,export    ,extends   ,final  ,float   ,goto          ,implements
import     ,int       ,interface ,long   ,native  ,package       ,private   
protected  ,public    ,short     ,static ,super   ,synchronized  ,throws   ,transient
*/