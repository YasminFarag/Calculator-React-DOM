let buttons = document.querySelectorAll('.btn');
let result = document.querySelector('.inpt');
let equalBtn = document.querySelector('.btn-equal');
let clearBtn = document.querySelector('.btn-clear');

for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', ()=> {
        let numbers = buttons[i].getAttribute('data-num');
        result.value += numbers
    })
}

equalBtn.addEventListener('click', ()=> {

    if(result.value === ''){
        alert ("please Type Something To Start The Operation");
    }else {
    let value = eval(result.value);
    result.value = value;

    }
})

clearBtn.addEventListener('click', ()=> {
    result.value = '';
})