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
  Image,
  Modal,
  TouchableHighlight
} from 'react-native';

import { Saludo } from './componentes/Saludo';

import { styles } from './css/estilos';

export default class Clase1 extends Component {


  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  
  

  render() {
    return (
      <View style={styles.container}>

      
      <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}
      >
      <View style={{marginTop: 22}}>
      <View>
      <Text>eres tu!</Text>
      <Image

      source={require('./david.png')}
      />

      <TouchableHighlight onPress={() => {
        this.setModalVisible(!this.state.modalVisible)
      }}>
      <Text>Cerrar esta MIERDA</Text>
      </TouchableHighlight>

      </View>
      </View>
      </Modal>

      <Text>PISE AQUI</Text>
      <TouchableHighlight onPress={() => {
        this.setModalVisible(true)
      }}>

      <Image

      source={require('./caca.png')}
      />
      </TouchableHighlight>

      

      </View>
      );
  }
}



AppRegistry.registerComponent('Clase1', () => Clase1);
