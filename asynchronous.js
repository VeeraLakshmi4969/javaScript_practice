function StepOne(callback){
    setTimeout(()=>{
        console.log("Step one completed.");
        callback();
    },1000);
}
function StepTwo(callback){
    setTimeout(()=>{
        console.log("Step Two completed.");
        callback();
    },1000);
}
function StepThree(callback){
    setTimeout(()=>{
        console.log("Step Three completed.");
        callback();
    },1000);
}

StepOne(()=>{
    StepTwo(()=>{
        StepThree(()=>{
            console.log("All Steps Completed.")
        })
    })
})