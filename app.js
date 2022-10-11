// split
// let text = "hmd"
// console.log(text)
// let text1 = text.split()
// console.log(text1)

// let a = ["ali", 22 ,"gilgit"]

// a.pop()
// console.log(a)

// a.push("danyore")
// console.log(a);

// a.shift()
// console.log(a);

// a.unshift("abbas")
// console.log(a);



// let array = ["hello world"];
// array.split(" ")
// console.log(array);


// ||

// let x = 5

// console.log( x < 10 && x > 3);

// console.log( x < 10 || x > 3);

// console.log( !(x < 10 && x > 3));

// console.log( !(x > 10 ));


// --------------------------------------------------------------------


// logical opertors


// // &&

// let x = 4

// console.log( x < 10 && x > 3);


// console.log( x < 10 && x > 6);



// // ||

// let y = 5

// console.log( y <  5 || y > 6);


// // !

// let z = 100

// console.log(!( z < 99 && z > 101));

// console.log(!(z < 101 && z > 10));


// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"]

// console.log("1st choice is " , color[0]);
// console.log("2nd choice is " , color[1]);
// console.log("3rd choice is " , color[2]);

// console.log(1, o[1], "choice is " , color[0]);

// console.log(2, o[2], "choice is " , color[1]);

// console.log(3, o[3], "choice is " , color[2]);

// let choice1 = color[0]
// console.log("1st choice is",choice1);

// let choice2 = color[1]
// console.log("2nd choice is",choice2);

// let choice3 = color[2]
// console.log("3rd choice is",choice3);



//===================------------ statements ------=======================


// let age = prompt("Enter your age")

// if (age <= 12 && age >= 0){
//     alert("you are young")
// }
// else if(age < 0){
//     alert("enter valid age")
// }
// else if(age <=19){
//     alert("you are a teenager")
// }
// else if(age <= 30){
//     alert("you are mature")
// }
// else if(age <= 50){
//     alert("you are man")
// }
// else if(age <= 70){
//     alert("you are getting old")
// }
// else if(age <= 100){
//     alert("you are an old man")
// }
// else{
//     alert("you are near to death")
// }



// -====================-------- home task ----================


// let day = prompt("enter a number between 0 to 7 for day name")

// if (day == 1){
//     alert("its monday")
// }else if (day == 2){
//     alert("its tuesday")
// }
// else if (day == 3){
//     alert("its wednesday")
// }
// else if (day == 4){
//     alert("its thursday")
// }
// else if (day == 5){
//     alert("its friday")
// }
// else if (day == 6){
//     alert("its saturday")
// }
// else if (day == 7){
//     alert("its sunday")
// }
// else{
//     alert("enter valid number for day name")
// }



// =====================================================

// let age = prompt("enter your age for job")

// if (age >= 0 && age <=20 ){
//     alert("you are eligible")
// }
// else{
//     alert("you are not eligible")
// }

// ================-------- switch statement------==================


// let day = prompt("enter a number for day")

// switch(day){
//     case "1":
//         alert("its sunday")
//         break;

//     case "2":
//         alert("its monday")
//         break;

//     case "3":
//         alert("its tuesday")
//         break;

//      case "4":
//         alert("its wednesday")
//         break;

//     case "5":
//         alert("its thursday")
//         break;

//     case "6":
//         alert("its friday")
//         break;

//     case "7":
//          alert("its saturday")
//          break;
         
//     default:
//         alert("enter a valid number")
// }

// ===============-----------result by swith statement------====================


// let marks = prompt("enter your marks")

// switch(marks){
//     case ("marks <= 100 && marks >= 90"):
//         alert("you grade A+")

// }


// ==============--------ternary operators-===========----------------

// (5 > 4 )? console.log("true") : console.log("false")




// // ---------------------------loop IN JS-----------------------------

// // while loop----

// let s = 1

// while(s <= 10){
//     document.write(" hello<br>")
//     s++
// }

