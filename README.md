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
- **Entry point configuration**: Entry point defines where webpack will start bundling your project. By specifying the entry property, we inform webpack that our project starts with the `src/index.js` file.
- **Output**: Output determines where webpack consolidates all the bundled files. Here, the `output` property specifies that webpack will generate output files with the filename `[name].js` and place them in the `dist` directory. The `[name]` placeholder corresponds to the entry point name defined in the `entry` property, ensuring that the generated file(s) retain meaningful names.

In summary, the above configuration sets up webpack to bundle your project starting from `src/index.js` and output the bundled file as `bundle.js` in the dist directory.

### Running Webpack

To execute webpack, define a "build" script in your `package.json` file:

```json
"scripts": {
  "build": "webpack --mode production"
}
```

Running `npm run build` will trigger webpack to bundle your project.

After running the build script, check the dist directory for the bundled file(s).

Now, include the bundled JavaScript file in your `index.html` as shown below:

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

Open `index.html` in a browser, and you should see "Hello, Webpack!" displayed on the page, demonstrating that webpack has successfully bundled the code.

### Plugins

Think of plugins as special tools that you can add to webpack to make it even more useful. They provide extra functionalities, such as:

- Making your code well-organized and efficient
- Making project files smaller so they take up less space on a computer or a server.
- Generating HTML files automatically.

When working with webpack, you can use the `HtmlWebpackPlugin` plugin to simplify the process of creating HTML files for your project. This saves time and makes sure your HTML files are consistent and error-free.

#### Step 1: Installing HtmlWebpackPlugin

1. Let's start by installing the HtmlWebpackPlugin.

```bash
npm i -D html-webpack-plugin
```

#### Step 2: Create the HTML Template

In your project's `src` folder, create a file named `template.html`. This file will serve as a template for webpack to generate the final HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### Step 3: Configuring the plugin

2. In your webpack configuration file, add a few lines to let webpack know about `HtmlWebpackPlugin`.

```js
const path = require('path');
//Importing HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  // HtmlWebpackPlugin configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
  ],
};
```

**What's Going On?**

- We're configuring the `HtmlWebpackPlugin` plugin.
- We specify the location of our HTML template file using the `template` option (`./src/template.html`).
- We define the output filename for the generated HTML file using the `filename` option (`index.html`).

#### Step 4: Ensuring a Clean Slate

Before testing your webpack setup, it's important to tidy up any previously manually created HTML files lingering in the `dist` directory. Navigate to the `dist` directory and delete any existing HTML files.

Now, when you run webpack, it'll generate a new HTML file based on your template. You'll find the freshly generated `index.html` file in the `dist` directory.

That's it! Now, webpack handles your HTML file automatically!

### Styling

Webpack simplifies managing CSS in your projects by utilizing loaders. Let's walk through setting up webpack to handle CSS files:

#### Installing Loaders

First, you need to install the loaders for handling CSS files. Open your terminal and run the following command:

```bash
npm install style-loader css-loader --save-dev
```

These loaders help webpack understand and process CSS files in your project.

#### Setting Up CSS Rules

Next, in your webpack configuration file (typically named `webpack.config.js`), define a rule to tell webpack how to handle CSS files:

```javascript
module.exports = {
  // Other webpack configuration...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

This rule tells webpack to use the `style-loader` to inject CSS into your HTML file and the `css-loader` to handle importing and bundling CSS files together.

#### Creating a CSS File

Create a new file named `styles.css` in the `src` directory of your project. Add the following CSS styles to the file:

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
  text-align: center;
  margin-top: 50px;
}

p {
  color: #666;
  text-align: center;
}
```

#### Update template file

Now, modify your HTML template file `template.html` in the `src` directory to include some content that will be styled by CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root">
      <h1>Welcome to Webpack Styling!</h1>
      <p>This is a beginner-friendly guide to styling with Webpack.</p>
    </div>
  </body>
</html>
```

#### Importing CSS in JavaScript

To apply styles to your project, import the CSS file in your JavaScript entry point (`index.html`).

```javascript
import './styles.css';
```

#### Conclusion

After setting up the configuration and importing the CSS file, you can build your project using webpack:

```bash
npm run build
```

After that, open your HTML file in a browser to see the styled web page with the CSS applied

#### css ----> section not working
