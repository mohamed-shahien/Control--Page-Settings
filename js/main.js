// add color in local storage 
let mainColor = localStorage.getItem('color_option');
// check is tha color_option inside than local storage
if(mainColor !== null){
    document.documentElement.style.setProperty('--main_color', mainColor);
    // remove active class from all colors itms
    document.querySelectorAll('.colors_list li').forEach(el =>{
        el.classList.remove('active');
        // ad active class on element with data-color ==> local storige item
        if(el.dataset.color === mainColor){
            el.classList.add('active')
        }
    });
    
};

// rundom background options
let backgroundOption = true;
// variabol controle the interval
let backgroundInterval;
// check if ther's local storage rundum background item
let backlocalstortage = localStorage.getItem('background_option');

// check if rondum background local storage in vot empty
if(backlocalstortage !== null){
    if(backlocalstortage === 'true'){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }
    // remove active class fro all span
    document.querySelectorAll('.randum_background span').forEach(element => {
        element.classList.remove('active');
    });
    if(backlocalstortage === 'true'){
        document.querySelector('.randum_background .yes').classList.add('active');
    } else{
        document.querySelector('.randum_background .no').classList.add('active');
    };
};

// ====================toggel spin calss on item=====================
let gear = document.querySelector('.toggle_setting .fa-gear');
gear.onclick = function() {
    // toggle class fa-spin for rotation on self
    this.classList.toggle('fa-spin');
    // toggle class open on main setting box
    var addOpenClass = document.querySelector('.setting_box');
    addOpenClass.classList.toggle('open');
};

// =======================switch colors====================
// storing colors(li) in variable so that i can loop
let colorsLi = document.querySelectorAll('.colors_list li');
// loop on all list itwms
colorsLi.forEach(li =>{
    // click on evry list items
    li.addEventListener('click', (e) => {
        // set color on root
        document.documentElement.style.setProperty('--main_color', e.target.dataset.color)
        // set color in local storage
        localStorage.setItem('color_option', e.target.dataset.color);
        // remaove active class from all childrens |||determine thtr parent of the element and loop to all the element(li) that contains a active class
        handelactive(e);
    });
});

// ==================swetch background=============================
let randumbackreoung = document.querySelectorAll('.randum_background span');
// lopp on all spans
randumbackreoung.forEach(span => {
    // click on every pan
    span.addEventListener('click', (e) => {
        // remove active class from all children
        handelactive(e)
        //Activate the function by IF condition and This element has a data-background with a "yes" inside it   
        if(e.target.dataset.background ==='yes'){
            backgroundOption = true;
            rundumaizeImage(e);
            localStorage.setItem('background_option', true)
        }else{
            backgroundOption = false;
            // When you click the other button we erase the period that contains the function randumize
            clearInterval(backgroundInterval);
            localStorage.setItem('background_option', false)
        }
        
    });
});

// ===================cainging background fr anding bage===================

