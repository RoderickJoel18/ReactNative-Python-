import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo'

export default class Registry extends Component {
    render() {
      return (
        <View style={styles.container}>
        
            <StatusBar style = {styles.container}
                backgroundColor='#ffffff'
                barStyle="dark-content"
            />

            <Logo/>
            
            <TextInput style={styles.inputBox}  
                placeholder="Nombre"
                placeholderTextColor = '#808080'
                onSubmitEditing={()=> this.apellido.focus()}
            />

            <TextInput style={styles.inputBox}  
                placeholder="Apellido"
                placeholderTextColor = '#808080'
                ref={(input)=>this.apellido = input}
                onSubmitEditing={()=> this.cedula.focus()}
            />

            <TextInput style={styles.inputBox}  
                placeholder="Cédula"
                placeholderTextColor = '#808080'
                keyboardType = 'phone-pad'
                ref={(input)=>this.cedula = input}
                onSubmitEditing={()=> this.email.focus()}
            />

            <TextInput style={styles.inputBox}  
                placeholder="E-mail"
                placeholderTextColor = '#808080'
                keyboardType = 'email-address'
                ref={(input)=>this.email = input}
                onSubmitEditing={()=> this.usuario.focus()}
            />

            <TextInput style={styles.inputBox}  
                placeholder="Usuario"
                placeholderTextColor = '#808080'
                ref={(input)=>this.usuario = input}
                onSubmitEditing={()=> this.contraseña.focus()}
            />

            <TextInput style={styles.inputBox}  
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor = '#808080'
                ref={(input)=>this.contraseña = input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}Registrar</Text>
            </TouchableOpacity>

            <View style={styles.singupTextCont}>
                <Text style={styles.singupText}>¿Ya tengo una cuenta?</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
                <Text style={styles.singupButton}> Iniciar Sesión</Text></TouchableOpacity>
            </View>
        </View>
      )
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