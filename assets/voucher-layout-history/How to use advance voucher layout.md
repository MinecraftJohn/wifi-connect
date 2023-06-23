<h2 align="center">
  <img src="https://raw.githubusercontent.com/MinecraftJohn/wifi-connect/c7b20d4265e91d601fb6f1e531d9c90a1ff9ae15/assets/svg/wifi-connect-logo.svg" height="72" alt="Wi-Fi Connect - An Customized Omada Portal"/>
</h2>

> Note: Please ensure that you have Microsoft Office (Word and Excel) installed on your computer. Additionally, having a basic knowledge of these applications would be beneficial. If you do not have these applications installed on your computer, you can use the voucher generator as an alternative.

### What is this?

This is my hassle-free method for printing voucher codes on my customized voucher layout. Unlike the old method, where I had to manually copy each voucher code from the Omada Controller site one-by-one to my custom voucher layout, I can now scrape the voucher code from the Omada Controller site and paste it into an .xlsx file. Once I have scraped all the vouchers, I can then print the .docx file.

### How to use

1. Create a voucher on your Omada Controller
2. I recommend to show `50 /page` for a fast scraping of data
*img
3. On your Omada Controller site `right-click` and choose `Inspect Element` to Enable developer tool.
*img
4. On your web developer tool paste this code in console and press enter
   ```js
   const elements = document.querySelectorAll("[name='code'] .td-content .content"); let textContent = ""; elements.forEach((element) => {textContent += element.textContent + "\n"}); console.log(textContent);
   ```
*img

5. awdad