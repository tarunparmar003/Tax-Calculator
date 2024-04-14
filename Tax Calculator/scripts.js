const myBtn1 = document.querySelector(".submit");
const myBtn2 = document.querySelector(".close");
const myTax = document.querySelector(".tax");
const myOutputBox = document.querySelector(".output-box");

function calculateTax() {
  const myAnnualIncome = parseFloat(document.querySelector("#annual-income").value);
  const myExtraIncome = parseFloat(document.querySelector("#extra-income-input").value);
  const myAgeGroupInput = parseInt(document.querySelector("#age-group-input").value);
  const myApplicableDeductions = parseFloat(document.querySelector("#applicable-deductions").value);

  let taxCalculation = myAnnualIncome + myExtraIncome - myApplicableDeductions;
  let tax = 0;
  let taxRate = 0;

  if (myAgeGroupInput < 40) {
    taxRate = 0.3;
  } else if (myAgeGroupInput >= 40 && myAgeGroupInput < 60) {
    taxRate = 0.4;
  } else if (myAgeGroupInput >= 60) {
    taxRate = 0.1;
  }

  if (taxCalculation <= 600000) {
    tax = taxCalculation;
  } else if (taxCalculation > 800000) {
    tax = (taxCalculation - 800000) * taxRate;
  }

  
  myTax.textContent = `${tax}`;
}

function myEvent2() {
  myOutputBox.style.transform = "scale(0)";
}

function myEvent() {
  const myAnnualIncome = parseFloat(document.querySelector("#annual-income").value);
  const myAgeGroupInput = parseInt(document.querySelector("#age-group-input").value);
  
  if (myAnnualIncome > 0 && myAgeGroupInput > 0) {
    myOutputBox.style.transform = "scale(1)";
    calculateTax();
  }
}

myBtn1.addEventListener("click", myEvent);
myBtn2.addEventListener("click", myEvent2);
