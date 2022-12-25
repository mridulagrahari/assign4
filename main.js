const request = new XMLHttpRequest();

request.open('GET',"https://restcountries.com/v3.1/all");


request.send(undefined);


request.onload = function() {
    const response = JSON.parse(request.responseText);
    console.log(response);


 for(var country of response){
    const {flag,name,region,population} = country;
    console.log(flag,name,region,population)
 }

 for(var country of response){
    const {flags} = country;
    console.log(flags)
 }
};