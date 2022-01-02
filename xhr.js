
var xhr = new XMLHttpRequest();

// Open a request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(this.response);
    var user=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);  //ans of question 1
    var user=data.filter((ele)=>ele.population<200000).map((ele)=>ele.name);  //ans of question 2
      data.forEach((ele)=>console.log(`${ele.name},${ele.capital},${ele.flag}`)); //ans of question 3
    var user=data.reduce((m1,m2)=>m1+m2.population,0);                           // ans of question 4
    var user=data.filter((ele)=>ele.currencies[0].symbol==="$").map((ele)=>ele.name);  //ans of question 5
       console.log(user);
    }
};

 xhr.send();










