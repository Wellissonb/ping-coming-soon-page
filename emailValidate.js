const buttonSubmit = document.querySelector('#submit')

buttonSubmit.addEventListener('click',(button)=>{
    button.preventDefault()
    const emailInput = document.querySelector('#email')
    const alertError = document.querySelector('#errorAlert')

    function validateEmail(email){
        const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
        return regex.test(email)
    }

    function showError(display,msg,color){
        alertError.style.display = display
        alertError.innerHTML = msg
        emailInput.style.borderColor = color
    }

   if (emailInput.value == ''){
        showError("block","Email can't be empty",'hsl(354, 100%, 66%)')
   }else if (validateEmail(emailInput.value)){
        showError('block', 'Done!','hsl(223, 100%, 88%)')
        alertError.style.color = 'hsl(223, 87%, 63%)'
        setTimeout(()=>{
          alertError.style.opacity = '0'          
        },2000)
        setTimeout(()=>{
          alertError.style.display = 'none'
          alertError.style.opacity = '1'
          alertError.style.color = 'hsl(354, 100%, 66%)'
        },3000)
   }else{
        showError("block","Please provide a valid email adress",'hsl(354, 100%, 66%)')
   }
    
})
