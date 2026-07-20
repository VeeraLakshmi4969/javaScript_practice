// async -> Makes a function return a Promise automatically.
async function fetchData() {

    // Returns a resolved Promise with this value.
    return "Data Fetched";
}

async function main() {

    // await -> Waits for the Promise to finish and gets its result.
    const data = await fetchData();

    // Prints the resolved value.
    console.log(data);
}

// Calls the async function.
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

// async -> Makes a function return a Promise.

// await -> Waits for the Promise to resolve before continuing.

// return -> Resolves the Promise with a value.

// throw -> Rejects the Promise and stops function execution.

// try -> Executes code that may throw an error.

// catch -> Handles errors thrown inside try.

// error.message -> Gets only the error message.

// Promise -> Represents the future result of an asynchronous task.

// Used for operations that take time (API calls, file reading, timers).

// States:
// Pending   -> Waiting
// Fulfilled -> Success
// Rejected  -> Failed

// await -> Waits for the Promise to complete and returns its result.