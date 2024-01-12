const circle=document.querySelectorAll(".circle");
const ncards=document.querySelectorAll(".card");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
let current=0;
const interval=7500;
var auto=true;
const nextslide=()=>
{
    if(current<ncards.length-1)
    {
        circle[current].classList.remove("background");
        ncards[current].classList.remove("current");
        current++;
        ncards[current].classList.add("current");
        circle[current].classList.add("background");
    }
    else
    {
        circle[current].classList.remove("background");
        ncards[current].classList.remove("current");
        current--;
        ncards[current].classList.add("current");
        circle[current].classList.add("background");
    }
}
const prevslide=()=>
{
    if(current>0)
    {
        circle[current].classList.remove("background");
        ncards[current].classList.remove("current");
        current--;
        ncards[current].classList.add("current");
        circle[current].classList.add("background");
    }
    else
    {
        circle[current].classList.remove("background");
        ncards[current].classList.remove("current");
        current=ncards.length-1;
        ncards[current].classList.add("current");
        circle[current].classList.add("background");
    }
}
next.addEventListener("click",()=>
{
    nextslide();
    if(auto)
    {
        clearInterval(returnid);
        returnid=setInterval(nextslide,interval);
    }
});
prev.addEventListener("click",()=>
{
     prevslide();
     if(auto)
    {
        clearInterval(returnid);
        returnid=setInterval(nextslide,interval);
    }
});

// pause play button
var a=0;
const itag=document.querySelectorAll(".pp i");
const pp=document.querySelector(".pp");
const change=()=>
{
    if(a==0)
    {
        itag[a].classList.remove("show");
        a++;
        auto=false;
    }
    else
    {
        itag[a].classList.remove("show")
        a=0;
        auto=true;
    }
    itag[a].classList.add("show");
    // console.log(auto);
}
pp.addEventListener("click",()=>
{   
    change();
    if(auto)
    {
       returnid=setInterval(nextslide,interval);
    }
    else
    {
        clearInterval(returnid);
    }
    
});
if(auto)
{
    var returnid=setInterval(nextslide,interval);
}












// button remove
const btn=document.querySelector("#button");
btn.classList.add("remove");
const nav=document.querySelector(".nav");
const hamb=document.querySelector(".menu-btn");
const showcase=document.querySelector("#showcase");
hamb.addEventListener("mouseover",()=>
{
    btn.classList.add("remove");
});
nav.addEventListener("mouseover",()=>
{
    btn.classList.add("remove");
});
showcase.addEventListener("mouseover",()=>
{
    btn.classList.add("remove");
});


hamb.addEventListener("mouseout",()=>
{
    btn.classList.remove("remove");
});
nav.addEventListener("mouseout",()=>
{
    btn.classList.remove("remove");
});
showcase.addEventListener("mouseout",()=>
{
    btn.classList.remove("remove");
});



// hamburger
// const menubtn=document.querySelector(".menu-btn");
// const bars=document.querySelector(".fa-bars");
// const burger=document.querySelector(".fa-burger");
// menubtn.addEventListener("click",()=>
// {
//     document.querySelector(".main-menu").classList.toggle("showw");
//     bars.classList.toggle("no-display");
//     burger.classList.toggle("no-display");
// });
// console.log(burger);
// console.log(bars);
// const li=document.querySelectorAll(".main-menu li a");
// console.log(li);
// for(let i=0;i<li.length;i++)
// {
//     li[i].addEventListener("click",()=>
//     {
//         document.querySelector(".main-menu").classList.toggle("showw");
//     });
// }
// hamburger
const mainMenu=document.querySelector(".main-menu");
const i=document.querySelectorAll(".menu-btn i");
const menubtn=document.querySelector(".menu-btn");
console.log(i);
for(let k=0;k<i.length;k++)
{
    i[k].addEventListener("click",()=>
    {
        mainMenu.classList.toggle("slide");
    });
}
const li=document.querySelectorAll(".main-menu li");
for(let k of li)
{
    k.addEventListener("click",()=>
    {
        mainMenu.classList.remove("slide");
        i[0].classList.toggle("display");
        i[1].classList.toggle("display");
    });
}
menubtn.addEventListener("click",()=>
{
   i[0].classList.toggle("display");
   i[1].classList.toggle("display");
});