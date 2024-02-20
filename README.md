# JavaScript Webpack Starter

This is a simple starter template for JavaScript projects using Webpack bundler.

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```
2. Install project dependencies:

   ```bash
      npm install
   ```

3. Start project:
   ```bash
      npm start
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

Next, organize your project structure as follows:

```plain
webpack-demo/
  ├── dist/
      ├── index.html
  ├── src/
      ├── index.js
  ├── package.json
```

## Basic Configuration

Create a `webpack.config.js` file in the root of your project:

```js
// webpack.config.js
const path = require('path');

module.exports = {};
```

This `webpack.config.js` file serves as the configuration file for webpack. It allows you to customize how webpack bundles your project's assets.

### Entry Point

In the `webpack.config.js` file, we define the entry point for webpack's bundling process.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  //entry point configuration
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },
};
```

By specifying the entry property, we inform webpack that our project starts with the `src/index.js` file. This file serves as the main JavaScript file of our project, where we typically import other modules and dependencies.

### Output

This determines where webpack consolidates all the bundled files.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  //output configuration
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Here, the `output` property specifies that webpack will generate output files with the filename `[name].js` and place them in the `dist` directory.

The `[name]` placeholder corresponds to the entry point name defined in the `entry` property, ensuring that the generated file(s) retain meaningful names.

To execute webpack, define a "build" script in your `package.json` file:

```json
"scripts": {
  "build": "webpack --mode production"
}
```

With this script, running `npm run build` initiates webpack, triggering the bundling process. Upon completion, webpack creates a `dist` folder containing the bundled file(s), such as `bundle.js`, ready for deployment.

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
