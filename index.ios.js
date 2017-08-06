import React, { Component } from 'react'

import {
  AppRegistry,
} from 'react-native'

import AppContainer from './app/containers/AppContainer'

class RNBase extends Component {
  render() {
    return <AppContainer />
  }
}

AppRegistry.registerComponent('RNBase', () => RNBase)
