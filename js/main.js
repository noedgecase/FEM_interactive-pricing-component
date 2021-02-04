'use strict'

const checkBox = document.querySelector('.checkbox');
const switchBtn = document.querySelector('.switch-container');
const rangeSlider = document.getElementById('range-slider');
const pageViews = document.getElementById('pageviews-counter');
const priceTag = document.getElementById('changing-price-tag');
let inputValue = rangeSlider.value;

console.log(inputValue);

window.addEventListener('load', ()=>{
      checkBox.checked=false;
});

checkBox.addEventListener('click', ()=>{
      switchBtn.classList.toggle('active');
})


// input range

// rangeSlider.oninput = function(){
//       console.log(`switch`);
//       switch(inputValue){
//       case '0':
//       pageViews.innerHTML="10K pageviews";
//       priceTag.innerHTML="$8";
//       console.log('lol');
//       break;
//       case '1':
//       pageViews.innerHTML="50K pageviews";
//       priceTag.innerHTML="$12";
//       console.log('lol2');
//       break;
//       case '2':
//       pageViews.innerHTML="100K pageviews";
//       priceTag.innerHTML="$16";
//       console.log('lol3');
//       break;
//       case '3':
//       pageViews.innerHTML="500k pageviews";
//       priceTag.innerHTML="$24";
//       console.log('lol4');
//       break;
//       case '4':
//       pageViews.innerHTML="1M pageviews";
//       priceTag.innerHTML="$36";
//       console.log('lol5');
//       break;
//       }
// };

rangeSlider.oninput = function () {
      // console.log(`else if `);
      if (inputValue == 0) {
            pageViews.innerHTML="10K pageviews";
            priceTag.innerHTML="$8";
            console.log(`0`);
      }
      if (inputValue == 1) {
            pageViews.innerHTML="50K pageviews";
            priceTag.innerHTML="$12";
            console.log(`1`);
      } else if (inputValue == 2) {
            pageViews.innerHTML="100K pageviews";
            priceTag.innerHTML="$16";
            console.log(`2`);
      } else if (inputValue == 3) {
            pageViews.innerHTML="500k pageviews";
            priceTag.innerHTML="$24";
            console.log(`3`);
      } else if (inputValue == 4) {
            pageViews.innerHTML="1M pageviews";
            priceTag.innerHTML="$36";
            console.log(`4`);
      }
};
    