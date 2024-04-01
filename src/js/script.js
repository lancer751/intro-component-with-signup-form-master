const contactForm = document.querySelector('#formContact');
const dataUser = contactForm.querySelectorAll('input');

const emailToSend = {
    "firstName": "",
    "secondName": "",
    "userAddress": "",
    "userEmail": "",
}

dataUser.forEach(data =>{
    data.addEventListener('blur', validarCampo);
    console.log(data);
});

function validarCampo(e){
    let input = e.target;
    let inputData = e.target.value;
    console.log(inputData);

    if(inputData.trim().toLowerCase() === ''){
        showAlert(input);
        return;
    }
}

function showAlert(referencia){
    errorTxt = document.createElement('P');
    errorTxt.classList.add('text-Red', 'font-light', 'text-right', 'italic' ,'text-sm', 'mt-1');
    errorTxt.textContent = 'hoafd';
    referencia.parentElement.appendChild(errorTxt);
}