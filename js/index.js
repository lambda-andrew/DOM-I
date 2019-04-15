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

//Start header/navbar
//Display nav items in 'a' tag
const navItems = document.querySelector("nav").childNodes;
navItems[1].textContent = siteContent["nav"]["nav-item-1"];
navItems[3].textContent = siteContent["nav"]["nav-item-2"];
navItems[5].textContent = siteContent["nav"]["nav-item-3"];
navItems[7].textContent = siteContent["nav"]["nav-item-4"];
navItems[9].textContent = siteContent["nav"]["nav-item-5"];
navItems[11].textContent = siteContent["nav"]["nav-item-6"];

//Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Start cta section
//Display "DOM IS AWESOME"
const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

//Display button
const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];

//Update the img src for cta 
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Start Main Content
//Top Content
const features = document.querySelector(".main-content .top-content h4");
features.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector("p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

//Update the img src for middle img
const mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//Start Contact Section
//Display Contact Section
const contactHead = document.querySelector(".contact").children;
contactHead[0].textContent = siteContent["contact"]["contact-h4"];
contactHead[1].textContent = siteContent["contact"]["address"];
contactHead[2].textContent = siteContent["contact"]["phone"];
contactHead[3].textContent = siteContent["contact"]["email"];

//Start Footer 
//Display copyright
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

