### Functions that have been used
# setInterval()
==> The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
-We used it to redisplay background images with steady time

# localStorage() {
    getItem() =>To call an empty item in storage 
    setItem() =>To add the item we summoned
} ==>The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.
-We used it to save customization settings

# style.setProperty() 
==>Here to target the saved property in the language and add value to it to use in the volume

# offsetTop() 
==>
The offsetTop property returns the top position (in pixels) relative to the parent.

# offsetHeight()
==>The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.


# innerHeight()
==>The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

## Here were the best practices for functions
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

    scrollY()
windowScroll()
