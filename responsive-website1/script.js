//const body = document.querySelector('body');

// if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
//     {
//         alert('Opera');
//     }
//     else if(navigator.userAgent.indexOf("Edg") != -1 )
//     {
//         alert('Edge');
//     }
//     else if(navigator.userAgent.indexOf("Chrome") != -1 )
//     {
//        document.body.classList.add('chrome');
//     }
//     else if(navigator.userAgent.indexOf("Safari") != -1)
//     {
//         alert('Safari');
//     }
//     else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
//     {
//          document.body.classList.add('Firefox');
//     }
//     else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
//     {
//       alert('IE'); 
//     }  
//     else 
//     {
//        alert('unknown');
//     }

// if(navigator.userAgent.indexOf("Windows") != -1){
//     document.body.classList.add('windows');
// } else if(navigator.userAgent.indexOf("Mac") != -1){
//     document.body.classList.add('Mac');
// }    

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const subMenu = document.querySelector('.unternehmen-submenu');
const unternehmenLink = document.querySelector('.unternehmen-link');
const backbtn = document.querySelector('.backbtn');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    subMenu.style.display = 'none';
    // navMenu.style.display = 'block';
    // subMenu.style.display = 'none';
});

unternehmenLink.addEventListener('click', () => {
    subMenu.classList.add('activeSubmenu');
    subMenu.style.display = 'block';
})

backbtn.addEventListener('click', () => {
    subMenu.classList.remove('activeSubmenu');
    subMenu.style.display = 'none';
})