// Reusable Function
function getInputValue(input) {
  const inputField = document.getElementById(input);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

function getInputValueNUmber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputValueNumber = parseInt(inputFieldValue);
  return inputValueNumber;
}

function getInnerText(id) {
  const textField = document.getElementById(id);
  const textFieldValue = textField.innerText;
  const textValueNumber = parseInt(textFieldValue);
  return textValueNumber;
}

function setInnerValue(value) {
  const availableBalanceElement = document.getElementById("available_balance");
  availableBalanceElement.innerText = value;
  return availableBalanceElement;
}

// Clear Input Field
function clearInputField(id) {
  document.getElementById(id).value = "";
}

function clearTextField(id) {
  document.getElementById(id).innerText = "";
}

// Handle toggle functionality between forms as dynamic content
function getToggleForm(formId) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(formId).style.display = "block";
  document.getElementById("default_contents").style.display = "none";
}

// Handle form btn

function handleFormBtnToggle(btnId) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f2]");
    btn.classList.add("border-[#080808]/10", "bg-white");
  }
  document.getElementById(btnId).classList.remove("border-[#080808]/10");
  document
    .getElementById(btnId)
    .classList.add("border-[#0874f2]", "bg-[#0874F2]/5");
}

// toggling the section between forms

const addMoneyFormBtn = document.getElementById("add_money_form_btn");
const cashOutFormBtn = document.getElementById("cash_out_form_btn");
const transferMoneyFormBtn = document.getElementById("transfer_money_form_btn");
const getBonusFormBtn = document.getElementById("get_bonus_form_btn");
const payBillFormBtn = document.getElementById("pay_bill_form_btn");
const transactionHistoryFormBtn = document.getElementById(
  "transaction_history_form_btn"
);

addMoneyFormBtn.addEventListener("click", function () {
  getToggleForm("add_money_section");
  handleFormBtnToggle("add_money_form_btn");
});

cashOutFormBtn.addEventListener("click", function () {
  getToggleForm("cash_out_section");

  handleFormBtnToggle("cash_out_form_btn");
});

transferMoneyFormBtn.addEventListener("click", function () {
  getToggleForm("transfer_money_section");

  handleFormBtnToggle("transfer_money_form_btn");
});

getBonusFormBtn.addEventListener("click", function () {
  getToggleForm("get_bonus_section");

  handleFormBtnToggle("get_bonus_form_btn");
});

payBillFormBtn.addEventListener("click", function () {
  getToggleForm("pay_bill_section");

  handleFormBtnToggle("pay_bill_form_btn");
});

transactionHistoryFormBtn.addEventListener("click", function () {
  getToggleForm("transaction_history_section");

  handleFormBtnToggle("transaction_history_form_btn");
});

const validPin = 1234;

// Log out functionality
const logOutBtn = document.getElementById("logOut_btn");
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const addMoneyBtn = document.getElementById("add_money_btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const userBalance = userData.balance;
  // const userPin = userData.pin;
  // const userBank = userData.bank;

  // Get the values from the form inputs
  const selectBank = getInputValue("select_bank");
  const accountNumber = getInputValue("account_number");
  const addAmount = getInputValueNUmber("add_amount");
  const pinNumber = getInputValueNUmber("pin_number");

  // const userPin = userData.pin;
  const availableBalance = getInnerText("available_balance");

  // Validate the Bank account number (assuming it should be 11 digits)
  if (accountNumber.length < 11) {
    alert("Please enter a valid 11 digit bank account number.");
    return;
  }

  if (pinNumber != validPin) {
    alert("Your pin is incorrect. Please try again.");
    return;
  }

  // subtract the amount from the available balance
  const newAvailableBalance = availableBalance + addAmount;

  setInnerValue(newAvailableBalance);
});

// Cash Out Functionality
const cashOutBtn = document.getElementById("cashOut_btn");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get the values from the form inputs
  const cashOutAccountNumber = getInputValue("cashOut_account_number");
  const cashOutAmount = getInputValueNUmber("cashOut_amount");
  const cashOutPinNumber = getInputValueNUmber("cashOut_pin_number");

  const availableBalance = getInnerText("available_balance");

  // Validate the Bank account number (assuming it should be 11 digits)
  if (cashOutAccountNumber.length < 11) {
    alert("Please enter a valid 11 digit bank account number.");
    return;
  }
  if (cashOutPinNumber != validPin) {
    alert("Your pin is incorrect. Please try again.");
    return;
  }

  const newAvailableBalance = availableBalance - cashOutAmount;
  setInnerValue(newAvailableBalance);
});
