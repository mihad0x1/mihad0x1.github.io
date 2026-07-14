/*====================================================

MIHAD0X1 PORTFOLIO
Part-1

====================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.remove();

            },500);

        },1000);

    }

});


/*====================================================

Typing Effect

====================================================*/

const typingElement = document.querySelector("#typing");

if(typingElement){

const words=[

"Security Researcher",

"Bug Bounty Hunter",

"Ethical Hacker",

"Web Security Specialist",

"API Security Researcher"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

let current=words[wordIndex];

if(!deleting){

typingElement.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1800);

return;

}

}

else{

typingElement.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?45:85);

}

type();

}


/*====================================================

Counter Animation

====================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter=entry.target;

let target=+counter.dataset.target;

let count=0;

let speed=Math.ceil(target/80);

let update=()=>{

count+=speed;

if(count>=target){

counter.innerHTML=target+"+";

}

else{

counter.innerHTML=count+"+";

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*====================================================

Reveal Animation

====================================================*/

const reveals=document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach(item=>{

let top=item.getBoundingClientRect().top;

let windowHeight=window.innerHeight;

if(top<windowHeight-80){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();


/*====================================================

Navbar Blur

====================================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(5,10,18,.88)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.background="rgba(5,10,18,.65)";

header.style.boxShadow="none";

}

});


/*====================================================

Mobile Menu Toggle

====================================================*/

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navLinks");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

        menuBtn.innerHTML = isOpen

            ? '<i class="fa-solid fa-xmark"></i>'

            : '<i class="fa-solid fa-bars"></i>';

    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/*====================================================

Smooth Anchor

====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const targetId = this.getAttribute("href");

if(targetId === "#" || targetId === ""){

window.scrollTo({ top: 0, behavior: "smooth" });

return;

}

const targetEl = document.querySelector(targetId);

if(targetEl){

targetEl.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*====================================================

Active Navigation

====================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*====================================================

Mouse Glow

====================================================*/

const glow=document.querySelector(".glow1");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX-250+"px";

glow.style.top=e.clientY-250+"px";

}

});


/*====================================================

Console Message

====================================================*/

console.log("%cWelcome Researcher 👋",

"color:#00F5C4;font-size:22px;font-weight:bold;");

console.log("%cPortfolio developed by mihad0x1",

"color:white;font-size:14px;");
