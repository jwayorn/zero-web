/* empty css                 */const e=document.frmSub;function t(e){return""===e.trim()}function r(e,t){const r=e.parentNode;r.classList.add("error"),r.querySelector(".error--msg").innerText=t}function a(e){e.parentNode.classList.remove("error")}e.addEventListener("submit",(n=>{n.preventDefault(),Array.from(e.querySelectorAll("input")).forEach((function(e){if("text"===e.type){let n=`${e.type} cannot be empty`;t(e.value)?r(e,n):a(e)}else if("email"===e.type){let o="";t(e.value)?(o=`${e.type} cannot be empty`,r(e,o)):(n=e.value,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)?a(e):(o="Please provide a valid email address",r(e,o)))}else if("password"===e.type){let n=`${e.type} cannot be empty`;t(e.value)?r(e,n):a(e)}var n}))}));
