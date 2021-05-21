const doc = document.querySelector('.responsive-menu');
const resp = document.querySelector('.resp');

doc.addEventListener('click', (e)=>{
    resp.classList.toggle('active');
    doc.classList.toggle('active');
})