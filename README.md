# Future Value Calculator
Uses the value of your property, mortgage length, and expected annual % rise to calculate what your property will be worth in the future.

This is a small demo project built using; React, Redux, JSX, SCSS, and Cypress.

## How to use
* Clone or download the repository
* Install npm packages using `npm install`
* Start the development server by running `npm start`
* In a seperate command window, run `npm run cypress:open` or `npm run cypress:run` to run all end-to-end (e2e) tests.

## Notes
1. Cypress is in public beta.
2. Cypress is built on top of Mochawesome.  The latest version of Mochawesome is 3+, but only version 1.5 seems to work.  Using a newer version fails to output the report.
3. There is a security vulnerability in Handlebars 3.0.3 but due to having to use an older version of Mochawesome, it is not possible to update the version at this time.

