// login button functionality
const loginBtn = document.getElementById("login_btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const pinNumberValue = document.getElementById("pin-number").value;

  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  const pinNumberValueConverted = parseInt(pinNumberValue);

  //   console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credentials");
  }
});
