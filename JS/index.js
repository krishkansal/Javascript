// console.time("your code Took");
// console.log("hello ");
// console.log(4+34);
// console.log([1,2,3,4,5]);
// console.log({harry:"this",marks:34});
// console.table({harry:"this",marks:34});
// console.warn("this is warning");
// //console.clear();
// console.timeEnd('your code took');
// console.error("this is an error");

// //     variables

// //var , let , const
// var name='harry'
// console.log(name)
// var channel;
// var marks=34
// var marks=0
// var city="delhi"
// console.log(name,marks,city)
// const name1="ram"
// // name1="sham"
// console.log(name1)

// {
//     let city= " rampura"
//     city="kolkata"
//     console.log(city)
// }
// console.log(city)


// //  Arrays
// const arr1=[1,2,3,4]
// console.log(arr1)
// arr1.push(14)
// console.log(arr1)


// //     Primitive Data Types


// //       Strings
// name="harsh"
// console.log("my string is : " +name)

// // type of operator
// console.log("data type is :"+ (typeof name))

// //      numbers
// let marks1=34
// console.log("data type is :"+ (typeof marks1))

// //      boolean
// let isDriver=true
// console.log("data type is :"+ (typeof isDriver))


// //      Reference Data Type

// myarray=[1,2,3,4,false,"hello"]
// console.log("data type is :"+ (typeof myarray))


// //      Object Literals

// let stmarks = {
//     deepak: 89,
//     vivek:86,
//     pratham:90
// }
// console.log(stmarks)

// //          Function


// function findName(){

// }
// console.log("data type is :"+ (typeof findName))


// Date=new Date();
// console.log("data typeis :"+ (typeof date))


// //      type conversion and type coercion

// let myvar;
// myvar=String(34);
// console.log(myvar,typeof myvar)

// let booleanvar=String(true);
// console.log(booleanvar,typeof booleanvar)

// let i=8;
// console.log(i.toString(),typeof i)

// let number=parseInt('35.23');
// console.log(number,typeof number)
// console.log(number.toFixed(20),typeof number)

// //      Type coercion

// mystr="698";
// mynum=2333;
// console.log(mystr+mynum)

// let html;
// html="<h1> this is my heading </h1>";
// console.log(html)
// console.log(html[1])
// console.log(html.indexOf('is'))
// console.log(html.lastIndexOf('is'))
// console.log(html.charAt(1))
// console.log(html.endsWith('is'))
// console.log(html.includes('is'))
// console.log(html.substring(0,3))
// console.log(html.slice(-1))
// console.log(html.split(' '))

// let fruits='orange'
// let myHtml=`hello ${name}
//         <h1>This is my heading </h1>
//         <p> you like ${fruits}
//         `;
// document.body.innerHTML=myHtml




// const marks2=[20,30,34,50,60]
// const fruits1 = ['orange','apple']
// const mixed=['str',21,[3,5]];
// const arr=new Array(23,123,21,'orange')
// console.log(arr)
// console.log(marks2,fruits1)
// console.log(mixed)
// console.log(fruits1[1])
// console.log(arr.length)
// console.log(Array.isArray(arr))
// console.log(Array.isArray('fdfdf'))
// arr[0]='harry'
// console.log(arr)

// console.log(marks2)
// let value=marks2.indexOf(34);
// marks2.push(365)
// console.log(marks2)
// marks2.unshift(3629)    //place the value at the starting
// console.log(marks2)
// console.log(value)
// marks2.shift()          // delete the 1st value
// console.log(marks2)
// marks2.splice(1,2,100,200)
// console.log(marks2)
// marks2.reverse()
// console.log(marks2)



//         // object

// let myobj = {
//     name:'harry',
//     channel: 'code with harry',
//     isActice: true,
//     marks:[1,2,3,4]
// }
// console.log(myobj)
// console.log(myobj.channel)
// console.log(myobj['channel'])




// //             if-else Statement


// const age='19';
// if(age===19){
//     console.log("age is 19")
// }else if(age===65){
//     console.log('age is  65')
// }else{
//     console.log("age is not 19")
// }

// //              Turnery Operator
// console.log(age==19? 'age is 19':'age is not 19')


// //          loops statement


// let arr2=[2,3,4,5,6];
// arr2.forEach(function(element,index,array){
//     console.log(element,index,array);
// });
// let arr3=[2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     const element=arr3[i]
//     console.log(element)
// }


// let obj={
//     name:"rohan",
//     age:78,
// }
// for(let key in obj){
//     console.log(`the ${key} of object is ${obj[key]}`)
// }




// //                  Function

// //1
// function greet(name){
//     console.log(`happy birthday ${name} These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English. The Bible, for example, is a translation. But they are all well known in English today, and many of them express beautiful thoughts.`)

// }


// let name2 = 'deepak'
// let name3='kishor'
//  greet(name2)



//  //2
// const mygreet=function(name){
//     let msg=`${name}kfdfdfjsdfjsdhflsdjflsjfs`
//     return msg
// }
// let val=mygreet(name2)
// console.log(val)


// // Function inside object
// const myobj1={
//     name:'deepak',
//     game:function(){
//         return "Gta";
//     }
// }
// console.log(myobj1.game())


// const arr4=['fruits','vegetable'];
// arr4.forEach(function(element,index,array){
//     console.log(element,index,array)
// })



// var i=234;
// console.log(i)

// function ui(name){
    
//     let i = 9;
//     console.log(i)
//     return `this is a ${name} ui`;
// }
// console.log(ui("krish"),i)


//                      DOM JS


let a=window;
//window.alert("hello harry")
//a=prompt("enter your name")
//a=confirm("are you okay")
// a=window.document;
// a=window.innerHeight
// a=window.innerWidth
// a=scrollX
// a=scrollY
// a=location
// a=location.toString
// a=history
// a=history.go(-1)
// console.log(a)







