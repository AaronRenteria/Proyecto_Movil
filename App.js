/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import CrearCurso from './src/screens/usuario/CrearCurso';
import { StyleSheet, View } from 'react-native';
import InicioSesion from './src/screens/usuario/InicioSesion';
import Registro from './src/screens/usuario/Registro';
/*Zona main */
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
/*Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },
});
