# Contributing to the PHYFF Website

Any first-time contributors (or lost souls) should find peace in this document.

* [Cloning, building, publishing](#cloning-building-and-publishing)
* [SCSS guidelines](#scss-guidelines)
* [Git guidelines](#using-git)
* [Styling resources](#style-resources)

## Cloning, building, and publishing
In order to allow publishing and compiling on any OS without writing some special script for each and requiring multiple different pieces of software to be installed, we've converted this repository into an npm package.

You'll need [node.js](https://nodejs.org/en/) (LTS recommended) to use this functionality.

Once node is installed and this project is cloned, there's realy just one step to set stuff up (run in the repo folder):
```sh
npm install
```
You can run npm scripts we've set up using `npm run <script>`:
* `compile` compiles the SASS for production
* `compileDev` compiles for development (with a CSS map)
* `watch` starts a (node) daemon that runs `compileDev` when any SCSS files are changed
* `publish` runs `compile` and publishes any changes to the `public` folder to the `gh-pages` branch

## Using Git
When adding a new feature or a large amount of new content it's recommended that you make a new branch from `master`. You can then make a pull request so that whoever else needs to review the changes can do so easily.

If it's just a hotfix or small content change then just updating `master` should be fine. Just keep it to one commit (or multiple in quick succession) since we don't want any unfinished stuff lying around in `master`.

## SCSS Guidelines
[SCSS (Sass)](https://sass-lang.com/) is basically black magic. It's a flexible language built around modularity that can compile right into one file. If you've never used it before then [this guide](https://sass-lang.com/guide) should get you up to speed pretty quickly.

Our structure looks like this:

## Style Resources
* [PHYFF branding resources](https://github.com/phyff/resources) for all your possible styling needs
* [Styleguide](https://github.com/phyff/resources/blob/master/styleguide.pdf) for quick reference
