const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();
   

    tl.from("#nav", {
        y : '-10',
        opacity  : 0,
        duration : 1.5,
        ease : Expo.easeInOut
    })
    .to(".boundingelem", {
        y : 0,
        
        ease : Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from(".herofooter", {
        y : -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease : Expo.easeInOut
    })
}

function mousepart(){
    var xscale =1;
    var yscale = 2;
   
    var xprev = 0;
    var yprev = 0; 
    window.addEventListener("mousemove", function(details){
        var xdiff = details.clientX-xprev;
        var ydiff = details.clientY-yprev

        // xprev = details.clientX;
        // yprev = details.clientY;

        xscale = gsap.utils.clamp( .8,1.2, xdiff);
        yscale = gsap.utils.clamp( .8, 1.2, ydiff)

        xprev = details.clientX;
        yprev = details.clientY;

        circleMouse(xscale,yscale);
    });
}
mousepart();

function circleMouse(xscale,yscale){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#cursor").style.transform = `translate(${details.clientX}px , ${details.clientY}px) scale(${xscale},${yscale})`;
        // console.log(details)
         })
}

circleMouse();
firstPageAnimation();

 


document.querySelectorAll(".content").forEach(function(content){
    content.addEventListener("mousemove",function(details){

     gsap.to(content.querySelector("img"),{
        opacity : 1,
        ease : Power1,
     })
    }); 
});