const frmSub = document.frmSub;

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
   
   Array.from(frmSub.querySelectorAll('input')).forEach(function(inputItem){
     if(inputItem.type === 'text') {
  
        let msg = `${inputItem.type} cannot be empty`;
        
        if(isEmpty(inputItem.value)){
         showNoti(inputItem, msg)
        }else{
         clsPastErrStyle(inputItem);
        }
  
  
     }else if(inputItem.type === 'email'){

        let msg = '';

        if(isEmpty(inputItem.value)){
            msg = `${inputItem.type} cannot be empty`;
            showNoti(inputItem, msg);

        }else if( !isEmail(inputItem.value) ){
            msg = `Please provide a valid email address`;
            showNoti(inputItem, msg);
        }else{
           clsPastErrStyle(inputItem);
        }
  
  
     }else if(inputItem.type === 'password'){

        let msg = `${inputItem.type} cannot be empty`;

        if(isEmpty(inputItem.value)){
         showNoti(inputItem, msg)
        }else{
         clsPastErrStyle(inputItem);
        }
       
     }
   });
  
  }

frmSub.addEventListener('submit', e=>{
   e.preventDefault();
   validateFrm();
});