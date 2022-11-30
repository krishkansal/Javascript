console.log("hello");


let fetchBtn=document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)


function buttonClickHandler(){
    console.log('you have clicked the button');


    //Instantiate an xhr objext
    const xhr=new XMLHttpRequest();


   // Open the object
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);      //('Get','krish.txt',fasle)
   

    //For POST
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json');


    //what to do on progress(optional)
    xhr.onprogress=function(){
        console.log("On progress")
    }


    xhr.onreadystatechange=function(){
        console.log('ready state is : ',xhr.readyState)
    }


    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText)
    }else{
        console.error("some error occured");
    }
}


    //send the request

    //  For GET :
    xhr.send();

    //  For Post:
    // params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    // xhr.send(params);


}




// let popBtn=document.getElementById('popBtn')
// popBtn.addEventListener('click',buttonClickHandler)


// function buttonClickHandler(){
//     console.log('you have clicked the button');


//     //Instantiate an xhr objext
//     const xhr=new XMLHttpRequest();


//     //Open the object
//     xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);      //('Get','krish.txt',fasle)
   


//     //what to do on progress(optional)
//     xhr.onprogress=function(){
//         console.log("On progress")
//     }


//     xhr.onreadystatechange=function(){
//         console.log('ready state is : ',xhr.readyState)
//     }


//     //what to do when response is ready   
//     xhr.onload=function(){
//         if(this.status===200){
//             let obj=JSON.parse(this.responseText)
//                 console.log(obj)
//     }else{
//         console.error("some error occured");
//     }
// }


//     //send the request
//     xhr.send();
// }


// let popbtn=document.querySelector('#fetchBtn')
// popbtn.addEventListener('click',buttonclick);

// function buttonclick(){
//     console.log("button is clicked")

//     const xhr= new XMLHttpRequest();


//     xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1' ,true)


//     xhr.onload =function(){
//                 if(xhr.readyState === 4 && xhr.status===200){
//                     let obj=JSON.parse(xhr.responseText)
//                         console.log(obj)
//             }else{
//                 console.error("some error occured");
//             }
//         }

//     xhr.send();


// }