// function to randumize image
function rundumaizeImage(){
    if(backgroundOption === true){
        backgroundInterval = setInterval(() => {
            // sellect landing bage
            let landing_bage = document.querySelector('.landing_bage');
            // initial array of imagge
            let imgarray = ["1.jpg", "2.jp", "3jpg", "4.jpg", "5.jpg", "6.jpg"];
            // get rundom number
            let rundomimg = Math.floor(Math.random() * imgarray.length);
            landing_bage.style.backgroundImage = 'url("image/' + imgarray[rundomimg] + '")'
        },1000);
    };
};
rundumaizeImage();
// select skills selector 
let ourskills = document.querySelector('.skills');
window.onscroll = function () {
    // skilles offset top
    let skillesOffsetTop = ourskills.offsetTop; // stop over the item
    // skilles outer height
    let skillesOffsetHeight = ourskills.offsetHeight;
    // property returns the height of an element, including vertical padding and borders, as an integer.
    // window height 
    let windowHeight = this.innerHeight; // return the height of window
    // window scrll 
    let windowScroll = this.scrollY; //return the number of pixel that passed 

    if(windowScroll >(skillesOffsetTop + skillesOffsetHeight - windowHeight)) {
        let allskills = document.querySelectorAll('.skill_box .skill_prodress span');
        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

// ===========creat popup onclick the image========

// storag the image in array 
let ourgallery = document.querySelectorAll('.gallery img');
ourgallery.forEach(img =>{
    img.addEventListener('click', (e)=>{
        // create over lay element
        let overlay = document.createElement('div');
        // add class name
        overlay.className = 'popup_overlay';
        // append over lay on the body
        document.body.appendChild(overlay);
        // create the popup box
        let popupBox = document.createElement('div');
        // creat the class name 
        popupBox.className = "popup_box";
        // 
        if(img.alt !== null){
            // crearte heading
            let headingimg = document.createElement('h2');
            // creat text for heading
            let textnode = document.createTextNode(img.alt);
            // appennd the textto th heading
            headingimg.appendChild(textnode);
            // append the heading to the popup box
            popupBox.appendChild(headingimg);
        };

        //creat the img 
        let popupImg = document.createElement('img');
        // set mg sourc
        popupImg.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImg);
        // appent the popup box to body
        document.body.appendChild(popupBox);
        // create closs span
        let closespan = document.createElement('span');
        // add class to the close span
        let  closebuttontext = document.createTextNode('X');
        // append text to the span 
        closespan.appendChild(closebuttontext);
        // add class name to teh closespan
        closespan.className = "close_span";
        // append close span to the popup box
        popupBox.appendChild(closespan);
    });
});
// close popup 
document.addEventListener('click', (e)=> {
    if(e.target.className == 'close_span'){
        e.target.parentNode.remove()
        document.querySelector('.popup_overlay').remove()
    }
});
// ==================click bullet==================
const allbullet = document.querySelectorAll('.nav_bullets .bullet');
const allinkes = document.querySelectorAll('.linkes a');
function intoview(element){
    element.forEach(ell => {
        ell.addEventListener('click', (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
};
intoview(allbullet);
intoview(allinkes);
//===============handel active state=================
function handelactive(ev){
    // remove active class from all children
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove('active');
    });
    // add active class from self
    ev.target.classList.add('active')
};

let btnbullets = document.querySelectorAll('.bulltes_option span');
let bulltescontainer = document.querySelector('.nav_bullets');
let buletlocal = localStorage.getItem('bullet_save');
if(buletlocal !== null){
    btnbullets.forEach(span =>{
        span.classList.remove('active')
    });
    if(buletlocal === 'block'){
        bulltescontainer.style.display = 'block';
        document.querySelector('.bulltes_option .yes').classList.add('active');
    }else{
        bulltescontainer.style.display = 'none';
        document.querySelector('.bulltes_option .no').classList.add('active');
    }
};

btnbullets.forEach(span => {
    span.addEventListener('click', (e)=> {
        if(span.dataset.display === 'show'){
            bulltescontainer.style.display = 'block';
            localStorage.setItem('bullet_save', 'block')
        }else{
            bulltescontainer.style.display = 'none';
            localStorage.setItem('bullet_save', 'none')
        };
        handelactive(e);
    });
});
document.querySelector('.reset_option').onclick = function (){
    localStorage.removeItem('color_option')
    localStorage.removeItem('background_option')
    localStorage.removeItem('bullet_save')
    window.location.reload()
};
let togglebtn = document.querySelector('.toggle_menu');
let tlinkes = document.querySelector('.linkes');
togglebtn.onclick = function(e){
    // stop propagation
    e.stopPropagation();
    // toggle class "menu_active" on botton
    this.classList.toggle('menu_active');
    // togglr class "open" on linkes
    tlinkes.classList.toggle("open");
};
document.addEventListener("click",(e)=> {
    if(e.target !== togglebtn && e.target !== tlinkes){
        if(tlinkes.classList.contains('open')){
            // toggle class "menu_active" on botton
            togglebtn.classList.toggle('menu_active');
            // togglr class "open" on linkes
            tlinkes.classList.toggle("open");
        }
    }
});
tlinkes.onclick = function (e){
    e.pstopPropagation()
};