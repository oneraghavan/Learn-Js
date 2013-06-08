
//the following two lines execute same output
console.info('français')
//unicode escape sequences are allowed with \u
console.info('fran\u00E7ais')
//javascript treats both the lines equally , it is done to support programmers using older technology.
//unicode escape sequences are allowed with \u , For example this returns true
//example 1 
console.info(" the equation 'français'==='fran\u00E7ais' returns ")
console.info('français'==='fran\u00E7ais')
//example 1 
console.info(" the equation ''café'==='caf\u00e9'")
console.info('café'==='caf\u00e9')