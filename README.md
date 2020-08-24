## Aircraft Scheduler

You can view the app at https://p-gamage.github.io/aircraft-scheduler

#### Libraries Used

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Material UI](https://material-ui.com/).
- [React horizontal stacked bar chart](https://www.npmjs.com/package/react-horizontal-stacked-bar-chart) for the Timeline feature.

#### Local development

Nodejs version `12.16.1` (also see `.nvmrc`)

- `npm install` and `npm start` to run the app on `localhost:3000`
- `npm test` to run tests
- `npm run deploy` to deploy a new version to GitHub Pages

#### Approach

- Make a basic prototype of the main components using the static files

- Implement basic functionality

- Write tests (compromised to concentrate on delivering functionality)

- Re-factor

- Improve UI

- Implement more functionalities (such as utilisation etc)

#### Improvements/To dos

- Complete the 'Timeline' feature

  - Add tests
  - Refactor

- Add tests for components using `react-testing-library`

- API integration

- Further refactoring. E.g `selectFlight` function in `App.js`

#### Assumptions made

- Flights must be ordered in ascending departure time and the arrival time if the departure times are the same.

- The user can only remove one flight at a time, which is the last one added.

- The flights are loaded only when the aircraft is selected and the aircraft cannot be un-selected.
