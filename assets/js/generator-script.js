const moreSettingsBtn = document.getElementById("more-settings");
const moreSettingsIcon = document.querySelectorAll(".more-settings .icon");
const dataSubmitBtn = document.getElementById("data-submit-btn");
const dataDurationTime = document.getElementById("data-duration-time");
const dataDurationType = document.getElementById("data-duration-type");
const dataVouchers = document.getElementById("data-vouchers-code");
const dataPageLayout = document.getElementById("data-page-layout");
const dataColorLogo = document.getElementById("data-color-logo");
const dataDurationBG = document.getElementById("data-duration-bg");
const durationInputLine = document.getElementById("duration-input-line");
const voucherInputLine = document.getElementById("voucher-input-line");
const durationErrorMsg = document.getElementById("duration-error-msg");
const voucherErrorMsg = document.getElementById("voucher-error-msg");
const voucherLineCounter = document.getElementById("voucher-line-counter");
let lineCountCache = 0;

moreSettingsBtn.addEventListener("change", () => {
  if (moreSettingsBtn.checked) {
    moreSettingsIcon[0].innerText = "\ue70e";
  } else {
    moreSettingsIcon[0].innerText = "\ue70d";
  }
});

const setHTMLRoot = (property, value) => document.querySelector(":root").style.setProperty(property, value);

const setDurationTextColor = (hexColor) => {
  const color = hexColor.replace("#", "");
  const red = parseInt(color.substr(0, 2), 16);
  const green = parseInt(color.substr(2, 2), 16);
  const blue = parseInt(color.substr(4, 2), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  const textColor = luminance > 0.5 ? "#000000" : "#ffffff";
  setHTMLRoot("--duration-text-color", textColor);
};

const saveFormData = () => {
  dataPageLayout.checked ? setHTMLRoot("--page-layout", "13in") : setHTMLRoot("--page-layout", "11in");
  setHTMLRoot("--duration-bg-color", dataDurationBG.value);
  setDurationTextColor(dataDurationBG.value);
  dataColorLogo.checked
    ? setHTMLRoot("--voucher-logo", "url(../svg/wifi-connect-logo.svg)")
    : setHTMLRoot("--voucher-logo", "url(../svg/wifi-connect-logo-black.svg)");
  document.querySelector(".voucher-preview-container").innerHTML = `<section class="flex page-layout"></section>`;
  // let xxx = 0;
  dataVouchers.value.split("\n").map((code) => {
    document.querySelectorAll(".page-layout")[0].innerHTML += `
      <div class="relative voucher-container">
        <div></div>
        <p class="relative">${code}</p>
        <span class="absolute">2 hrs</span>
      </div>`;
    // xxx++;
    // console.log(xxx);
  });
};

const triggeredErrorMsgDuration = (value) => {
  const error = value;
  if (error) {
    durationErrorMsg.classList.remove("hidden");
    durationInputLine.classList.add("input-error");
  } else {
    durationErrorMsg.classList.add("hidden");
    durationInputLine.classList.remove("input-error");
  }
};

const triggeredErrorMsgVoucher = (value) => {
  const error = value;
  if (error) {
    voucherErrorMsg.classList.remove("hidden");
    voucherInputLine.classList.add("input-error");
  } else {
    voucherErrorMsg.classList.add("hidden");
    voucherInputLine.classList.remove("input-error");
  }
};

dataVouchers.addEventListener("scroll", () => {
  voucherLineCounter.scrollTop = dataVouchers.scrollTop;
  voucherLineCounter.scrollLeft = dataVouchers.scrollLeft;
});

const updateLineCounter = () => {
  const lineCount = dataVouchers.value.split("\n").length;
  const outarr = new Array();
  if (lineCountCache != lineCount) {
    for (let x = 0; x < lineCount; x++) {
      outarr[x] = x + 1;
    }
    voucherLineCounter.value = outarr.join("\n");
  }
  lineCountCache = lineCount;
};

dataVouchers.addEventListener("input", () => {
  updateLineCounter();
});

dataSubmitBtn.addEventListener("click", () => {
  triggeredErrorMsgDuration(false);
  triggeredErrorMsgVoucher(false);
  if (
    (dataDurationTime.value.length <= 0 && dataVouchers.value.length < 6) ||
    (dataDurationTime.value == 0 && dataVouchers.value.length < 6)
  ) {
    triggeredErrorMsgDuration(true);
    triggeredErrorMsgVoucher(true);
  } else if (dataDurationTime.value.length <= 0 || dataDurationTime.value == 0) {
    triggeredErrorMsgDuration(true);
  } else if (dataVouchers.value.length < 6) {
    triggeredErrorMsgVoucher(true);
  } else {
    triggeredErrorMsgDuration(false);
    triggeredErrorMsgVoucher(false);
    saveFormData();
  }
});
