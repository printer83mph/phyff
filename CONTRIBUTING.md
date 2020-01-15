# Contributing to the PHYFF Website

* [Cloning, building, publishing](#cloning-building-and-publishing)
* [SCSS guidelines/tips](#scss-guidelines)
* [Styling resources](#style-resources)

## Cloning, building, and publishing
In order to allow publishing and compiling on any OS without writing some special script for each and requiring multiple different pieces of software to be installed, we've converted this repository into a [npm package](https://docs.npmjs.com/about-packages-and-modules) for your convenience.

While this streamlines things in a sense, you still need [node.js](https://nodejs.org/en/) (I always recommend the LTS) installed to use this functionality.

Once node is installed and this project is cloned, there's realy just one step to set stuff up (run in the repo folder):
```sh
npm install
```
Now you can use these npm scripts we've set up using `npm run <name>`:
* `compile` compiles the SASS for production
* `compileDev` compiles for development (with a CSS map)
* `watch` starts a (node) daemon that runs `compileDev` when any SCSS files are changed
* `publish` runs `compile` and publishes any changes to the `public` folder to the `gh-pages` branch

## Git Guidelines
When adding a new feature or a large amount of new content it's recommended that you make a new branch from `master`. You can then make a pull request so whoever else needs to review the changes can do so easily.

If it's just a hotfix or small content change then just updating `master` should be fine. Just keep it to one commit (or multiple in quick succession) since we don't want any unfinished stuff lying around in `master`

## SCSS Guidelines
*WIP*

## Style Resources
When adding to or modifying the site, please use [the PHYFF styleguide](https://github.com/phyff/resources/blob/master/styleguide.pdf).

All of our branding resources are available [here](https://github.com/phyff/resources).
