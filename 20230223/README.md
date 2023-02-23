# React Day 3

Component by Tree
Props
Comment C,R

## ToDo

Study Point 
1) Class Component
<!-- 2) Function Component <-- For now, skip to study, Will be study after Class Component study -->
2) Main Definition 1~12
3) Document -> Hello World & Mini Game
4) Counter 


Why different state in constructor & state in componentDidMount ?
```js
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }
    componentDidMount(){
        this.setState({ number: 10})
    }
}
```
The constructor is called when the component is first initialized, and it is used to set the initial state of the component. In this case, the initial state is set to {number: 0}.

The componentDidMount method is called after the component is mounted in the DOM, and it is commonly used to fetch data from an API or to update the component state based on the props or other data. In this case, componentDidMount is used to update the number state to 10 after the component has been mounted.

When the state is updated using setState, React will re-render the component with the updated state. In this example, the h2 element will display the updated number state of 10 after the component has been mounted.

It's important to note that setting state in componentDidMount will trigger a re-render of the component, which can potentially cause performance issues if not used correctly. Additionally, if the state is updated in componentDidMount, it's possible that the component will render twice: once with the initial state, and then again with the updated state.

constructor
render
componentDidMount
(사용자 클릭 이벤트 발생 시)
increment 또는 decrement
setState
render
componentDidUpdate

### Study Point

- JSX
    JSX Language HTML
    `{}` 
- Component 
    Element 
    1 State
    If change state, update to Element
- Props
    Push to Data

- State
    required date for Element 
- LifeCycle
    If change state, list of data 
    > If use `this.setSTate()`, `ComponentDidUpdate` & `render` method situation 
- Event
    How to handle the event
    add to event in JSX Language, if class component , Recommanded this binding language.
- Rendering
    JSX, `{}` , `if ? "A" : "B"` call to Component 
- List
    If using same Element, add to `Array` render.
    If sample element, but different data , how to using `map function`
    1. Understanding function Map
    2. Understanding for code below.
    ```jsx
        <ul>
            {[<li>Hello</li>, <li>world</li>]}
        </ul>
    ```
    3. understanding for code below.
    ```js
    const arr =[{a:10}, {a:20}]
    ```

- Form
    Event, State 
    understanding Logic for submit event in form Element 
    understanding for If refreshing the page, reset of state logic 
    `e.preventDefault()` why call to this code.
- Upper state
    understanding Function is value. 
    state component by component. 
    understanding parents component and children component

    If change to state in parents component, the forward function for children component.
    Also, children component launch to received from parents component