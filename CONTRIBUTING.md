# Contributing to the PHYFF Website

Any first-time contributors (or lost souls) should find peace in this document.

* [Cloning, building, publishing](#cloning-building-and-publishing)
* [Git guidelines](#using-git)
* [SCSS guidelines](#scss-guidelines)
* [Styling resources](#style-resources)

## Cloning, building, and publishing
In order to allow publishing and compiling on any OS without writing some special script for each and requiring multiple different pieces of software to be installed, we've converted this repository into an npm package.

You'll need [node.js](https://nodejs.org/en/) (LTS recommended) to use this functionality.

Make sure you have the most up-to-date version of git installed. If you don't, you might get an error later when you do `npm run publish`.

Once node is installed, git is up-to-date, and this project is cloned, there's really just one step to set stuff up (run in the repo folder):
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

If you think there could be a faster way to do something with SCSS, it probably exists. [Sass docs](https://sass-lang.com/documentation/) are super accessible and have saved my ass on many, many occasions.

### **Files and directories**

```
scss
│
├─ main.scss
│
├─ custom
│  ├─ breakpoints.scss
│  ├─ globals.scss
│  └─ _colors.scss
│
└─ pages
   ├─ attend.scss
   ├─ learn.scss
   ├─ people.scss
   ├─ splash.scss
   └─ submit.scss
```

`main.scss` should be used only for broad changes that can't fit into a single section, for example a sizing change that affects every section.

`custom` contains all of our custom variables and mixins. `breakpoints.scss` is just a mixin and some variables you can use like so:

```scss
.target {
    
    // shared + mobile styling here

    @include breakpoint($desktop) {

        // desktop styling to override mobile stuff here

    }

}
```

`_colors` should just be base colors that can be modified in the code using the [color module](https://sass-lang.com/documentation/modules/color), and `globals` are any other variables - fonts, font sizes, etc.

`pages` contains a file for each "page" (really just sections). Everything specific to a section should be put in its respective file.

### **HTML and SCSS writing guidelines**

* Design for **mobile first!** Breakpoints should be used for desktop and tablet users since they (theoretically) have more horsepower.
* Remember to use `em`s for scaling since they're more client-friendly when it comes to user scale.
* Avoid using `div`s for everything. Semantics help immensely for accessibility!
* Movable/reusable components should go in either their own file or some umbrella file in `components`.
* If something isn't self-explanatory, **add a comment!** `//` You shouldn't have to ask what something does.

**Note - at the time of writing, not all these standards are in place. You can help update everything on the `scss-update` branch if you'd like.**

## Style Resources
Be creative! Our style guide is exactly what it sounds like - a guide. Don't be afraid to make something stylish, as long as it generally uses PHYFF's colors and design ideas.

* [PHYFF branding resources](https://github.com/phyff/resources) for all your possible styling needs
* [Styleguide](https://github.com/phyff/resources/blob/master/styleguide.pdf) for quick reference
