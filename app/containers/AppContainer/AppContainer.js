import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import HelloWorld from '../../components/HelloWorld'

import routes from '../../routes'
import { Router } from 'react-native-router-flux'

class AppContainer extends Component {
	render() {
		return (
			<Router>
				{routes()}
			</Router>
		)
	}
}

export default AppContainer
