//format the sittings buttun
document.querySelector("header .sittings i").addEventListener("click",() => {
    document.querySelectorAll(".sittings-minu div").forEach(function(e){
        e.classList.toggle("active");
    })
    setTimeout(function(){
        document.querySelectorAll(".sittings-minu div").forEach(function(e){
        e.classList.toggle("tr-d-none");
    })
    },100)

})

//format the window scroll
window.onresize = function(){
      window.scrollTo({
        top:0,

        }        
      )
  }

//format the logo buttun
document.querySelector("header .logo").addEventListener("click",()=>{
    location.href="index.html";
})

//format the hidden class
document.querySelectorAll(".projects .controle i").forEach(function(btn){
    btn.addEventListener("click",()=>{

    })
})

//format the first part of project
document.querySelectorAll(".touch-pro").forEach((touch)=>{
  touch.addEventListener("mouseover",(ev)=>{
    document.querySelector(".lay-out").classList.add("active");
    touch.parentElement.classList.add("light");
    touch.parentElement.addEventListener("mouseout",()=>{
    document.querySelector(".lay-out").classList.remove("active");
    touch.parentElement.classList.remove("light");
    })
  })
})
