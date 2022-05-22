console.log("JS File Executed");

// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v3.1/all", true);

// Send the Request to the Server 
request.send(null);

function printCountry(country) {
  console.log(country.flag);
  console.log(country.languages)
}


// Parse the Text Passed on from the server
request.onload = function () {
  var response = JSON.parse(request.responseText);
  console.log(response);

  // Simple For Loop
  // for(var i=0;i<response.length;i++) {
  //   console.log(response[i].flag);
  //   console.log(response[i].languages);
  // }
    
  // forEach
  // response.forEach(function (country) {
  //   console.log(country.flag);
  //   console.log(country.languages)
  // })
  // forEach with named function
  // response.forEach(printCountry)
  // or arrow function
  // response.forEach((country) => {
  //   console.log(country.flag);
  //   console.log(country.languages);
  // })

  // For of
  // for(const x of response) {
  //   console.log(x.flag);
  //   console.log(x.languages);
  // }
  
  // response.forEach((country) => {
  //   console.log("########## Details Of ###########", country.flag);
  //   for( const key of Object.keys(country)) {
  //     console.log(key, country[key]);
  //   }
  // });


}

request.onerror = function () {
  console.log("I have some error")
}


const personObj = {
  name: "Sanjay",
  role: "Developer",
  DOB: "YY-MM-DD",
}

for(const key in personObj) {
  console.log(key, personObj[key])
}

const arrKeys = Object.keys(personObj);

arrKeys.forEach((key) => console.log(key, personObj[key]));

// for( const key of )