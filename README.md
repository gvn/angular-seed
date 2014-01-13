# gvn-angular-seed

## Massively Stripped Down [Angular Seed](https://github.com/angular/angular-seed)

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed app doesn't do much, just shows how to wire two controllers and views together. You can
check it out by running `grunt`.

## Dependencies

- grunt
- bower
- npm

## Setup

- Clone this repo
- `rm -r .git`
- `npm install`

## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html
