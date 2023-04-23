'use strict';

const checkBox = document.querySelector('.checkbox');
const switchBtn = document.querySelector('.switch-container');
const pageViews = document.getElementById('pageviews-counter');
const billingBtn = document.getElementById('discount');
const monthYear = document.getElementById('month-year');
const displayPrice = document.getElementById('price');
const fullPrice = document.getElementById('full-price');
const discountPrice = document.getElementById('discount-price');

//starting value
const rangeSlider = document.getElementById('range-slider');
const inputValue = rangeSlider.value;
rangeSlider.value = 0;
pageViews.innerHTML = '10K pageviews';
window.addEventListener('load', () => {
  checkBox.checked = false;
});
//starting value

checkBox.addEventListener('click', () => {
  fullPrice.classList.toggle('hidden');
  discountPrice.classList.toggle('hidden');
  switchBtn.classList.toggle('active');
});

const pageViewsArr = [
  '10K PAGEVIEWS',
  '50K PAGEVIEWS',
  '100K PAGEVIEWS',
  '500K PAGEVIEWS',
  '1M PAGEVIEWS',
  '5M PAGEVIEWS',
];

const fullPriceArr = [8, 12, 16, 24, 36, 50];

// Discount Calculator
function addDiscount(initialPrice) {
  return initialPrice - (initialPrice * 25) / 100;
}
// Discount Calculator

rangeSlider.oninput = function () {
  const inputValue = rangeSlider.value;
  switch (inputValue) {
    case '0':
      pageViews.innerHTML = pageViewsArr[0];
      fullPrice.innerHTML = fullPriceArr[0];
      discountPrice.innerHTML = addDiscount(fullPriceArr[0]);
      break;
    case '1':
      pageViews.innerHTML = pageViewsArr[1];
      fullPrice.innerHTML = fullPriceArr[1];
      discountPrice.innerHTML = addDiscount(fullPriceArr[1]);
      break;
    case '2':
      pageViews.innerHTML = pageViewsArr[2];
      fullPrice.innerHTML = fullPriceArr[2];
      discountPrice.innerHTML = addDiscount(fullPriceArr[2]);
      break;
    case '3':
      pageViews.innerHTML = pageViewsArr[3];
      fullPrice.innerHTML = fullPriceArr[3];
      discountPrice.innerHTML = addDiscount(fullPriceArr[3]);
      break;
    case '4':
      pageViews.innerHTML = pageViewsArr[4];
      fullPrice.innerHTML = fullPriceArr[4];
      discountPrice.innerHTML = addDiscount(fullPriceArr[4]);
      break;
      case '5':
      pageViews.innerHTML = pageViewsArr[5];
      fullPrice.innerHTML = fullPriceArr[5];
      discountPrice.innerHTML = addDiscount(fullPriceArr[5]);
      break;
  }
};
