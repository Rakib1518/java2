let DarkishColor = document.querySelector('.darkModeTogglerBtn');
DarkishColor.addEventListener('click',DarkModeToggle)
let isDarkMode = false;
let heading = document.querySelector('.container h2')


function DarkModeToggle (){
    let sideBar = document.querySelector('body');
    let  sunIcon = document.querySelector('.darkModeTogglerBtn .moonOn')

    sideBar.classList.toggle('DarkishColor');
    isDarkMode = !isDarkMode
    if(isDarkMode==true){
        heading.innerHTML ='Dark Mode';
        sunIcon.style.marginTop ="-100%"
    }
    else{
        heading.innerHTML ='Light Mode';
        sunIcon.style.marginTop ="0";
    }
}
