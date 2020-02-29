# Reactive programming logic

This is an implementation of reactive programming (also known as event-driven architecture), where things happen in the app in response to actions, which are attached to a system of listeners. Once an action has been detected by the listener, code is executed and something happens.

In this practice, I have set up a form which saves a user's email into the redux store.

## 1. Action creators and reducers

Action creators and reducers are set up as normal (https://github.com/Mark-Ball/react-redux-basic).

## 2. Set up the middleware

To 'listen' for actions to be dispatched, middleware must be implemented. We do this configuration in the store. Note: this is more complex because it includes setup for redux devtools.

```store.js```
```javascript
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';
import rootEpic from  './epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );
    epicMiddleware.run(rootEpic);

    return store;
};
```

Lastly the configureStore function must be imported __and called__ in index.js. Previously the store was simply provided, not called, but now we are configuring the store with a function which returns a store.

```index.js```
```javascript
import store from './store';

ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

## 3. Write the epic

An epic is a function which receives an action and dispatches an action. In our case, we want to listen for the action of type USER_EMAIL to be dispatched, and in response we simply log a message to the console. We also do not dispatch an action, instead using ignoreElements();

```javascript
import { combineEpics, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

const userEmailEpic = action$ => (
    action$.pipe(
        ofType('USER_EMAIL'),
        tap(() => console.log('user email epic ran')),
        ignoreElements()
    )
);

export default combineEpics(
    userEmailEpic
);
```