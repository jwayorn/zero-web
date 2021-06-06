const shareModal = document.getElementById('shareModal');
const shareBtn = document.getElementById('shareBtn');
const svg = shareBtn.querySelector('svg');

shareBtn.addEventListener('click', toggleShareModal);

function toggleShareModal(){

   
   if(window.matchMedia('(min-width:768px)').matches){  // larg device

      // hide active on mobile 
      if(!shareModal.classList.contains('translate-y-full')){
         shareModal.classList.add('translate-y-full');
      }

      if(shareModal.classList.contains('md:scale-100')){
         // close modal
         shareModal.classList.remove('md:scale-100');

         switchBtnStyle(false);
      }else{
         // open modal
         shareModal.classList.add('md:scale-100');
         
         switchBtnStyle(true);
      }

   }else{ // mobile device

      shareModal.classList.toggle(['translate-y-full']);

      if(shareModal.classList.contains('translate-y-full')){ //modal is opening
         switchBtnStyle(true);
      }else{
         switchBtnStyle(false);
      }
   }
}

function switchBtnStyle(isActive){
   if(isActive){
      // set shareBtn style
      shareBtn.classList.add('bg-disaturated-dark-blue');

      svg.classList.remove('text-disaturated-dark-blue');
      svg.classList.add('text-light-grayish-blue');
   }else{
      // return shareBtn style
      shareBtn.classList.remove('bg-disaturated-dark-blue');

      svg.classList.remove('text-light-grayish-blue');
      svg.classList.add('text-disaturated-dark-blue');
   }
}


// [].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})