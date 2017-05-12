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
  Button,
  TextInput
} from 'react-native';

import { Saludo } from './componentes/Saludo';

import { styles } from './css/estilos';

export default class Clase1 extends Component {


 state={
  'username':'',
  'password':'',
  'telefono':''

};

presionBoton = (nombre)=>{

  alert('mi nombre es '+ nombre);

}

render() {
  return (
    <View style={styles.container}>

    <TextInput
    ref="1"
    style={styles.inputText}
    onChangeText={(text) => this.setState({username:text})}
    value={this.state.username}
    placeholder={'Usuario'}
    returnKeyType="next"
    onSubmitEditing={()=>this.refs[2].focus()}
    />
    <TextInput
    ref="2"
    style={styles.inputText}
    onChangeText={(text) => this.setState({password:text})}
    value={this.state.password}
    placeholder={'Contraseña'}
    secureTextEntry={true}
    returnKeyType="next"
    onSubmitEditing={()=>this.refs[3].focus()}
    />   
      <TextInput
      ref="3"
    style={styles.inputText}
    onChangeText={(text) => this.setState({telefono:text})}
    value={this.state.telefono}
    placeholder={'Telefono'}
    keyboardType={'phone-pad'}
    />    

    <Button
    onPress={this.presionBoton.bind(this,this.state.username)}
    title="Presione el boton"
    color="#841584"
    />

    </View>
    );
}
}



AppRegistry.registerComponent('Clase1', () => Clase1);
