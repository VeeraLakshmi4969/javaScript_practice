function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
}
function sayGoodbye(){
console.log("good bye!");
}
greet('nani',sayGoodbye)

function fetchData(callback){
    setTimeout(()=>{
        const data = 'fetched data';
        callback(data);
    },2000);
}
function processData(data){
    console.log(`procesing : ${data}`)
}
fetchData(processData);