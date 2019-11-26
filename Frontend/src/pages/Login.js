import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
import axios from 'axios';
import Logo from '../components/Logo'

axios.post('http://0.0.0.0:5000/login', {
    usuario: 'usuario',
    contraseña: 'contraseña'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            usuario: '',
            contraseña: ''
        };
    }

    onLoginDataSend(){
        const {usuario, contraseña} = this.state;

    }
    

    render() {
      return (
        <View style={styles.container}>

            <StatusBar style = {styles.container}
                backgroundColor='#ffffff'
                barStyle="dark-content"
            />

            <Logo/>
            
            <TextInput style={styles.inputBox}  
                placeholder="Usuario"
                placeholderTextColor = '#808080'
                onSubmitEditing={()=> this.password.focus()}
                onChangeText={(val) => this.setState({usuario: val})}
            />

            <TextInput style={styles.inputBox}  
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor = '#808080'
                ref={(input)=>this.password = input}
                onChangeText={(val) => this.setState({contraseña: val})}
            />

            <TouchableOpacity style={styles.button} onPress={() => this.onLoginDataSend}>
                <Text style={styles.buttonText}>{this.props.type} Iniciar Sesión</Text>
            </TouchableOpacity>

            <View style={styles.singupTextCont}>
                <Text style={styles.singupText}>¿No tengo una cuenta?</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Register')}>
                <Text style={styles.singupButton}> Crear Cuenta</Text></TouchableOpacity>
            </View>

        </View>
      );
    }
  } 

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#ffffff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
        },
    
        singupTextCont : {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        singupText: {
            color: '#808080',
            fontSize: 16
        },
        singupButton : {
            color: '#ff0000',
            fontSize: 16,
            fontWeight: '500'
        },
        inputBox: {
          width: 300, 
          backgroundColor: '#d3d3d3',
          borderRadius: 25,
          paddingHorizontal: 16,
          fontSize: 16,
          marginVertical: 10
      },

      button: {
          width: 300, 
          backgroundColor: '#696969',
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 12

      },

      buttonText: {
          fontSize: 16,
          fontWeight: '500', 
          color: '#ffffff',
          textAlign: 'center'
      }
    
  });