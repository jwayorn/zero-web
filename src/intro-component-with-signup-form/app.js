const signupFrm = document.signupForm;

function isEmail(val){

   return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);
}

function isEmpty(val){
   return val.trim() === '';
}


function showNoti(inputItem, msg) {
   const wrapInputItem = inputItem.parentNode;
   wrapInputItem.classList.add('error');
   
   wrapInputItem.querySelector('.error--msg').innerText = msg;

}

// Clear each input's has been error style when focus
function clsPastErrStyle(inputItem) {
   inputItem.parentNode.classList.remove('error');
} 

function validateFrm(){
 

   //1) validate each input
   //2) if error send message to user and style alert
   
   Array.from(signupFrm.querySelectorAll('input')).forEach(function(inputItem){
     if(inputItem.type === 'text') {
  
        let msg = `${inputItem.placeholder} cannot be empty`;
        
        if(isEmpty(inputItem.value)){
         showNoti(inputItem, msg)
        }else{
         clsPastErrStyle(inputItem);
        }
  
  
     }else if(inputItem.type === 'email'){

        let msg = '';

        if(isEmpty(inputItem.value)){
            msg = `${inputItem.placeholder} cannot be empty`;
            showNoti(inputItem, msg);

        }else if( !isEmail(inputItem.value) ){
            msg = `Looks like this is not an email`;
            showNoti(inputItem, msg);
        }else{
           clsPastErrStyle(inputItem);
        }
  
  
     }else if(inputItem.type === 'password'){

        let msg = `${inputItem.placeholder} cannot be empty`;

        if(isEmpty(inputItem.value)){
         showNoti(inputItem, msg)
        }else{
         clsPastErrStyle(inputItem);
        }
       
     }
   });
  
  }

signupFrm.addEventListener('submit', e=>{
   e.preventDefault();
   validateFrm();
});