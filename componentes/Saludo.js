import React, { Component } from 'react';

import {

  Text,
  View,
  Alert
  
} from 'react-native';

//const mensaje = 'Bienvenidos este es un componente saludo';



export class Saludo extends Component{


    constructor(){
        super();
    }

    componentWillMount(){
        //console.warn("componentWillMount");
    }

    componentDidMount(){
        //console.warn("componentDidMount");
    }


    render(){

        return (
            <View>
            <Text style={{color:'#0000ff',fontSize:20}}>{this.props.mostrar ? this.props.texto : "llego falso"} </Text>

          </View>

          );
}
}