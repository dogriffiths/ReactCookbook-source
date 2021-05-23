// See https://stackoverflow.com/questions/7208161/focus-next-element-in-tab-index

const focusableSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]';


function focusNextElement(){
    var focusables = document.querySelectorAll(focusableSelector);
    var current = document.querySelectorAll(':focus');
    var nextIndex = 0;
    if(current.length === 1){
        var currentIndex = Array.prototype.indexOf.call(focusables, current[0]);
        if(currentIndex + 1 < focusables.length){
            nextIndex = currentIndex + 1;
        }
    }

    focusables[nextIndex].focus();
}

function focusPreviousElement(){
    var focusables = document.querySelectorAll(focusableSelector);
    var current = document.querySelectorAll(':focus');
    var prevIndex = focusables.length - 1;
    if(current.length === 1){
        var currentIndex = Array.prototype.indexOf.call(focusables, current[0]);
        if(currentIndex > 0){
            prevIndex = currentIndex - 1;
        }
    }

    focusables[prevIndex].focus();
}

export {focusNextElement, focusPreviousElement};