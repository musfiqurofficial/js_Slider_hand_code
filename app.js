// document.getElementsByClassName("check")[0].innerHTML = "Hello World!";
// document.getElementById("check").innerHTML = "Hello World!";
// alert("hello");


// setInterval(function(){
//     document.write("hello");
// },1000);

// if(document.getElementsByClassName("slider-item")[0].classList.contains("active")) {
//  alert("active")
// }else{
//     alert("not")
// }
setInterval(function() {

    if(document.getElementsByClassName("slider-item")[0].classList.contains("active")) {
        document.getElementsByClassName("slider-item")[1].classList.add("active");
        document.getElementsByClassName("slider-item")[0].classList.remove("active");
    
    }else if(document.getElementsByClassName("slider-item")[1].classList.contains("active")){
        document.getElementsByClassName("slider-item")[2].classList.add("active");
        document.getElementsByClassName("slider-item")[1].classList.remove("active");
    
    }else if(document.getElementsByClassName("slider-item")[2].classList.contains("active")){
        document.getElementsByClassName("slider-item")[3].classList.add("active");
        document.getElementsByClassName("slider-item")[2].classList.remove("active");
    
    }else if(document.getElementsByClassName("slider-item")[3].classList.contains("active")){
        document.getElementsByClassName("slider-item")[0].classList.add("active");
        document.getElementsByClassName("slider-item")[3].classList.remove("active");
    }

},1000);


// document.querySelector("#btn-cng").addEventListener("click", function() {


//     if(document.getElementsByClassName("slider-item")[0].classList.contains("active")) {
//         document.getElementsByClassName("slider-item")[1].classList.add("active");
//         document.getElementsByClassName("slider-item")[0].classList.remove("active");
    
//     }else if(document.getElementsByClassName("slider-item")[1].classList.contains("active")){
//         document.getElementsByClassName("slider-item")[2].classList.add("active");
//         document.getElementsByClassName("slider-item")[1].classList.remove("active");
    
//     }else if(document.getElementsByClassName("slider-item")[2].classList.contains("active")){
//         document.getElementsByClassName("slider-item")[3].classList.add("active");
//         document.getElementsByClassName("slider-item")[2].classList.remove("active");
    
//     }else if(document.getElementsByClassName("slider-item")[3].classList.contains("active")){
//         document.getElementsByClassName("slider-item")[0].classList.add("active");
//         document.getElementsByClassName("slider-item")[3].classList.remove("active");
//     }


// });


