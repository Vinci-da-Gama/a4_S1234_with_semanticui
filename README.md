# Angular4 With SemanticUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Create a4 pj with scss
```
ng new pj-name --style=scss
or
ng new pj-name --style=sass
```

## You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

## After you init pj
1st: npm init -y to create package.json, then modified it according to __package-sample.json. goes into src/app folder, add app-routing.module.ts, and cp and paste content, then add operators.ts and cp and paste content, then adjust app.module.ts, last one is adjust tsconfig.json
Install Bootstrap or ng2-semantic-ui(prefer this, no jquery required.), you can include css and js in angular-cli.json
### bootstrap in angular-cli.json
```javascript
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
---
### ng2-semantic-ui in angular-cli.json --Dependencies angular4 and Semantic UI CSS
it will create new folder called semantic or semanticui, enter it, run gulp build. then you get dist folder under it.
```javascript
"styles": [
    "../semanticui/dist/semantic.min.css",
    "styles.css"
],
"scripts": []
```
---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
