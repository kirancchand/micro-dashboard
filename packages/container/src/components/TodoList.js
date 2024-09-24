import React,{useState, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStore } from 'redux-micro-frontend';
import Todo from './Todo';
import { createStore } from 'redux';
// import  {TodoReducer}  from '../../re-redux/todoReducer';
import  TodoReducer  from '../../re-redux/todoReducer';
import store from '../../re-redux/store';
// import { AddTodo as AddTodoComponent } from './addTodo';
import AddtoDoCom from './AddtoDoCom';
import { AddTodo, RemoveTodo } from '../../re-redux/todo.actions';
import {IncrementGlobalCounter} from '../../re-redux/global.actions';
function TodoList(){
    const [state, setState] = useState({
		todos: [],
		globalCounter: 0,
	});
	// const dispatch = useDispatch();

    const globalStore = GlobalStore.Get();
    // const store = createStore(TodoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
	const localReduxConventional=useSelector(state=>state)
	const localRedux=globalStore.GetGlobalState().TodoApp
	const globalRedux=globalStore.GetGlobalState().CounterApp
	// console.log("get from local redux coventional",localReduxConventional)
	// console.log("get from local redux",localRedux)
	// console.log("get from global redux",globalRedux)
	globalStore.RegisterStore('TodoApp', store, [GlobalStore.AllowAll]);


    const counterChanged = (counterState) => {
		// console.log("counterState",globalStore.GetGlobalState())
		setState({
			todos:globalStore.GetGlobalState().TodoApp.data,
			globalCounter: counterState.global,
		});
	};

    try {
		globalStore.SubscribeToPartnerState('TodoApp','CounterApp',counterChanged);
	} catch (error) {
		//Since
	}





	const stateChanged = (todoState) => {
		console.log("todoState",todoState)
		let newState={
			todos:todoState.data,
			globalCounter:state.globalCounter
		}
		console.log("newState",newState)
		// setState({todos: todoState});
		setState(newState)
	};

	globalStore.Subscribe('TodoApp', stateChanged);




	const addTodo = (description) => {
		globalStore.DispatchAction('TodoApp', AddTodo(description));
	};

	const removeTodo = (todoId) => {
		globalStore.DispatchAction('TodoApp', RemoveTodo(todoId));
	};

    return (
		// console.log(state),
		<div>
			<AddtoDoCom addTodo={(ev)=>addTodo(ev)}/>
			<h2>Todos</h2>
			<ul>
				{
				state.todos!==undefined&&state.todos.length>0&&state.todos.map((todo,i) => {
					return (
						<li key={i}>
							<Todo
								id={todo.id}
								description={todo.description}
								removeTodo={removeTodo}
							/>
						</li>
					);
				})}
			</ul>

			<div>Global Counter: {state.globalCounter}</div>
			{/* <div>Global Redux value: {globalRedux.toString()}</div>
			<div>Local Conventional Redux value: {localReduxConventional.toString()}</div>
			<div>Local Redux: {localRedux.toString()}</div> */}
			{/* <div>Global Conventional Value: {newGlobal}</div> */}
		</div>
	);

}
export default TodoList;