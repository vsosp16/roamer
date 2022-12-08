let sholder1 = document.querySelector("#sholder1");
let sholder1H = sholder1.offsetHeight;
let sholder2 = document.querySelector("#sholder2");
let sholder2H = sholder2.offsetHeight;
/* ----------------------------------------------------------------------- */

let hero = document.querySelector("#hero");
let heroH = hero.offsetHeight;

let navbar = document.querySelector("#top-header");
let navbarH = navbar.offsetHeight;


let StitleWorks = document.querySelector("#sticky-holder-works");
let StitleWorksH = StitleWorks.offsetHeight;


let WorksSection = document.querySelector("#works");
let WorksSectionH = WorksSection.offsetHeight;

let pfSection1 = document.querySelector("#pf1");
let pfSection1H = pfSection1.offsetHeight;

let pfSection2 = document.querySelector("#pf2");
let pfSection2H = pfSection2.offsetHeight;

let pfSection3 = document.querySelector("#pf3");
let pfSection3H = pfSection3.offsetHeight;

let pfSection4 = document.querySelector("#last-pf");
let pfSection4H = pfSection4.offsetHeight;


let StitleWedo = document.querySelector("#sticky-holder-wedo");
let StitleWedoH = StitleWedo.offsetHeight;

let showcaseSection = document.querySelector("#showcase-section");
let showcaseSectionH = showcaseSection.offsetHeight;

let ServicesSection = document.querySelector("#services");
let ServicesSectionH = ServicesSection.offsetHeight;

let weSection = document.querySelector("#we");
let weSectionH = weSection.offsetHeight;

let testimonialSection = document.querySelector("#testimonial-section");
let testimonialSectionH = testimonialSection.offsetHeight;

let LogoSection = document.querySelector("#logo-section");
let LogoSectionH = LogoSection.offsetHeight;

let ContactSection = document.querySelector("#contact");
let ContactSectionH = ContactSection.offsetHeight;

//toplam
let body = document.querySelector("body");
bodyH = navbarH + heroH + StitleWorksH + pfSection1H + pfSection2H + pfSection3H + pfSection4H + StitleWedoH + showcaseSectionH +ServicesSectionH + weSectionH + testimonialSectionH + LogoSectionH + ContactSectionH;

console.log(body.offsetHeight);
body.style.height = bodyH + "px";