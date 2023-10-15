function sendRequest(method, url) {
   const headers = {
      'Content-Type': 'application/json'
   };

   // return fetch(url, {
   //    method: method,
   //    headers: headers
   // })
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve(responseMock2), 1000);
   })
      .then(response => {
         if (response.ok) {
            console.log("ok");
            //return response.json()
            return response;
         }

         return response.json().then(error => {
            console.log(error);
            console.log(response.status);


         });
      });
}

sendRequest('GET', requestURL)
   .then(data => {
      let mass = data.books;



   })
   .catch(err => console.log(err));

console.log(afsd);


// Найти факториал числа через рекурсию
// !n = if(f == 1) = 1
// !n = if(f > 1) = f * (f - 1)!

function faktorial(n) {
   if (n === 1) {
      return 1;
   } else {
      return n * faktorial(n - 1);
   }
}

console.log(faktorial(4));



{
   // Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково слева направо и справа налево).
   // Напишите функцию, которая принимает число и проверяет, является ли оно простым (не имеет делителей, кроме 1 и самого себя).

   let starNum = 2;
   let endNum = 10;


   function evenNumbers(starNum, endNum) {

      for (let i = starNum, max = Math.sqrt(endNum); i <= max; i++) {
         if (endNum % i === 0) {
            console.log(i + " не простое");
         } else {
            console.log(i + " простое");
         }
      }
      //return result;
   }

   evenNumbers(starNum, endNum);

}

{
   function isPrime(num) {
      for (let i = 2, max = Math.sqrt(num); i < num; i++) {
         if (num % i === 0) {
            return false;
         }
      }
      return num > 1;
   }
   console.log("1", isPrime(1));
   console.log("2", isPrime(2));
   console.log("3", isPrime(3));
   console.log("4", isPrime(4));
   console.log("5", isPrime(5));
   console.log("6", isPrime(6));
   console.log("7", isPrime(7));
   console.log("8", isPrime(8));
   console.log("9", isPrime(9));
   console.log("10", isPrime(10));
}

{
   function isPrime(num) {
      let res = [];

      for (let i = 2; i < num; i++) {
         for (let j = 2; j < num; j++) {
            if (i % j === 0) {
               break;
            }
            res += i;
         }
         
      }
      return res;

   }
   console.log(isPrime(10));

}