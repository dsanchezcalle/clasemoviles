/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Saludo } from './componentes/Saludo';

import { styles } from './css/estilos';

export default class Clase1 extends Component {

   mensaje = "hola este es mi celuco";

  render() {
    return (
      <View style={styles.container}>

        <Saludo texto={this.mensaje} mostrar={true}/>

      </View>
    );
  }
}



AppRegistry.registerComponent('Clase1', () => Clase1);
