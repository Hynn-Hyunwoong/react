# React Day2 
1) ReactDOM(VirtualDOM)
2) JSX(Babel)
3) Element
4) State
5) 생명주기
6) Component Props
7) 조건부랜더링 (If)

- Create a List
- Form

It's CRUD



## JSX
```javascript
// If App Component,
React.createElement(App, null, "Hello")

// Insert to "Hello" into div Element.
React.createElement('div', null, "Hello")

// Transform jsx via Babel

//Sample1 React.createElement(App, null, "Hello")
<App>Hello</App>

//Sample2 React.createElement('div', null, "Hello")
<div>Hello</div>

```

```javascript
router.get('/login', controller.login)
