// function validate(val) {
//   v1 = document.getElementById("fullName");
//   v2 = document.getElementById("lname");
//   v3 = document.getElementById("email");
//   v4 = document.getElementById("mob");
//   v5 = document.getElementById("job");
//   v6 = document.getElementById("ans");

//   flag1 = true;
//   flag2 = true;
//   flag3 = true;
//   flag4 = true;
//   flag5 = true;
//   flag6 = true;

//   if (val >= 1 || val == 0) {
//     if (v1.value == "") {
//       v1.style.borderColor = "red";
//       flag1 = false;
//     } else {
//       v1.style.borderColor = "green";
//       flag1 = true;
//     }
//   }

//   if (val >= 2 || val == 0) {
//     if (v2.value == "") {
//       v2.style.borderColor = "red";
//       flag2 = false;
//     } else {
//       v2.style.borderColor = "green";
//       flag2 = true;
//     }
//   }
//   if (val >= 3 || val == 0) {
//     if (v3.value == "") {
//       v3.style.borderColor = "red";
//       flag3 = false;
//     } else {
//       v3.style.borderColor = "green";
//       flag3 = true;
//     }
//   }
//   if (val >= 4 || val == 0) {
//     if (v4.value == "") {
//       v4.style.borderColor = "red";
//       flag4 = false;
//     } else {
//       v4.style.borderColor = "green";
//       flag4 = true;
//     }
//   }
//   if (val >= 5 || val == 0) {
//     if (v5.value == "") {
//       v5.style.borderColor = "red";
//       flag5 = false;
//     } else {
//       v5.style.borderColor = "green";
//       flag5 = true;
//     }
//   }
//   if (val >= 6 || val == 0) {
//     if (v6.value == "") {
//       v6.style.borderColor = "red";
//       flag6 = false;
//     } else {
//       v6.style.borderColor = "green";
//       flag6 = true;
//     }
//   }

//   flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

//   return flag;
// }

function validateForm() {
  let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let customAlert = document.getElementById("custom-alert");
  let alertMessage = customAlert.querySelector("strong");

  if (fullName.value === "" || email.value === "" || phone.value === "") {
    alertMessage.textContent = "Fill the form completely.";
    customAlert.style.display = "block";
    return false;
  }

  return true;
}

function closeCustomAlert() {
  let customAlert = document.getElementById("custom-alert");
  customAlert.style.display = "none";
}
