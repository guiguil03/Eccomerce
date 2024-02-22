let desc=document.querySelector(".desc")
let acs=document.querySelector(".acs")
let tex=document.querySelector("#res")
let count=0;
let boule=document.querySelector(".boule")
let btn2= document.querySelector(".btn2")
let count_1=0
let cart=document.querySelector(".panier")
let cart1=document.querySelector(".cart")
let resume=document.querySelector(".resume")
let achat=document.querySelector(".achat")
let poub=document.querySelector(".delete")
const body=document.querySelector("body")

acs.addEventListener("click", () => {
    count+=1;
    tex.innerHTML= count;
});
desc.addEventListener("click", () => {
    count-=1;
    if(count<0){
        count=0;
    }
    tex.innerHTML= count;
});


btn2.addEventListener("click", ()=>{
    count_1+=count;
    if(count>=1){
        boule.innerHTML=count;
        boule.style.display="inline-flex";
        achat.style.display="flex";
        resume.innerHTML= "225 x" + count +  count*225
}
})
cart.addEventListener("click", ()=>{ 
    cart.style.display="flex";
})

poub.addEventListener("mouseover", ()=>{
    body.style.background="red";
})