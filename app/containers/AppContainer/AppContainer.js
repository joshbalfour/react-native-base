import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { ApolloClient, ApolloProvider } from 'react-apollo'

import { Provider } from 'react-redux'

import HelloWorld from '../../components/HelloWorld'

import routes from '../../routes'
import { Router } from 'react-native-router-flux'

import { store, client } from '../../store'

const AppContainer = () => (
	<Provider store={store}>
		<ApolloProvider client={client}>
			<Router>
				{routes()}
			</Router>
		</ApolloProvider>
	</Provider>
)

export default AppContainer
