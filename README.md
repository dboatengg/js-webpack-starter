# JavaScript Webpack Starter

This repository serves as a simple starter template for JavaScript projects using the Webpack bundler. It's designed to help developers jumpstart their projects with a basic Webpack configuration.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Getting Started

Follow these steps to get your development environment set up:

### 1. Clone the Repository

First, clone this repository to your local machine using the following command:

```bash
git clone <repository_url>
```

## Installation

Begin by installing webpack globally:

```js
npm install -g webpack webpack-cli
```

The above command globally installs webpack and webpack-cli.

- **Webpack**: Bundles multiple files into a single or a few output files.
- **Webpack-cli**: Enables you to run webpack commands directly from your terminal.

## Setting Up

Once webpack is installed, create a new directory for your project and navigate into it:

```bash
mkdir webpack-demo
cd webpack-demo
```

Now, initialize a new Node.js project:

```bash
npm init -y
```

This command generates a `package.json` file, which manages your project dependencies and simplifies package installation.

### Creating the `index.html`

Create a dist folder inside your project directory:

```bash
mkdir dist
```

Inside the `dist` folder, create an `index.html` file and add the following HTML5 boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack Demo</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### Adding JavaScript Functionality

Create an `src` folder inside your project directory:

```bash
mkdir src
```

Inside the src folder, create an `index.js` file and add the following JavaScript code:

```js
function createHeading() {
  const heading = document.createElement('h1');
  heading.textContent = 'Hello, Webpack!';
  return heading;
}

function appendHeadingToDOM() {
  const heading = createHeading();
  document.body.appendChild(heading);
}

document.addEventListener('DOMContentLoaded', appendHeadingToDOM);
```

The provided code defines two functions:

- `createHeading`: creates an `h1` element with the text "Hello, Webpack!".
- `appendHeadingToDOM`: appends the heading to the body element of the HTML document.
- The `DOMContentLoaded` event listener ensures that the `appendHeadingToDOM` function is called only after the DOM has fully loaded.

Ensure your project structure is organized as follows:

```plain
webpack-demo/
  ├── dist/
  │   └── index.html
  ├── src/
  │   └── index.js
  └── package.json
```

## Basic Configuration

Set up webpack with the following steps:

### Creating a Configuration File

Create a `webpack.config.js` file in the root of your project and add the following code:

> `webpack.config.js` serves as the configuration file for webpack. It allows you to customize how webpack bundles your project's assets.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  // Entry point configuration
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  // Output configuration
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

From the above code:

- `const path = require('path');`: This line imports the Node.js core module `path`, which provides utilities for working with file and directory paths. We need this module to resolve the paths for our entry and output files.
- Entry point configuration: Entry point defines where webpack will start bundling your project. By specifying the entry property, we inform webpack that our project starts with the `src/index.js` file.
- Output: Output determines where webpack consolidates all the bundled files. Here, the `output` property specifies that webpack will generate output files with the filename `[name].js` and place them in the `dist` directory. The `[name]` placeholder corresponds to the entry point name defined in the `entry` property, ensuring that the generated file(s) retain meaningful names.

In summary, the above configuration sets up webpack to bundle your project starting from `src/index.js` and output the bundled file as `bundle.js` in the dist directory.

### Running Webpack

To execute webpack, define a "build" script in your `package.json` file:

```json
"scripts": {
  "build": "webpack --mode production"
}
```

Running npm run build triggers webpack to bundle your project.

After running the build script, check the dist directory for the bundled file(s).

Now, include the bundled JavaScript file in your `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack Demo</title>
  </head>
  <body>
    <div id="app"></div>
    <!--Include the bundled JS file here-->
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

Open index.html in a browser, and you should see "Hello, Webpack!" displayed on the page, demonstrating that webpack has successfully bundled the code.

### Plugins

Plugins are like extra tools that provide additional features and functionality to webpack. They allow you to:

- optimize your builds,
- compress files,
- generate HTML files, and much more.

When working with webpack, you can use the `HtmlWebpackPlugin` plugin to simplify the process of creating HTML files for your project.

1.  Start by installing the HtmlWebpackPlugin plugin:

```bash
npm i -D html-webpack-plugin
```

2. Now, in your webpack configuration file, you need to import the `HtmlWebpackPlugin` and configure it.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
```

### Styling
