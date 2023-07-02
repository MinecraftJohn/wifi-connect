const moreSettingsBtn = document.getElementById("more-settings"),
  moreSettingsIcon = document.querySelectorAll(".more-settings .icon"),
  dataSubmitBtn = document.getElementById("data-submit-btn"),
  dataDurationTime = document.getElementById("data-duration-time"),
  dataDurationType = document.getElementById("data-duration-type"),
  dataVouchers = document.getElementById("data-vouchers"),
  dataPageLayout = document.getElementById("data-page-layout"),
  dataColorLogo = document.getElementById("data-color-logo"),
  dataDurationBG = document.getElementById("data-duration-bg"),
  formErrorMsg = document.querySelector("aside .form-footer p");

moreSettingsBtn.addEventListener("change", () => {
  if (moreSettingsBtn.checked) {
    moreSettingsIcon[0].innerText = "\ue70e";
  } else {
    moreSettingsIcon[0].innerText = "\ue70d";
  }
});

const saveFormData = () => {
  localStorage.setItem(
    "dataDuration",
    `{time: ${dataDurationTime.value}, type: ${dataDurationType.value}}`
  );
};

dataSubmitBtn.addEventListener("click", () => {
  if (dataDurationTime.value.length > 0 && dataVouchers.value.length > 0) {
    formErrorMsg.classList.remove("block");
    saveFormData();
  } else {
    formErrorMsg.classList.add("block");
  }
});
