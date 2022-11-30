console.log("welcome");


//                  Document

let a =document;
a=document.all;
//a=document.body
//a=document.forms[0]
//Array.from(a).forEach(function(element){
//    console.log(element);
//})

a=document.links[0].href;
a=document.images;
a=document.scripts[0];
//console.log(a);



//          Selectors

//      1. Single element selector(Identifiers)

let element=document.getElementById('myfirst');


//element=element.className
// element=element.parentNode
//console.log(element);


//      css using by javascript
element.style.color='red'

//      to change the text
//element.innerText='he is a good boy'

//      to change the html part
//element.innerHTML='<b>he is a good boy</>'
//console.log(element);
//console.log(element.innerText)



//              query selector
let sel=document.querySelector('#myfirst')
sel=document.querySelector('.child')
sel=document.querySelector('div')
sel.style.color='green';
//console.log(sel)



//          2.Multi element selector

let elem=document.getElementsByClassName('child')
elem=document.getElementsByClassName('container')
//console.log(elem[0].getElementsByClassName('child'))

elem=document.getElementsByTagName('div')

//console.log(elem)


Array.from(elem).forEach(element => {
   // console.log(element)
    element.style.color='blue'
})

//              Parent , Child

let cont=document.querySelector('.no');
cont=document.querySelector('.container');
//console.log(cont.children);





//              Creating Element



// let list=document.createElement('li')
// let text=document.createTextNode("hy")
// list.setAttribute('class','childul')
// list.setAttribute('id','createli')
// //list.innerHTML=("hy bro")
// console.log(list)
// list.appendChild(text);
// let ul=document.querySelector('ul.this')
// ul.appendChild(list)
// console.log(ul)





// let list=document.createElement('li')
// //console.log(list);
// let text=document.createTextNode("hy")

// list.className='childul';
// list.id='createli';
// list.setAttribute('title','mytitle')
// list.innerText="hello"

// //list.appendChild(text);
// //console.log(list);


// let ul=document.querySelector('ul.this');
// ul.appendChild(list)

// //console.log(ul) 

// let list1=document.createElement('h4');
// list1.setAttribute('class','list1');
// let tnode=document.createTextNode("how r u");
// list1.appendChild(tnode);
// list.replaceWith(list1);
// //console.log(list1)



// let myul=document.getElementById('myul');
// myul.replaceChild(list,document.getElementById('fui'))


// myul.removeChild(document.getElementById('lui'));


// let pr=list1.getAttribute('id')
// console.log(pr);





//                      Events


document.getElementById('heading').addEventListener('click',function(e){
    console.log('you have clicked the heading');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target.value);
});

            //Method 1

let btn=(document.querySelector('#btn'))
btn.addEventListener('click',(e)=>{
    e.preventDefault()     
    console.log("thanks",e)
    document.body.style.backgroundColor='red'
})

            // Method 2

// let btn=(document.querySelector('#btn'))
// btn.addEventListener('click',func1);
// btn.addEventListener('mousedown',func2);
// function func1(e){
//     console.log("thanks",e)
//     e.preventDefault();     

// }
//     function func2(e){
//         console.log("thanks",e)
//         e.preventDefault();     
        
    
// };




                 // button click Print

// nextBtn.addEventListener('click',(e)=>{
//     e.preventDefault()
// const text=document.querySelector('#my-input').value
//     console.log(text);
// })


                    // print at the time of filling data
// document.querySelector('#my-input').addEventListener('keyup',(e)=>{
//     console.log(e.target.value)
// })










//                        Asynchronous Programming



// setTimeout(()=>{

// for (let index = 0; index < 45; index++) {
//     const element = index;
//     console.log("This is index number : " + index);
// }
// },5000)
// console.log("done printing");



// setTimeout(()=>{
// console.log("hello")

// },5000)



