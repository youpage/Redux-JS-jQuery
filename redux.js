//count initial state
const DEFAULT_STATE = { count: 0 };

//STORE
const store = Redux.createStore(counter)

//DISPATCH DECREMNET
//document.getElementById('decrement'). // vanilla JS
$('#decrement').
	on('click', () => {
		const action = { type: 'DECREMENT' };
		store.dispatch(action);
	});

//DISPATCH INCREMENT
//document.getElementById('increment'). // vanilla JS
$('#increment').
	on('click', () => {
		const action = { type: 'INCREMENT' };
		store.dispatch(action);
	});

//REDUCER
function counter(currentState, action) {
	let nextState = Object.assign({}, currentState);
	if (currentState == undefined) {
		return nextState = DEFAULT_STATE;
	}

	switch (action.type) {
		case 'DECREMENT':
			nextState.count = currentState.count - 1;
			break;
		case 'INCREMENT':
			nextState.count = currentState.count - - 1;
			break;
		default:
			break;
	};

	return nextState;
}

//RENDER
//const el = getElementById('value'); // vanilla JS
const el = $('#value');
function render() {
	let newCount = store.getState().count
	//el.innerHTML = newCount; // vanilla JS
	el.text(newCount);
};

//subscribe to the render function
store.subscribe(render);