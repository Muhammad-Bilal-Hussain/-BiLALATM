#! /usr/bin/env node
//1
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"q1",
            message:"Enter Your Card Pin",
            type:"number",

        }
    ]
);
//2
if(pinAnswer.q1 === myPin){
    console.log("your Pin Code is Currect");
    let method2 = await inquirer.prompt(
        [
            {
                name:"withdrawC",
                message:"What U Want To Do",
                type:"list",
                choices:["withdraw","check balance", "fast cash"],
            }
        ]
    );
//3
    if(method2.withdrawC === "withdraw"){
        let askAmount = await inquirer.prompt(
            [
                {
                    name:"enterAmount",
                    message:"Enter Amount ",
                    type:"number",
                }
            ]
        );
        if(askAmount.enterAmount < myBalance){
         myBalance -= askAmount.enterAmount;
            console.log("Now Your Balance is "+ myBalance);
        }
        else{
            console.log("unsuficient Blnce");
        }
    }
//4
    else if(method2.withdrawC === "fast cash"){
        let fastcash = await inquirer.prompt(
            [
                {
                    name : "cashoption",
                    message:"Please Select Fast Cash Option",
                    type:"list",
                    choices:["1000","2000","5000","10,000"],
                }
            ]
        );
//5
        if(fastcash.cashoption< myBalance){
            myBalance -= fastcash.cashoption;
            console.log("Now Your Balance is "+ myBalance)
        }
    }       else if(method2.withdrawC === "check balance"){
        console.log("Your Balance is " + myBalance)
    }
}
else{
    console.log("incurrect Pin");
}