/*
author: jomard
date: october/6/2023
descption: tech chick 3
*/

// DO NOT EDIT: The main function to house our program code 
function main()


{
    let readlineSync = require("readline-sync");

    //input
    let gradesArya = [4,3,2,1,0];
    let a = parseFloat(readlineSync.question("enter the grade value"));
    let b = parseFloat(readlineSync.question("enter the grade value"));
    let c = parseFloat(readlineSync.question("enter the grade value"));
    let d = parseFloat(readlineSync.question("enter the grade value"));
    let f = parseFloat(readlineSync.question("enter the grade value"));

    //process
    if(a){
        console.log(4)

    }else if(b){
        console.log(3)
    }else if(c){
        console.log(2)
    }else if(d){
        console.log(1)
    }else if(f){
        console.log(0)
    }else{
        console.log("the info you enterd is wrong")
    }


    //output
    console.log("your grade is: ")

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
