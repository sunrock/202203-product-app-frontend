## Prerequsite
node version 16.1x greater than 16.10

npm version greater than 8.5

## Setup step

1, Download repo

2, cd into project root directory

3, Run `npm i` to install node modules

4, Run `npm start` for a dev server, then navigate to `http://localhost:4200/`

5, Run `npm run test` to execute the unit tests via Jest.


## Design

This is the front end part of a product management app built with Angular. The js/css library I used is Angular material.

The are two folders under src/app, core and features, common (& shared) components are put under core folder.

The product related compoents/services/models are put under features folder, and I used a module product to declare all components related to product.


## Test
I know it could be a huge disadvantage in this code test, I admitted that I did not provide proper unit tests. However, it is a good opportunity to learn from this code test. I learned how to remove karma / jasmine from Angular and setup jest testing framework, and wrote some simple tests! That would be great for me, and if I could have the chance to work with you, I would learn a lot from you guys!
 
# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest.



