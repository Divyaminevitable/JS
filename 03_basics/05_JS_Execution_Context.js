// video - 25
// JS EXECUTION CONTEXT


// {} -- Global Execution Context -> this
// Function Execution Context
// Eval Execution Context

// {code} -- Memory Creation phase
//        -- Execution Phase

let val1 = 10
let val2 = 5 
function addNum(num1, num2){
    let total = num1  + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// step 1 - global execution --> it will locate in this

// step2 - memory phase
//                          val1 = undefined
//                          val2 = undefined
//                          addnum = defination
//                          result1 = undefined
//                          result2 = undefined

// step 3 - Execution phase
//                          val1 = 10
//                          val2 = 5
//                          addNum = new variable environment + execution thread  // after executing the file will be automatically deleted
//                          result1 =15
//                          result2 = 

//              Memory Phase-
//                           val1 = undefined
//                           val2 = undefined
//                           total = undefined
// 
//              Execution Phase-
//                              num1 = 10    
//                              num1 = 5   
//                              num1 = 15 
// 
