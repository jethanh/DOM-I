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
    "h1": "DOM\r\nIs\r\nAwesome",
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
    "new-h4":"New Content",
    "new-content": "New content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "rabbit-h4":"Rabbit Content",
    "rabbit-content": "Rabbit content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "alligator-h4":"Alligator Content",
    "alligator-content": "Alligator content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\r\nSomewhere, USA",
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

const navA = document.querySelector('nav').querySelectorAll("a");
navA.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
  element.style.color = "green";
});

const newNavItem1 = document.createElement("a");
newNavItem1.href = "#";
newNavItem1.textContent = "First Nav Item";
newNavItem1.style.color = "green";
const nav = document.querySelector("nav");
nav.prepend(newNavItem1); 

const newNavItem2 = document.createElement("a");
newNavItem2.href = "#";
newNavItem2.textContent = "Last Nav Item";
newNavItem2.style.color = "green";
nav.append(newNavItem2);

const ctaText = document.querySelector(".cta-text");
// console.log(ctaText);
ctaText.childNodes.forEach(element => {
  if (element.localName === "h1") {
    element.textContent = siteContent.cta.h1;
    element.style.whiteSpace = "pre-line";
  } else if (element.localName === "button") {
    element.textContent = siteContent.cta.button;
  }
});

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute("src", siteContent.cta["img-src"]);
document.querySelectorAll(".text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll(".text-content p")[0].textContent = siteContent["main-content"]["features-content"];

document.querySelectorAll(".text-content h4")[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll(".text-content p")[1].textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelectorAll(".text-content h4")[2].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll(".text-content p")[2].textContent = siteContent["main-content"]["services-content"];

document.querySelectorAll(".text-content h4")[3].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll(".text-content p")[3].textContent = siteContent["main-content"]["product-content"];

document.querySelectorAll(".text-content h4")[4].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll(".text-content p")[4].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].textContent = siteContent["contact"]["address"];

document.querySelectorAll(".contact p")[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll(".contact p")[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
