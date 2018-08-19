# Funducer

Easy and functional way to create redux reducers.

Note: This is just a syntatic sugar an in no way replace redux or part of it.

## Usage

```js
import funducer from 'funducer`;

const INCR_COUNTER = 'counter/increment';
const DECR_COUNTER = 'countger/decrement';

const initialState = {
	message: 'hello',
	counter: 0,
};

function onIncrCounter = (state, action) => ({
	...state,
	counter: state.counter + (action.increaseBy || 1),
});

function onDecrCounter = (state, action) => ({
	...state,
	counter: state - (action.decreseBy || 1),
});

const reducer = funducer(initialState)
	.addSwitch(INCR_COUNTER, onIncrCounter)
	.addSwitch(DECR_COUNTER, onDecrCounter)
	.getReducer();

```