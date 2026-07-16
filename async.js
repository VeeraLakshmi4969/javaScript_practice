async function fetchData(){
    return 'Data Fetched';
}
async function main() {
    const data = await fetchData();
    console.log(data);
}
main();
// --------------------------------------------------------------------------------

async function fetchData() {
    throw new Error('failed to fetch data!');
    console.log(data);
}
main();

async function main(){
    try{
        const data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.error(error.message);
    }
}