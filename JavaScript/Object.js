// // By Using Literal Method

// let empdetails={
//     id: 1234,
//     name:"Gururaj",
//     job: "manager",
//     sal:1234556,
//     project:[1,2,3,4,5,],
//     address:{
//      village: "Karkal",
//      district: "solapur",
//      state:"Maharastra"
//     },
//     ismarried: false
        
// };
// console.log(empdetails.project);


// let Citizen={
//     name:"Narendra Modi",
//     age:78,
//     job:"Prime Minister",
//     palce:"Delhi",
//     ismarried:false,
    
// }
// console.log(Citizen);

// console.log(Citizen.name);
// console.log((Citizen.FuturePrimeMinister=true));

// Citizen.food="Drumstick Soup";
// console.log(Citizen);                               

// Citizen.age=80;
// console.log(Citizen);

// // delete a values from object
// delete Citizen.age;
// console.log(Citizen);



// let emp=new Object();
// (emp.ename ="Dinga"), (emp.id=1234), (emp.sal=23445);
// emp.place="pune";
// emp.address={
//     Place: "pune"
// }
// console.log(emp);


// function employee(ename,eid,sal){
//     this.ename=ename
//     this.eid=eid
//     this.sal=sal;
// }

// employee("gururaj",123, 234576);



let bike={
    model:"Rider",
    price:120000,
    isgood:true,

}

// it returns key values
console.log(Object.keys(bike));

// it returns values of an object
console.log(Object.values(bike));

// it returns the objecct property in array 
console.log(Object.entries(bike));

// seal method it will update the objects properties but we cant delete and we cant add 
// console.log(Object.seal(bike));

// console.log(Object.isSealed(bike));

bike.color="Red";   
bike.price=230000;
console.log(bike);

// Freeze method it freezes the Object
console.log(Object.freeze(bike));                                                                               