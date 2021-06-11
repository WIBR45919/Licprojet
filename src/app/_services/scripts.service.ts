import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }
//  Gestion du responsive menu
  responsiveMenu(): void{
    let resp = $('.resp');
    let doc = $('.responsive-menu');
    // menu du site
    gsap.set('.navigue ul li', {opacity: 0, y: 100, scale: 0, delay: 0.2});
    // end
    doc.click(()=>{
      resp.toggleClass('active');
      doc.toggleClass('active');
      if($('#menures:contains(active)')){
        gsap.to('.navigue ul li', {opacity: 1, ease: 'back.In', y: 0, scale: 1, delay: .2, stagger: 0.3});
      }else{
        gsap.set('.navigue ul li', {opacity: 0, y: 100, scale: 0});
      }
    })
  }

//  animation du menu
   corpsHome(){
     gsap.set('.ligne1', {x : -500});
     gsap.set('.ligne2', {x : 500});
     gsap.set('.text', {opacity: 0, scale: 0});
     gsap.set('.site', {opacity: 0, scale: 0});
     // box de description
     gsap.set('.elt', {opacity: 0, x: -1000, scale: 0});
     // etat final
     gsap.to('.ligne1', {duration: 1, x: 0, delay: .6, ease: 'power4'});
     gsap.to('.ligne2', {duration: 1, x: 0, delay: .6, ease: 'power4'});
     gsap.to('.text', {opacity: 1, scale: 1, ease: 'back', delay: 0.7});
     gsap.to('.site', {opacity: 1, scale: 1, ease: 'back.In', delay: 0.9});
     gsap.to('.elt', {opacity: 1, ease: 'power1.Out', x: 0, scale: 1, delay: 1.5, stagger: 0.4});
   }

   hideShowpass(): void{
      const showhide = $('.sh');
      const inputpass = $('#InputPassword1');

      showhide.click(()=>{
      let elt = inputpass.attr('type');

      if(elt === 'password'){
      inputpass.attr('type', 'text');
      $('.sh.s').css('display', 'none');
      $('.sh.h').css('display', 'block');
    }else{
      inputpass.attr('type', 'password');
      $('.sh.h').css('display', 'none');
      $('.sh.s').css('display', 'block');
    }
  })
}
}
