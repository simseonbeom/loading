

export function Animation (){



    gsap.to('.loading-logo',{duration:4,opacity:1});
    gsap.to('.rect',{duration:4,rotation:1080,x:224,ease:Power4.easeInOut});
    // gsap.to('.rect',{duration:1,rotation:1080,x:224,ease: "bounce.out"});
    // gsap.to('.rect',{duration:3,rotation:1080,x:224,ease: "elastic.out(1, 0.3)"});
    
/*


        gsap.to('.fix_section', {
            rotation: 360,
            // x: -innerWidth*3,
            scrollTrigger: {
                trigger: "#section02",
                start: "top top",
                // end: () => "+=" + 300,
                end: 'bottom bottom',
                pin: true,
                // pinSpace:false,
                pinSpacing: false,
                scrub: true,
                markers: true
            }
        });


        let sc02 = gsap.timeline();
        ScrollTrigger.create({
            animation: sc02,
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            pin:true,
            pinSpacing: false,
            scrub: 1,
        });

        sc02.to(".box",{x:100},0);
        sc02.to(".box2",{y:100},1);


*/





}



export default Animation;