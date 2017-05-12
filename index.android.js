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
  View,
  Button
} from 'react-native';

import { Saludo } from './componentes/Saludo';

import { styles } from './css/estilos';

export default class Clase1 extends Component {


 presionBoton = (nombre)=>{

  alert('mi nombre es '+ nombre);

}

render() {
  return (
    <View style={styles.container}>

    <Button
    onPress={this.presionBoton.bind(this,'david')}
    title="Presione el boton"
    color="#841584"
    />

    </View>
    );
}
}



AppRegistry.registerComponent('Clase1', () => Clase1);
