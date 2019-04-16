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
let anchors = document.getElementsByTagName('a');
let anchorOne = anchors[0];
anchorOne.textContent = siteContent["nav"]["nav-item-1"];
let anchorTwo = anchors[1];
anchorTwo.textContent = siteContent["nav"]["nav-item-2"];
let anchorThree = anchors[2];
anchorThree.textContent = siteContent["nav"]["nav-item-3"];
let anchorFour = anchors[3];
anchorFour.textContent = siteContent["nav"]["nav-item-4"];
let anchorFive = anchors[4];
anchorFive.textContent = siteContent["nav"]["nav-item-5"];
let anchorSix = anchors[5];
anchorSix.textContent = siteContent["nav"]["nav-item-6"];



//Top Content
let bigDom = document.querySelector('.cta h1');
bigDom.textContent = siteContent["cta"]["h1"]
let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"]
let bigImage = document.getElementById("cta-img");
bigImage.setAttribute('src', "img/header-img.png")

// Middle Content
let midContentHeader = document.getElementsByTagName('h4');
let midParagraphs = document.getElementsByTagName('p')
let featuresHeader = midContentHeader[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"]
let featContent = midParagraphs[0];
featContent.textContent = siteContent["main-content"]["features-content"]
let aboutHeader = midContentHeader[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"]
let aboutContent = midParagraphs[1];
aboutContent.textContent = siteContent["main-content"]["about-content"]
let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', "img/mid-page-accent.jpg");

//Mid-Bottom Content
let servicesHeader = midContentHeader[2];
servicesHeader.textContent = siteContent["main-content"]["services-h4"]
let servicesContent = midParagraphs[2];
servicesContent.textContent = siteContent["main-content"]["services-content"]
let productHeader = midContentHeader[3];
productHeader.textContent = siteContent["main-content"]["product-h4"]
let productContent = midParagraphs[3];
productContent.textContent = siteContent["main-content"]["product-content"]
let visionHeader = midContentHeader[4];
visionHeader.textContent = siteContent["main-content"]["vision-h4"]
let visionContent = midParagraphs[4];
visionContent.textContent = siteContent["main-content"]["vision-content"]

//Bottom Content
