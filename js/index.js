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

// Nav Bar
let navigationBar = document.querySelector('header nav');
let navAnchor = document.querySelector('header nav a');

// Nav Items
let newNavAnchor = document.createElement('a');
newNavAnchor.textContent = "Services"
newNavAnchor.style.color = "green"
newNavAnchor.style.margin = "0 4%"
navAnchor.appendChild(newNavAnchor);
let newNavTwo = document.createElement('a');
newNavTwo.textContent = "Product"
newNavTwo.style.color = "green"
newNavTwo.style.margin = "0 4%"
navAnchor.appendChild(newNavTwo);
let newNavThree = document.createElement('a');
newNavThree.textContent = "Vision"
newNavThree.style.color = "green"
newNavThree.style.margin = "0 4%"
navAnchor.appendChild(newNavThree);
let newNavFour = document.createElement('a');
newNavFour.textContent = "Features"
newNavFour.style.color = "green"
newNavFour.style.margin = "0 4%"
navAnchor.appendChild(newNavFour);
let newNavFive = document.createElement('a');
newNavFive.textContent = "About"
newNavFive.style.color = "green"
newNavFive.style.margin = "0 4%"
navAnchor.appendChild(newNavFive);
let newNavSix = document.createElement('a');
newNavSix.textContent = "Contact"
newNavSix.style.color = "green"
newNavSix.style.margin = "0 4%"
navAnchor.appendChild(newNavSix);
let newNavSeven = document.createElement('a');
newNavSeven.textContent = "Goods"
newNavSeven.style.color = "green"
newNavSeven.style.margin = "0 4%"
navAnchor.appendChild(newNavSeven);
let newNavEight = document.createElement('a');
newNavEight.textContent = "FAQ"
newNavEight.style.color = "green"
newNavEight.style.margin = "0 4%"
navAnchor.appendChild(newNavEight);

//Top content
let topContent = document.querySelector('.cta');
let wordContent = document.querySelector('.cta-text');
let bigDom = document.querySelector('h1');
bigDom.textContent = "DOM is Awesome"
wordContent.appendChild(bigDom);
let button = document.querySelector('button');
button.textContent = "Get Started"
wordContent.appendChild(button);
let bigImage = document.getElementbyId("cta-img");
bigImage.setAttribute('src', siteContent["cta"]["img-src"])

// Middle Content
let midContent = document.querySelector('.main-content');
let featuresHeader = document.createElement('h4');
featuresHeader.textContent = "Features"
midContent.appendChild(featuresHeader);
let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent["main-content"]["img/mid-page-accent.jpg"])
