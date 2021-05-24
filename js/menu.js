const doc = document.querySelector('.responsive-menu');
const resp = document.querySelector('.resp');
// menu du site
gsap.set('.navigue ul li', {opacity: 0, y: 100, scale: 0});
// end
doc.addEventListener('click', (e)=>{
    resp.classList.toggle('active');
    doc.classList.toggle('active');
   if(resp.classList.contains('active')){
        gsap.to('.navigue ul li', {opacity: 1, ease: 'back.In', y: 0, scale: 1, delay: .2, stagger: 0.3});
   }else{
    gsap.set('.navigue ul li', {opacity: 0, y: 100, scale: 0});
   }
})