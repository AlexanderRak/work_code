document.addEventListener("DOMContentLoaded", function () {

   // Вариант 1
   fetch("https://tst.comfy.ua/api/customers/current/info")
      .then(res => res.json())
      .then(Date => console.log(Date));

   // Вариант 2

   // const requestURL = 'https://tst.comfy.ua/api/customers/current/info';
   // function sendRequest(method, url) {
   //    return fetch(url).then(Response => {
   //       return Response.json();
   //    })
   // }

   // sendRequest('GET', requestURL)
   //    .then(Date => {
   //       console.log(Date.email);
   //       console.log(Date.firstName);
   //       console.log(Date.phone);
   //    });

   // Вариант 3

   const requestURL2 = 'https://tst.comfy.ua/api/customers/380660000000/results';
   function sendRequest(method, url) {
      return fetch(url, {
         method: 'GET',
         headers: {
            "Context-type": "application/json"
         }
      }).then(Response => {
         return Response.json();
      })
   }

   sendRequest('GET', requestURL2)
      .then(Date => {
         console.log(Date);
      });

});

let str = "Смартфони,Молотки, кувалди, киянки,Ключі";
console.log(str.replace(/(, )/g, " "));

// var str = "fdsfsd";
// if(str.replace(/\s/g,'')==''){
//          str = 'new         new';
// }
// console.log(str.replace(/\s+/g,' '));