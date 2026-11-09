
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

export default function InicioSesion({ irRegistro }) {

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const iniciarSesion = () => {
        if (!correo || !password) {
            Alert.alert('Error', 'Completa todos los campos');
            return;
        }

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

                <Text style={styles.title}>
                    ¡Qué bueno tenerte de vuelta!
                </Text>

                <Text style={styles.subtitle}>
                    Inicia sesión para continuar en Nexo y descubrir nuevas oportunidades.
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

                    <Text style={styles.label}>Contraseña</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#94A3B8"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Pressable style={styles.button} onPress={iniciarSesion}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </Pressable>

                    <View style={styles.accountBox}>
                        <Text style={styles.accountText}>
                            ¿No tienes cuenta?
                        </Text>

                        <Pressable onPress={irRegistro}>
                            <Text style={styles.loginText}>
                                Crear una cuenta
                            </Text>
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
