#REACT200 - Weather-App
##Created Friday, May 10th 2019 @ 1600

# Weather App

In this assignment, you will be building an React Redux application that allows a user to search for weather data using the [OpenWeatherMap](http://openweathermap.org/) API in a similar fashion to the following screenshot.

![](https://i.imgur.com/vLI7hzb.png)

## Tasks

## Step 1 - Understand the folder structure
We have provided some files to get you started with this project and advise you take some time to understand the folder structure.

Clone the project from [Github](https://github.com/SanDiegoCodeSchool/react200-weather-app).

## Step 2 - Create the components
Create the components that are needed to display the user interface. Be sure to consider how the data (the input search box) will flow from the user to the API and from parent components to children. In this step, do not create or manage any state.  Just create the components and have them display some hard coded static content first. We will connect to the API and request data in the next step.

## Step 3 - Add Promise Middleware
Now you will add state, and then when the request is made to the API, handle updating the components with the results.

You may find it helpful to first setup the Middleware and just get the app console.logging the data returned, then wire up the rest of the state. To get middleware setup first, install Promise Middleware with npm: 

```
$ npm install redux-promise-middleware
```

Second, import the middleware, import your rootReducer, and update the Redux store:

```js
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware()));

export default rootStore;
```

To use the middleware, dispatch a promise as the value of the `payload` property of the action. The pattern to follow looks something like this:

```js
const foo = () => ({
  type: 'FOO',
  payload: new Promise()
});
```

Note: you will probably want to use `Axios` to make a request to an API which returns a promise like this:
```js
const getWeather = () => ({
  type: 'GET_WEATHER',
  payload: axios.get(...)
});
```


A "pending" action is dispatched immediately with the original type string and a suffix of `_PENDING`.

```js
// pending action
{
  type: 'FOO_PENDING'
}
```

After the promise is settled, a second action will be dispatched. If the promise is resolved, e.g., if it was successful, a "fulfilled" action is dispatched. If the promise is rejected, e.g., if an error occurred, the "rejected" action is dispatched. The fulfilled and rejected type suffixes are `_FULFILLED` and `_REJECTED` respectively. The middleware will *always* dispatch one of these two actions.

```js
// fulfilled action
{
  type: 'FOO_FULFILLED'
  payload: {
    ...
  }
}

// rejected action
{
  type: 'FOO_REJECTED'
  error: true,
  payload: {
    ...
  }
}
```

## Step 4 - Complete the Requirements
Finally, add the remaining code to complete the project requirements (exit criteria).

## Exit Criteria
As a visitor to the site I should be able to:
- search for a city by name and see weather for that location.
- have a group of buttons for pre-loaded cities - when clicked, these buttons should load weather information for that location.
- have a search history that tracks the term entered and the time that the term was entered.
- handle errors gracefully if the endpoint fails, rejects, or times out

## Testing the project

Run the tests using:

```
$ npm run tests
```

## Bonus
* Implement the middleware using [Redux Thunk](https://github.com/gaearon/redux-thunk)
* Pull in data from another weather API and combine the data in some useful way in the UI
* provide a 5-7 day weather forecast for the selected city

## Project Submission
To submit this project for instructor evaluation, please do the following:

* Push this project to GitHub
* Create a Heroku application
* Create a CircleCI project
* Configure automatic Heroku deployment
* Trigger a successful deployment

Once you have done the above, [Submit your project](https://goo.gl/forms/wx8DLSus7s88lk043)

##