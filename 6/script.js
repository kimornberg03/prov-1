 let personOne = { Name: "Albin", afterName: "Svensson", Age: 17, Email: "Albin.svensson@gmail.com" }
 let personTwo = { Name: "Albin", afterName: "Svensson", Age: 17, Email: "Albin.svensson@gmail.com" }


 console.log(isSameUser(personOne, personTwo))



 function isSameUser(first, second) {

     if (first.email == second.email) {
         return true
     } else {
         return false
     }
 }