import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';


export default function Registro({ irLogin }) {
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const crearCuenta = () => {
    Alert.alert('Registro completado');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.logo}></View>
          <Text style={styles.logoText}>nexo</Text>
        </View>
        <View style={styles.iconContainer}></View>
        <Text style={styles.title}>Hay mucho que aportar.</Text>
        <Text style={styles.subtitle}>
          Únete a Nexo y convierte tus habilidades en nuevas oportunidades.
        </Text>
        <View style={styles.form}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput style={styles.input} placeholder="lucia.torres@email.com" placeholderTextColor="#9993A8" value={correo} onChangeText={setCorreo} />
          <Text style={styles.label}>Nombre completo</Text>
          <TextInput style={styles.input} placeholder="Lucía Torres" placeholderTextColor="#9993A8" value={nombre} onChangeText={setNombre} />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="********" placeholderTextColor="#9993A8" value={password} onChangeText={setPassword} secureTextEntry />
          <Text style={styles.helper}>Usa al menos 8 caracteres, letras y numeros.</Text>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput style={styles.input} placeholder="********" placeholderTextColor="#9993A8" value={confirmar} onChangeText={setConfirmar} secureTextEntry />
          <Pressable style={styles.termsContainer}
            onPress={() => setAceptar(!aceptar)}>
            <View style={styles.checkbox}></View>
            <Text style={styles.termsText}>Acepto los terminos de uso y la politica de privacidad de Nexo</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={crearCuenta}>
            <Text style={styles.buttonText}>Crear mi cuenta</Text>
          </Pressable>
          <View style={styles.accountBox}>
            <Text style={styles.accountText}>¿Ya tienes cuenta?</Text>
            <Pressable onPress={irLogin}>
              <Text style={styles.loginText}>Iniciar sesion</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/*Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FC'
  },
  content: {
    padding: 22,
    paddingTop: 35,
    paddingBottom: 40
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
  helper: {
    fontSize: 11,
    color: '#9993A8',
    marginTop: -5
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  checkbox: {
    width: 19,
    height: 19,
    backgroundColor: '#704DE8',
    borderRadius: 5,
    marginRight: 9
  },
  termsText: {
    flex: 1,
    fontSize: 11,
    color: '#898598',
    lineHeight: 17
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