// // ========================================================================//


// // do while loop --------------

// let x = 1

// do{
//     document.write("ali<br>"); x++
// }
// while(x <= 10)

// // ========================================================================


// // for loop-------

// for(let a = 1; a <= 10; a++){
//     document.write("abbas<br>")
// }


// // =====================================================================

// const car = ["BMW","<br>","FORD","<br>","LAMBORGINI","<br>","HONDA","<br>","TOYOTA",]

// for(let i = 0; i<car.length; i++){
//     document.write(car[i])
    
// }

// const days = ["sunday","monday",""]


// ===============-----------task-------==============--------

// --======================= print odd number ====----------------

// for ( let i = 1; i <=100 ; i++){
//     if(i % 2 !==0){
//         document.write(i,"<br>")
//     }
//     else{
//          document.write("");
//         }
// }

// // ================ print even number=============--------------e

// for( let j = 1; j <= 100 ;j++){
//     if(j % 2==0){
//         document.write(j,"<br>")
//     }
//     else{
//         document.write("");
//        }
// }


// // ====--=-----------===== data add and remove in object---------=========


// let v = {
//     fname : "ali",
//     lname : "abbas",
//     age : 22,
//     addres : ["danyore","gilgit"]
// }

// delete v["addres"][0]
// console.log(v);
   

// // ----------=============== add ==-----------------

// let s = {
//     fname : "ali",
//     lname : "abbas",
//     age : 22,
//     addres : ["gilgit"]

// }

// s.mname="hussain"
// console.log(s);


// // ============--- function----==============


// const l = "khan"

// function gg(f){

//     d = "ali"

//     console.log(l);

//     console.log(d)

//     console.log(f);

//     function bb(a){
//         y = "hussain"
//         console.log(y)
//         console.log(a);
//     }
//     bb("muhammad")
// }
// gg("abbas")

// function add(){
//     let why = ["your name","your class","your fname"]
//     console.log(why);
// }
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()
// add()

// let x = "sibtain"
// let text = "my name is "+ x +  " abbas"
// function id(){
// console.log(text);
// }
// id()


// let fname = "abbas"
// let lname = "fayaz"

// let tname = fname+" "+lname
// console.log(tname);
// console.log(lname+" "+fname);


// let g = "ali"

// function name(){
//     console.log(g)
// }
// name()


//     let a = 10

//     let b = 20

// let c = a + b

// function addition(a,b){
//     console.log(sum = a + b)
// }
// addition(10,20)

// let k = "ali"

// function dimmi(){
//     let  p = "junaid"
//     console.log(p)
//     console.log(k)
// }
// dimmi()


// =========--------------class work==-------=================


// let a = {
//     name : "ali",
//     age : 22,
//     addres : "danyore",
    
//     b : {
//         name : "ABBAS"
//     },

//     c : {
//         nname : "malik"
//     },
//     d : ["hassan",32,"jutial"]

// }



// function obj(b){
//     console.log(b);
//     console.log(a.d[0]);
// }
// obj(a)


// --------------=================---hometask-------==================


// ===========------addition

// let f = prompt("enter a number addtion")
// let g = prompt("enter second number")

// function sub (f,g){
// console.log(f);
// console.log(g);
// console.log(sum = f + g)

// }
// sub (f,g)

// ----subtract 



    let x = prompt("enter a number subtraction")
    let y = prompt("enter second number")

function sub (x,y){
    console.log(x);
    console.log(y);
    console.log(sum = x - y)
    
}
 sub (x,y)


//  -------mutiply

let a = prompt("enter a number mutiplication")
let b = prompt("enter second number")

function sub (a,b){
console.log(a);
console.log(b);
console.log(sum = a - b )

}
sub (a,b)


// ====-----divid

let s = prompt("enter a number for divide")
let d = prompt("enter second number")

function sub (s,d){
console.log(s);
console.log(d);
console.log(sum = s - d)

}
sub (s,d)