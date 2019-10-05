import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = (props) => {
    const onListItemClick = (event) => {
        console.log('I got clicked!');
    }
    return (
        <ul>
            <li onClick={onListItemClick}>{props.todos[0]}</li>
            <li>{props.todos[1]}</li>
            <li>{props.todos[2]}</li>
        </ul>
    )
}

const App = () => (
    <div>
        <h2>Hello, world!!!!</h2>
        <TodoList todos={['Learn React', 'Crush Recast.ly', 'maybe sleep']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

// const TodoList = (props) => (
//     <ul>
//         <li>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//     </ul>
// );

// const App = () => (
//     <div>
//         <h2>Hello world!</h2>
//         <TodoList todos={[
//             'Learn React',
//             'Crush Recast.ly',
//             'Maybe sleep',
//         ]}
//         />
//     </div>
// )

ReactDOM.render(<App />, document.getElementById('root'))

// const HelloWorld = () => (
//     <div>HELLO WORLD</div>
// );

// const SuperWorld = () => (
//     <div>
//         슈퍼월드!
//         <HelloWorld />
//     </div>
// );

// ReactDOM.render(<SuperWorld />, document.getElementById('root'));


// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerId = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is 
//                 {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
// <Clock />, 
// document.getElementById('root')
// )


// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }


// function tick() {
//     return (
//         ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'))
//     )
// }

// setInterval(tick, 1000)




// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);





// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// const element = <Welcome name='Sara' />;

// ReactDOM.render(element, document.getElementById('root'));

// const ToDoList = (props) => (
//     <ul>
//         <li>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//     </ul>
// )

// const App = () => (
//     <div>
//         <h2>My Todo List</h2>
//         <ToDoList
//             todos = {[
//                 'Learn React',
//                 'Crush React.ly',
//                 'Maybe sleep'
//             ]}
//         />
//     </div>
// )

// ReactDOM.render(<App />, document.getElementById('root'))






// Const GroceryListItem

// const GroceryList = () => (
//     <ul>
//         <li>cucumber</li>
//         <li>kale</li>
//     </ul>
// )

// ReactDOM.render(<GroceryList />, document.getElementById("root"))