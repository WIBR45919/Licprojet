const showhide = $('.sh');
const inputpass = $('#InputPassword1');

showhide.click((e)=>{
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