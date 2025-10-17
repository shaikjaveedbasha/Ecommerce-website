function  check(){
    const username = document.contact.username.value;
    const mobile  = document.contact.mobile.value;
    const email = document.contact.email.value
    const mobileLength = Number(document.contact.countryCode.value)
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError')

    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
    const alphaExp = /^[a-zA-Z\s]+$/
    const numExp = /^[0-9]+$/
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   





    //Name Validaiton
    if(username === '') {
        nameError.textContent = 'Name is Mandatary';
    }
    else {
        if (username.match(alphaExp)){
            nameError.textContent = '';
            nameStatus = true
        }
        else {
            nameError.textContent = 'Name should be contains only alphabetics'
        }
    }
    

    // Mobile Validation
    if(mobile === ''){
        mobileError.textContent = 'Mobile Number is mandatory';
    }
    else {
         if (mobile.match(numExp)) {
             if (mobile.length === mobileLength){
                 mobileError.textContent = '';
                 mobileStatus = true;
             }
             else {
                 mobileError.textContent = `${mobileLength} Digits Mobile Number is mandatory`
             }
         }
         else{
            mobileError.textContent = 'Mobile should be in Digits Only'
         }
        
     }

     // Email Validation
     if (email === ''){
        emailError.textContent = 'Email Address is Mandatory'
     }
     else{
        if (email.match(emailExp)) {
            emailError.textContent = '';
            emailStatus = true
        }
        else{
            emailError.textContent = 'Invalid Email Address'
        }
     }


    //Return logic
    if (nameStatus && mobileStatus && emailStatus) {
        return true
    }

    else {
        return false
    }
}