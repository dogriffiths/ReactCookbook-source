function getDescription(element) {
    const nodeName = element.nodeName.toUpperCase();
    const role = element.role ? element.role : (nodeName === 'BUTTON')
        ? 'button'
        : (nodeName === 'INPUT' || nodeName === 'TEXTAREA')
            ? 'text field ' + element.value
            : (nodeName === 'SELECT')
                ? 'select field ' + element.value
                : (element.getAttribute('role') || 'group');
    const title = element.title || element.textContent;
    const extraInstructions = (nodeName === 'INPUT' || nodeName === 'TEXTAREA')
        ? 'You are currently in a text field. To enter text, type.'
        : '';
    return role + '. ' + title + '. ' + extraInstructions;
}

function talkToMe() {
    if ((process.env.NODE_ENV !== 'production') && (sessionStorage.getItem('talkToMe') === "true")) {
        document.addEventListener('focusin', evt => {
            if (sessionStorage.getItem('talkToMe') === "true") {
                const description = getDescription(evt.target);
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();
                }
                window.speechSynthesis.speak(new SpeechSynthesisUtterance(description));
            }
        });
    }
}

export default talkToMe;
