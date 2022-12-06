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
console.log("pf hülo dosya geldi");

