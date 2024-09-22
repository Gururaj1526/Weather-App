// function displayAlert(){
//     alert("Submitted Successfully.............")
// }


// function displayMsg(){
//     document.writeln("Hii How Are You............?")
// }

// function form(username,password){
//     document.getElementById(username);
//    document.getElementById(password);
//     document.write(username);
//     document.write(password);

// let btn = document.getElementById("btn")
//  btn.addEventListener("click",()=>{
//     let h1= document.createElement("h1");
//     document.body.appendChild(h1);
//     h1.innerHTML="Hello Im Button";
//     })

// let btn=document.querySelector("#btn");

// btn.addEventListener("click",()=>{
//    let img=document.createElement("img");
//    document.body.appendChild(img)
//    .setAttribute("src","chocolate-caramel-fudge-cake-half-kg_1.webp");
//    img.setAttribute("height","300");
//    img.setAttribute("width","400");

//    img.addEventListener("click",()=>{
//       img.remove(img);
//    })
// })

// let button=document.getElementById(btn);

// button.addEventListener("click",()=>{
//    let button1=document.createElement("button");
//    document.body.appendChild(button1);
//    // button1.setAttribute("")
// })


// let form=document.getElementById("form");


// let form=document.getElementById("form");

// form.addEventListener("submit",(event)=>{
//    event.preventDefault();
//    let username=document.getElementById("username").value;
//    let password=document.getElementById("password").value;

//    let person={
//       username:username,
//       password:password
//    }
//     console.log(person );

// })

// Input event 

// let Form=document.getElementById("from");
// let Text=document.getElementById("text");

//  Form.addEventListener("input",event=>{
//    event.preventDefault();
//    Text.innerHTML=event.target.value;

// });

// change Event 

// let Form = document.getElementById("form");
// let Text1 = document.getElementById("text");


// Form.addEventListener("focus", event => {
//    event.preventDefault();
//    // Text1.innerHTML = event.target.value;
//    Text1.innerHTML = "hello";

// });

let input1=document.getElementById("textbox")

let text=document.getElementById("heading")
input1.setAttribute("size","40");



textbox.addEventListener("focus",function(){
   heading.innerHTML="Hii";
   heading1.innerHTML="Hello";
   heading2.innerHTML="How";
   heading3.innerHTML="Are";
   heading4.innerHTML="You";
   heading5.innerHTML="????";
  

}) 