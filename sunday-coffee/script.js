// GSAP

gsap.registerPlugin(ScrollTrigger)

// SECTION FADE INS

gsap.utils.toArray(".reveal").forEach((section)=>{

    gsap.from(section,{

        opacity:0,
        y:60,

        duration:1.2,

        ease:"power3.out",

        scrollTrigger:{
            trigger:section,
            start:"top 92%",
            toggleActions:"play none none reverse"
        }

    })

})
