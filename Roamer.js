// SERVICE IMAGES HOVER EFFECT HOMEPAGE
// ------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Brand Images
document.querySelectorAll('.service-menu-brand').forEach(trigger => {
trigger.addEventListener('mouseover', function(){ 
  document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.brand-images').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.service-inner-brand-text').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-menu-brand').forEach(target => target.classList.add('showcase-menu-active'));
  document.querySelectorAll('.service-item-build').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-media').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-design').forEach(target => target.classList.remove('showcase-menu-active'));
});
});  

//  Design Images
document.querySelectorAll('.service-item-design').forEach(trigger => {
trigger.addEventListener('mouseover', function(){ 
  document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.design-images').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.service-inner-design-text').forEach(target => target.classList.add('active-images'));  
  document.querySelectorAll('.service-item-design').forEach(target => target.classList.add('showcase-menu-active'));
  document.querySelectorAll('.service-menu-brand').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-build').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-media').forEach(target => target.classList.remove('showcase-menu-active'));
});
}); 

// Media Images
document.querySelectorAll('.service-item-media').forEach(trigger => {
trigger.addEventListener('mouseover', function(){ 
  document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.media-images').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.service-inner-media-text').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-item-media').forEach(target => target.classList.add('showcase-menu-active'));
  document.querySelectorAll('.service-item-design').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-menu-brand').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-build').forEach(target => target.classList.remove('showcase-menu-active'));
});
}); 

//  Build Images
document.querySelectorAll('.service-item-build').forEach(trigger => {
trigger.addEventListener('mouseover', function(){ 
  document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.build-images').forEach(target => target.classList.add('active-images'));
  document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
  document.querySelectorAll('.service-inner-build-text').forEach(target => target.classList.add('active-images'));  
  document.querySelectorAll('.service-item-build').forEach(target => target.classList.add('showcase-menu-active'));
  document.querySelectorAll('.service-item-media').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-item-design').forEach(target => target.classList.remove('showcase-menu-active'));
  document.querySelectorAll('.service-menu-brand').forEach(target => target.classList.remove('showcase-menu-active'));
});
});  


});

// Detect if Visible
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 992px)')
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    
/*Detect if Visible*/

        /* 
        Make Works Title Sticky(Position Fixed) if specified elements appear on the 
        viewport when different percentages of viewport entering or exiting
        */

        /*Define Sections*/
        let heroSection = document.querySelector('#hero');
        let worksSection = document.querySelector('#works');
        let servicesSection = document.querySelector('#services');
        let LastPfSection = document.querySelector('#last-pf');

        /* Define The Works Tittle and the Holder of it which acts as a fake clone of title height */
        let worksTitle = document.querySelector('#sticky-tittle-works');
        let worksBox = document.querySelector('#sticky-holder-works');
        let worksTitleWidth = worksTitle.offsetWidth;
        let worksTitleHeight = worksTitle.offsetHeight;


        // Enter Observer for the sticky title of the Works Section
        /*targets: */
        let EnterObserverTargetsForWorksTitle = document.querySelectorAll('#works, #last-pf');


        /*callback function*/
        function callMeback(entry) {

            entry.forEach((piece) => {
                if (piece.isIntersecting) {
                    console.log(piece);
                    worksBox.style.width = worksTitleWidth + 1 + "px";
                    worksBox.style.height = worksTitleHeight + "px";
                    piece.target.classList.add('visible');
                    console.log("yeni ENTER observer callbacki çalıştı.");
                    worksTitle.classList.add('fixed');
                }

            });

        }

        /*Options for Works Title Observer */
        const toptions = {
            threshold: 0.95
        }

        //Don't forget to initialise THE observer after defining the callback and options of the observer.
        /*initializer => */ const EnterObserverForWorksTitle = new IntersectionObserver(callMeback, toptions);

        /*Loop Through the items that detected if not a single html element and forEach not works on HTML nodes*/

        EnterObserverTargetsForWorksTitle.forEach((section) => {
            EnterObserverForWorksTitle.observe(section);
        });


        // ENDS HERE Enter Observer for the sticky title of the Works Section



        //Exit Observer for the sticky title of the Works Section

        // the callback function
        function onEntry(entry) {
            entry.forEach((item) => {

                if (!item.isIntersecting) {
                    item.target.classList.remove('visible');
                    return;
                }
                item.target.classList.add('visible');

                /*Check Hero Section is on Screen*/
                if (item.target === heroSection) {
                    worksTitle.classList.remove('fixed');
                }
                /*Check Services Section is on Screen*/
                if (item.target === servicesSection) {
                    worksTitle.classList.remove('fixed');
                }

                /* Check if Who we are on screen and remove the sticky class from weDo Title */
                if (item.target === whoWeAreSection) {
                    weDoTitle.classList.remove('fixed');
                }
                if (item.target === LastPfSection) {
                    weDoTitle.classList.remove('fixed');
                }


            });
        }

        // list of options
        let options = {
            threshold: [0.15]
        };

        // instantiate a new Intersection Observer
        let ExitObserverForWorksTitle = new IntersectionObserver(onEntry, options);

        // list of sections
        let allSections = document.querySelectorAll('section');

        // loop through all elements
        // pass each element to observe method
        // ES2015 for-of loop can traverse through DOM Elements
        for (let everyPiece of allSections) {
            ExitObserverForWorksTitle.observe(everyPiece);
        }
        //Exit Observer for the sticky title of the Works Section





        // Make WhatweDo Title Sticky(Position Fixed) if specified elements appear on the 
        // viewport when different percentages of viewport entering or exiting

        /*Define Sections*/
        let showcaseSection = document.querySelector('#showcase-section');
        let whoWeAreSection = document.querySelector('#we');


        /* Define The Big Tittle and the Holder of it which acts as a fake clone of title height */
        let weDoTitle = document.querySelector('#whatwedotitle');
        let weDoBox = document.querySelector('#sticky-holder-wedo');
        let weDoTitleWidth = weDoTitle.offsetWidth;
        let weDoTitleHeight = weDoTitle.offsetHeight;


        // Enter Observer for the sticky title of the WhatWeDo Section
        /*targets: */ let EnterObserverTargetsForWeDoTitle = document.querySelectorAll('#services, #showcase-section');


        /*callback function*/
        function callbackWeDo(entry) {

            entry.forEach((piece) => {
                if (piece.isIntersecting) {
                    weDoBox.style.width = weDoTitleWidth + 1 + "px";
                    weDoBox.style.height = weDoTitleHeight + "px";
                    piece.target.classList.add('visible');
                    console.log("wedo için enter callback çalıştı.");
                    weDoTitle.classList.add('fixed');
                }

            });

        }

        /*Options for Works Title Observer */
        const weDoOptions = {
            threshold: 0.95
        }

    //Don't forget to initialise THE observer after defining the callback and options of the observer.
    /*initializer => */ const EnterObserverForWeDoTitle = new IntersectionObserver(callbackWeDo, weDoOptions);

        /*Loop Through the items that detected if not a single html element and forEach not works on HTML nodes*/

        EnterObserverTargetsForWeDoTitle.forEach((section) => {
            EnterObserverForWeDoTitle.observe(section);
        });


    // ENDS HERE Enter Observer for the sticky title of the WhatWeDo Section
    
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

/* Ends Here Detect if Visible */