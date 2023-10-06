/*
author: jomard
date: october/6/2023
descption: tech chick 3
*/

// DO NOT EDIT: The main function to house our program code 
function main()


{
    let readlineSync = require("readline-sync")
    //input
    let a = question.readlineSync("enter the grade value")
    let b = question.readlineSync("enter the grade value")
    let c = question.readlineSync("enter the grade value")
    let d = question.readlineSync("enter the grade value")
    let f = question.readlineSync("enter the grade value")
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

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
