const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng', 'fsd'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function (plan) {
      let string = '';
      let { age } = plan;
      let { languages } = plan.skills;
      string = `Мне ${age} и я владею языками: `;

      languages.forEach(function (lang) {
         string += `${lang.toUpperCase()} `;
      });

      return string;
   }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
   let { exp } = plan.skills;
   return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
   let { programmingLangs } = plan.skills;
   let string = '';
   for (const key in programmingLangs) {
      string += `Язык ${key} изучен на ${programmingLangs[key]}\n`
   }
   return string;
}
showProgrammingLangs(personalPlanPeter);

// ------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length) {
      let str = `Семья состоит из: `;
      arr.forEach(function (value) {
         str += `${value} `;
      });
      return str;
   }
   else {
      return "Семья пуста";
   }

}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(function (value) {
      console.log(value.toLowerCase());
   });

}
standardizeStrings(favoriteCities);

// ------------------------------------

const someString = 'This is some strange string';

function reverse(str) {
   if(typeof(str) === "string") {
      let newString = '';
      for (let i = str.length - 1; i >= 0; i--) {
         newString += str[i];
      }
      return newString;
   } else {
      return "Ошибка!";
   }

}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   if (arr.length === 0) {
      return "Нет доступных валют";
   } else {
      let str = `Доступные валюты:\n`;
      arr.forEach(function (val, index) {
         if (val !== missingCurr) {
            str += `${val}\n`;
         }
      });
      return str;
   }
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');