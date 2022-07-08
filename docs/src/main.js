//Form validation

const form = document.forms['myForm'];
const errorNode = document.querySelector('.w3-text-red.show-error');
const successNode = document.querySelector('.w3-text-light-green.😶-text-pale.show-success')
const buttonSubmit = document.querySelector('.w3-button.😶-button.😶-text-pale.w3-padding-large.w3-border-0.pageclip-form__submit');

buttonSubmit.addEventListener('click', e => {
    e.preventDefault();
    resetError();
    const emailRes = emailValidation(form.email.value)
    if(!emailRes.isValid) {
        successNode.style.display = 'none';
        showVisible() //shows error
        return;
    }

    Pageclip.send('bSCNueNophgfnRmIhCPRi9QDRRxCw8BE',
        'default',
        { email: emailRes.type, subject: form.subject.value, message: form.message.value },
        function(err) {
            if(err) {
                showVisible()
                errorNode.textContent = 'Something went wrong with the form. Try again.'
            } else {
                successNode.style.display = 'block';
                form.reset();
            }
        })
    console.log('fsd')
    resetError();
})
function showVisible() {
    errorNode.style.display = 'block';
}

function resetError() {
    errorNode.style.display = 'none';
    successNode.style.display = 'none';
    errorNode.textContent = 'Invalid form'
}

function emailValidation(email) {
   return { type : email, isValid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) }
}