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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
let navAnchors = document.querySelectorAll('nav a');




navAnchors[0].textContent = siteContent["nav"]["nav-item-1"]
navAnchors[0].style.color = "green"
let newNavOne = document.createElement('a');
newNavOne.textContent = "FAQ"
newNavOne.style.color = "green"
newNavOne.style.margin = "0px 30% 0px 0%"
navAnchors[0].prepend(newNavOne);
navAnchors[1].textContent = siteContent["nav"]["nav-item-2"]
navAnchors[1].style.color = "green"
let newNavTwo = document.createElement('a');
newNavTwo.textContent = "Ideas"
newNavTwo.style.color = "green"
newNavTwo.style.margin = "0px 0% 0px 30%"
navAnchors[1].appendChild(newNavTwo);
navAnchors[2].textContent = siteContent["nav"]["nav-item-3"]
navAnchors[2].style.color = "green"
navAnchors[3].textContent = siteContent["nav"]["nav-item-4"]
navAnchors[3].style.color = "green"
navAnchors[4].textContent = siteContent["nav"]["nav-item-5"]
navAnchors[4].style.color = "green"
navAnchors[5].textContent = siteContent["nav"]["nav-item-6"]
navAnchors[5].style.color = "green"

//Main Image
let mainImg = document.getElementById('cta-img');
mainImg.setAttribute('src', siteContent["cta"]["img-src"])


//Header and button
let header = document.querySelector('.cta-text h1');
header.textContent = siteContent["cta"]["h1"]
let button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"]


//Main-Content Headers
let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent["main-content"]["about-h4"]
headers[2].textContent = siteContent["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent["main-content"]["vision-h4"]

//Middle Image
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Main-Content Content
let content = document.querySelectorAll('p');
content[0].textContent = siteContent["main-content"]["features-content"]
content[1].textContent = siteContent["main-content"]["about-content"]
content[2].textContent = siteContent["main-content"]["services-content"]
content[3].textContent = siteContent["main-content"]["product-content"]
content[4].textContent = siteContent["main-content"]["vision-content"]

//Bottom-Content
headers[5].textContent = siteContent["contact"]["contact-h4"]
content[5].textContent = siteContent["contact"]["address"]
content[6].textContent = siteContent["contact"]["phone"]
content[7].textContent = siteContent["contact"]["email"]


//Footer
content[8].textContent = siteContent["footer"]["copyright"]
