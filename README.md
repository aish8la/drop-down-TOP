# Dropdown Menu

A lightweight, reusable dropdown menu package built with JavaScript and styled with CSS. This package allows you to easily integrate dropdown functionality into your projects.

## Installation

Install via npm:
```sh
npm install @aish8la/dropdown-menu
```

## Usage

### Import and Initialize
```js
import dropdownMenu from "@aish8la/dropdown-menu";

dropdownMenu(); // Initialize dropdown functionality
```

### HTML Structure
Ensure your HTML contains the following dropdown elements:
```html
<div class="dropdown">
  dropdown
  <button class="dropdown-btn"></button>
  <div class="dropdown-li-ctn">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Longer Item</div>
  </div>
</div>
```

## Features
- Simple dropdown functionality on button click
- Auto-closes other open dropdowns
- Works with multiple dropdown instances on a single page
- Lightweight and easy to integrate
- No external dependencies

## Development & Testing
### Run the Dev Server
To test the package locally using Webpack Dev Server, run:
```sh
npm run dev
```
Then open `http://localhost:8080` in your browser.

## License
This package is open-source and available under the MIT License.

## Repository
For source code, issues, and contributions, visit:
[GitHub Repository](https://github.com/aish8la/drop-down-TOP)

---

Enjoy using the dropdown menu! 🚀

