'use strict';

const checkBox = document.querySelector('.checkbox');
const switchBtn = document.querySelector('.switch-container');
const rangeSlider = document.getElementById('range-slider');
const pageViews = document.getElementById('pageviews-counter');
const priceTag = document.getElementById('changing-price-tag');
const billingBtn = document.getElementById('discount');
const monthYear = document.getElementById('month-year');

// console.log(inputValue);

let billingType = 0;
// 0 = monthly, 1 = yearly
console.log(billingType);

//setting the starting value
const inputValue = rangeSlider.value;
rangeSlider.value = 0;
priceTag.innerHTML = `8`;
pageViews.innerHTML = '10K pageviews';

window.addEventListener('load', () => {
  checkBox.checked = false;
});

checkBox.addEventListener('click', () => {
  switchBtn.classList.toggle('active');
});

checkBox.addEventListener('click', () => {
  if (billingType === 0) {
    billingType = 1;
    console.log(billingType);
  } else {
    billingType = 0;
    console.log(billingType);
  }
});

// input range
rangeSlider.oninput = function () {
  const inputValue = rangeSlider.value;
  switch (inputValue) {
    case '0':
      pageViews.innerHTML = '10K pageviews';
      console.log('step1');
      if (billingType === 0) {
        priceTag.innerHTML = '8';
      } else {
        priceTag.innerHTML = '2';
      }
      break;
    case '1':
      pageViews.innerHTML = '50K pageviews';
      console.log('step2');
      if (billingType === 0) {
        priceTag.innerHTML = '12';
      } else {
        priceTag.innerHTML = '3';
      }
      break;
    case '2':
      pageViews.innerHTML = '100K pageviews';
      console.log('step3');
      if (billingType === 0) {
        priceTag.innerHTML = '16';
      } else {
        priceTag.innerHTML = '4';
      }
      break;
    case '3':
      pageViews.innerHTML = '500k pageviews';
      console.log('step4');
      if (billingType === 0) {
        priceTag.innerHTML = '24';
      } else {
        priceTag.innerHTML = '6';
      }
      break;
    case '4':
      pageViews.innerHTML = '1M pageviews';
      console.log('step5');
      if (billingType === 0) {
        priceTag.innerHTML = '36';
      } else {
        priceTag.innerHTML = '9';
      }
      break;
  }
};

billingBtn.onclick = function () {};
