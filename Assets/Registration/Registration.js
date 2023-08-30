//  registration form  validation
function validateRegistrationForm(){
    let isFormValid = true;
  let isFirstaNameValid =   validateFirstName();
  let isLastaNameValid =    validateLastName();
  let isEmailValid =    validateEmail();
  let isGenderValid =  validateGender();
  let isDoBValid =   validateDoB();
  let isPhoneNumberValid =   validatePhoneNumber();
  let isUploadFileValid =    validateUploadFile();
  let isAddressValid =    validateAddress();

  if(isFirstaNameValid && isLastaNameValid && isEmailValid && isGenderValid && isDoBValid 
    && isPhoneNumberValid && isUploadFileValid && isAddressValid ){
      isFormValid = true;
    }else{
        isFormValid = false;
    }
    ShowOverAllValidation(isFormValid);

};
// overall validataion msg
function ShowOverAllValidation(isFormValid){
    if(isFormValid == true){
        document.getElementById("OverAllMsgErr").classList.add("d-none");
    }else{
        document.getElementById("OverAllMsgErr").classList.add("d-block")
         document.getElementById("OverAllMsgErr").classList.remove("d-none"); 
    }
    }

// first name validation
function validateFirstName(){
   let valid = true;
    if(document.getElementById("FirstName").value == ""){
        document.getElementById("FirstName").classList.add("b-danger");
        document.getElementById("FirstNameErr").classList.add("d-block")
        document.getElementById("FirstNameErr").classList.remove("d-none");
        valid = false;
    }
    else{
        document.getElementById("FirstName").classList.remove("b-danger");
        document.getElementById("FirstNameErr").classList.remove("d-block")
        document.getElementById("FirstNameErr").classList.add("d-none");
        valid = ture;
    }
    return valid;
}
// last name validation
function validateLastName(){
    let valid = true;
    if(document.getElementById("LastName").value == ""){
        document.getElementById("LastName").classList.add("b-danger");
        document.getElementById("LastNameErr").classList.add("d-block");
        document.getElementById("LastNameErr").classList.remove("d-none");
      valid =false;
    }else{
        document.getElementById("LastName").classList.remove("b-danger");
        document.getElementById("LastNameErr").classList.remove("d-block")
        document.getElementById("LastNameErr").classList.add("d-none");
        valid = true;
    }
    return valid;
}
// email validation
function validateEmail(){
    let valid = true;
    if(document.getElementById("Email").value == ""){
        document.getElementById("Email").classList.add("b-danger");
        document.getElementById("EmailErr").classList.add("d-block")
        document.getElementById("EmailErr").classList.remove("d-none");
        valid = false;
    }else{
        document.getElementById("Email").classList.remove("b-danger");
        document.getElementById("EmailErr").classList.remove("d-block");
        document.getElementById("EmailErr").classList.add("d-none");
        valid = true;
    }
    return valid;
}
// gender validation
function validateGender(){
    let valid = true;
    document.getElementById("gender")
if(document.getElementsByName("gender")[0].checked == false && document.getElementsByName("gender")[1].checked == false){
    document.getElementById("genderErr").classList.add("d-block");
    document.getElementById("genderErr").classList.remove("d-none");
    valid = false;

}else{
    document.getElementById("genderErr").classList.remove("d-block");
    document.getElementById("genderErr").classList.add("d-none");
    valid = true;
}
return valid;
}
// DoB validation
function validateDoB(){
    let valid = true;
    if(document.getElementById("DOB").value == ""){
        document.getElementById("DOB").classList.add("b-danger");
        document.getElementById("DOBErr").classList.add("d-block");
        document.getElementById("DOBErr").classList.remove("d-none");
      valid = false;
    }else{
        document.getElementById("DOB").classList.remove("b-danger")
        document.getElementById("DOBErr").classList.remove("d-block");
        document.getElementById("DOBErr").classList.add("d-none");
        valid = true
    }  
    return valid;
}
// phone number validation
function validatePhoneNumber(){
    let valid = true;
    if(document.getElementById("phonenumber").value == ""){
        document.getElementById("phonenumber").classList.add("b-danger");
        document.getElementById("PhonenumberErr").classList.add("d-block");
        document.getElementById("PhonenumberErr").classList.remove("d-none");
        valid = false;
    }else{
        document.getElementById("phonenumber").classList.remove("b-danger");
        document.getElementById("PhonenumberErr").classList.remove("d-block")
        document.getElementById("PhonenumberErr").classList.add("d-none");
        valid = true
    }
    return valid;
}
// upload file validation
function validateUploadFile(){
    let valid = true;
    if(document.getElementById("file").value == ""){
        document.getElementById("file").classList.add("b-danger");
        document.getElementById("FileuploadErr").classList.add("d-block");
        document.getElementById("FileuploadErr").classList.remove("d-none");
        valid = false;
    }else{
        document.getElementById("file").classList.remove("b-danger");
        document.getElementById("FileuploadErr").classList.remove("d-block")
        document.getElementById("FileuploadErr").classList.add("d-none");
        valid = true;
    }
    return valid;
}
// address validation
function validateAddress(){
    let valid = true;
    if(document.getElementById("Address").value == ""){
        document.getElementById("Address").classList.add("b-danger");
        document.getElementById("AddressErr").classList.add("d-block");
        document.getElementById("AddressErr").classList.remove("d-none");
        valid = false;
    }else{
        document.getElementById("Address").classList.remove("b-danger");
        document.getElementById("AddressErr").classList.remove("d-block")
        document.getElementById("AddressErr").classList.add("d-none");
        valid = true;
    }
    return valid;
}
