function validateEmail(mail) {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true);
  }
}

const frmSub = document.frmSub;

frmSub.addEventListener('submit', (e)=>{
   e.preventDefault();

   if( !validateEmail(frmSub.email.value) ){
      frmSub.classList.add('mail-error');
      document.querySelector('.email-error-msg').innerText ='Plese provide a valid email';
   }else{
      if(frmSub.classList.contains('mail-error')){
         frmSub.classList.remove('mail-error');
      }
   }

})