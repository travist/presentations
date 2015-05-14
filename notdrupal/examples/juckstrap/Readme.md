JuckStrap - Static site generation bliss with [Nunjucks](http://mozilla.github.io/nunjucks/) + [Bootstrap](http://getbootstrap.com/) + [Wintersmith.js](http://wintersmith.io/)
==================================================================================

This is a project that aims to quickly bootstrap a new web application project "the right way". This includes using [Bootstrap](http://getbootstrap.com/) within [Nunjucks](http://mozilla.github.io/nunjucks/) templating system, all statically generated with [Wintersmith.js](http://wintersmith.io/).  This project also includes all of the necessary Grunt tools to make your life easier as you build a new web application rapidly and properly.

Prerequisites
---------------
There are a few things you will need to get started.
  - **[Node.js](http://nodejs.org/)** - Go to http://nodejs.org/ and follow the installation instructions.
  - **[Grunt CLI](http://gruntjs.com/getting-started)**

  ```
  npm install -g grunt-cli
  ```
  - **[Bower](http://bower.io/)**

  ```
  npm install -g bower
  ```

Installation
---------------

To install, first clone this repo, and then type the following in the directory.

```
npm install
```

Next you will need to make sure you install Bower components in both the root and test folders.

```
bower install
cd test
bower install
```

Configuration
---------------------
A lot of the site configuration can be found within the **config.json** file in the root of the project.  You can use this to edit configurations that Wintersmith uses to build the web appication.

The Web Application
---------------------
All of the changes that you need to make are within the **app** folder.  This contains the Wintermith setup for a Nunjucks templated site.  Go to http://wintersmith.io/ to learn more about editing a Wintersmith application and also go to http://mozilla.github.io/nunjucks to learn about the Nunjucks templating language.

Running
---------------------
You can run this web application by typing the following in your terminal.

```
grunt serve
```

This also watches all the files within the *app* directory and when a change is made re-compiles the application and automatically updates the site in your browser.


Compiling
---------------------
This project compiles and runs using Grunt. You can compile the application using the simple grunt command.

```
grunt
```

This creates a **dist** folder that you can use to copy to your webserver.
