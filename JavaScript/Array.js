// let array=[190,"gururaj", true,2000.49];
// document.write(arr);

// arr[4]="Sachin";

// document.writeln(arr);



// let salaries=new Array(10);
// salaries[0]="8 apples";
// salaries[1]="6 apples";
// salaries[2]="10 apples";
// salaries[3]="8 apples";

// document.writeln(salaries);


// let salaries =new Array(28,40,50);

// document.writeln(salaries)



// let movies=["stree","dabbung","wanted","bharat","bajirao Mastani","ready"];

// // console.log(movies);

// // // movies.push("Laila Majanu");

// // // movies.pop();

// // movies.shift();
// // console.log(movies);
// //  movies.unshift("Maharaja");

// // // console.log(movies.slice(1,4));
// // // let res=movies.slice(1,4);
// // // console.log(res);


// // console.log(movies);
// // console.log(movies.splice(1,3,"Mitava"))
// // console.log(movies);

// console.log(movies.includes("stree"));


// console.log(movies.sort());

// console.log(movies.reverse());

// let actres=["dipika","katrina"]
// let res= movies.concat(actres);
// console.log(res);

// let number=[10,34,43,23,45,46,12,13];
// console.log(number);

// let res=number.filter(isEven);

// function isEven(i){
//     return i%2==0;
// }

// console.log(res);


// let element= number.filter((i)=>{
//     return i%2==0;
// })
// console.log(element);

// let actres=["Depika", "katrina"];
// let i='Katrina'

// let name=actres.filter((i)=>
// {
//     return i=='Depika' || i=='Katrina';
// })
// console.log(name);


let number= [10,33,49,22,55,36,24];

let res= number.reduce(add)

function add(p1,p2){
   return p1+p2;
}

console.log(res);