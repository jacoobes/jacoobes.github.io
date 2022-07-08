//Form validation

const form = document.forms['myForm'];
const errorNode = document.querySelector('.😶-text-pale.show-error');

// Add a listener to the submit event
form.addEventListener('submit', function (e) {
    e.preventDefault();
    resetError();
    const emailRes = emailValidation(form.email.value)
     if(!emailRes.isValid) {
         showVisible() //shows error
         return;
     }
     Pageclip.send('bSCNueNophgfnRmIhCPRi9QDRRxCw8BE',
         'default',
         { email: emailRes.type, subject: form.subject.value },
         function(err) {
            if(err) {
                showVisible()
                errorNode.textContent = 'Something went wrong with the form. Try again.'
            }
     })

     form.reset();
     resetError();
});
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