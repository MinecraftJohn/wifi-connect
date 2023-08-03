<div align="center">
  <img src="https://raw.githubusercontent.com/MinecraftJohn/wifi-connect/c7b20d4265e91d601fb6f1e531d9c90a1ff9ae15/assets/svg/wifi-connect-logo.svg" height="72" alt="Wi-Fi Connect - A Customized Omada Portal Web Page"/>
  <h1>Custom Portal Web Page</h1>
</div>

> Note: This project was tested on controller firmware v1.7.0 only. We will need to use base64 method to display images because using external is not [supported](https://www.tp-link.com/us/support/faq/3264/).

### What is this?

Wi-Fi Connect is my customized [Omada Controller](https://omada.tplinkcloud.com/) portal web page with the help of base64 method to display images. It only use `Authentication Type: Hotspot; Hotspot type: Voucher` please be aware. I open source this project to help the others get a custom portal web page in no time and open collaboration at the same time.

<kbd><img src="https://i.imgur.com/NBQcJYr.png" alt="Voucher Generator UI Preview"></kbd>

### Features

- Light and Dark theme based on device time.
- Using the look and feel of [Microsoft's Windows UI Controls](https://www.figma.com/community/file/1159947337437047524) which conform to the Fluent Design System.
- Supports displaying images thanks to [base64 method](https://www.base64-image.de/).
- Custom interface and events when trying to log in.
- Supports mobile and large screen sizes.

### How to use

1. Download the [index.html](https://github.com/MinecraftJohn/wifi-connect/blob/main/index.html) file.
2. Go to your `Settings` > `Authentication` > `Portal Customization`
3. In the type: section, check the `Import Customized Page` checkbox.
4. Import the downloaded `index.html` and click Apply button to apply your changes.

Note: The custom portal has file limit of 2MB, you can compress your image file without losing quality at [imagesmaller.com](https://www.imagesmaller.com/).

### Changelog

Go to [CHANGELOG.md](https://github.com/MinecraftJohn/wifi-connect/blob/main/CHANGELOG.md) to see previous changes or [dev-CHANGELOG.md](https://github.com/MinecraftJohn/wifi-connect/blob/development/dev-CHANGELOG.md) for notable development changes.
