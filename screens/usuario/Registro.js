
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert
} from 'react-native';

export default function Registro({ irLogin }) {

    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [aceptar, setAceptar] = useState(false);

    const crearCuenta = () => {
        if (!correo || !nombre || !password || !confirmar) {
            Alert.alert('Error', 'Completa todos los campos');
            return;
        }

        if (password !== confirmar) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        if (password.length < 8) {
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres');
            return;
        }

        if (!aceptar) {
            Alert.alert('Error', 'Acepta los términos de uso');
            return;
        }

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
                    <TextInput
                        style={styles.input}
                        placeholder="lucia.torres@email.com"
                        placeholderTextColor="#94A3B8"
                        value={correo}
                        onChangeText={setCorreo}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Nombre completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Lucía Torres"
                        placeholderTextColor="#94A3B8"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#94A3B8"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Text style={styles.helper}>
                        Usa al menos 8 caracteres, letras y números.
                    </Text>

                    <Text style={styles.label}>Confirmar contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#94A3B8"
                        value={confirmar}
                        onChangeText={setConfirmar}
                        secureTextEntry
                    />

                    <Pressable
                        style={styles.termsContainer}
                        onPress={() => setAceptar(!aceptar)}
                    >
                        <View style={[
                            styles.checkbox,
                            aceptar && styles.checkboxActive
                        ]}>
                            {aceptar && <Text style={styles.checkText}>✓</Text>}
                        </View>

                        <Text style={styles.termsText}>
                            Acepto los términos de uso y la política de privacidad de Nexo
                        </Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={crearCuenta}>
                        <Text style={styles.buttonText}>Crear mi cuenta</Text>
                    </Pressable>

                    <View style={styles.accountBox}>
                        <Text style={styles.accountText}>¿Ya tienes cuenta?</Text>

                        <Pressable onPress={irLogin}>
                            <Text style={styles.loginText}>Iniciar sesión</Text>
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
        backgroundColor: '#0F172A'
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
        backgroundColor: '#4F46E5',
        borderRadius: 10
    },

    logoText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 9
    },

    iconContainer: {
        width: 55,
        height: 55,
        backgroundColor: '#1E293B',
        borderRadius: 15,
        marginBottom: 20
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8
    },

    subtitle: {
        fontSize: 14,
        color: '#94A3B8',
        lineHeight: 21,
        marginBottom: 25
    },

    form: {
        gap: 12
    },

    label: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#E2E8F0'
    },

    input: {
        height: 49,
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 14,
        color: '#FFFFFF'
    },

    helper: {
        fontSize: 11,
        color: '#94A3B8',
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
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 5,
        marginRight: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },

    checkboxActive: {
        backgroundColor: '#4F46E5',
        borderColor: '#4F46E5'
    },

    checkText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    termsText: {
        flex: 1,
        fontSize: 11,
        color: '#94A3B8',
        lineHeight: 17
    },

    button: {
        backgroundColor: '#4F46E5',
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
        backgroundColor: '#1E293B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#334155'
    },

    accountText: {
        fontSize: 12,
        color: '#94A3B8'
    },

    loginText: {
        fontSize: 13,
        color: '#818CF8',
        fontWeight: 'bold',
        marginTop: 5
    }

});
