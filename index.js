// Write your solution in this file!
//const employee = obj;
const employee = { 
    name : 'ahmad',
    address : 'turkey',
    streetaddress : 'pasalani'
}
function updateEmployeeWithKeyAndValue(employee,key,value)
{
        const newemployee = {...employee, "name": "Sam", "streetAddress": "11 Broadway"  };
       // newemployee.key = value;
        return newemployee
    
      
      
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{
 
       // const newemployee = employee;
        //newemployee.key = value;
        //return newemployee;
        employee[key] = value;
        return  employee;
      
}
function deleteFromEmployeeByKey(employee,key)
{
   const newemployee = { ...employee[key] };
   delete newemployee[key] ;
    return newemployee;
  
  
}
function destructivelyDeleteFromEmployeeByKey(employee,key)
{
    delete employee[key];
    return employee;
}