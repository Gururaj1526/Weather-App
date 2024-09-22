// console.log("Hello JavaScript");
// document.write("hello Qspider"+"<br>");
// document.writeln("hello JSpider"+"<br>");
// document.writeln("Hello Pyspider");

// // prompt("Enter your Name");
// // prompt("Enter your place");

// confirm("Yes I am student of Qspider");
// alert("Submitted Successfully");
// var a=10;
// document.write(a+"<br>");
// var a=120;
// document.write(a +"<br>");

// let name="Gururaj";
// document.write(name +"<br>");

// document.write(name +"<br>");

// const age=22;
// document.write(age +"<br>");

// let name="Gururaj"
// document.write(typeof name+"<br>");
// let age=22;
// document.write(typeof age+"<br>");
// let value=null;
// document.write(typeof value+"<br>");
// let data=BigInt("12156357968318587456612697586331285468");

// document.write(typeof data+"<br>")

// let accname="Sinchan";
// const accEmail="sinchu@143";
// const accNumber=123456789987;
// const accbal=0.0000;
// let nominee;
// console.table([accname,accEmail,accNumber,accbal,nominee]);

// console.log(name);
// console.log(name2);

// var name="Sinchan";
// var name2="Doremon";
// console.log(name);


// let name1="Shaktiman";
// console.log(name1);
// let a=18;
// console.log(a>=18? "Eligible for vote": "Not Eligible");

// let p1=parseInt(prompt("Enter the first Number"));
// let p2=parseInt(prompt("Enter the Second Number"));
// let p3=parseInt(prompt("Enter the Third Number"));
// let p4=parseInt(prompt("Enter the Four Number"));
// let p5=parseInt(prompt("Enter the fifth Number"));

// let res= p1+p2+p3+p4+p5;
// let discount=res-(res*15/100);
// if(res>=10000)
// {
//     document.write("Congratulation Your order is placed successfully"+ res +" With the discount of 15%"+ discount);

// }
// else{
//     document.write("Order Some More....")
// }


// let choice=(prompt("Please Select Mode of Transport Car/Auto/Bike :"));
// let Travel=parseInt(prompt("How Many Kilometer Do You Want to Travel: "));
// if (choice== "car")
// {
//     let total=45 * Travel;
//     document.write("Dear Custmore You Have Choosen Car And Your Estimated Cost is "+total);
// }

// else if (choice == "auto")
//     {
//         let total=30*Travel;
//         document.write("Dear Custmore You Have Choosen Auto And Your Estimated Cost is "+total);
//     }

// else if (choice== "bike")
//     {
//         let total=15*Travel;
//         document.write("Dear Custmore You Have Choosen Bike And Your Estimated Cost is "+total);
//     }

//   First Program
// let name = prompt("Enter Trainer Name:");

// if(name=="rohit")
// {
//     document.write("Rohit Sir Teaches Web Technologie"+"<br>");
//     document.write("And Class Is At 10.30AM......");
// }
// else if( name=="avinash")
//     {
//         document.write("Avinash Sir Teaches Java"+"<br>");
//         document.write("And Class Is At 06.30AM......");
//     }
// else if( name=="dhananjay")
//         {
//             document.write("Dhananjay Sir Teaches Web Technologie"+"<br>");
//             document.write("And Class Is At 08.30PM......");
        // }


        let name = prompt("Enter Any Alphabet:");

        if( name==a || name==e||name==i || name==o || name==u)
        {
            document.write("The Alphabet is a vowel");
            
        }
        else 
            {
                document.write("The Alphabet is not a vowel");
            }

         let number = prompt("Enter the Number:");

            if(number%2==0)
            {
                document.write("The Number is Even Number");
                
            }
            else 
                {
                    document.write("The Number Is Odd Number");
                   
                }   

            let age = prompt("Enter Your Age:");

                if(age>=18)
                {
                    document.write("Eligible to Vote");
                    
                }
                else
                    {
                        document.write("Not Eligile to Vote");
                       
                    }        

        
             let  a= prompt("Enter first number:");
             let  b= prompt("Enter second number:");

                    if(a>b)
                    {
                        document.write(a+"is Greater number");
                        
                    }
                    else
                        {
                            document.write(b+"is smaller");
                           
                        }   
                        
         let  day= prompt("Enter the day:");

                        if(day==saturday||day==monday||day==tuesday||day==wednesday||day==thursday||day==friday)
                        {
                            document.write("Attend the class");
                            
                        }
                        else
                            {
                                document.write("Not attend the class");
                               
                            }  
                            
          let  num1= prompt("Enter first number:");
          let  num2= prompt("Enter second number:");
          let  num3= prompt("Enter Third number:");
                 if(num1>num2&&num1>num3)
                 {
                     document.write(num1+"is Greater number");
                     
                 }
                 else if(num2>num3)
                     {
                         document.write(num2+"is greater");
                        
                     }    
                else{
                    document.write(num3+"is Smaller");
                  }                   
                  


// Named Function

// function add(a,b)
// {
//     let res= a+b;
//     console.log(res)
// }
// add(10, 290);

//anonymous Function

// function(a ,b)
// {
//     console.log(a+b);
// }

//First Class Function or Fuction With Expression

// let task= function(a , b)
// {
//     return a+b;
// }

// task(200,30);
 
// function task(a,b)
// {
//     return a+b;
// }
// task(10,39);

// function login(username="darsh")
// {
//     console.log(username+"Just Logged In")
// }

// login();

// function outer(username)
// {
//     //username="Sinchan"
//     console.log(username+" Just Logged In..........");
//     function inner(username)
//     {
//         username="Sweety";
//         console.log(username+" Just Logged In..............")
//     }
//     inner();
// }
// outer();


// function greet(a)
// {
//     return "hello"
// }
// function greet2(b)
// {
//     return "How are You";

// }

// function message(msg,name,asking)
// {
//     console.log(msg(greet)+ " " +name+" "+ asking(greet2));
// }

// // 
// // 

// // 



// setTimeout(() => {
//     message(greet,"Sinchan",greet2);
// }, 5000);

// setTimeout(()=>{
//     message(greet,"Sweety",greet2);
// },7000)

// setTimeout(()=>{
//     message(greet,"Rani",greet2);
// },9000)


// Immediate Invoke fuction


(function add(a,b,c)
{
    console.log(a+b+c);
})(23,34,446);
document.write("Hello");
