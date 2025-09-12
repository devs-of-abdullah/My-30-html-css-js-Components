const btnBackToGeneral = document.getElementById("btnBackToGeneral");
const btnBackToService = document.getElementById("btnBackToService");
const btnNextToService = document.getElementById("btnNextToService");
const btnNextToConfirm = document.getElementById("btnNextToConfirm");
const btnConfirm = document.getElementById("btnConfirm");

const formGeneral = document.querySelector(".GeneralForm");
const formService = document.querySelector(".ServiceForm");
const formConfirm = document.querySelector(".ConfirmForm");

const fullnameInput = document.getElementById("fullname");
const birthdateInput = document.getElementById("birthdate");
const emailInput = document.getElementById("email");
const genderInputs = document.querySelectorAll("input[name='gender']");
const tripInputs = document.querySelectorAll("input[name='Trip']");

const fullnameValue = document.getElementById("FullnameValue");
const emailValue = document.getElementById("EmailValue");
const birthDateValue = document.getElementById("BirthDateValue");
const genderValue = document.getElementById("GenderValue");
const serviceValue = document.getElementById("ServiceValue");



btnBackToGeneral.addEventListener("click",(e)=>{
e.preventDefault();
formGeneral.style.display="block";
formService.style.display ="none";
formConfirm.style.display="none";
})
btnBackToService.addEventListener("click", (e) => {
  e.preventDefault();
  formGeneral.style.display = "none";
  formService.style.display = "block";
  formConfirm.style.display = "none";
});
btnNextToService.addEventListener("click", (e) => {
  e.preventDefault();
  if (fullnameInput.value.trim() === "") {
    alert("Please enter your fullname.");
    return;
  }
  if (birthdateInput.value === "") {
    alert("Please select your birth date.");
    return;
  }
  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }
  if (!Array.from(genderInputs).some((input) => input.checked)) {
    alert("Please select your gender.");
    return;
  }
  formGeneral.style.display = "none";
  formService.style.display = "block";
  formConfirm.style.display = "none";

});
btnNextToConfirm.addEventListener("click", (e) => {
  e.preventDefault();  
  
  if (!Array.from(tripInputs).some((input) => input.checked)) {
     alert("Please select a service type.");
     return;
   }
  formGeneral.style.display = "none";
  formService.style.display = "none";
  formConfirm.style.display = "block";

   fullnameValue.textContent = fullnameInput.value;
   emailValue.textContent = emailInput.value;
   birthDateValue.textContent = birthdateInput.value;

   const selectedGender = Array.from(genderInputs).find(
     (input) => input.checked
   );
   genderValue.textContent = selectedGender ? selectedGender.value : "";

   const selectedTrip = Array.from(tripInputs).find((input) => input.checked);
   serviceValue.textContent = selectedTrip ? selectedTrip.value : "";

      
 

});

btnConfirm.addEventListener("click", (e)=>{
  e.preventDefault();

  alert("Your Appointment Created Successfully");


  fullnameInput.value = "";
  birthdateInput.value = "";
  emailInput.value = "";

  genderInputs.forEach((input) => (input.checked = false));
  tripInputs.forEach((input) => (input.checked = false));

  fullnameValue.textContent = "";
  emailValue.textContent = "";
  birthDateValue.textContent = "";
  genderValue.textContent = "";
  serviceValue.textContent = "";

  formGeneral.style.display = "block";
  formService.style.display = "none";
  formConfirm.style.display = "none";

})

