// ================================
// REDCITY JAVASCRIPT
// ================================



// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});


// Sticky Navbar

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){

navbar.style.background = "#000";
navbar.style.boxShadow = "0 0 20px rgba(255,0,0,.5)";

}else{

navbar.style.background = "rgba(0,0,0,.85)";
navbar.style.boxShadow = "none";

}

});


// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({

behavior:"smooth"

});

}

});

});


// Reveal Animation

const reveals=document.querySelectorAll(".card");

function revealCards(){

const windowHeight=window.innerHeight;

reveals.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<windowHeight-100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealCards);

revealCards();


// Button Ripple Effect

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// Hero Text Animation

const heroTitle=document.querySelector(".hero h1");

let shadow=0;

setInterval(()=>{

shadow++;

if(shadow>30) shadow=0;

heroTitle.style.textShadow=`0 0 ${shadow}px red`;

},100);


// Active Navigation

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


// Statistics Counter

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=target/150;

if(count<target){

counter.innerText=Math.ceil(count+speed);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});


// Scroll To Top

const topButton=document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Portfolio Filter

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }

        });

    });

});

// Newsletter

const newsletter = document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Welcome to the RedCity Community!");

newsletter.reset();

});

}

