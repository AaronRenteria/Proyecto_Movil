import React, { useState } from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput,Pressable, StyleSheet, Alert} from 'react-native';

export default function InicioSesion({ irRegistro }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const iniciarSesion = () => {
    Alert.alert('Inicio de sesión completado');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.logo}></View>
          <Text style={styles.logoText}>nexo</Text>
        </View>
        <View style={styles.iconContainer}></View>
        <Text style={styles.title}>¡Qué bueno tenerte de vuelta!</Text>
        <Text style={styles.subtitle}>
          Inicia sesión para continuar en Nexo y descubrir nuevas oportunidades.
        </Text>
        <View style={styles.form}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput style={styles.input} placeholder="lucia.torres@email.com" placeholderTextColor="#9993A8" value={correo} onChangeText={setCorreo}/>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="********" placeholderTextColor="#9993A8" value={password} onChangeText={setPassword} secureTextEntry />
          <Pressable style={styles.button} onPress={iniciarSesion}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </Pressable>
          <View style={styles.accountBox}>
            <Text style={styles.accountText}>¿No tienes cuenta?</Text>
            <Pressable onPress={irRegistro}>
              <Text style={styles.loginText}>Crear una cuenta</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FC'
  },
  content: {
    padding: 22,
    paddingTop: 35,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: 38,
    height: 38,
    backgroundColor: '#704DE8',
    borderRadius: 10
  },
  logoText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#252238',
    marginLeft: 9
  },
  iconContainer: {
    width: 55,
    height: 55,
    backgroundColor: '#E5F4ED',
    borderRadius: 15,
    marginBottom: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#252238',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#898598',
    lineHeight: 21,
    marginBottom: 25
  },
  form: {
    gap: 12
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#393548'
  },
  input: {
    height: 49,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E5EF',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#393548'
  },
  button: {
    backgroundColor: '#704DE8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
  accountBox: {
    backgroundColor: '#EEE9FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12
  },
  accountText: {
    fontSize: 12,
    color: '#898598'
  },
  loginText: {
    fontSize: 13,
    color: '#704DE8',
    fontWeight: 'bold',
    marginTop: 5
  }
});
