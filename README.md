# Leaderboard website

> The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external [Leaderboard API service](https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).

![homepage-snapshot](https://user-images.githubusercontent.com/12524453/162288741-1277486d-fd01-424e-9545-04afdbe4bda1.png)

## Built With

- Major languages: Javascript, HTML & CSS
- Frameworks: none
- Technologies used: Webpack, Leaderboard API service

## Features implemented so far are:

- Responsive HTML page
- Proper ES6 Syntax
- ES6 modules to write modular JavaScript.
- Webpack to bundle JavaScript.

## Built With

- Lighthouse (An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more).
- Webhint (A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors).
- Stylelint (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).
- ESlint (A mighty, modern linter that helps you avoid errors and enforce conventions in JavaScript codes)
- Webpack (A JavaScript Bundler.)

To get a local copy up and running follow these simple example steps.

## Prerequisites

The basic requirements for building the javascript are:

- A working browser application (Google chrome, Mozilla Firefox, Microsoft edge ...)
- VSCode or any other equivalent code editor
- Node Package Manager (For installing packages like Lighthous, webhint & stylelint used for checking and or debugging bad codes before deployment)

## Getting Started

### Cloning the project

```
git clone https://github.com/wuletawwonte/leaderboard.git <Your-Build-Directory>
```

## Getting packages and debuging with Stylelint

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

##### For validation detection using Stylelint Run

```
npx stylelint "**/*.{css,scss}"
```

##### from parent source directory

## Getting packages and debuging with ESlint

```
 npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

##### For validation detection using Stylelint Run

```
npx eslint .
```

##### from parent source directory

## Getting packages and debuging with Webhint

```
npm init -y
npm install --save-dev hint@6.x
```

##### For validation detection using Webhint Run

```
npx hint .
```

##### from parent source directory


## Authors

👤 **Wuletaw Wonte**

- GitHub: [@wuletawwonte](https://github.com/wuletawwonte)
- Twitter: [@wuletaww](https://twitter.com/wuletaww)
- LinkedIn: [LinkedIn](https://linkedin.com/in/wuletaw-wonte)

## 📝 License

This project is **[MIT](./LICENSE.md)** licensed.
