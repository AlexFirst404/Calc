"use strict"
const themeBtn = document.querySelector('.theme');

function changeTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    }
    else {
        localStorage.setItem('dark-mode', 'false');
    }
}

function setTheme() {
    if (localStorage.getItem('dark-mode')) {
        if (localStorage.getItem('dark-mode') == 'true') {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }
};
themeBtn.addEventListener('click', changeTheme);
setTheme();

const action = document.querySelector('.calc__action');

const result = document.querySelector('.calc__result');

const btns = document.querySelectorAll('.calc__btn');
console.log(btns)

let buffer = false;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == 'clear') {
            action.textContent = ''
            result.textContent = 0
            buffer = false
        }
        else if (btn.id != '' && btn.id != '=' && btn.id != 'theme') {
            if (buffer) {
                action.textContent = buffer + btn.id
                buffer = false
            }
            else {
                action.textContent += btn.id
            }
        }
        else if (btn.id == '=') {
            result.textContent = eval(action.textContent).toFixed(2)
            buffer = result.textContent
        }
    })
});