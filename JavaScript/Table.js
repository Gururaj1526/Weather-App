
// let table=document.createElement("table")
//     document.body.appendChild(table);

// let th1=document.createElement("th")
//     document.body.appendChild(th1);
//     th1.innerText="id  ";
    
// let td=document.createElement("td");
//     document.body.appendChild(td);
// document.write( "101 ");
// document.write( "102 ");
// document.write( "103 ");
// document.write( "104 ");


// let th2=document.createElement("th")
//     document.body.appendChild(th2);
//     th2.innerText="Name";

// let th3=document.createElement("td");
//     document.body.appendChild(th3);
// document.write( "Dhanesh ");
// document.write( "Nagesh ");
// document.write( "Shubhash ");
// document.write( "Abhi ");

// let th4=document.createElement("th")
//     document.body.appendChild(th4);
//     th4.innerText="Course";

// let th5=document.createElement("td");
//     document.body.appendChild(th3);
// document.write( "Java Full Stack ");
// document.write( "Python Full Stack ");
// document.write( "Data Science ");
// document.write( "Data Analyst ");

// let th6=document.createElement("th")
//     document.body.appendChild(th6);
//     th6.innerText="Fees";

// let th7=document.createElement("td");
//     document.body.appendChild(th7);
//     document.write( "30000 ");
//     document.write( "30000 ");
//     document.write( "30000 ");
//     document.write( "30000 ");

// How to create a an list element 

// function addLang(lang){
//     let li=document.createElement("li");
//     document.querySelector(".parent").append(li)
//     li.innerHTML=lang;
 //    li.style.color("red")
// }

// addLang("HTML");
// addLang("CSS");
// addLang("JAVASCRIPT");

// let edit2lang=document.querySelector("li:nth-child(1)");
// edit2lang.innerHTML="React";
// edit2lang.remove();  


function table(data){
    let th=document.createElement("th");
    document.querySelector(".parent").append(th)
    th.innerHTML=data
}

table("Id ");
table("Name ");

table("Salary ");

function row(data1){
    let tr=document.createElement("td");
    document.querySelector(".parent").append(tr);
    tr.innerHTML=data1;
}

row("101")
