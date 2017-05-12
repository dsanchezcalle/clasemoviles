import React, { Component } from 'react';

import {

  Text,
  View,
  Alert,
  Button
} from 'react-native';

//const mensaje = 'Bienvenidos este es un componente saludo';

const onButtonPress = () => {
  Alert.alert('HA PRESIOANDO EL BOTON!');
};

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
                 <Text style={{flex:1,color:'#0000ff',fontSize:20}}>{this.props.mostrar ? this.props.texto : "llego falso"} </Text>
                 <Text style={{flex:1,color:'#0000ff',fontSize:20}}>{this.props.mostrar ? this.props.texto : "llego falso"} </Text>
                 <Text style={{flex:1,color:'#0000ff',fontSize:20}}>{this.props.mostrar ? this.props.texto : "llego falso"} </Text>

                <Button
                  onPress={onButtonPress}
                  title="Presionar"
                  accessibilityLabel="See an informative alert"
                />

               
            </View>

        );
	}
}