const moreSettingsBtn = document.getElementById("more-settings"),
  moreSettingsIcon = document.querySelectorAll(".more-settings .icon"),
  dataSubmitBtn = document.getElementById("data-submit-btn"),
  dataDurationTime = document.getElementById("data-duration-time"),
  dataDurationType = document.getElementById("data-duration-type"),
  dataVouchers = document.getElementById("data-vouchers"),
  dataPageLayout = document.getElementById("data-page-layout"),
  dataColorLogo = document.getElementById("data-color-logo"),
  dataDurationBG = document.getElementById("data-duration-bg"),
  durationInputLine = document.getElementById("duration-input-line"),
  voucherInputLine = document.getElementById("voucher-input-line"),
  durationErrorMsg = document.getElementById("duration-error-msg"),
  voucherErrorMsg = document.getElementById("voucher-error-msg");

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

dataSubmitBtn.addEventListener("click", () => {
  triggeredErrorMsgDuration(false);
  triggeredErrorMsgVoucher(false);
  if (dataDurationTime.value.length <= 0 && dataVouchers.value.length < 6) {
    triggeredErrorMsgDuration(true);
    triggeredErrorMsgVoucher(true);
  } else if (dataDurationTime.value.length <= 0) {
    triggeredErrorMsgDuration(true);
  } else if (dataVouchers.value.length < 6) {
    triggeredErrorMsgVoucher(true);
  } else {
    triggeredErrorMsgDuration(false);
    triggeredErrorMsgVoucher(false);
    saveFormData();
  }
});

// #####################
var codeEditor = document.getElementById("codeEditor");
var lineCounter = document.getElementById("lineCounter");
codeEditor.addEventListener("scroll", () => {
  lineCounter.scrollTop = codeEditor.scrollTop;
  lineCounter.scrollLeft = codeEditor.scrollLeft;
});
var lineCountCache = 0;
function line_counter() {
  var lineCount = codeEditor.value.split("\n").length;
  var outarr = new Array();
  if (lineCountCache != lineCount) {
    for (var x = 0; x < lineCount; x++) {
      outarr[x] = x + 1;
    }
    lineCounter.value = outarr.join("\n");
  }
  lineCountCache = lineCount;
}
codeEditor.addEventListener("input", () => {
  line_counter();
});
