var menubtn=document.querySelectorAll("ul li");
const menuback=document.querySelector('.menu-back');
const arrow=document.querySelector('.arrow');
const nav = document.querySelector('body ul')


menubtn.forEach(menuitem => menuitem.addEventListener('mouseenter',handmouseon));
menubtn.forEach(menuitem => menuitem.addEventListener('mouseleave',handmouseout));


function handmouseon() {

  var menu=this.querySelector(".menu");
  menuback.classList.add('menu-back-active');
  menu.classList.add('menu-block');
  const menucoord=menu.getBoundingClientRect();
  const ulcoord=nav.getBoundingClientRect();
  const licoord=this.getBoundingClientRect();
  
  menu.style.setProperty('transform',`translate(0px,${ulcoord.bottom}px)`)
  menuback.style.setProperty('transform',
  `
    translate(${menucoord.left}px, ${menucoord.top + window.scrollY}px)
    scaleX(${menucoord.width/10})
    scaleY(${menucoord.height/10})
  `
)
  arrow.style.setProperty('transform',
    `
    translate(${licoord.x + licoord.width/2 }px, ${menucoord.top }px)
    rotate(45deg) translateY(-50%)
    `)
    arrow.classList.add('open')
 setTimeout(()=>menu.classList.add('menu-block-active'),300 ) 
}


function handmouseout() {
  var menu=this.querySelector(".menu");
  menuback.classList.remove('menu-back-active')
  menu.classList.remove('menu-block','menu-block-active')
  arrow.classList.remove('open')
}
