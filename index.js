const createReducer = (initialState = {}, reducers) => ({
	addSwitch: (actionType, switchReducer) => createReducer(initialState, {
		...reducers,
		[actionType]: switchReducer,
	}),
	getReducer: () => (state, action) => {
		if (state === undefined) return initialState;

		const { type } = action;
		const switchReducer = reducers[type];

		if (typeof switchReducer === 'function') {
			return switchReducer(state, action);
		} else {
			return state;
		}
	},
});

export default createReducer;