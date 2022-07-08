//Form validation

const form = document.forms['myForm'];
const errorNode = document.querySelector('.😶-text-pale.show-error');

const buttonSubmit = document.querySelector('.w3-button.😶-button.😶-text-pale.w3-padding-large.w3-border-0.pageclip-form__submit');
buttonSubmit.addEventListener('click', e => {
    e.preventDefault();
    resetError();
    const emailRes = emailValidation(form.email.value)
    if(!emailRes.isValid) {
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
            }
        })

    form.reset();
    resetError();
})
function showVisible() {
    errorNode.style.display = 'block';
}

function resetError() {
    errorNode.style.display = 'none';
    errorNode.textContent = 'Invalid form'
}

function emailValidation(email) {
   return { type : email, isValid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) }
}