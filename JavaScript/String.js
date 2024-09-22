let name="Gururaj Margur";
console.log(name);
let res=name.substring(8);
console.log(res);

// concat method 

let address="pune";
let state=" Maharastra";
let res1= address.concat(state);  
console.log(res1);

// charat method 

let place="Bengaluru";
let res2=place.charAt(7);
console.log(res2);

// trim method

let lecture= "           WebTech Class         ";
let cutextra=lecture.trim();
console.log(lecture);
console.log(cutextra);


let Msg="java is high level programming language which follows java oops java  principle"

let res3=Msg.replace("java","javascript");
console.log(res3);
let res4=Msg.replaceAll("java", "Python");
console.log(res4);


let Msg1="Sorry";
let res5=Msg1.repeat(100);
console.log(Msg1);
console.log(res5);

let cap=Msg1.toUpperCase();
let low=Msg1.toLowerCase();
console.log(cap);
console.log(low);


let Fullname="Gururaj";
let res6=Fullname.padStart(10,"Mr.");
let res7=Fullname.padEnd(14, " Margur");
console.log(res6);
console.log(res7);

