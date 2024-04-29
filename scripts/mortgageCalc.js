"use strict"

console.log("it is working!")




    //calculate button
    const calculateButton = document.querySelector("#calculateButton");

    calculateButton.addEventListener("click", calculate);

 

//insert values 
function calculate(){

    let principal = Number( document.querySelector("#principal").value)
    let interestRate = Number( document.querySelector("#interestRate").value )
    let loanTerm = Number( document.querySelector("#loanTerm").value )
    let result =document.querySelector("#calculatedResults")
    

   //number of years
    let numberOfPaymentsAYr = 12
    //interest rate into decimal
    let interestRateCalc = interestRate / 100

    //formula the formula for loan payment per month

    let principalPerYear = principal * (interestRateCalc/numberOfPaymentsAYr)
    let numberOfinterestPerTerm = 1-(1/ (1 + (interestRateCalc/numberOfPaymentsAYr))** (numberOfPaymentsAYr*(loanTerm)))
    let loanPaymentAMonth = principalPerYear/numberOfinterestPerTerm

    //calculate how much total cost of interest

    let totalOfAllMonthlyPay = loanTerm * numberOfPaymentsAYr * loanPaymentAMonth
    let totalCostOfInterest = totalOfAllMonthlyPay - principal

    result.textContent = (`A $${principal} loan at ${interestRate}% for ${loanTerm} years would have a $${loanPaymentAMonth.toFixed(2)}/month payment with a total interest of $${totalCostOfInterest.toFixed(2)}`)
    //result will out put onto the label on the window
    

}




