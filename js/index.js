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


//Header/NAV
let nav = document.querySelectorAll('a');
nav[0].textContent = siteContent.nav['nav-item-1'];
nav[1].textContent = siteContent.nav['nav-item-2'];
nav[2].textContent = siteContent.nav['nav-item-3'];
nav[3].textContent = siteContent.nav['nav-item-4'];
nav[4].textContent = siteContent.nav['nav-item-5'];
nav[5].textContent = siteContent.nav['nav-item-6'];

//CTA Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"] ["img-src"]);

//CTA Text
let h1 = document.getElementsByTagName("h1");
h1[0].textContent = siteContent.cta.h1;

//CTA Button
let btn = document.getElementsByTagName('button');
btn[0].textContent = siteContent.cta.button;

// Main-Content 
let h4 = document.getElementsByTagName('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];

// Main-Content Text
let p = document.getElementsByTagName('p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];

// Middle Img/Main-Content
 let midImg = document.querySelector('#middle-img');
 midImg.setAttribute('src', siteContent ['main-content']['middle-img-src']);

// Bottom-Content
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

// Bottom-Content Text
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

// Contact
let contact = document.getElementsByTagName('h4');
h4[5].textContent = siteContent ['contact']['contact-h4'];

let contactP = document.getElementsByClassName('p');
p[5].textContent = siteContent ['contact'] ['address'];
p[6].textContent = siteContent ['contact'] ['phone'];
p[7].textContent = siteContent ['contact'] ['email'];

let footer = document.getElementsByTagName('footer');
p[8].textContent = siteContent['footer']
['copyright'];