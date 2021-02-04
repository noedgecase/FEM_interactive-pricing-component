'use strict'

const checkBox = document.querySelector('.checkbox');
const switchBtn = document.querySelector('.switch-container');
const rangeSlider = document.getElementById('range-slider');

window.addEventListener('load', ()=>{
      checkBox.checked=false;
      console.log('unchecked');
});

checkBox.addEventListener('click', ()=>{
            switchBtn.classList.toggle('active');
})
