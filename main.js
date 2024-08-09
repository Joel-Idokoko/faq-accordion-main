"use strict"

const $inputRadio = document.querySelector("#first");
const $content = document.querySelector("#first_content");
// console.log('hey', $inputRadio, $content);

let numberOfClicks = 0;

$inputRadio.addEventListener("click", function (e) {
  if (numberOfClicks == 0){
 numberOfClicks++;
 $content.style.display = "block";


  }
  else {
    const currentStatus = e.target.value;
    if (currentStatus == "on") {
      $content.style.display = "none";
    }
    console.log("e.value", currentStatus);
    numberOfClicks = 0;
  }
});

const $inputRadio2 = document.querySelector("#second");
const $content2 = document.querySelector("#second_content");
// console.log('hey', $inputRadio, $content);

let numberOfClicks2 = 0;

$inputRadio2.addEventListener("click", function (e) {
  if (numberOfClicks2 == 0){
 numberOfClicks2++;
 $content2.style.display = "block";


  }
  else {
    const currentStatus2 = e.target.value;
    if (currentStatus2 == "on") {
      $content2.style.display = "none";
    }
    console.log("e.value", currentStatus2);
    numberOfClicks2 = 0;
  }
});

const $inputRadio3 = document.querySelector("#third");
const $content3 = document.querySelector("#third_content");
// console.log('hey', $inputRadio, $content);

let numberOfClicks3 = 0;

$inputRadio3.addEventListener("click", function (e) {
  if (numberOfClicks3 == 0){
 numberOfClicks3++;
 $content3.style.display = "block";


  }
  else {
    const currentStatus3 = e.target.value;
    if (currentStatus3 == "on") {
      $content3.style.display = "none";
    }
    console.log("e.value", currentStatus3);
    numberOfClicks3 = 0;
  }
});

const $inputRadio4 = document.querySelector("#fourth");
const $content4 = document.querySelector("#fourth_content");
// console.log('hey', $inputRadio, $content);

let numberOfClicks4 = 0;

$inputRadio4.addEventListener("click", function (e) {
  if (numberOfClicks4 == 0){
 numberOfClicks4++;
 $content4.style.display = "block";


  }
  else {
    const currentStatus4 = e.target.value;
    if (currentStatus4 == "on") {
      $content4.style.display = "none";
    }
    console.log("e.value", currentStatus4);
    numberOfClicks4 = 0;
  }
});