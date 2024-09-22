// let input=document.getElementsByTagName("input")
// let button= document.getElementsByTagName("button")
// let location=document.getElementsByTagName("h1");


// button.addEventListener("click", ()=>{
//   let loc=input.value;
//     if(loc){
//         fetchWeather(loc);
//     }
    
// });

// function fetchWeather(loc){

// }

let apikey="620883dd52de217715e73d5d676b1b8e";


let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let  searchbox= document.querySelector(".search input");

let  searchbtn = document.querySelector(".search button");
let city=document.querySelector(".city")

// let city=document.querySelector(".location");




async function checkweather(city) {
    let response=await fetch (apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerhtml=data.name;
    // document.querySelector(".input").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp+ "c";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed +" km/h";

  }
 
   searchbtn.addEventListener("click", (event)=>{
    // city.innerHTML=event.target.value;
    event.preventDefault();
    checkweather(searchbox.value);
})
 
 checkweather();