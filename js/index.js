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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const pic = document.getElementById("cta-img");
pic.setAttribute("src", siteContent["cta"]["img-src"]);

const circle_pic = document.getElementById("middle-img");
circle_pic.setAttribute("src",siteContent["main-content"] ["middle-img-src"]);

// pitctures
const mContent = document.querySelector(".cta-text");
mContent.textContent = siteContent["cta"]["h1"];


// const mButton = document.querySelector(".cta-text");
// mButton.textContent = siteContent["cta"]["button"];

const nav1 = document.querySelector("a");
nav1.textContent = siteContent["nav"]["nav-item-1"];
// const nav2 = document.querySelector("a");
// nav2.textContent = siteContent["nav"]["nav-item-2"];
// const nav3 = document.querySelectorAll("a");
// nav3.textContent = siteContent["nav"]["nav-item-3"];
// const nav4 = document.querySelectorAll("a");
// nav4.textContent = siteContent["nav"]["nav-item-4"];
// const nav5 = document.querySelectorAll("a");
// nav5.textContent = siteContent["nav"]["nav-item-5"];
// const nav6 = document.querySelectorAll("a");
// nav6.textContent = siteContent["nav"]["nav-item-6"];


const feat = document.querySelector(".main-content .top-content .text-content h4");
feat.textContent = siteContent["main-content"]["features-h4"];
// feat.style.display = "flex";
// feat.style.justifyContent = "space-between";

const featP = document.querySelector(".main-content .top-content .text-content p");
featP.textContent = siteContent["main-content"]["features-content"];
// featP.style.display = "flex";
// featP.style.justifyContent = "space-between";

const about = document.querySelector(".main-content .top-content .text-content h4");
about.textContent = siteContent["main-content"]["about-h4"];
// about.style.display = "flex";
// about.style.justifyContent = "space-between";

const aboutP = document.querySelector(".main-content .top-content .text-content p");
aboutP.textContent = siteContent["main-content"]["about-content"];
// aboutP.style.display = "flex";
// aboutP.style.justifyContent = "space-between";


//top

const ser = document.querySelector(".main-content .bottom-content .text-content h4");
ser.textContent = siteContent["main-content"]["services-h4"];
const serP = document.querySelector(".main-content .bottom-content .text-content p");
serP.textContent = siteContent["main-content"]["services-content"];

const pro = document.querySelector(".main-content .bottom-content .text-content h4");
pro.textContent = siteContent["main-content"]["product-h4"];
const proP = document.querySelector(".main-content .bottom-content .text-content p");
proP.textContent = siteContent["main-content"]["product-content"];

const vis = document.querySelector(".main-content .bottom-content .text-content h4");
vis.textContent = siteContent["main-content"]["vision-h4"];
const visP = document.querySelector(".main-content .bottom-content .text-content p");
visP.textContent = siteContent["main-content"]["vision-content"];
//bottom

const con = document.querySelector(".contact h4");
con.textContent = siteContent["contact"]["contact-h4"];

const add = document.querySelector(".contact p");
add.textContent = siteContent["contact"]["address"];

const phone = document.querySelector(".contact p");
phone.textContent = siteContent["contact"]["phone"];


const email = document.querySelector(".contact p");
email.textContent = siteContent["contact"]["email"];

const copy = document.querySelector("footer");
copy.textContent = siteContent["footer"]["copyright"];