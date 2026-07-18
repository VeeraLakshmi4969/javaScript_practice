let count = 0;
while(count<5){
    console.log(`count : ${count+1}`);
    count= count+1;
}

let breakCount = 0;
while(true){
    console.log("count :",breakCount);
    breakCount++;

    if(breakCount == 5){
        console.log("breaking out of the loop.");
        break;
    }
}