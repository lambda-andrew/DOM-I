const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const pic = document.getElementById("cta-img");
pic.setAttribute("src", siteContent["cta"]["img-src"]);

const circle_pic = document.getElementById("middle-img");
circle_pic.setAttribute("src",siteContent["main-content"] ["middle-img-src"]);

// pitctures
const mContent = document.querySelector(".cta-text");
mContent.textContent = siteContent["cta"]["h1"];


// // const mButton = document.querySelector(".cta-text");
// // mButton.textContent = siteContent["cta"]["button"];

let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
//document.querySelectorAll("a");
nav[1].textContent = siteContent["nav"]["nav-item-2"];
//const nav3 = document.querySelectorAll("a");
nav[2].textContent = siteContent["nav"]["nav-item-3"];
// const nav4 = document.querySelectorAll("a");
nav[3].textContent = siteContent["nav"]["nav-item-4"];
// const nav5 = document.querySelectorAll("a");
nav[4].textContent = siteContent["nav"]["nav-item-5"];
// const nav6 = document.querySelectorAll("a");
nav[5].textContent = siteContent["nav"]["nav-item-6"];

console.log(siteContent["nav"]);


let feat = document.querySelectorAll(".main-content .top-content .text-content h4");
feat[0].textContent = siteContent["main-content"]["features-h4"];
// feat.style.display = "flex";
// feat.style.justifyContent = "space-between";

let featP = document.querySelectorAll(".main-content .top-content .text-content p");
featP[0].textContent = siteContent["main-content"]["features-content"];
// featP.style.display = "flex";
// featP.style.justifyContent = "space-between";

//const about = document.querySelector(".main-content .top-content .text-content h4");
feat[1].textContent = siteContent["main-content"]["about-h4"];
// about.style.display = "flex";
// about.style.justifyContent = "space-between";

//const aboutP = document.querySelector(".main-content .top-content .text-content p");
featP[1].textContent = siteContent["main-content"]["about-content"];
// aboutP.style.display = "flex";
// aboutP.style.justifyContent = "space-between";


//top

let ser = document.querySelectorAll(".main-content .bottom-content .text-content h4");
ser[0].textContent = siteContent["main-content"]["services-h4"];
let serP = document.querySelectorAll(".main-content .bottom-content .text-content p");
serP[0].textContent = siteContent["main-content"]["services-content"];

//const pro = document.querySelector(".main-content .bottom-content .text-content h4");
ser[1].textContent = siteContent["main-content"]["product-h4"];
//const proP = document.querySelector(".main-content .bottom-content .text-content p");
serP[1].textContent = siteContent["main-content"]["product-content"];

//const vis = document.querySelector(".main-content .bottom-content .text-content h4");
ser[2].textContent = siteContent["main-content"]["vision-h4"];
//const visP = document.querySelector(".main-content .bottom-content .text-content p");
serP[2].textContent = siteContent["main-content"]["vision-content"];
//bottom

let conH = document.querySelector(".contact h4");
conH.textContent = siteContent["contact"]["contact-h4"];

 let con = document.querySelectorAll(".contact p");
con[0].textContent = siteContent["contact"]["address"];

// const phone = document.querySelector(".contact p");
con[1].textContent = siteContent["contact"]["phone"];


// const email = document.querySelector(".contact p");
con[2].textContent = siteContent["contact"]["email"];

const copy = document.querySelector("footer");
copy.textContent = siteContent["footer"]["copyright"];