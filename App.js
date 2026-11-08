import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InicioSesion from './src/screens/usuario/InicioSesion';
import Registro from './src/screens/usuario/Registro';


export default function App() {
  const [pantalla, setPantalla] = useState('login');
  return (
    <View style={styles.container}>
      {pantalla === 'login' ? (
        <InicioSesion
          irRegistro={() => setPantalla('registro')}/>
      ) : (
        <Registro
          irLogin={() => setPantalla('login')}/>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },
});

