/*Solving problems using array functions on rest countries data.
Get all the countries from Asia continent /region using Filter function
Get all the countries with a population of less than 2 lakhs using Filter function
Print the following details name, capital, flag using forEach function
Print the total population of countries using reduce function
Print the country which uses US Dollars as currency.
*/

var xhr = new XMLHttpRequest();

// Open a request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(this.response);
    var user=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);  //ans of question a
    var user=data.filter((ele)=>ele.population<200000).map((ele)=>ele.name);  //ans of question b
      data.forEach((ele)=>console.log(`${ele.name},${ele.capital},${ele.flag}`)); //ans of question c
    var user=data.reduce((m1,m2)=>m1+m2.population,0);                             // ans of question d
    var user=data.filter((ele)=>ele.currencies[0].symbol==="$").map((ele)=>ele.name);  //ans of question e
       console.log(user);
    }
};

 xhr.send();

