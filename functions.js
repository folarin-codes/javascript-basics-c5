
// // FUNCTIONS

// function test() {
//     // our code goes here.....
// }

// /*

// let num1 = 50;
// let num2 = 40;
// let num4 = 10;
// let num5 = 20;
// let num3 = num1 + num2;
// let num6 = num4 + num5;

// */


// // console.log(num3, num6)


// // function addTwoNumbers(number1 , number2){

// //     let number = number1 + number2; 
// //     console.log(number)


// // }

// // function subtractTwoNumber(number1, number2){

// //     return number1 - number2;

// // }


// // let result = subtractTwoNumber(10, 5);


// // console.log('result ', result)


// //  Area of triangle, A = [(½) base × height]


// // Calculate the area of a trangle with a base of 20 meters and height of 50 meters.



// // function productOfBaseAndHeight(base , height){

// //    return base * height;

// // }


// // let prod = productOfBaseAndHeight(20, 50)

// // let areaOfTrangle = prod/2;

// // console.log( 'The area of a trangle is ', areaOfTrangle);


// function areaOfTrangle (base, height){

//     console.log ((base * height)/2 )

// }


// function greeting(){
//     console.log('hello , how are you today?')
// }



// // greeting()


// // ALMOST EVERYTHING IN JAVSCRIPT IS AN OBJECT!!!!



//  let folaObject = {

//     name: "Adefolarin",
//     age : 30,
//     sex : 'male',

//     introduction : function(){
//         console.log('Hello fola, how are you today?')
//     }
//  }



// folaObject.introduction()


// const Array = {

//     length : 40,
//     pop : function(){

//     },
//     push : function(value){

//     },
//     shift : function(){

//     },

//     unshift : function(value){

//     }
// }


// //  let console = {

// //     log : function(){

// //     }

// //  }

// // function (){

// // }

// // ()=>{

// // }



function addTwoNumber(number1 , number2){

    let result = number1 + number2;

    // console.log('the result of this operation is ', result)

    return result;


}


let result = addTwoNumber(4, 6)

// console.log(result)


let variable1 = '2';

let variable2 = 2;

// console.log(typeof variable1)
// console.log(typeof variable2)

// console.log(variable1 === variable2);

// if(variable1 == variable2){
//     console.log('Both values are the same!')
// }

// if(variable1 === variable2){
//     console.log('The value and dataype of the variables are the same');
// }



let object1 = {
    name : 'Adefolarin',
    sex : 'male',
    favColor : 'red'
}

// let object2 = object1;
// object2.name = 'Micheal';

// console.log(object1.name)

// let a = 10;

// let b = a;

// b = 20;

// console.log('The value A ', a , ' The value B ', b)

// console.log('Name for object1 ', object1.name , ' Name for object 2 ', object2.name)

// console.log(object1 === object2);


// console.log(typeof addTwoNumber)

// console.log(typeof {})



let numberArr = [4, 5,6,7,8];

let numberArr2 = numberArr;

numberArr2[0] = 7;

console.log(numberArr[0], numberArr2[0]);



for(let i = 0; i <= 10; i++){
    console.log(i);
}