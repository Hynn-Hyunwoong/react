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
```

```javascript
class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return( 
                <div class="comment">
                    It is Comment
                    <CommentForm />
                    <CommentList />    
                </div>
                )
    }
}

<div className="comment">
    It is Comment
    <CommentForm />
    <CommentList />    
</div>
```
The error message is indicating that there is an invalid DOM property class used in the Comment component's div element. Instead, it suggests using className.

In React, class is a reserved keyword for defining a component's class, so when specifying an attribute in JSX that corresponds to a DOM property, you should use the camelCase version of the property name, such as className instead of class.

To fix the error, you can update the Comment component's div element to use className.

``` Error Meesage
react-dom.development.js:73 Warning: Invalid DOM property `class`. Did you mean `className`?
    at div
    at Comment (<anonymous>:65:5)
    at div
    at App (<anonymous>:82:5)
```
