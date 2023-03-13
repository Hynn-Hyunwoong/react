# REDUX

- Global State
`useContext` `createContext` `Context API`

- Why using `Redux` in React?
Reason for `Middleware` 

- Why need to `Middleware` ?

## 3 state change in Request.
- `Axios` (Request)
- 

Display -> Event -> Actions -> Middleware <-> API // Middleware -> Store (Reducer, State)

- Display: This refers to the visual components that the user sees in the application.
- Event: This refers to any user action, such as clicking a button or typing in a text box, that triggers an action in the application.
- Actions: This refers to the objects that describe what happened as a result of the user action. Actions are typically plain JavaScript objects with a type property that describes the type of action being taken.
- Middleware: This refers to a piece of code that sits between the actions and the store, and can intercept, modify, or block actions as they flow through the application. Middleware is commonly used for tasks such as logging, handling asynchronous actions, or validating user input.
- API: This refers to the external web API that the application interacts with to fetch or update data.
- Store: This refers to the central place where the state of the application is stored. The store is created using the Redux library, and contains a reducer function that specifies how the state should be updated in response to actions.
- Reducer: This refers to a pure function that takes the current state and an action, and returns a new state. Reducers are the only way to update the state in a Redux application, and they must be pure functions that do not modify the original state object.

1. User interacts with the application by triggering an event.
2. The event triggers an action object to be created and dispatched to the store.
3. Middleware can intercept and modify the action before it reaches the store.
4. The action is processed by the reducer function, which updates the state in the store.
5. Components that are subscribed to the relevant parts of the state are re-rendered with the new state.


## Redux in Stale-while-revalidate 

Recoil, React-query
`Redux` is management Global State
Reason for Middleware

`Redux-saga` , `Redux-Thunk`

```javascript
function *gen(){}
```

## Context 

1. Store 
- `createContext`
- The createContext function creates a Context object. When called, it can take a default value as an argument. The createContext function returns two components: Provider and Consumer
- Might be Similar code in Redux..?

2. useContext
- useContext allows functional components to access values from the Context object. It allows functional components to use Context like a class component's this.context.
- might be useState method in Redux

3. Context API
- The Context API provides a way to manage data sharing using Provider and Consumer components that allow components to access shared data.

## Redux Introduction && Manual code 

1. Redux is Managemenet State in JavaScript
2. Open Library 

- create new Directory 
- NPM Install for redux
```sh
npm install redux
```
Directory tree
| @babel/runtime
| redux
| regenerator-runtime

```sh
mkdir src & cd src
mkdir store & cd store
vi store.js
```

`redux-thunk`
1. code is basic code 
2. Code is Simple
  - while using dispatch
  - Code is Asynchronous?
  - Code is synchronous?


## Must Styding this redux basic 
1. Code context
2. Code launch logic
3. Code launch Flow