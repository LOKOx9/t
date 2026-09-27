const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});
const cards=document.querySelectorAll('.card');
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';}});
},{threshold:.12});
cards.forEach(c=>{c.style.opacity=0;c.style.transform='translateY(25px)';c.style.transition='opacity .6s, transform .6s';io.observe(c)});
