var name = 'JavaScript' ;
const version = 'es2015' ;
const language = { name: 'Python', version: 'v3.7.1' };
function foo() { 
    console.log(`${this.name}----${this.version}`) 
}
const bar = foo.bind(language);
foo() 
bar()