// SERVICE IMAGES HOVER EFFECT HOMEPAGE
// ------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Brand Images
    document.querySelectorAll('.service-menu-brand').forEach(trigger => {
        trigger.addEventListener('mouseover', function () {
            document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.brand-images').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.service-inner-brand-text').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-menu-item').forEach(target => target.classList.remove('showcase-menu-active'));
            document.querySelectorAll('.service-menu-brand').forEach(target => target.classList.add('showcase-menu-active'));
        });
    });

    //  Design Images
    document.querySelectorAll('.service-item-design').forEach(trigger => {
        trigger.addEventListener('mouseover', function () {
            document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.design-images').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.service-inner-design-text').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-menu-item').forEach(target => target.classList.remove('showcase-menu-active'));
            document.querySelectorAll('.service-item-design').forEach(target => target.classList.add('showcase-menu-active'));
        });
    });

    // Media Images
    document.querySelectorAll('.service-item-media').forEach(trigger => {
        trigger.addEventListener('mouseover', function () {
            document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.media-images').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.service-inner-media-text').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-menu-item').forEach(target => target.classList.remove('showcase-menu-active'));
            document.querySelectorAll('.service-item-media').forEach(target => target.classList.add('showcase-menu-active'));
        });
    });

    //  Build Images
    document.querySelectorAll('.service-item-build').forEach(trigger => {
        trigger.addEventListener('mouseover', function () {
            document.querySelectorAll('.service-images').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.build-images').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-inner-text').forEach(target => target.classList.remove('active-images'));
            document.querySelectorAll('.service-inner-build-text').forEach(target => target.classList.add('active-images'));
            document.querySelectorAll('.service-menu-item').forEach(target => target.classList.remove('showcase-menu-active'));
            document.querySelectorAll('.service-item-build').forEach(target => target.classList.add('showcase-menu-active'));
        });
    });


});
/* 
TEST CODE FOR VERSIONING
*/
console.log("pf güncel dosya geldi");


// Detect if Visible
// Create a condition that targets viewports at least 1280px wide
const mediaQuery = window.matchMedia('(min-width: 1280px)')
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
        let ShowcaseSection = document.querySelector('#showcase-section');
        // let PfIntroSection = document.querySelector('#pf-intro-section');
        let theSectionBeforeShowcase = ShowcaseSection.previousElementSibling;
        let heroSection = document.querySelector('#hero');
        let theSectionAfterShowcase = document.querySelector("#showcase-section + section");

        /* Define The WhatweDid Tittle and the Holder of it which acts as a fake clone of title height */
        let whatTitle = document.querySelector('#sticky-title-what');
        let whatTitleHolder = document.querySelector('#sticky-holder-what');
        let whatTitleWidth = whatTitle.offsetWidth;
        let whatTitleHeight = whatTitle.offsetHeight;


        // Enter Observer for the sticky title
        /*targets: */
        let EnterObserverTargetsForWhatTitle = document.querySelectorAll('section');


        /*callback function*/
        function callMeback(entry) {

            entry.forEach((piece) => {


                if (!piece.isIntersecting) {
                    piece.target.classList.remove('visible');
                    return;
                }
                // console.log(piece);

                piece.target.classList.add('visible');

                /*Check Showcase Section is on Screen*/
                if (piece.target === ShowcaseSection) {
                    whatTitleHolder.style.width = whatTitleWidth + 1 + "px";
                    whatTitleHolder.style.height = whatTitleHeight + "px";
                    whatTitle.classList.add('fixed');
                }
                /*Check pfIntro Section is on Screen*/
                if (piece.target === theSectionBeforeShowcase) {
                    whatTitle.classList.remove('fixed');
                }
                if (piece.target === heroSection) {
                    whatTitle.classList.remove('fixed');
                }

               
                
                

            });

        }

        /*Options for Works Title Observer */
        const toptions = {
            threshold: 0.25
        }

        //Don't forget to initialise THE observer after defining the callback and options of the observer.
        /*initializer => */ const EnterObserverForWhatTitle = new IntersectionObserver(callMeback, toptions);

        /*Loop Through the items that detected if not a single html element and forEach not works on HTML nodes*/

        EnterObserverTargetsForWhatTitle.forEach((section) => {
            EnterObserverForWhatTitle.observe(section);
        });


        // ENDS HERE Enter Observer for the sticky title of the Works Section
        
        
        // EXIT OBSERVER
        let ExitObserverTargetsForWhatTitle = document.querySelectorAll('section');


        /*callback function*/
        function callMeLeaveback(entry) {

            entry.forEach((piece) => {


                if (!piece.isIntersecting) {
                    piece.target.classList.remove('visible');
                    return;
                }
                // console.log(piece);

                piece.target.classList.add('visible');
                /*Check after Sections is on Screen*/
                if (piece.target === theSectionAfterShowcase) {
                    whatTitle.classList.remove('fixed');
                }
               
                
                

            });

        }

        /*Options for Works Title Observer */
        const noptions = {
            threshold: 0.05
        }

        //Don't forget to initialise THE observer after defining the callback and options of the observer.
        /*initializer => */ const ExitObserverForWhatTitle = new IntersectionObserver(callMeLeaveback, noptions);

        /*Loop Through the items that detected if not a single html element and forEach not works on HTML nodes*/

        ExitObserverTargetsForWhatTitle.forEach((section) => {
            ExitObserverForWhatTitle.observe(section);
        });

    }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

/* Ends Here Detect if Visible */