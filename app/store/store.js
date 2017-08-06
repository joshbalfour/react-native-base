import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient } from 'react-apollo'

import reducers from './reducers'

export const client = new ApolloClient()

export const store = createStore(
	combineReducers({
		...reducers,
		apollo: client.reducer(),
	}),
	{}, // initial state
	compose(
		applyMiddleware(client.middleware()),
	)
)
