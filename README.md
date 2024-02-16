# JavaScript Webpack Starter

This is a simple starter template for JavaScript projects using Webpack bundler.

## Features

- Webpack configured for bundling JavaScript files.
- Basic project structure ready to start coding.
- Easily customizable for your project needs.

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

Start by installing webpack.

```js
npm install -g webpack webpack-cli
```

The above command globally installs webpack and webpack-cli.

- Webpack: Bundles multiple files into a single output file or few files.
- Webpack-cli: Allows you to run webpack commands from your terminal.

## Setting Up

Once webpack is installed, create a new directory and navigate into it:

```bash
mkdir webpack-demo
cd webpack-demo
```

Now, initialize a new Node.js project by running the following command:

```bash
npm init -y
```

This command creates a package.json file, which will:

- Manage your project dependencies.
- Facilitate package installation.
- Define scripts for common tasks like building and testing.

Next, create files and directories so your project structure looks like this:

```plain
webpack-demo/
  ├── dist/
      ├── index.html
  ├── src/
      ├── index.js
  ├── package.json
```

## Basic Configuration

Create a `webpack.config.js` in the root of your project.

```js
// webpack.config.js
const path = require('path');

module.exports = {};
```

### Entry Point

Entry point refers to the starting point for webpack's bundling process.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },
};
```

Here, we're telling webpack to begin with the `src/index.js` file because that's where our project starts.

### Output

The output is where webpack puts all the files it bundles together.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Now, in your `package.json` file, define a "build" script that will run the webpack command.

```js
"scripts": {
  "build": "webpack --mode production"
}
```

With this script, we can now run webpack by executing:

```js
npm run build
```

Now when you run this command, webpack will start bundling your files.

Also, you'll notice that a `dist` folder has been created, containing a file named `bundle.js`. This file is the result of webpack bundling your code.

### Plugins

Plugins are like extra tools that provide additional features and functionality to webpack. They allow you to:

- optimize your builds,
- compress files,
- generate HTML files, and much more.

When working with webpack, you can use the HtmlWebpackPlugin plugin to simplify the process of creating HTML files for your project.

1.  Start by installing the HtmlWebpackPlugin plugin:

```bash
npm i -D html-webpack-plugin
```

2. Now, in your webpack configuration file, you need to import the HtmlWebpackPlugin and configure it. Here's an example configuration:

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
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML file name
    }),
  ],
};
```
