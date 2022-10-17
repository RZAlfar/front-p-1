const btn_to_top = document.getElementById('to-top');

window.onscroll =function() {
  'use strict';
  
  if (window.pageYOffset >= 20)
  {
    btn_to_top.style.display = 'block';
  }
  else {
    btn_to_top.style.display = 'none';
  }
  

}

btn_to_top.onclick = function(){
  'use strict'
  window.scrollTo(0, 0);
}

