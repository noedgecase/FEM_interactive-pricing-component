'use strict';

const checkBox = document.querySelector('.checkbox');
const switchBtn = document.querySelector('.switch-container');
const rangeSlider = document.getElementById('range-slider');
const pageViews = document.getElementById('pageviews-counter');
const priceTag = document.getElementById('changing-price-tag');
const billingBtn = document.getElementById('discount');
const monthYear = document.getElementById('month-year');

// console.log(inputValue);

//setting the starting value
const inputValue = rangeSlider.value;
rangeSlider.value = 0;
priceTag.innerHTML = `$8.00`;
pageViews.innerHTML = '10K pageviews';

window.addEventListener('load', () => {
  checkBox.checked = false;
});

checkBox.addEventListener('click', () => {
  switchBtn.classList.toggle('active');
});

// input range
rangeSlider.oninput = function () {
  const inputValue = rangeSlider.value;
  switch (inputValue) {
    case '0':
      pageViews.innerHTML = '10K pageviews';
      priceTag.innerHTML = '$8';
      console.log('step1');
      break;
    case '1':
      pageViews.innerHTML = '50K pageviews';
      priceTag.innerHTML = '$12';
      console.log('step2');
      break;
    case '2':
      pageViews.innerHTML = '100K pageviews';
      priceTag.innerHTML = '$16';
      console.log('step3');
      break;
    case '3':
      pageViews.innerHTML = '500k pageviews';
      priceTag.innerHTML = '$24';
      console.log('step4');
      break;
    case '4':
      pageViews.innerHTML = '1M pageviews';
      priceTag.innerHTML = '$36';
      console.log('step5');
      break;
  }
};

billingBtn.onclick = function () {};
