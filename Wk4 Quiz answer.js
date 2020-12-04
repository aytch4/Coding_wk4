// I panicked on # 2 on the quiz. I worked through instanceof.  Here's the answer.

const customers = [
    {
        name: 'cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 21
         }, 
        ]

let condition1 = customers.filter(function(element) {
    return element.name.charAt(0) == 'C' || element.name.charAt(0) == "c";
})
console.log(condition1)

let condition2 = condition1.filter(function(element) {
    return element.address.city == 'Peoria' && element.address.state == "AZ";
})
console.log(condition2)

let condition3 = condition2.filter(function(element) {
   return element.address.street != 'undefined' && element.address.city != 'undefined' && element.address.zip != 'undefined' && element.address.state != 'undefined';
})    ;
console.log(condition3)

let condition4 = condition3.filter(function(element) {
    return element.membershipLevel == 'GOLD' || element.membershipLevel == 'PLATINUM' || (element.membershipLevel == 'SILVER' && element.age < 29); 
})
console.log(condition4)

let condition5 = condition4.filter(function(element) {
    return element.age % element.name.length == 0; 
})
    
console.log(condition5)



