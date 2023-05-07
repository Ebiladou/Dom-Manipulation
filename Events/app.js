const btn = document.querySelector('.off');
const btnText = btn.textContent;
let click = false;

btn.addEventListener('click', () => {
    if (!click) {
        btn.textContent = btnText;
        click = true;
    } 
    else {
        btn.textContent = "machina acra pa on.";
        click = false;
    }
});