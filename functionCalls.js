function greet(name){
    console.log(`hello, ${name}`)
}
greet('Veera Lakshmi')

function doSomeThing(callback){
    console.log('do something else...');
    callback();
}
 
function callbackFunction(){
    console.log('callback function executed')
}
doSomeThing(callbackFunction);