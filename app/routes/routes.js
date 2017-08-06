import React, { Component } from 'react'

import { Router, Scene } from 'react-native-router-flux'

import TabIcon from '../components/TabIcon'

import Scene1 from './Scene1'
import Scene2 from './Scene2'
import Scene3 from './Scene3'

import SideNav from '../components/SideNav'

import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
		alignItems: 'center',
	},
	tabBarStyle: {
		backgroundColor: '#eee',
	},
	tabBarSelectedItemStyle: {
		backgroundColor: '#ddd',
	},
})

const routes = () => (
	<Scene key="drawer" drawer contentComponent={SideNav}>
		<Scene
			key="tabbar"
			gestureEnabled={false}
			showLabel={false}
			tabs
			tabBarStyle={styles.tabBarStyle}
			activeBackgroundColor='#ddd'
		>
			<Scene key="tab1" component={Scene1} title="Tab #1" icon={TabIcon}/>
			<Scene key="tab2" component={Scene2} title="Tab #2" icon={TabIcon}/>
			<Scene key="tab3" component={Scene3} title="Tab #3" icon={TabIcon}/>
		</Scene>
	</Scene>
)

export default routes
