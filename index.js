let employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value){
return { name : "Sam" , 
         streetAddress : "11 Broadway"}
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["streetAddress"] = "12 Broadway"
    return employee }

function deleteFromEmployeeByKey(employee, key , value){
let newEmployee = {...employee}
newEmployee[key] = value
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee , key , value){
    employee[key] = value
    return employee 
}
