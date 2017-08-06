import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

const SideNav = ({ title }) => (
	<View style={styles.container}>
		<Text style={styles.welcome}>
			This is where some more nav should go
		</Text>
	</View>
)

export default SideNav
