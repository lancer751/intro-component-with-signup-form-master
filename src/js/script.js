const contactForm = document.querySelector('#formContact');
const dataUser = contactForm.querySelectorAll('input');

const emailToSend = {
    "firstName": "",
    "lastName": "",
    "userAddress": "",
    "userPassword": "",
}

dataUser.forEach(data =>{
    data.addEventListener('input', validarCampo);
});

function validarCampo(e){
    let mensaje;
    let input = e.target;
    let inputData = e.target.value;
    if(inputData.trim().toLowerCase() === ''){
        let plcInput =  input.getAttribute('placeholder');
        mensaje = `${plcInput} cannot be empty`;
        showAlert(input, mensaje);
        return;
    }

    if(input.getAttribute('type') === 'email' && !checkEmail(inputData)){
        console.log('aaa')
        mensaje = 'Looks like this is not an email';
        showAlert(input, mensaje);
        return;
    }

    cleanAlert(input);

}

function checkEmail(email){
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;
}

function showAlert(currInput, txtMessage){
    cleanAlert(currInput)
    errorTxt = document.createElement('P');
    errorTxt.classList.add('error-txt');
    errorTxt.textContent = txtMessage;
    currInput.classList.remove('input-form');
    currInput.classList.add('input-error');
    currInput.parentElement.appendChild(errorTxt);
    currInput.parentElement.querySelector('img').classList.remove('hidden');
}

function cleanAlert(currInput){
    currInput.classList.remove('input-error');
    currInput.classList.add('input-form');
    currInput.parentElement.querySelector('img').classList.add('hidden');
    existAlert = currInput.parentElement.querySelector('.error-txt');
    existAlert? existAlert.remove(): true;
}