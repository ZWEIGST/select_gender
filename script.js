const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const womanError = document.querySelector('.check__error_woman');
const manError = document.querySelector('.check__error_man');

function boxValidation() {
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (gender === 'woman') {
        input.style.border = '1px solid red';
        womanError.classList.remove('check-hidden');
        input.focus();
        return false
        
    } else if (gender === 'man') {
        input.style.border = '1px solid red';
        manError.classList.remove('check-hidden');
        input.focus();
        return false
    }
};

btn.onclick = boxValidation;